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

  // User End
}

export { Subscription };