import { prisma } from '../../prisma/client.ts'

const Query ={
  // Announcement Start
  AllAnnouncements: async (parents, args, context) => {
    const announcements = await prisma.announcement.findMany();
    return announcements;
  },
  // Announcement End
}

export { Query };