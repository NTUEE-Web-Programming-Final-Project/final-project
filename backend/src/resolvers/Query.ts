import { prisma } from "../../prisma/client.ts";

const Query = {
  // Announcement Start
  AllAnnouncements: async (_parents, _args, _context) => {
    const announcements = await prisma.announcement.findMany();
    return announcements;
  },
  // Announcement End

  // User Start
  AllUsers: async (_parents, _args, _context) => {
    const users = await prisma.user.findMany();
    return users;
  },
  // User End

  // Article Start

  AllArticles: async (_parents, _args, _context) => {
    const articles = await prisma.article.findMany();
    return articles;
  },
  // Article End

  // ArticleComment Start
  AllArticleComments: async (_parents, _args, _context) => {
    const articleComments = await prisma.articleComment.findMany();
    return articleComments;
  },
  // ArticleComment End

  // Liked Articles Start
  AllLikedArticles: async (_parents, args: { likerId: number }, _context) => {
    const likerId = args.likerId;
    const likes = await prisma.likedArticle.findMany({
      where: {
        likerId: likerId,
      },
    });

    const likedArticleIds = likes.map((like) => {
      return like.articleId;
    });
    const likedArticles = await prisma.article.findMany({
      where: {
        id: {
          in: likedArticleIds,
        },
      },
    });
    return likedArticles;
  },
  // Liked Articles End

  // Liked ArticleComments Start
  AllLikedArticleComments: async (
    _parents,
    args: { likerId: number },
    _context,
  ) => {
    const likerId = args.likerId;
    const likes = await prisma.likedArticleComment.findMany({
      where: {
        likerId: likerId,
      },
    });

    const likedArticleCommentIds = likes.map((like) => {
      return like.articleCommentId;
    });
    const likedArticleComments = await prisma.articleComment.findMany({
      where: {
        id: {
          in: likedArticleCommentIds,
        },
      },
    });
    return likedArticleComments;
  },
  // Liked ArticleComments End
};

  // Question Start
  AllQuestions: async (parents, args, context) => {
    const questions = await prisma.question.findMany();
    return questions;
  }, 
  AllQuestionComments: async (parents, args, context) => {
    const questionComments = await prisma.questionComment.findMany();
    return questionComments;
  }, 
  AllSolutions: async (parents, args, context) => {
    const solutions = await prisma.solution.findMany();
    return solutions;
  }, 
  // Question End
  
}

export { Query };
