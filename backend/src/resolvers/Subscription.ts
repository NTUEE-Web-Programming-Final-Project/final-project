import { pubsub } from "../PubSub/pubsub.ts";

const Subscription = {
  // Announcement Start
  AnnouncementCreated: {
    subscribe: () => pubsub.asyncIterator(["ANNOUNCEMENT_CREATED"])
  },

  AnnouncementDeleted: {
    subscribe: () => pubsub.asyncIterator(["ANNOUNCEMENT_DELETED"])
  },

  AnnouncementUpdated: {
    subscribe: () => pubsub.asyncIterator(["ANNOUNCEMENT_UPDATED"])
  },
  // Announcement End

  // User Start
  UserCreated: {
    subscribe: () => pubsub.asyncIterator(["USER_CREATED"])
  },

  UserDeleted: {
    subscribe: () => pubsub.asyncIterator(["USER_DELETED"])
  },

  UserUpdated: {
    subscribe: () => pubsub.asyncIterator(["USER_UPDATED"])
  },
  // User End
}

export { Subscription };