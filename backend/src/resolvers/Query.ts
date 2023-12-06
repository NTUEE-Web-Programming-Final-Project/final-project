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
};

export { Query };
