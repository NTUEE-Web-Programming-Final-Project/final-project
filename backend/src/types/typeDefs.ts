const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  ### Define Data Structure ###

  #### type def ###

  type Announcement {
    id: Int!
    title: String!
    date: String!
    content: String!
  }

  ### input def #####

  input AnnouncementInput {
    title: String!
    content: String!
  }
  
  ### Define Resolvers ###

  type Query {
    AllAnnouncements: [Announcement]
  }

  type Mutation {
    AddAnnouncement(announcementInput: AnnouncementInput!): Announcement
    DeleteAnnouncement(id: Int!): Announcement
    UpdateAnnouncement(id: Int!, announcementInput: AnnouncementInput!): Announcement
  }

  type Subscription {
    AnnouncementCreated: Announcement
    AnnouncementDeleted: Announcement
    AnnouncementUpdated: Announcement
  }
`;

export { typeDefs }
