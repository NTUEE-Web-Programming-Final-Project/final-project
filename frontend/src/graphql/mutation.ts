import { graphql } from "../gql-generated";

const CREATE_ANNOUNCEMENT_MUTATION = graphql(`
  mutation CreateAnnouncement($announcementInput: AnnouncementInput!) {
    CreateAnnouncement(announcementInput: $announcementInput) {
      id
      title
      date
      content
    }
  }
`);

const DELETE_ANNOUNCEMENT_MUTATION = graphql(`
  mutation DeleteAnnouncement($deleteAnnouncementId: Int!) {
    DeleteAnnouncement(id: $deleteAnnouncementId) {
      id
      title
      date
      content
    }
  }
`);

const UPDATE_ANNOUNCEMENT_MUTATION = graphql(`
  mutation UpdateAnnouncement(
    $updateAnnouncementId: Int!
    $announcementInput: AnnouncementInput!
  ) {
    UpdateAnnouncement(
      id: $updateAnnouncementId
      announcementInput: $announcementInput
    ) {
      id
      title
      date
      content
    }
  }
`);

const CREATE_USER_MUTATION = graphql(`
  mutation CreateUser($userInput: UserInput!) {
    CreateUser(userInput: $userInput) {
      id
      name
      studentID
      password
      photoLink
      introduction
      questionsId
      questionCommentsId
      solutionsId
      articlesId
      articleCommentsId
      likedQuestionsId
      likedQuestionCommentsId
      likedSolutionsId
      likedArticlesId
      likedArticleCommentsId
    }
  }
`);

const DELETE_USER_MUTATION = graphql(`
  mutation DeleteUser($deleteUserId: Int!) {
    DeleteUser(id: $deleteUserId) {
      id
      name
      studentID
      password
      photoLink
      introduction
      questionsId
      questionCommentsId
      solutionsId
      articlesId
      articleCommentsId
      likedQuestionsId
      likedQuestionCommentsId
      likedSolutionsId
      likedArticlesId
      likedArticleCommentsId
    }
  }
`);

const UPDATE_USER_MUTATION = graphql(`
  mutation UpdateUser($updateUserId: Int!, $userInput: UserInput!) {
    UpdateUser(id: $updateUserId, userInput: $userInput) {
      id
      name
      studentID
      password
      photoLink
      introduction
      questionsId
      questionCommentsId
      solutionsId
      articlesId
      articleCommentsId
      likedQuestionsId
      likedQuestionCommentsId
      likedSolutionsId
      likedArticlesId
      likedArticleCommentsId
    }
  }
`);

const UPDATE_USER_PASSWORD_MUTATION = graphql(`
  mutation UpdateUserPassword(
    $updateUserPasswordId: Int!
    $userPasswordInput: UserPasswordInput!
  ) {
    UpdateUserPassword(
      id: $updateUserPasswordId
      userPasswordInput: $userPasswordInput
    ) {
      id
      name
      studentID
      password
    }
  }
`);

const CREATE_ARTICLE_MUTATION = graphql(`
  mutation CreateArticle($articleInput: ArticleInput!) {
    CreateArticle(articleInput: $articleInput) {
      id
      writerId
      date
      title
      content
      topic
      tags
      likesId
    }
  }
`);

const DELETE_ARTICLE_MUTATION = graphql(`
  mutation DeleteArticle($deleteArticleId: Int!) {
    DeleteArticle(id: $deleteArticleId) {
      id
      writerId
      date
      title
      content
      tags
      topic
      commentsId
      likesId
    }
  }
`);

const UPDATE_ARTICLE_MUTATION = graphql(`
  mutation UpdateArticle($updateArticleId: Int!, $articleInput: ArticleInput!) {
    UpdateArticle(id: $updateArticleId, articleInput: $articleInput) {
      id
      writerId
      date
      title
      content
      tags
      topic
      commentsId
      likesId
    }
  }
`);

const LIKE_ARTICLE_MUTATION = graphql(`
  mutation LikeArticle($articleLikeInput: ArticleLikeInput!) {
    LikeArticle(articleLikeInput: $articleLikeInput) {
      id
      likerId
      articleId
    }
  }
`);

const UNLIKE_ARTICLE_MUTATION = graphql(`
  mutation UnlikeArticle($articleUnlikeInput: ArticleLikeInput!) {
    UnlikeArticle(articleUnlikeInput: $articleUnlikeInput) {
      id
      likerId
      articleId
    }
  }
`);

const CREATE_ARTICLECOMMENT_MUTATION = graphql(`
  mutation CreateArticleComment($articleCommentInput: ArticleCommentInput!) {
    CreateArticleComment(articleCommentInput: $articleCommentInput) {
      id
      commenterId
      content
      date
      rootArticleId
      likesId
    }
  }
`);

const DELETE_ARTICLECOMMENT_MUTATION = graphql(`
  mutation DeleteArticleComment($deleteArticleCommentId: Int!) {
    DeleteArticleComment(id: $deleteArticleCommentId) {
      id
      commenterId
      content
      date
      rootArticleId
      likesId
    }
  }
`);

const UPDATE_ARTICLECOMMENT_MUTATION = graphql(`
  mutation UpdateArticleComment(
    $updateArticleCommentId: Int!
    $articleCommentInput: ArticleCommentInput!
  ) {
    UpdateArticleComment(
      id: $updateArticleCommentId
      articleCommentInput: $articleCommentInput
    ) {
      id
      commenterId
      content
      date
      rootArticleId
      likesId
    }
  }
`);

const LIKE_ARTICLECOMMENT_MUTATION = graphql(`
  mutation LikeArticleComment(
    $articleCommentLikeInput: ArticleCommentLikeInput!
  ) {
    LikeArticleComment(articleCommentLikeInput: $articleCommentLikeInput) {
      id
      likerId
      articleCommentId
    }
  }
`);

const UNLIKE_ARTICLECOMMENT_MUTATION = graphql(`
  mutation UnlikeArticleComment(
    $articleCommentUnlikeInput: ArticleCommentLikeInput!
  ) {
    UnlikeArticleComment(
      articleCommentUnlikeInput: $articleCommentUnlikeInput
    ) {
      id
      likerId
      articleCommentId
    }
  }
`);

export {
  CREATE_ANNOUNCEMENT_MUTATION,
  DELETE_ANNOUNCEMENT_MUTATION,
  UPDATE_ANNOUNCEMENT_MUTATION,
  CREATE_USER_MUTATION,
  DELETE_USER_MUTATION,
  UPDATE_USER_MUTATION,
  UPDATE_USER_PASSWORD_MUTATION,
  CREATE_ARTICLE_MUTATION,
  DELETE_ARTICLE_MUTATION,
  UPDATE_ARTICLE_MUTATION,
  LIKE_ARTICLE_MUTATION,
  UNLIKE_ARTICLE_MUTATION,
  CREATE_ARTICLECOMMENT_MUTATION,
  DELETE_ARTICLECOMMENT_MUTATION,
  UPDATE_ARTICLECOMMENT_MUTATION,
  LIKE_ARTICLECOMMENT_MUTATION,
  UNLIKE_ARTICLECOMMENT_MUTATION,
};
