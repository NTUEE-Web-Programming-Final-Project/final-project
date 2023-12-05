import { pubsub } from "../PubSub/pubsub.ts";

const Subscription = {
  // Announcement Start
  AnnouncementCreated: {
    subscribe: () => pubsub.asyncIterator(["ANNOUNCEMENT_CREATED"]),
  },

  AnnouncementDeleted: {
    subscribe: () => pubsub.asyncIterator(["ANNOUNCEMENT_DELETED"]),
  },

  AnnouncementUpdated: {
    subscribe: () => pubsub.asyncIterator(["ANNOUNCEMENT_UPDATED"]),
  },
  // Announcement End

  // User Start
  UserCreated: {
    subscribe: () => pubsub.asyncIterator(["USER_CREATED"]),
  },

  UserDeleted: {
    subscribe: () => pubsub.asyncIterator(["USER_DELETED"]),
  },

  UserUpdated: {
    subscribe: () => pubsub.asyncIterator(["USER_UPDATED"]),
  },
  // User End

  // Article Start
  ArticleCreated: {
    subscribe: () => pubsub.asyncIterator(["ARTICLE_CREATED"]),
  },

  ArticleDeleted: {
    subscribe: () => pubsub.asyncIterator(["ARTICLE_DELETED"]),
  },

  ArticleUpdated: {
    subscribe: () => pubsub.asyncIterator(["ARTICLE_UPDATED"]),
  },
  // Article End

  // ArticleComment Start
  ArticleCommentCreated: {
    subscribe: () => pubsub.asyncIterator(["ARTICLECOMMENT_CREATED"]),
  },

  ArticleCommentDeleted: {
    subscribe: () => pubsub.asyncIterator(["ARTICLECOMMENT_DELETED"]),
  },

  ArticleCommentUpdated: {
    subscribe: () => pubsub.asyncIterator(["ARTICLECOMMENT_UPDATED"]),
  },
  // Article End
};

export { Subscription };
