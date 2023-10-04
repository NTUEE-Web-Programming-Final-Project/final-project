import { prisma } from "../../prisma/client.ts";
import { pubsub } from "../PubSub/pubsub.ts";
import { AnnouncementInput, ArticleCommentInput, ArticleInput } from "../types/types.ts";

const Mutation ={
  // Announcement Start
  CreateAnnouncement: async (_parents, args: { announcementInput: AnnouncementInput }, context) => {
    const { title, content } = args.announcementInput;
    const date = new Date().toUTCString();
    const newAnnouncement = await prisma.announcement.create({
      data: {
        title: title,
        content: content,
        date: date
      }
    });
    pubsub.publish("ANNOUNCEMENT_CREATED", { AnnouncementCreated: newAnnouncement });
    return newAnnouncement;
  },

  DeleteAnnouncement: async (_parents, args: { id: number }, context) => {
    const id = args.id;
    const existingAnnouncement = await prisma.announcement.findFirst({
      where: {
        id: id
      }
    });
    if (!existingAnnouncement) {
      throw new Error("announcement not found!");
    }

    const deletedAnnouncement = await prisma.announcement.delete({
      where: {
        id: id
      }
    });
    pubsub.publish("ANNOUNCEMENT_DELETED", { AnnouncementDeleted: deletedAnnouncement });
    return deletedAnnouncement;
  },

  UpdateAnnouncement: async (_parents, args: { id: number, announcementInput: AnnouncementInput }, context) => {
    const id = args.id;
    const { title, content } = args.announcementInput;
    const existingAnnouncement = await prisma.announcement.findFirst({
      where: {
        id: id
      }
    });
    if (!existingAnnouncement) {
      throw new Error("announcement not found!");
    }

    const updatedAnnouncement = await prisma.announcement.update({
      where: {
        id: id
      },
      data: {
        title: title,
        content: content
      }
    });
    pubsub.publish("ANNOUNCEMENT_UPDATED", { AnnouncementUpdated: updatedAnnouncement });
    return updatedAnnouncement;
  },
  // Announcement End

  // User Start

  // User End
  
  // Article Start
  CreateArticle: async (_parents, args: { articleInput: ArticleInput }, context) => {
    const { title, content, tags, likes, topic } = args.articleInput;
    const date = new Date().toUTCString();
    const newArticle = await prisma.article.create({
      data: {
        title: title,
        content: content,
        date: date,
        tags: tags,
        likes: likes,
        topic: topic
      }
    });
    pubsub.publish("ARTICLE_CREATED", { ArticleCreated: newArticle });
    return newArticle;
  },

  DeleteArticle: async (_parents, args: { id: number }, context) => {
    const id = args.id;
    const existingArticle = await prisma.article.findFirst({
      where: {
        id: id
      }
    });
    if (!existingArticle) {
      throw new Error("article not found!");
    }

    const deletedArticle = await prisma.article.delete({
      where: {
        id: id
      }
    });
    pubsub.publish("ARTICLE_DELETED", { ArticleDeleted: deletedArticle });
    return deletedArticle;
  },

  UpdateArticle: async (_parents, args: { id: number, articleInput: ArticleInput }, context) => {
    const id = args.id;
    const { title, content, tags, likes, topic } = args.articleInput;
    const existingArticle = await prisma.article.findFirst({
      where: {
        id: id
      }
    });
    if (!existingArticle) {
      throw new Error("article not found!");
    }

    const updatedArticle = await prisma.article.update({
      where: {
        id: id
      },
      data: {
        title: title,
        content: content,
        tags: tags,
        likes: likes,
        topic: topic
      }
    });
    pubsub.publish("ARTICLE_UPDATED", { ArticleUpdated: updatedArticle });
    return updatedArticle;
  },
  // Article End

  // ArticleComment Start
  CreateArticleComment: async (_parents, args: { articleCommentInput: ArticleCommentInput }, context) => {
    const { content, like } = args.articleCommentInput;
    const date = new Date().toUTCString();
    const newArticleComment = await prisma.articleComment.create({
      data: {
        content: content,
        date: date,
        like: like
      }
    });
    pubsub.publish("ARTICLECOMMENT_CREATED", { ArticleCommentCreated: newArticleComment });
    return newArticleComment;
  },

  DeleteArticleComment: async (_parents, args: { id: number }, context) => {
    const id = args.id;
    const existingArticleComment = await prisma.articleComment.findFirst({
      where: {
        id: id
      }
    });
    if (!existingArticleComment) {
      throw new Error("articleComment not found!");
    }

    const deletedArticleComment = await prisma.articleComment.delete({
      where: {
        id: id
      }
    });
    pubsub.publish("ARTICLECOMMENT_DELETED", { ArticleCommentDeleted: deletedArticleComment });
    return deletedArticleComment;
  },

  UpdateArticleComment: async (_parents, args: { id: number, articleCommentInput: ArticleCommentInput }, context) => {
    const id = args.id;
    const { content, like } = args.articleCommentInput;
    const date = new Date().toUTCString();
    const existingArticleComment = await prisma.articleComment.findFirst({
      where: {
        id: id
      }
    });
    if (!existingArticleComment) {
      throw new Error("articleComment not found!");
    }

    const updatedArticleComment = await prisma.articleComment.update({
      where: {
        id: id
      },
      data: {
        date: date,
        content: content,
        like: like
      }
    });
    pubsub.publish("ARTICLECOMMENT_UPDATED", { ArticleCommentUpdated: updatedArticleComment });
    return updatedArticleComment;
  },
  // ArticleComment End
  
}

export { Mutation };
