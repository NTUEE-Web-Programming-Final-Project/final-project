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

  type User {
    id: Int!
    name: String!
    studentID: String!
    password: String!
    photoLink: String!
    introduction: String
    questionsId: [Int]!
    questionCommentsId: [Int]!
    solutionsId: [Int]!
    articlesId: [Int]!
    articleCommentsId: [Int]!
  }

  ### input def #####

  input AnnouncementInput {
    title: String!
    content: String!
  }

  input UserInput {
    name: String!
    studentID: String!
    password: String!
    photoLink: String!
    introduction: String
  }

  input UserPasswordInput {
    password: String!
  }
  
  ### Define Resolvers ###

  type Query {
    AllAnnouncements: [Announcement]
    AllUsers: [User]
  }

  type Mutation {
    CreateAnnouncement(announcementInput: AnnouncementInput!): Announcement
    DeleteAnnouncement(id: Int!): Announcement
    UpdateAnnouncement(id: Int!, announcementInput: AnnouncementInput!): Announcement
    CreateUser(userInput: UserInput!): User
    DeleteUser(id: Int!): User
    UpdateUser(id: Int!, userInput: UserInput!): User
    UpdateUserPassword(id: Int!, userPasswordInput: UserPasswordInput!): User
  }

  type Subscription {
    AnnouncementCreated: Announcement
    AnnouncementDeleted: Announcement
    AnnouncementUpdated: Announcement
    UserCreated: User
    UserDeleted: User
    UserUpdated: User
  }
`;

export { typeDefs }
