import { prisma } from "../../prisma/client.ts";
import { pubsub } from "../PubSub/pubsub.ts";
import { AnnouncementInput } from "../types/types.ts";

const Mutation ={
  // Announcement Start
  CreateAnnouncement: async (parent, args: { announcementInput: AnnouncementInput }, context) => {
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

  DeleteAnnouncement: async (parent, args: { id: number }, context) => {
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

  UpdateAnnouncement: async (parent, args: { id: number, announcementInput: AnnouncementInput }, context) => {
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
}

export { Mutation };
