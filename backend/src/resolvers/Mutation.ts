import { prisma } from "../../prisma/client.ts";
import { pubsub } from "../PubSub/pubsub.ts";
import {
  AnnouncementInput,
  ArticleCommentInput,
  ArticleInput,
  UserInput,
  UserPasswordInput,
} from "../types/types.ts";

const Mutation = {
  // Announcement Start
  CreateAnnouncement: async (
    _parent,
    args: { announcementInput: AnnouncementInput },
    _context,
  ) => {
    const { title, content } = args.announcementInput;
    const date = new Date().toUTCString();
    const newAnnouncement = await prisma.announcement.create({
      data: {
        title: title,
        content: content,
        date: date,
      },
    });
    pubsub.publish("ANNOUNCEMENT_CREATED", {
      AnnouncementCreated: newAnnouncement,
    });
    return newAnnouncement;
  },

  DeleteAnnouncement: async (_parent, args: { id: number }, _context) => {
    const id = args.id;
    const existingAnnouncement = await prisma.announcement.findFirst({
      where: {
        id: id,
      },
    });
    if (!existingAnnouncement) {
      throw new Error("announcement not found!");
    }

    const deletedAnnouncement = await prisma.announcement.delete({
      where: {
        id: id,
      },
    });
    pubsub.publish("ANNOUNCEMENT_DELETED", {
      AnnouncementDeleted: deletedAnnouncement,
    });
    return deletedAnnouncement;
  },

  UpdateAnnouncement: async (
    _parent,
    args: { id: number; announcementInput: AnnouncementInput },
    _context,
  ) => {
    const id = args.id;
    const { title, content } = args.announcementInput;
    const existingAnnouncement = await prisma.announcement.findFirst({
      where: {
        id: id,
      },
    });
    if (!existingAnnouncement) {
      throw new Error("announcement not found!");
    }

    const updatedAnnouncement = await prisma.announcement.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        content: content,
      },
    });
    pubsub.publish("ANNOUNCEMENT_UPDATED", {
      AnnouncementUpdated: updatedAnnouncement,
    });
    return updatedAnnouncement;
  },
  // Announcement End

  // User Start
  CreateUser: async (_parent, args: { userInput: UserInput }, _context) => {
    const { name, studentID, password, photoLink, introduction } =
      args.userInput;
    const newUser = await prisma.user.create({
      data: {
        name: name,
        studentID: studentID,
        password: password,
        photoLink: photoLink,
        introduction: introduction,
      },
    });
    pubsub.publish("USER_CREATED", { UserCreated: newUser });
    return newUser;
  },

  DeleteUser: async (_parent, args: { id: number }, _context) => {
    const id = args.id;
    const existingUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!existingUser) {
      throw new Error("user not found!");
    }

    const deletedUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    pubsub.publish("USER_DELETED", { UserDeleted: deletedUser });
    return deletedUser;
  },

  UpdateUser: async (
    _parent,
    args: { id: number; userInput: UserInput },
    _context,
  ) => {
    const id = args.id;
    const { name, studentID, password, photoLink, introduction } =
      args.userInput;
    const existingUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!existingUser) {
      throw new Error("user not found!");
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        studentID: studentID,
        password: password,
        photoLink: photoLink,
        introduction: introduction,
      },
    });
    pubsub.publish("USER_UPDATED", { UserUpdated: updatedUser });
    return updatedUser;
  },

  UpdateUserPassword: async (
    _parent,
    args: { id: number; userPasswordInput: UserPasswordInput },
    _context,
  ) => {
    const id = args.id;
    const { password } = args.userPasswordInput;
    const existingUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!existingUser) {
      throw new Error("user not found!");
    }

    const updatedUserPassword = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: password,
      },
    });
    pubsub.publish("USER_UPDATED", { UserUpdated: updatedUserPassword });
    return updatedUserPassword;
  },
  // User End

  // Article Start
  CreateArticle: async (
    _parent,
    args: { articleInput: ArticleInput },
    _context,
  ) => {
    const { writerId, title, content, tags, topic } = args.articleInput;
    const findWriter = await prisma.user.findFirst({
      where: {
        id: writerId,
      },
    });
    if (!findWriter) {
      throw new Error("Writer not found!");
    }

    const date = new Date().toUTCString();
    const newArticle = await prisma.article.create({
      data: {
        writerId: writerId,
        date: date,
        title: title,
        content: content,
        tags: tags,
        zap: 0,
        isMe: 0,
        bombFish: 0,
        topic: topic,
      },
    });

    const updateUser = await prisma.user.update({
      where: {
        id: writerId,
      },
      data: {
        articlesId: { push: newArticle.id },
      },
    });

    pubsub.publish("ARTICLE_CREATED", { ArticleCreated: newArticle });
    return newArticle;
  },
  
  DeleteArticle: async (_parent, args: { id: number }, _context) => {
    const id = args.id;
    const existingArticle = await prisma.article.findFirst({
      where: {
        id: id,
      },
    });
    if (!existingArticle) {
      throw new Error("article not found!");
    }

    // delete article in User.articlesId
    const userId = existingArticle.writerId;
    const writer = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    const articlesId = writer.articlesId;
    const index = articlesId.indexOf(id);
    articlesId.splice(index, 1);
    const updateWriter = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        articlesId: articlesId,
      },
    });

    const deletedArticle = await prisma.article.delete({
      where: {
        id: id,
      },
    });
    pubsub.publish("ARTICLE_DELETED", { ArticleDeleted: deletedArticle });
    return deletedArticle;
  },

  UpdateArticle: async (

    _parent,
    args: { id: number; articleInput: ArticleInput },
    _context,
  ) => {
    const id = args.id;
    const { writerId, title, content, tags, topic } = args.articleInput;
    const existingArticle = await prisma.article.findFirst({
      where: {
        id: id,
      },
    });
    if (!existingArticle) {
      throw new Error("article not found!");
    }

    const date = new Date().toUTCString();
    const updatedArticle = await prisma.article.update({
      where: {
        id: id,
      },
      data: {
        writerId: writerId,
        date: date,
        title: title,
        content: content,
        tags: tags,
        topic: topic,
      },
    });
    pubsub.publish("ARTICLE_UPDATED", { ArticleUpdated: updatedArticle });
    return updatedArticle;
  },
  // Article End

  // ArticleComment Start
  CreateArticleComment: async (
    _parent,
    args: { articleCommentInput: ArticleCommentInput },
    _context,
  ) => {
    const { commenterId, content, rootArticleId } = args.articleCommentInput;
    const findCommenter = await prisma.user.findFirst({
      where: {
        id: commenterId,
      },
    });
    if (!findCommenter) {
      throw new Error("Commenter not found!");
    }

    const date = new Date().toUTCString();
    const newArticleComment = await prisma.articleComment.create({
      data: {
        commenterId: commenterId,
        date: date,
        content: content,
        rootArticleId: rootArticleId,
        zap: 0,
      },
    });

    const updateUser = await prisma.user.update({
      where: {
        id: commenterId,
      },
      data: {
        articleCommentsId: { push: newArticleComment.id },
      },
    });

    const UpdateArticle = await prisma.article.update({
      where: {
        id: rootArticleId,
      },
      data: {
        commentsId: { push: newArticleComment.id },
      },
    });

    pubsub.publish("ARTICLECOMMENT_CREATED", {
      ArticleCommentCreated: newArticleComment,
    });
    return newArticleComment;
  },


  DeleteArticleComment: async (_parent, args: { id: number }, _context) => {
    const id = args.id;
    const existingArticleComment = await prisma.articleComment.findFirst({
      where: {
        id: id,
      },
    });
    if (!existingArticleComment) {
      throw new Error("articleComment not found!");
    }

    // delete article in User.articlesId
    const userId = existingArticleComment.commenterId;
    const writer = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    const articleCommentsId = writer.articlesId;
    articleCommentsId.splice(articleCommentsId.indexOf(id), 1);
    const updateWriter = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        articleCommentsId: articleCommentsId,
      },
    });

    // delete commentId in Article.commentsId
    const articleId = existingArticleComment.rootArticleId;
    const article = await prisma.article.findFirst({
      where: {
        id: articleId,
      },
    });
    const commentsId = article.commentsId;
    commentsId.splice(commentsId.indexOf(id), 1);
    const updateArticle = await prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        commentsId: commentsId,
      },
    });

    const deletedArticleComment = await prisma.articleComment.delete({
      where: {
        id: id,
      },
    });
    pubsub.publish("ARTICLECOMMENT_DELETED", {
      ArticleCommentDeleted: deletedArticleComment,
    });
    return deletedArticleComment;
  },

  UpdateArticleComment: async (
    _parent,
    args: { id: number; articleCommentInput: ArticleCommentInput },
    _context,
  ) => {
    const id = args.id;
    const { commenterId, content, rootArticleId } = args.articleCommentInput;
    const existingArticleComment = await prisma.articleComment.findFirst({
      where: {
        id: id,
      },
    });
    if (!existingArticleComment) {
      throw new Error("articleComment not found!");
    }

    const date = new Date().toUTCString();
    const updatedArticleComment = await prisma.articleComment.update({
      where: {
        id: id,
      },
      data: {
        commenterId: commenterId,
        date: date,
        content: content,
        rootArticleId: rootArticleId,
      },
    });
    pubsub.publish("ARTICLECOMMENT_UPDATED", {
      ArticleCommentUpdated: updatedArticleComment,
    });
    return updatedArticleComment;
  },
  // ArticleComment End
};

export { Mutation };
