/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateAnnouncement($announcementInput: AnnouncementInput!) {\n    CreateAnnouncement(announcementInput: $announcementInput) {\n      id\n      title\n      date\n      content\n    }\n  }\n": types.CreateAnnouncementDocument,
    "\n  mutation DeleteAnnouncement($deleteAnnouncementId: Int!) {\n    DeleteAnnouncement(id: $deleteAnnouncementId) {\n      id\n      title\n      date\n      content\n    }\n  }\n": types.DeleteAnnouncementDocument,
    "\n  mutation UpdateAnnouncement(\n    $updateAnnouncementId: Int!\n    $announcementInput: AnnouncementInput!\n  ) {\n    UpdateAnnouncement(\n      id: $updateAnnouncementId\n      announcementInput: $announcementInput\n    ) {\n      id\n      title\n      date\n      content\n    }\n  }\n": types.UpdateAnnouncementDocument,
    "\n  mutation CreateUser($userInput: UserInput!) {\n    CreateUser(userInput: $userInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation DeleteUser($deleteUserId: Int!) {\n    DeleteUser(id: $deleteUserId) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n": types.DeleteUserDocument,
    "\n  mutation UpdateUser($updateUserId: Int!, $userInput: UserInput!) {\n    UpdateUser(id: $updateUserId, userInput: $userInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n": types.UpdateUserDocument,
    "\n  mutation UpdateUserPassword(\n    $updateUserPasswordId: Int!\n    $userPasswordInput: UserPasswordInput!\n  ) {\n    UpdateUserPassword(\n      id: $updateUserPasswordId\n      userPasswordInput: $userPasswordInput\n    ) {\n      id\n      name\n      studentID\n      password\n    }\n  }\n": types.UpdateUserPasswordDocument,
    "\n  mutation UpdateUserProfile(\n    $updateUserProfileId: Int!\n    $userProfileInput: UserProfileInput!\n  ) {\n    UpdateUserProfile(\n      id: $updateUserProfileId\n      userProfileInput: $userProfileInput\n    ) {\n      id\n      name\n      introduction\n      studentID\n      photoLink\n    }\n  }\n": types.UpdateUserProfileDocument,
    "\n  mutation CreateArticle($articleInput: ArticleInput!) {\n    CreateArticle(articleInput: $articleInput) {\n      id\n      writerId\n      date\n      title\n      content\n      topic\n      tags\n      likesId\n    }\n  }\n": types.CreateArticleDocument,
    "\n  mutation DeleteArticle($deleteArticleId: Int!) {\n    DeleteArticle(id: $deleteArticleId) {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n": types.DeleteArticleDocument,
    "\n  mutation UpdateArticle($updateArticleId: Int!, $articleInput: ArticleInput!) {\n    UpdateArticle(id: $updateArticleId, articleInput: $articleInput) {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n": types.UpdateArticleDocument,
    "\n  mutation LikeArticle($articleLikeInput: ArticleLikeInput!) {\n    LikeArticle(articleLikeInput: $articleLikeInput) {\n      id\n      likerId\n      articleId\n    }\n  }\n": types.LikeArticleDocument,
    "\n  mutation UnlikeArticle($articleUnlikeInput: ArticleLikeInput!) {\n    UnlikeArticle(articleUnlikeInput: $articleUnlikeInput) {\n      id\n      likerId\n      articleId\n    }\n  }\n": types.UnlikeArticleDocument,
    "\n  mutation CreateArticleComment($articleCommentInput: ArticleCommentInput!) {\n    CreateArticleComment(articleCommentInput: $articleCommentInput) {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n": types.CreateArticleCommentDocument,
    "\n  mutation DeleteArticleComment($deleteArticleCommentId: Int!) {\n    DeleteArticleComment(id: $deleteArticleCommentId) {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n": types.DeleteArticleCommentDocument,
    "\n  mutation UpdateArticleComment(\n    $updateArticleCommentId: Int!\n    $articleCommentInput: ArticleCommentInput!\n  ) {\n    UpdateArticleComment(\n      id: $updateArticleCommentId\n      articleCommentInput: $articleCommentInput\n    ) {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n": types.UpdateArticleCommentDocument,
    "\n  mutation LikeArticleComment(\n    $articleCommentLikeInput: ArticleCommentLikeInput!\n  ) {\n    LikeArticleComment(articleCommentLikeInput: $articleCommentLikeInput) {\n      id\n      likerId\n      articleCommentId\n    }\n  }\n": types.LikeArticleCommentDocument,
    "\n  mutation UnlikeArticleComment(\n    $articleCommentUnlikeInput: ArticleCommentLikeInput!\n  ) {\n    UnlikeArticleComment(\n      articleCommentUnlikeInput: $articleCommentUnlikeInput\n    ) {\n      id\n      likerId\n      articleCommentId\n    }\n  }\n": types.UnlikeArticleCommentDocument,
    "\n  mutation CreateQuestion($questionInput: QuestionInput!) {\n    CreateQuestion(questionInput: $questionInput) {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n": types.CreateQuestionDocument,
    "\n  mutation DeleteQuestion($deleteQuestionId: Int!) {\n    DeleteQuestion(id: $deleteQuestionId) {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n": types.DeleteQuestionDocument,
    "\n  mutation UpdateQuestion(\n    $updateQuestionId: Int!\n    $questionInput: QuestionInput!\n  ) {\n    UpdateQuestion(id: $updateQuestionId, questionInput: $questionInput) {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n": types.UpdateQuestionDocument,
    "\n  mutation LikeQuestion($questionLikeInput: QuestionLikeInput!) {\n    LikeQuestion(questionLikeInput: $questionLikeInput) {\n      id\n      likerId\n      questionId\n    }\n  }\n": types.LikeQuestionDocument,
    "\n  mutation UnlikeQuestion($questionUnlikeInput: QuestionLikeInput!) {\n    UnlikeQuestion(questionUnlikeInput: $questionUnlikeInput) {\n      id\n      likerId\n      questionId\n    }\n  }\n": types.UnlikeQuestionDocument,
    "\n  mutation CreateQuestionComment($questionCommentInput: QuestionCommentInput!) {\n    CreateQuestionComment(questionCommentInput: $questionCommentInput) {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n": types.CreateQuestionCommentDocument,
    "\n  mutation DeleteQuestionComment($deleteQuestionCommentId: Int!) {\n    DeleteQuestionComment(id: $deleteQuestionCommentId) {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n": types.DeleteQuestionCommentDocument,
    "\n  mutation UpdateQuestionComment(\n    $updateQuestionCommentId: Int!\n    $questionCommentInput: QuestionCommentInput!\n  ) {\n    UpdateQuestionComment(\n      id: $updateQuestionCommentId\n      questionCommentInput: $questionCommentInput\n    ) {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n": types.UpdateQuestionCommentDocument,
    "\n  mutation LikeQuestionComment(\n    $questionCommentLikeInput: QuestionCommentLikeInput!\n  ) {\n    LikeQuestionComment(questionCommentLikeInput: $questionCommentLikeInput) {\n      id\n      likerId\n      questionCommentId\n    }\n  }\n": types.LikeQuestionCommentDocument,
    "\n  mutation UnlikeQuestionComment(\n    $questionCommentUnlikeInput: QuestionCommentLikeInput!\n  ) {\n    UnlikeQuestionComment(\n      questionCommentUnlikeInput: $questionCommentUnlikeInput\n    ) {\n      id\n      likerId\n      questionCommentId\n    }\n  }\n": types.UnlikeQuestionCommentDocument,
    "\n  mutation CreateSolution($solutionInput: SolutionInput!) {\n    CreateSolution(solutionInput: $solutionInput) {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n": types.CreateSolutionDocument,
    "\n  mutation DeleteSolution($deleteSolutionId: Int!) {\n    DeleteSolution(id: $deleteSolutionId) {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n": types.DeleteSolutionDocument,
    "\n  mutation UpdateSolution(\n    $updateSolutionId: Int!\n    $solutionInput: SolutionInput!\n  ) {\n    UpdateSolution(id: $updateSolutionId, solutionInput: $solutionInput) {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n": types.UpdateSolutionDocument,
    "\n  mutation LikeSolution($solutionLikeInput: SolutionLikeInput!) {\n    LikeSolution(solutionLikeInput: $solutionLikeInput) {\n      id\n      likerId\n      solutionId\n    }\n  }\n": types.LikeSolutionDocument,
    "\n  mutation UnlikeSolution($solutionUnlikeInput: SolutionLikeInput!) {\n    UnlikeSolution(solutionUnlikeInput: $solutionUnlikeInput) {\n      id\n      likerId\n      solutionId\n    }\n  }\n": types.UnlikeSolutionDocument,
    "\n  mutation CreateSolutionComment($solutionCommentInput: SolutionCommentInput!) {\n    CreateSolutionComment(solutionCommentInput: $solutionCommentInput) {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n": types.CreateSolutionCommentDocument,
    "\n  mutation DeleteSolutionComment($deleteSolutionCommentId: Int!) {\n    DeleteSolutionComment(id: $deleteSolutionCommentId) {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n": types.DeleteSolutionCommentDocument,
    "\n  mutation UpdateSolutionComment(\n    $updateSolutionCommentId: Int!\n    $solutionCommentInput: SolutionCommentInput!\n  ) {\n    UpdateSolutionComment(\n      id: $updateSolutionCommentId\n      solutionCommentInput: $solutionCommentInput\n    ) {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n": types.UpdateSolutionCommentDocument,
    "\n  mutation LikeSolutionComment(\n    $solutionCommentLikeInput: SolutionCommentLikeInput!\n  ) {\n    LikeSolutionComment(solutionCommentLikeInput: $solutionCommentLikeInput) {\n      id\n      likerId\n      solutionCommentId\n    }\n  }\n": types.LikeSolutionCommentDocument,
    "\n  mutation UnlikeSolutionComment(\n    $solutionCommentUnlikeInput: SolutionCommentLikeInput!\n  ) {\n    UnlikeSolutionComment(\n      solutionCommentUnlikeInput: $solutionCommentUnlikeInput\n    ) {\n      id\n      likerId\n      solutionCommentId\n    }\n  }\n": types.UnlikeSolutionCommentDocument,
    "\n  query AllAnnouncements {\n    AllAnnouncements {\n      id\n      title\n      date\n      content\n    }\n  }\n": types.AllAnnouncementsDocument,
    "\n  query HomepageAnnouncements {\n    HomepageAnnouncements {\n      id\n      title\n      date\n      content\n    }\n  }\n": types.HomepageAnnouncementsDocument,
    "\n  query AllUsers {\n    AllUsers {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n": types.AllUsersDocument,
    "\n  query AllArticles {\n    AllArticles {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n": types.AllArticlesDocument,
    "\n  query HomepageArticles {\n    HomepageArticles {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n": types.HomepageArticlesDocument,
    "\n  query SortArticlesByTime {\n    SortArticlesByTime {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n": types.SortArticlesByTimeDocument,
    "\n  query SortArticlesByLike {\n    SortArticlesByLike {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n": types.SortArticlesByLikeDocument,
    "\n  query AllLikedArticles($likerId: Int!) {\n    AllLikedArticles(likerId: $likerId) {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n": types.AllLikedArticlesDocument,
    "\n  query AllArticleComments {\n    AllArticleComments {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n": types.AllArticleCommentsDocument,
    "\n  query AllLikedArticleComments($likerId: Int!) {\n    AllLikedArticleComments(likerId: $likerId) {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n": types.AllLikedArticleCommentsDocument,
    "\n  query AllQuestions {\n    AllQuestions {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n": types.AllQuestionsDocument,
    "\n  query HomepageQuestions {\n    HomepageQuestions {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n": types.HomepageQuestionsDocument,
    "\n  query SortQuestionsByTime {\n    SortQuestionsByTime {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n": types.SortQuestionsByTimeDocument,
    "\n  query SortQuestionsByLike {\n    SortQuestionsByLike {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n": types.SortQuestionsByLikeDocument,
    "\n  query AllLikedQuestions($likerId: Int!) {\n    AllLikedQuestions(likerId: $likerId) {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n": types.AllLikedQuestionsDocument,
    "\n  query AllQuestionComments {\n    AllQuestionComments {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n": types.AllQuestionCommentsDocument,
    "\n  query AllLikedQuestionComments($likerId: Int!) {\n    AllLikedQuestionComments(likerId: $likerId) {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n": types.AllLikedQuestionCommentsDocument,
    "\n  query AllSolutions {\n    AllSolutions {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n": types.AllSolutionsDocument,
    "\n  query AllLikedSolutions($likerId: Int!) {\n    AllLikedSolutions(likerId: $likerId) {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n": types.AllLikedSolutionsDocument,
    "\n  query AllSolutionComments {\n    AllSolutionComments {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n": types.AllSolutionCommentsDocument,
    "\n  query AllLikedSolutionComments($likerId: Int!) {\n    AllLikedSolutionComments(likerId: $likerId) {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n": types.AllLikedSolutionCommentsDocument,
    "\n  subscription AnnouncementCreated {\n    AnnouncementCreated {\n      id\n      date\n      title\n      content\n    }\n  }\n": types.AnnouncementCreatedDocument,
    "\n  subscription AnnouncementDeleted {\n    AnnouncementDeleted {\n      id\n      title\n      date\n      content\n    }\n  }\n": types.AnnouncementDeletedDocument,
    "\n  subscription AnnouncementUpdated {\n    AnnouncementUpdated {\n      id\n      title\n      date\n      content\n    }\n  }\n": types.AnnouncementUpdatedDocument,
    "\n  subscription UserCreated {\n    UserCreated {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n": types.UserCreatedDocument,
    "\n  subscription UserDeleted {\n    UserDeleted {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n": types.UserDeletedDocument,
    "\n  subscription UserUpdated {\n    UserUpdated {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n": types.UserUpdatedDocument,
    "\n  subscription ArticleCreated {\n    ArticleCreated {\n      id\n      writerId\n      date\n      title\n      content\n      topic\n      tags\n      likesId\n    }\n  }\n": types.ArticleCreatedDocument,
    "\n  subscription ArticleDeleted {\n    ArticleDeleted {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n": types.ArticleDeletedDocument,
    "\n  subscription ArticleUpdated {\n    ArticleUpdated {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n": types.ArticleUpdatedDocument,
    "\n  subscription ArticleLiked {\n    ArticleLiked {\n      id\n      likerId\n      articleId\n    }\n  }\n": types.ArticleLikedDocument,
    "\n  subscription ArticleUnliked {\n    ArticleUnliked {\n      id\n      likerId\n      articleId\n    }\n  }\n": types.ArticleUnlikedDocument,
    "\n  subscription ArticleCommentCreated {\n    ArticleCommentCreated {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n": types.ArticleCommentCreatedDocument,
    "\n  subscription ArticleCommentDeleted {\n    ArticleCommentUpdated {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n": types.ArticleCommentDeletedDocument,
    "\n  subscription ArticleCommentLiked {\n    ArticleCommentLiked {\n      id\n      likerId\n      articleCommentId\n    }\n  }\n": types.ArticleCommentLikedDocument,
    "\n  subscription ArticleCommentUnliked {\n    ArticleCommentUnliked {\n      id\n      likerId\n      articleCommentId\n    }\n  }\n": types.ArticleCommentUnlikedDocument,
    "\n  subscription QuestionCreated {\n    QuestionCreated {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n": types.QuestionCreatedDocument,
    "\n  subscription QuestionDeleted {\n    QuestionDeleted {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n": types.QuestionDeletedDocument,
    "\n  subscription QuestionUpdated {\n    QuestionUpdated {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n": types.QuestionUpdatedDocument,
    "\n  subscription QuestionLiked {\n    QuestionLiked {\n      id\n      likerId\n      questionId\n    }\n  }\n": types.QuestionLikedDocument,
    "\n  subscription QuestionUnliked {\n    QuestionUnliked {\n      id\n      likerId\n      questionId\n    }\n  }\n": types.QuestionUnlikedDocument,
    "\n  subscription QuestionCommentCreated {\n    QuestionCommentCreated {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n": types.QuestionCommentCreatedDocument,
    "\n  subscription QuestionCommentDeleted {\n    QuestionCommentDeleted {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n": types.QuestionCommentDeletedDocument,
    "\n  subscription QuestionCommentUpdated {\n    QuestionCommentUpdated {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n": types.QuestionCommentUpdatedDocument,
    "\n  subscription QuestionCommentLiked {\n    QuestionCommentLiked {\n      id\n      likerId\n      questionCommentId\n    }\n  }\n": types.QuestionCommentLikedDocument,
    "\n  subscription QuestionCommentUnliked {\n    QuestionCommentUnliked {\n      id\n      likerId\n      questionCommentId\n    }\n  }\n": types.QuestionCommentUnlikedDocument,
    "\n  subscription SolutionCreated {\n    SolutionCreated {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n": types.SolutionCreatedDocument,
    "\n  subscription SolutionDeleted {\n    SolutionDeleted {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n": types.SolutionDeletedDocument,
    "\n  subscription SolutionUpdated {\n    SolutionUpdated {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n": types.SolutionUpdatedDocument,
    "\n  subscription SolutionLiked {\n    SolutionLiked {\n      id\n      likerId\n      solutionId\n    }\n  }\n": types.SolutionLikedDocument,
    "\n  subscription SolutionUnliked {\n    SolutionUnliked {\n      id\n      likerId\n      solutionId\n    }\n  }\n": types.SolutionUnlikedDocument,
    "\n  subscription SolutionCommentCreated {\n    SolutionCommentCreated {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n": types.SolutionCommentCreatedDocument,
    "\n  subscription SolutionCommentDeleted {\n    SolutionCommentDeleted {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n": types.SolutionCommentDeletedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateAnnouncement($announcementInput: AnnouncementInput!) {\n    CreateAnnouncement(announcementInput: $announcementInput) {\n      id\n      title\n      date\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAnnouncement($announcementInput: AnnouncementInput!) {\n    CreateAnnouncement(announcementInput: $announcementInput) {\n      id\n      title\n      date\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteAnnouncement($deleteAnnouncementId: Int!) {\n    DeleteAnnouncement(id: $deleteAnnouncementId) {\n      id\n      title\n      date\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteAnnouncement($deleteAnnouncementId: Int!) {\n    DeleteAnnouncement(id: $deleteAnnouncementId) {\n      id\n      title\n      date\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateAnnouncement(\n    $updateAnnouncementId: Int!\n    $announcementInput: AnnouncementInput!\n  ) {\n    UpdateAnnouncement(\n      id: $updateAnnouncementId\n      announcementInput: $announcementInput\n    ) {\n      id\n      title\n      date\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAnnouncement(\n    $updateAnnouncementId: Int!\n    $announcementInput: AnnouncementInput!\n  ) {\n    UpdateAnnouncement(\n      id: $updateAnnouncementId\n      announcementInput: $announcementInput\n    ) {\n      id\n      title\n      date\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($userInput: UserInput!) {\n    CreateUser(userInput: $userInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($userInput: UserInput!) {\n    CreateUser(userInput: $userInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteUser($deleteUserId: Int!) {\n    DeleteUser(id: $deleteUserId) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUser($deleteUserId: Int!) {\n    DeleteUser(id: $deleteUserId) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser($updateUserId: Int!, $userInput: UserInput!) {\n    UpdateUser(id: $updateUserId, userInput: $userInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser($updateUserId: Int!, $userInput: UserInput!) {\n    UpdateUser(id: $updateUserId, userInput: $userInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserPassword(\n    $updateUserPasswordId: Int!\n    $userPasswordInput: UserPasswordInput!\n  ) {\n    UpdateUserPassword(\n      id: $updateUserPasswordId\n      userPasswordInput: $userPasswordInput\n    ) {\n      id\n      name\n      studentID\n      password\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserPassword(\n    $updateUserPasswordId: Int!\n    $userPasswordInput: UserPasswordInput!\n  ) {\n    UpdateUserPassword(\n      id: $updateUserPasswordId\n      userPasswordInput: $userPasswordInput\n    ) {\n      id\n      name\n      studentID\n      password\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserProfile(\n    $updateUserProfileId: Int!\n    $userProfileInput: UserProfileInput!\n  ) {\n    UpdateUserProfile(\n      id: $updateUserProfileId\n      userProfileInput: $userProfileInput\n    ) {\n      id\n      name\n      introduction\n      studentID\n      photoLink\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserProfile(\n    $updateUserProfileId: Int!\n    $userProfileInput: UserProfileInput!\n  ) {\n    UpdateUserProfile(\n      id: $updateUserProfileId\n      userProfileInput: $userProfileInput\n    ) {\n      id\n      name\n      introduction\n      studentID\n      photoLink\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateArticle($articleInput: ArticleInput!) {\n    CreateArticle(articleInput: $articleInput) {\n      id\n      writerId\n      date\n      title\n      content\n      topic\n      tags\n      likesId\n    }\n  }\n"): (typeof documents)["\n  mutation CreateArticle($articleInput: ArticleInput!) {\n    CreateArticle(articleInput: $articleInput) {\n      id\n      writerId\n      date\n      title\n      content\n      topic\n      tags\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteArticle($deleteArticleId: Int!) {\n    DeleteArticle(id: $deleteArticleId) {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteArticle($deleteArticleId: Int!) {\n    DeleteArticle(id: $deleteArticleId) {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateArticle($updateArticleId: Int!, $articleInput: ArticleInput!) {\n    UpdateArticle(id: $updateArticleId, articleInput: $articleInput) {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateArticle($updateArticleId: Int!, $articleInput: ArticleInput!) {\n    UpdateArticle(id: $updateArticleId, articleInput: $articleInput) {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LikeArticle($articleLikeInput: ArticleLikeInput!) {\n    LikeArticle(articleLikeInput: $articleLikeInput) {\n      id\n      likerId\n      articleId\n    }\n  }\n"): (typeof documents)["\n  mutation LikeArticle($articleLikeInput: ArticleLikeInput!) {\n    LikeArticle(articleLikeInput: $articleLikeInput) {\n      id\n      likerId\n      articleId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnlikeArticle($articleUnlikeInput: ArticleLikeInput!) {\n    UnlikeArticle(articleUnlikeInput: $articleUnlikeInput) {\n      id\n      likerId\n      articleId\n    }\n  }\n"): (typeof documents)["\n  mutation UnlikeArticle($articleUnlikeInput: ArticleLikeInput!) {\n    UnlikeArticle(articleUnlikeInput: $articleUnlikeInput) {\n      id\n      likerId\n      articleId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateArticleComment($articleCommentInput: ArticleCommentInput!) {\n    CreateArticleComment(articleCommentInput: $articleCommentInput) {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  mutation CreateArticleComment($articleCommentInput: ArticleCommentInput!) {\n    CreateArticleComment(articleCommentInput: $articleCommentInput) {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteArticleComment($deleteArticleCommentId: Int!) {\n    DeleteArticleComment(id: $deleteArticleCommentId) {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteArticleComment($deleteArticleCommentId: Int!) {\n    DeleteArticleComment(id: $deleteArticleCommentId) {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateArticleComment(\n    $updateArticleCommentId: Int!\n    $articleCommentInput: ArticleCommentInput!\n  ) {\n    UpdateArticleComment(\n      id: $updateArticleCommentId\n      articleCommentInput: $articleCommentInput\n    ) {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateArticleComment(\n    $updateArticleCommentId: Int!\n    $articleCommentInput: ArticleCommentInput!\n  ) {\n    UpdateArticleComment(\n      id: $updateArticleCommentId\n      articleCommentInput: $articleCommentInput\n    ) {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LikeArticleComment(\n    $articleCommentLikeInput: ArticleCommentLikeInput!\n  ) {\n    LikeArticleComment(articleCommentLikeInput: $articleCommentLikeInput) {\n      id\n      likerId\n      articleCommentId\n    }\n  }\n"): (typeof documents)["\n  mutation LikeArticleComment(\n    $articleCommentLikeInput: ArticleCommentLikeInput!\n  ) {\n    LikeArticleComment(articleCommentLikeInput: $articleCommentLikeInput) {\n      id\n      likerId\n      articleCommentId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnlikeArticleComment(\n    $articleCommentUnlikeInput: ArticleCommentLikeInput!\n  ) {\n    UnlikeArticleComment(\n      articleCommentUnlikeInput: $articleCommentUnlikeInput\n    ) {\n      id\n      likerId\n      articleCommentId\n    }\n  }\n"): (typeof documents)["\n  mutation UnlikeArticleComment(\n    $articleCommentUnlikeInput: ArticleCommentLikeInput!\n  ) {\n    UnlikeArticleComment(\n      articleCommentUnlikeInput: $articleCommentUnlikeInput\n    ) {\n      id\n      likerId\n      articleCommentId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateQuestion($questionInput: QuestionInput!) {\n    CreateQuestion(questionInput: $questionInput) {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  mutation CreateQuestion($questionInput: QuestionInput!) {\n    CreateQuestion(questionInput: $questionInput) {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteQuestion($deleteQuestionId: Int!) {\n    DeleteQuestion(id: $deleteQuestionId) {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteQuestion($deleteQuestionId: Int!) {\n    DeleteQuestion(id: $deleteQuestionId) {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateQuestion(\n    $updateQuestionId: Int!\n    $questionInput: QuestionInput!\n  ) {\n    UpdateQuestion(id: $updateQuestionId, questionInput: $questionInput) {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateQuestion(\n    $updateQuestionId: Int!\n    $questionInput: QuestionInput!\n  ) {\n    UpdateQuestion(id: $updateQuestionId, questionInput: $questionInput) {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LikeQuestion($questionLikeInput: QuestionLikeInput!) {\n    LikeQuestion(questionLikeInput: $questionLikeInput) {\n      id\n      likerId\n      questionId\n    }\n  }\n"): (typeof documents)["\n  mutation LikeQuestion($questionLikeInput: QuestionLikeInput!) {\n    LikeQuestion(questionLikeInput: $questionLikeInput) {\n      id\n      likerId\n      questionId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnlikeQuestion($questionUnlikeInput: QuestionLikeInput!) {\n    UnlikeQuestion(questionUnlikeInput: $questionUnlikeInput) {\n      id\n      likerId\n      questionId\n    }\n  }\n"): (typeof documents)["\n  mutation UnlikeQuestion($questionUnlikeInput: QuestionLikeInput!) {\n    UnlikeQuestion(questionUnlikeInput: $questionUnlikeInput) {\n      id\n      likerId\n      questionId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateQuestionComment($questionCommentInput: QuestionCommentInput!) {\n    CreateQuestionComment(questionCommentInput: $questionCommentInput) {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  mutation CreateQuestionComment($questionCommentInput: QuestionCommentInput!) {\n    CreateQuestionComment(questionCommentInput: $questionCommentInput) {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteQuestionComment($deleteQuestionCommentId: Int!) {\n    DeleteQuestionComment(id: $deleteQuestionCommentId) {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteQuestionComment($deleteQuestionCommentId: Int!) {\n    DeleteQuestionComment(id: $deleteQuestionCommentId) {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateQuestionComment(\n    $updateQuestionCommentId: Int!\n    $questionCommentInput: QuestionCommentInput!\n  ) {\n    UpdateQuestionComment(\n      id: $updateQuestionCommentId\n      questionCommentInput: $questionCommentInput\n    ) {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateQuestionComment(\n    $updateQuestionCommentId: Int!\n    $questionCommentInput: QuestionCommentInput!\n  ) {\n    UpdateQuestionComment(\n      id: $updateQuestionCommentId\n      questionCommentInput: $questionCommentInput\n    ) {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LikeQuestionComment(\n    $questionCommentLikeInput: QuestionCommentLikeInput!\n  ) {\n    LikeQuestionComment(questionCommentLikeInput: $questionCommentLikeInput) {\n      id\n      likerId\n      questionCommentId\n    }\n  }\n"): (typeof documents)["\n  mutation LikeQuestionComment(\n    $questionCommentLikeInput: QuestionCommentLikeInput!\n  ) {\n    LikeQuestionComment(questionCommentLikeInput: $questionCommentLikeInput) {\n      id\n      likerId\n      questionCommentId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnlikeQuestionComment(\n    $questionCommentUnlikeInput: QuestionCommentLikeInput!\n  ) {\n    UnlikeQuestionComment(\n      questionCommentUnlikeInput: $questionCommentUnlikeInput\n    ) {\n      id\n      likerId\n      questionCommentId\n    }\n  }\n"): (typeof documents)["\n  mutation UnlikeQuestionComment(\n    $questionCommentUnlikeInput: QuestionCommentLikeInput!\n  ) {\n    UnlikeQuestionComment(\n      questionCommentUnlikeInput: $questionCommentUnlikeInput\n    ) {\n      id\n      likerId\n      questionCommentId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSolution($solutionInput: SolutionInput!) {\n    CreateSolution(solutionInput: $solutionInput) {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSolution($solutionInput: SolutionInput!) {\n    CreateSolution(solutionInput: $solutionInput) {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteSolution($deleteSolutionId: Int!) {\n    DeleteSolution(id: $deleteSolutionId) {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteSolution($deleteSolutionId: Int!) {\n    DeleteSolution(id: $deleteSolutionId) {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateSolution(\n    $updateSolutionId: Int!\n    $solutionInput: SolutionInput!\n  ) {\n    UpdateSolution(id: $updateSolutionId, solutionInput: $solutionInput) {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateSolution(\n    $updateSolutionId: Int!\n    $solutionInput: SolutionInput!\n  ) {\n    UpdateSolution(id: $updateSolutionId, solutionInput: $solutionInput) {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LikeSolution($solutionLikeInput: SolutionLikeInput!) {\n    LikeSolution(solutionLikeInput: $solutionLikeInput) {\n      id\n      likerId\n      solutionId\n    }\n  }\n"): (typeof documents)["\n  mutation LikeSolution($solutionLikeInput: SolutionLikeInput!) {\n    LikeSolution(solutionLikeInput: $solutionLikeInput) {\n      id\n      likerId\n      solutionId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnlikeSolution($solutionUnlikeInput: SolutionLikeInput!) {\n    UnlikeSolution(solutionUnlikeInput: $solutionUnlikeInput) {\n      id\n      likerId\n      solutionId\n    }\n  }\n"): (typeof documents)["\n  mutation UnlikeSolution($solutionUnlikeInput: SolutionLikeInput!) {\n    UnlikeSolution(solutionUnlikeInput: $solutionUnlikeInput) {\n      id\n      likerId\n      solutionId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSolutionComment($solutionCommentInput: SolutionCommentInput!) {\n    CreateSolutionComment(solutionCommentInput: $solutionCommentInput) {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSolutionComment($solutionCommentInput: SolutionCommentInput!) {\n    CreateSolutionComment(solutionCommentInput: $solutionCommentInput) {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteSolutionComment($deleteSolutionCommentId: Int!) {\n    DeleteSolutionComment(id: $deleteSolutionCommentId) {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteSolutionComment($deleteSolutionCommentId: Int!) {\n    DeleteSolutionComment(id: $deleteSolutionCommentId) {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateSolutionComment(\n    $updateSolutionCommentId: Int!\n    $solutionCommentInput: SolutionCommentInput!\n  ) {\n    UpdateSolutionComment(\n      id: $updateSolutionCommentId\n      solutionCommentInput: $solutionCommentInput\n    ) {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateSolutionComment(\n    $updateSolutionCommentId: Int!\n    $solutionCommentInput: SolutionCommentInput!\n  ) {\n    UpdateSolutionComment(\n      id: $updateSolutionCommentId\n      solutionCommentInput: $solutionCommentInput\n    ) {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LikeSolutionComment(\n    $solutionCommentLikeInput: SolutionCommentLikeInput!\n  ) {\n    LikeSolutionComment(solutionCommentLikeInput: $solutionCommentLikeInput) {\n      id\n      likerId\n      solutionCommentId\n    }\n  }\n"): (typeof documents)["\n  mutation LikeSolutionComment(\n    $solutionCommentLikeInput: SolutionCommentLikeInput!\n  ) {\n    LikeSolutionComment(solutionCommentLikeInput: $solutionCommentLikeInput) {\n      id\n      likerId\n      solutionCommentId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnlikeSolutionComment(\n    $solutionCommentUnlikeInput: SolutionCommentLikeInput!\n  ) {\n    UnlikeSolutionComment(\n      solutionCommentUnlikeInput: $solutionCommentUnlikeInput\n    ) {\n      id\n      likerId\n      solutionCommentId\n    }\n  }\n"): (typeof documents)["\n  mutation UnlikeSolutionComment(\n    $solutionCommentUnlikeInput: SolutionCommentLikeInput!\n  ) {\n    UnlikeSolutionComment(\n      solutionCommentUnlikeInput: $solutionCommentUnlikeInput\n    ) {\n      id\n      likerId\n      solutionCommentId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllAnnouncements {\n    AllAnnouncements {\n      id\n      title\n      date\n      content\n    }\n  }\n"): (typeof documents)["\n  query AllAnnouncements {\n    AllAnnouncements {\n      id\n      title\n      date\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomepageAnnouncements {\n    HomepageAnnouncements {\n      id\n      title\n      date\n      content\n    }\n  }\n"): (typeof documents)["\n  query HomepageAnnouncements {\n    HomepageAnnouncements {\n      id\n      title\n      date\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllUsers {\n    AllUsers {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"): (typeof documents)["\n  query AllUsers {\n    AllUsers {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllArticles {\n    AllArticles {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  query AllArticles {\n    AllArticles {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomepageArticles {\n    HomepageArticles {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  query HomepageArticles {\n    HomepageArticles {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SortArticlesByTime {\n    SortArticlesByTime {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  query SortArticlesByTime {\n    SortArticlesByTime {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SortArticlesByLike {\n    SortArticlesByLike {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  query SortArticlesByLike {\n    SortArticlesByLike {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllLikedArticles($likerId: Int!) {\n    AllLikedArticles(likerId: $likerId) {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  query AllLikedArticles($likerId: Int!) {\n    AllLikedArticles(likerId: $likerId) {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllArticleComments {\n    AllArticleComments {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  query AllArticleComments {\n    AllArticleComments {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllLikedArticleComments($likerId: Int!) {\n    AllLikedArticleComments(likerId: $likerId) {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  query AllLikedArticleComments($likerId: Int!) {\n    AllLikedArticleComments(likerId: $likerId) {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllQuestions {\n    AllQuestions {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  query AllQuestions {\n    AllQuestions {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomepageQuestions {\n    HomepageQuestions {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  query HomepageQuestions {\n    HomepageQuestions {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SortQuestionsByTime {\n    SortQuestionsByTime {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  query SortQuestionsByTime {\n    SortQuestionsByTime {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SortQuestionsByLike {\n    SortQuestionsByLike {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  query SortQuestionsByLike {\n    SortQuestionsByLike {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllLikedQuestions($likerId: Int!) {\n    AllLikedQuestions(likerId: $likerId) {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  query AllLikedQuestions($likerId: Int!) {\n    AllLikedQuestions(likerId: $likerId) {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllQuestionComments {\n    AllQuestionComments {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  query AllQuestionComments {\n    AllQuestionComments {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllLikedQuestionComments($likerId: Int!) {\n    AllLikedQuestionComments(likerId: $likerId) {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  query AllLikedQuestionComments($likerId: Int!) {\n    AllLikedQuestionComments(likerId: $likerId) {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllSolutions {\n    AllSolutions {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"): (typeof documents)["\n  query AllSolutions {\n    AllSolutions {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllLikedSolutions($likerId: Int!) {\n    AllLikedSolutions(likerId: $likerId) {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"): (typeof documents)["\n  query AllLikedSolutions($likerId: Int!) {\n    AllLikedSolutions(likerId: $likerId) {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllSolutionComments {\n    AllSolutionComments {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  query AllSolutionComments {\n    AllSolutionComments {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllLikedSolutionComments($likerId: Int!) {\n    AllLikedSolutionComments(likerId: $likerId) {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  query AllLikedSolutionComments($likerId: Int!) {\n    AllLikedSolutionComments(likerId: $likerId) {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription AnnouncementCreated {\n    AnnouncementCreated {\n      id\n      date\n      title\n      content\n    }\n  }\n"): (typeof documents)["\n  subscription AnnouncementCreated {\n    AnnouncementCreated {\n      id\n      date\n      title\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription AnnouncementDeleted {\n    AnnouncementDeleted {\n      id\n      title\n      date\n      content\n    }\n  }\n"): (typeof documents)["\n  subscription AnnouncementDeleted {\n    AnnouncementDeleted {\n      id\n      title\n      date\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription AnnouncementUpdated {\n    AnnouncementUpdated {\n      id\n      title\n      date\n      content\n    }\n  }\n"): (typeof documents)["\n  subscription AnnouncementUpdated {\n    AnnouncementUpdated {\n      id\n      title\n      date\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription UserCreated {\n    UserCreated {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"): (typeof documents)["\n  subscription UserCreated {\n    UserCreated {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription UserDeleted {\n    UserDeleted {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"): (typeof documents)["\n  subscription UserDeleted {\n    UserDeleted {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription UserUpdated {\n    UserUpdated {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"): (typeof documents)["\n  subscription UserUpdated {\n    UserUpdated {\n      id\n      name\n      studentID\n      password\n      photoLink\n      introduction\n      questionsId\n      questionCommentsId\n      solutionsId\n      articlesId\n      articleCommentsId\n      likedQuestionsId\n      likedQuestionCommentsId\n      likedSolutionsId\n      likedArticlesId\n      likedArticleCommentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription ArticleCreated {\n    ArticleCreated {\n      id\n      writerId\n      date\n      title\n      content\n      topic\n      tags\n      likesId\n    }\n  }\n"): (typeof documents)["\n  subscription ArticleCreated {\n    ArticleCreated {\n      id\n      writerId\n      date\n      title\n      content\n      topic\n      tags\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription ArticleDeleted {\n    ArticleDeleted {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  subscription ArticleDeleted {\n    ArticleDeleted {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription ArticleUpdated {\n    ArticleUpdated {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  subscription ArticleUpdated {\n    ArticleUpdated {\n      id\n      writerId\n      date\n      title\n      content\n      tags\n      topic\n      commentsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription ArticleLiked {\n    ArticleLiked {\n      id\n      likerId\n      articleId\n    }\n  }\n"): (typeof documents)["\n  subscription ArticleLiked {\n    ArticleLiked {\n      id\n      likerId\n      articleId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription ArticleUnliked {\n    ArticleUnliked {\n      id\n      likerId\n      articleId\n    }\n  }\n"): (typeof documents)["\n  subscription ArticleUnliked {\n    ArticleUnliked {\n      id\n      likerId\n      articleId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription ArticleCommentCreated {\n    ArticleCommentCreated {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  subscription ArticleCommentCreated {\n    ArticleCommentCreated {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription ArticleCommentDeleted {\n    ArticleCommentUpdated {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  subscription ArticleCommentDeleted {\n    ArticleCommentUpdated {\n      id\n      commenterId\n      content\n      date\n      rootArticleId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription ArticleCommentLiked {\n    ArticleCommentLiked {\n      id\n      likerId\n      articleCommentId\n    }\n  }\n"): (typeof documents)["\n  subscription ArticleCommentLiked {\n    ArticleCommentLiked {\n      id\n      likerId\n      articleCommentId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription ArticleCommentUnliked {\n    ArticleCommentUnliked {\n      id\n      likerId\n      articleCommentId\n    }\n  }\n"): (typeof documents)["\n  subscription ArticleCommentUnliked {\n    ArticleCommentUnliked {\n      id\n      likerId\n      articleCommentId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription QuestionCreated {\n    QuestionCreated {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  subscription QuestionCreated {\n    QuestionCreated {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription QuestionDeleted {\n    QuestionDeleted {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  subscription QuestionDeleted {\n    QuestionDeleted {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription QuestionUpdated {\n    QuestionUpdated {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"): (typeof documents)["\n  subscription QuestionUpdated {\n    QuestionUpdated {\n      id\n      askerId\n      title\n      date\n      content\n      topic\n      tags\n      commentsId\n      solutionsId\n      likesId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription QuestionLiked {\n    QuestionLiked {\n      id\n      likerId\n      questionId\n    }\n  }\n"): (typeof documents)["\n  subscription QuestionLiked {\n    QuestionLiked {\n      id\n      likerId\n      questionId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription QuestionUnliked {\n    QuestionUnliked {\n      id\n      likerId\n      questionId\n    }\n  }\n"): (typeof documents)["\n  subscription QuestionUnliked {\n    QuestionUnliked {\n      id\n      likerId\n      questionId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription QuestionCommentCreated {\n    QuestionCommentCreated {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  subscription QuestionCommentCreated {\n    QuestionCommentCreated {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription QuestionCommentDeleted {\n    QuestionCommentDeleted {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  subscription QuestionCommentDeleted {\n    QuestionCommentDeleted {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription QuestionCommentUpdated {\n    QuestionCommentUpdated {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  subscription QuestionCommentUpdated {\n    QuestionCommentUpdated {\n      id\n      commenterId\n      rootQuestionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription QuestionCommentLiked {\n    QuestionCommentLiked {\n      id\n      likerId\n      questionCommentId\n    }\n  }\n"): (typeof documents)["\n  subscription QuestionCommentLiked {\n    QuestionCommentLiked {\n      id\n      likerId\n      questionCommentId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription QuestionCommentUnliked {\n    QuestionCommentUnliked {\n      id\n      likerId\n      questionCommentId\n    }\n  }\n"): (typeof documents)["\n  subscription QuestionCommentUnliked {\n    QuestionCommentUnliked {\n      id\n      likerId\n      questionCommentId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription SolutionCreated {\n    SolutionCreated {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"): (typeof documents)["\n  subscription SolutionCreated {\n    SolutionCreated {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription SolutionDeleted {\n    SolutionDeleted {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"): (typeof documents)["\n  subscription SolutionDeleted {\n    SolutionDeleted {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription SolutionUpdated {\n    SolutionUpdated {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"): (typeof documents)["\n  subscription SolutionUpdated {\n    SolutionUpdated {\n      id\n      solverId\n      rootQuestionId\n      content\n      date\n      likesId\n      commentsId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription SolutionLiked {\n    SolutionLiked {\n      id\n      likerId\n      solutionId\n    }\n  }\n"): (typeof documents)["\n  subscription SolutionLiked {\n    SolutionLiked {\n      id\n      likerId\n      solutionId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription SolutionUnliked {\n    SolutionUnliked {\n      id\n      likerId\n      solutionId\n    }\n  }\n"): (typeof documents)["\n  subscription SolutionUnliked {\n    SolutionUnliked {\n      id\n      likerId\n      solutionId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription SolutionCommentCreated {\n    SolutionCommentCreated {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  subscription SolutionCommentCreated {\n    SolutionCommentCreated {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription SolutionCommentDeleted {\n    SolutionCommentDeleted {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"): (typeof documents)["\n  subscription SolutionCommentDeleted {\n    SolutionCommentDeleted {\n      id\n      commenterId\n      rootSolutionId\n      content\n      date\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;