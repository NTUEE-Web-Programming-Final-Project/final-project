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

  type Article {
    id            Int!
    writerId      Int!
    date          String!
    title         String!
    content       String!
    tags          [String!]!
    likes         [Int!]!
    topic         String!
  }

  type ArticleComment {
    id              Int!
    commenterId     Int!
    date            String!
    content         String!
    rootArticleId   Int!
    like            Int!
  }

  ### input def #####

  input AnnouncementInput {
    title: String!
    content: String!
  }

  input ArticleInput {
    title           String!
    content         String!
    tags            [String!]!
    likes           [Int!]!
    topic           String!
  }

  input ArticleCommentInput {
    content         String!
    like            Int!
  }
  
  ### Define Resolvers ###

  type Query {
    AllAnnouncements: [Announcement]
    AllArticles: [Article]
    AllArticleComments: [ArticleComment]
  }

  type Mutation {
    CreateAnnouncement(announcementInput: AnnouncementInput!): Announcement
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
