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

  type Article {
  id: Int!
  writerId: Int!
  date: String!
  title:  String!
  content:  String!
  tags: [String]
  zap:  Int!
  isMe: Int!
  bombFish: Int!
  topic:  String!
  commentsId: [Int]
  }

  type ArticleComment {
    id: Int!       
    commenterId:  Int!
    content:  String!
    date: String!
    rootArticleId: Int!
    zap: Int!
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
  
  input ArticleInput {
    writerId: Int! 
    title:    String!
    content:  String!
    tags:     [String]!
    topic:    String!
    zap: Int!
    isMe: Int!
    bombFish: Int!
  }

  input ArticleCommentInput {
    commenterId: Int!
    content: String!
    rootArticleId: Int!
    zap: Int!
  }

  ### Define Resolvers ###

  type Query {
    AllAnnouncements: [Announcement]
    AllUsers: [User]
    AllArticles: [Article]
    AllArticleComments: [ArticleComment]
  }

  type Mutation {
    CreateAnnouncement(announcementInput: AnnouncementInput!): Announcement
    DeleteAnnouncement(id: Int!): Announcement
    UpdateAnnouncement(id: Int!, announcementInput: AnnouncementInput!): Announcement
    CreateUser(userInput: UserInput!): User
    DeleteUser(id: Int!): User
    UpdateUser(id: Int!, userInput: UserInput!): User
    UpdateUserPassword(id: Int!, userPasswordInput: UserPasswordInput!): User
    CreateArticle(articleInput: ArticleInput!): Article
    DeleteArticle(id: Int!): Article
    UpdateArticle(id: Int!, articleInput: ArticleInput!): Article
    CreateArticleComment(articleCommentInput: ArticleCommentInput!): ArticleComment
    DeleteArticleComment(id: Int!): ArticleComment
    UpdateArticleComment(id: Int!, articleCommentInput: ArticleCommentInput!): ArticleComment
  }

  type Subscription {
    AnnouncementCreated: Announcement
    AnnouncementDeleted: Announcement
    AnnouncementUpdated: Announcement
    UserCreated: User
    UserDeleted: User
    UserUpdated: User
    ArticleCreated: Article
    ArticleDeleted: Article
    ArticleUpdated: Article
    ArticleCommentCreated: ArticleComment
    ArticleCommentDeleted: ArticleComment
    ArticleCommentUpdated: ArticleComment
  }
`;

export { typeDefs };
