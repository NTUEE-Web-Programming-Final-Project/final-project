import { prisma } from "../../prisma/client.ts";
import { pubsub } from "../PubSub/pubsub.ts";
import { AnnouncementInput, UserInput, UserPasswordInput } from "../types/types.ts";

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
  CreateUser: async (parent, args: { userInput: UserInput }, context) => {
    const { name, studentID, password, photoLink, introduction } = args.userInput;
    const newUser = await prisma.user.create({
      data: {
        name: name,
        studentID: studentID,
        password: password,
        photoLink: photoLink,
        introduction: introduction
      }
    });
    pubsub.publish("USER_CREATED", { UserCreated: newUser });
    return newUser;
  },

  DeleteUser: async (parent, args: { id: number }, context) => {
    const id = args.id;
    const existingUser = await prisma.user.findFirst({
      where: {
        id: id
      }
    });
    if (!existingUser) {
      throw new Error("user not found!");
    }

    const deletedUser = await prisma.user.delete({
      where: {
        id: id
      }
    });
    pubsub.publish("USER_DELETED", { UserDeleted: deletedUser });
    return deletedUser;
  },

  UpdateUser: async (parent, args: { id: number, userInput: UserInput }, context) => {
    const id = args.id;
    const { name, studentID, password, photoLink, introduction } = args.userInput;
    const existingUser = await prisma.user.findFirst({
      where: {
        id: id
      }
    });
    if (!existingUser) {
      throw new Error("user not found!");
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: id
      },
      data: {
        name: name,
        studentID: studentID,
        password: password,
        photoLink: photoLink,
        introduction: introduction
      }
    });
    pubsub.publish("USER_UPDATED", { UserUpdated: updatedUser });
    return updatedUser;
  },

  UpdateUserPassword: async (parent, args: { id: number, userPasswordInput: UserPasswordInput }, context) => {
    const id = args.id;
    const { password } = args.userPasswordInput;
    const existingUser = await prisma.user.findFirst({
      where: {
        id: id
      }
    });
    if (!existingUser) {
      throw new Error("user not found!");
    }

    const updatedUserPassword = await prisma.user.update({
      where: {
        id: id
      },
      data: {
        password: password
      }
    });
    pubsub.publish("USER_UPDATED", { UserUpdated: updatedUserPassword });
    return updatedUserPassword;
  },
  // User End
}

export { Mutation };
