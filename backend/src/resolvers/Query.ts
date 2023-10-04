import { prisma } from '../../prisma/client.ts'

const Query ={
  // Announcement Start
  AllAnnouncements: async (_parents, args, context) => {
    const announcements = await prisma.announcement.findMany();
    return announcements;
  },
  // Announcement End

  // User Start

  // User End

  // Article Start
  AllArticles: async (_parents, args, context) => {
    const articles = await prisma.article.findMany({
      orderBy: {
        id: "desc"
      }
    });
    return articles;
  },
  // Article End

  // ArticleComment Start
  AllArticleComments: async (_parents, args, context) => {
    const articleComments = await prisma.articleComment.findMany({
      orderBy: {
        id: "desc"
      }
    });
    return articleComments;
  },
  // ArticleComment End
}

export { Query };