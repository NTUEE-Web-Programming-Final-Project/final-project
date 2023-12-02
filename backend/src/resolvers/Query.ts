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
};

export { Query };
