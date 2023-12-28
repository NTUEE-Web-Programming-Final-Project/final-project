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
    likedQuestionsId: [Int]!
    likedQuestionCommentsId: [Int]!
    likedSolutionsId: [Int]!
    likedArticlesId: [Int]!
    likedArticleCommentsId: [Int]!
  }

  type Article {
    id: Int!
    writerId: Int!
    date: String!
    title:  String!
    content:  String!
    tags: [String]!
    topic:  String!
    commentsId: [Int]!
    likesId: [Int]!
  }

  type ArticleComment {
    id: Int!
    commenterId:  Int!
    content:  String!
    date: String!
    rootArticleId: Int!
    likesId: [Int]!
  }

  type LikedArticle {
    id: Int!
    likerId: Int!
    articleId: Int!
  }

  type LikedArticleComment {
    id: Int!
    likerId: Int!
    articleCommentId: Int!
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
  }

  input ArticleCommentInput {
    commenterId: Int!
    content: String!
    rootArticleId: Int!
  }

  input ArticleLikeInput {
    likerId: Int!
    articleId: Int!
  }

  input ArticleCommentLikeInput {
    likerId: Int!
    articleId: Int!
  }

  ### Define Resolvers ###

  type Query {
    AllAnnouncements: [Announcement]
    AllUsers: [User]
    AllArticles: [Article]
    AllArticleComments: [ArticleComment]
    AllLikedArticles(likerId: Int!): [Article]
    AllLikedArticleComments(likerId: Int!): [ArticleComment]
  }

  type Mutation {
    # Announcement
    CreateAnnouncement(announcementInput: AnnouncementInput!): Announcement
    DeleteAnnouncement(id: Int!): Announcement
    UpdateAnnouncement(id: Int!, announcementInput: AnnouncementInput!): Announcement
    # User
    CreateUser(userInput: UserInput!): User
    DeleteUser(id: Int!): User
    UpdateUser(id: Int!, userInput: UserInput!): User
    UpdateUserPassword(id: Int!, userPasswordInput: UserPasswordInput!): User
    # Article
    CreateArticle(articleInput: ArticleInput!): Article
    DeleteArticle(id: Int!): Article
    UpdateArticle(id: Int!, articleInput: ArticleInput!): Article
    # ArticleComment
    CreateArticleComment(articleCommentInput: ArticleCommentInput!): ArticleComment
    DeleteArticleComment(id: Int!): ArticleComment
    UpdateArticleComment(id: Int!, articleCommentInput: ArticleCommentInput!): ArticleComment
    # LikeArticle
    LikeArticle(articleLikeInput: ArticleLikeInput!): LikedArticle # just like "create"
    UnlikeArticle(articleUnlikeInput: ArticleLikeInput!): LikedArticle # just like "delete"
    # LikeArticleComment
    LikeArticleComment(articleCommentLikeInput: ArticleCommentLikeInput!): LikedArticleComment
    UnlikeArticleComment(articleCommentUnlikeInput: ArticleCommentLikeInput!): LikedArticleComment
  }

  type Subscription {
    # Announcement
    AnnouncementCreated: Announcement
    AnnouncementDeleted: Announcement
    AnnouncementUpdated: Announcement
    # User
    UserCreated: User
    UserDeleted: User
    UserUpdated: User
    # Article
    ArticleCreated: Article
    ArticleDeleted: Article
    ArticleUpdated: Article
    # ArticleComment
    ArticleCommentCreated: ArticleComment
    ArticleCommentDeleted: ArticleComment
    ArticleCommentUpdated: ArticleComment
    # LikeArticle
    ArticleLiked: LikedArticle
    ArticleUnliked: LikedArticle
    # LikeArticleComment
    ArticleCommentLiked: LikedArticleComment
    ArticleCommentUnliked: LikedArticleComment
  }
`;

export { typeDefs };
