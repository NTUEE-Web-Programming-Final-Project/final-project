/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Announcement = {
  __typename?: 'Announcement';
  content: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type AnnouncementInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Article = {
  __typename?: 'Article';
  commentsId: Array<Maybe<Scalars['Int']['output']>>;
  content: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  likesId: Array<Maybe<Scalars['Int']['output']>>;
  tags: Array<Maybe<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  topic: Scalars['String']['output'];
  writerId: Scalars['Int']['output'];
};

export type ArticleComment = {
  __typename?: 'ArticleComment';
  commenterId: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  likesId: Array<Maybe<Scalars['Int']['output']>>;
  rootArticleId: Scalars['Int']['output'];
};

export type ArticleCommentInput = {
  commenterId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  rootArticleId: Scalars['Int']['input'];
};

export type ArticleCommentLikeInput = {
  articleCommentId: Scalars['Int']['input'];
  likerId: Scalars['Int']['input'];
};

export type ArticleInput = {
  content: Scalars['String']['input'];
  tags: Array<InputMaybe<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  topic: Scalars['String']['input'];
  writerId: Scalars['Int']['input'];
};

export type ArticleLikeInput = {
  articleId: Scalars['Int']['input'];
  likerId: Scalars['Int']['input'];
};

export type LikedArticle = {
  __typename?: 'LikedArticle';
  articleId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  likerId: Scalars['Int']['output'];
};

export type LikedArticleComment = {
  __typename?: 'LikedArticleComment';
  articleCommentId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  likerId: Scalars['Int']['output'];
};

export type LikedQuestion = {
  __typename?: 'LikedQuestion';
  id: Scalars['Int']['output'];
  likerId: Scalars['Int']['output'];
  questionId: Scalars['Int']['output'];
};

export type LikedQuestionComment = {
  __typename?: 'LikedQuestionComment';
  id: Scalars['Int']['output'];
  likerId: Scalars['Int']['output'];
  questionCommentId: Scalars['Int']['output'];
};

export type LikedSolution = {
  __typename?: 'LikedSolution';
  id: Scalars['Int']['output'];
  likerId: Scalars['Int']['output'];
  solutionId: Scalars['Int']['output'];
};

export type LikedSolutionComment = {
  __typename?: 'LikedSolutionComment';
  id: Scalars['Int']['output'];
  likerId: Scalars['Int']['output'];
  solutionCommentId: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateAnnouncement?: Maybe<Announcement>;
  CreateArticle?: Maybe<Article>;
  CreateArticleComment?: Maybe<ArticleComment>;
  CreateQuestion?: Maybe<Question>;
  CreateQuestionComment?: Maybe<QuestionComment>;
  CreateSolution?: Maybe<Solution>;
  CreateSolutionComment?: Maybe<SolutionComment>;
  CreateUser?: Maybe<User>;
  DeleteAnnouncement?: Maybe<Announcement>;
  DeleteArticle?: Maybe<Article>;
  DeleteArticleComment?: Maybe<ArticleComment>;
  DeleteQuestion?: Maybe<Question>;
  DeleteQuestionComment?: Maybe<QuestionComment>;
  DeleteSolution?: Maybe<Solution>;
  DeleteSolutionComment?: Maybe<SolutionComment>;
  DeleteUser?: Maybe<User>;
  LikeArticle?: Maybe<LikedArticle>;
  LikeArticleComment?: Maybe<LikedArticleComment>;
  LikeQuestion?: Maybe<LikedQuestion>;
  LikeQuestionComment?: Maybe<LikedQuestionComment>;
  LikeSolution?: Maybe<LikedSolution>;
  LikeSolutionComment?: Maybe<LikedSolutionComment>;
  UnlikeArticle?: Maybe<LikedArticle>;
  UnlikeArticleComment?: Maybe<LikedArticleComment>;
  UnlikeQuestion?: Maybe<LikedQuestion>;
  UnlikeQuestionComment?: Maybe<LikedQuestionComment>;
  UnlikeSolution?: Maybe<LikedSolution>;
  UnlikeSolutionComment?: Maybe<LikedSolutionComment>;
  UpdateAnnouncement?: Maybe<Announcement>;
  UpdateArticle?: Maybe<Article>;
  UpdateArticleComment?: Maybe<ArticleComment>;
  UpdateQuestion?: Maybe<Question>;
  UpdateQuestionComment?: Maybe<QuestionComment>;
  UpdateSolution?: Maybe<Solution>;
  UpdateSolutionComment?: Maybe<SolutionComment>;
  UpdateUser?: Maybe<User>;
  UpdateUserPassword?: Maybe<User>;
  UpdateUserProfile?: Maybe<User>;
};


export type MutationCreateAnnouncementArgs = {
  announcementInput: AnnouncementInput;
};


export type MutationCreateArticleArgs = {
  articleInput: ArticleInput;
};


export type MutationCreateArticleCommentArgs = {
  articleCommentInput: ArticleCommentInput;
};


export type MutationCreateQuestionArgs = {
  questionInput: QuestionInput;
};


export type MutationCreateQuestionCommentArgs = {
  questionCommentInput: QuestionCommentInput;
};


export type MutationCreateSolutionArgs = {
  solutionInput: SolutionInput;
};


export type MutationCreateSolutionCommentArgs = {
  solutionCommentInput: SolutionCommentInput;
};


export type MutationCreateUserArgs = {
  userInput: UserInput;
};


export type MutationDeleteAnnouncementArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteArticleCommentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteQuestionCommentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteSolutionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteSolutionCommentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLikeArticleArgs = {
  articleLikeInput: ArticleLikeInput;
};


export type MutationLikeArticleCommentArgs = {
  articleCommentLikeInput: ArticleCommentLikeInput;
};


export type MutationLikeQuestionArgs = {
  questionLikeInput: QuestionLikeInput;
};


export type MutationLikeQuestionCommentArgs = {
  questionCommentLikeInput: QuestionCommentLikeInput;
};


export type MutationLikeSolutionArgs = {
  solutionLikeInput: SolutionLikeInput;
};


export type MutationLikeSolutionCommentArgs = {
  solutionCommentLikeInput: SolutionCommentLikeInput;
};


export type MutationUnlikeArticleArgs = {
  articleUnlikeInput: ArticleLikeInput;
};


export type MutationUnlikeArticleCommentArgs = {
  articleCommentUnlikeInput: ArticleCommentLikeInput;
};


export type MutationUnlikeQuestionArgs = {
  questionUnlikeInput: QuestionLikeInput;
};


export type MutationUnlikeQuestionCommentArgs = {
  questionCommentUnlikeInput: QuestionCommentLikeInput;
};


export type MutationUnlikeSolutionArgs = {
  solutionUnlikeInput: SolutionLikeInput;
};


export type MutationUnlikeSolutionCommentArgs = {
  solutionCommentUnlikeInput: SolutionCommentLikeInput;
};


export type MutationUpdateAnnouncementArgs = {
  announcementInput: AnnouncementInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateArticleArgs = {
  articleInput: ArticleInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateArticleCommentArgs = {
  articleCommentInput: ArticleCommentInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateQuestionArgs = {
  id: Scalars['Int']['input'];
  questionInput: QuestionInput;
};


export type MutationUpdateQuestionCommentArgs = {
  id: Scalars['Int']['input'];
  questionCommentInput: QuestionCommentInput;
};


export type MutationUpdateSolutionArgs = {
  id: Scalars['Int']['input'];
  solutionInput: SolutionInput;
};


export type MutationUpdateSolutionCommentArgs = {
  id: Scalars['Int']['input'];
  solutionCommentInput: SolutionCommentInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int']['input'];
  userInput: UserInput;
};


export type MutationUpdateUserPasswordArgs = {
  id: Scalars['Int']['input'];
  userPasswordInput: UserPasswordInput;
};


export type MutationUpdateUserProfileArgs = {
  id: Scalars['Int']['input'];
  userProfileInput: UserProfileInput;
};

export type Query = {
  __typename?: 'Query';
  AllAnnouncements?: Maybe<Array<Maybe<Announcement>>>;
  AllArticleComments?: Maybe<Array<Maybe<ArticleComment>>>;
  AllArticles?: Maybe<Array<Maybe<Article>>>;
  AllLikedArticleComments?: Maybe<Array<Maybe<ArticleComment>>>;
  AllLikedArticles?: Maybe<Array<Maybe<Article>>>;
  AllLikedQuestionComments?: Maybe<Array<Maybe<QuestionComment>>>;
  AllLikedQuestions?: Maybe<Array<Maybe<Question>>>;
  AllLikedSolutionComments?: Maybe<Array<Maybe<SolutionComment>>>;
  AllLikedSolutions?: Maybe<Array<Maybe<Solution>>>;
  AllQuestionComments?: Maybe<Array<Maybe<QuestionComment>>>;
  AllQuestions?: Maybe<Array<Maybe<Question>>>;
  AllSolutionComments?: Maybe<Array<Maybe<SolutionComment>>>;
  AllSolutions?: Maybe<Array<Maybe<Solution>>>;
  AllUsers?: Maybe<Array<Maybe<User>>>;
  HomepageAnnouncements?: Maybe<Array<Maybe<Announcement>>>;
  HomepageArticles?: Maybe<Array<Maybe<Article>>>;
  HomepageQuestions?: Maybe<Array<Maybe<Question>>>;
  SortArticlesByLike?: Maybe<Array<Maybe<Article>>>;
  SortArticlesByTime?: Maybe<Array<Maybe<Article>>>;
  SortQuestionsByLike?: Maybe<Array<Maybe<Question>>>;
  SortQuestionsByTime?: Maybe<Array<Maybe<Question>>>;
};


export type QueryAllLikedArticleCommentsArgs = {
  likerId: Scalars['Int']['input'];
};


export type QueryAllLikedArticlesArgs = {
  likerId: Scalars['Int']['input'];
};


export type QueryAllLikedQuestionCommentsArgs = {
  likerId: Scalars['Int']['input'];
};


export type QueryAllLikedQuestionsArgs = {
  likerId: Scalars['Int']['input'];
};


export type QueryAllLikedSolutionCommentsArgs = {
  likerId: Scalars['Int']['input'];
};


export type QueryAllLikedSolutionsArgs = {
  likerId: Scalars['Int']['input'];
};

export type Question = {
  __typename?: 'Question';
  askerId: Scalars['Int']['output'];
  commentsId: Array<Maybe<Scalars['Int']['output']>>;
  content: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  likesId: Array<Maybe<Scalars['Int']['output']>>;
  solutionsId: Array<Maybe<Scalars['Int']['output']>>;
  tags: Array<Maybe<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  topic: Scalars['String']['output'];
};

export type QuestionComment = {
  __typename?: 'QuestionComment';
  commenterId: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  rootQuestionId: Scalars['Int']['output'];
};

export type QuestionCommentInput = {
  commenterId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  rootQuestionId: Scalars['Int']['input'];
};

export type QuestionCommentLikeInput = {
  likerId: Scalars['Int']['input'];
  questionCommentId: Scalars['Int']['input'];
};

export type QuestionInput = {
  askerId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  tags: Array<InputMaybe<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  topic: Scalars['String']['input'];
};

export type QuestionLikeInput = {
  likerId: Scalars['Int']['input'];
  questionId: Scalars['Int']['input'];
};

export type Solution = {
  __typename?: 'Solution';
  commentsId: Array<Maybe<Scalars['Int']['output']>>;
  content: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  likesId: Array<Maybe<Scalars['Int']['output']>>;
  rootQuestionId: Scalars['Int']['output'];
  solverId: Scalars['Int']['output'];
};

export type SolutionComment = {
  __typename?: 'SolutionComment';
  commenterId: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  rootSolutionId: Scalars['Int']['output'];
};

export type SolutionCommentInput = {
  commenterId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  rootSolutionId: Scalars['Int']['input'];
};

export type SolutionCommentLikeInput = {
  likerId: Scalars['Int']['input'];
  solutionCommentId: Scalars['Int']['input'];
};

export type SolutionInput = {
  content: Scalars['String']['input'];
  rootQuestionId: Scalars['Int']['input'];
  solverId: Scalars['Int']['input'];
};

export type SolutionLikeInput = {
  likerId: Scalars['Int']['input'];
  solutionId: Scalars['Int']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  AnnouncementCreated?: Maybe<Announcement>;
  AnnouncementDeleted?: Maybe<Announcement>;
  AnnouncementUpdated?: Maybe<Announcement>;
  ArticleCommentCreated?: Maybe<ArticleComment>;
  ArticleCommentDeleted?: Maybe<ArticleComment>;
  ArticleCommentLiked?: Maybe<LikedArticleComment>;
  ArticleCommentUnliked?: Maybe<LikedArticleComment>;
  ArticleCommentUpdated?: Maybe<ArticleComment>;
  ArticleCreated?: Maybe<Article>;
  ArticleDeleted?: Maybe<Article>;
  ArticleLiked?: Maybe<LikedArticle>;
  ArticleUnliked?: Maybe<LikedArticle>;
  ArticleUpdated?: Maybe<Article>;
  QuestionCommentCreated?: Maybe<QuestionComment>;
  QuestionCommentDeleted?: Maybe<QuestionComment>;
  QuestionCommentLiked?: Maybe<LikedQuestionComment>;
  QuestionCommentUnliked?: Maybe<LikedQuestionComment>;
  QuestionCommentUpdated?: Maybe<QuestionComment>;
  QuestionCreated?: Maybe<Question>;
  QuestionDeleted?: Maybe<Question>;
  QuestionLiked?: Maybe<LikedQuestion>;
  QuestionUnliked?: Maybe<LikedQuestion>;
  QuestionUpdated?: Maybe<Question>;
  SolutionCommentCreated?: Maybe<SolutionComment>;
  SolutionCommentDeleted?: Maybe<SolutionComment>;
  SolutionCommentLiked?: Maybe<LikedSolutionComment>;
  SolutionCommentUnliked?: Maybe<LikedSolutionComment>;
  SolutionCommentUpdated?: Maybe<SolutionComment>;
  SolutionCreated?: Maybe<Solution>;
  SolutionDeleted?: Maybe<Solution>;
  SolutionLiked?: Maybe<LikedSolution>;
  SolutionUnliked?: Maybe<LikedSolution>;
  SolutionUpdated?: Maybe<Solution>;
  UserCreated?: Maybe<User>;
  UserDeleted?: Maybe<User>;
  UserUpdated?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  articleCommentsId: Array<Maybe<Scalars['Int']['output']>>;
  articlesId: Array<Maybe<Scalars['Int']['output']>>;
  id: Scalars['Int']['output'];
  introduction?: Maybe<Scalars['String']['output']>;
  likedArticleCommentsId: Array<Maybe<Scalars['Int']['output']>>;
  likedArticlesId: Array<Maybe<Scalars['Int']['output']>>;
  likedQuestionCommentsId: Array<Maybe<Scalars['Int']['output']>>;
  likedQuestionsId: Array<Maybe<Scalars['Int']['output']>>;
  likedSolutionCommentsId: Array<Maybe<Scalars['Int']['output']>>;
  likedSolutionsId: Array<Maybe<Scalars['Int']['output']>>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  photoLink: Scalars['String']['output'];
  questionCommentsId: Array<Maybe<Scalars['Int']['output']>>;
  questionsId: Array<Maybe<Scalars['Int']['output']>>;
  solutionCommentsId: Array<Maybe<Scalars['Int']['output']>>;
  solutionsId: Array<Maybe<Scalars['Int']['output']>>;
  studentID: Scalars['String']['output'];
};

export type UserInput = {
  introduction?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  photoLink: Scalars['String']['input'];
  studentID: Scalars['String']['input'];
};

export type UserPasswordInput = {
  password: Scalars['String']['input'];
};

export type UserProfileInput = {
  introduction?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  photoLink: Scalars['String']['input'];
  studentID: Scalars['String']['input'];
};

export type CreateAnnouncementMutationVariables = Exact<{
  announcementInput: AnnouncementInput;
}>;


export type CreateAnnouncementMutation = { __typename?: 'Mutation', CreateAnnouncement?: { __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null };

export type DeleteAnnouncementMutationVariables = Exact<{
  deleteAnnouncementId: Scalars['Int']['input'];
}>;


export type DeleteAnnouncementMutation = { __typename?: 'Mutation', DeleteAnnouncement?: { __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null };

export type UpdateAnnouncementMutationVariables = Exact<{
  updateAnnouncementId: Scalars['Int']['input'];
  announcementInput: AnnouncementInput;
}>;


export type UpdateAnnouncementMutation = { __typename?: 'Mutation', UpdateAnnouncement?: { __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null };

export type CreateUserMutationVariables = Exact<{
  userInput: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', CreateUser?: { __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink: string, introduction?: string | null, questionsId: Array<number | null>, questionCommentsId: Array<number | null>, solutionsId: Array<number | null>, articlesId: Array<number | null>, articleCommentsId: Array<number | null>, likedQuestionsId: Array<number | null>, likedQuestionCommentsId: Array<number | null>, likedSolutionsId: Array<number | null>, likedArticlesId: Array<number | null>, likedArticleCommentsId: Array<number | null> } | null };

export type DeleteUserMutationVariables = Exact<{
  deleteUserId: Scalars['Int']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', DeleteUser?: { __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink: string, introduction?: string | null, questionsId: Array<number | null>, questionCommentsId: Array<number | null>, solutionsId: Array<number | null>, articlesId: Array<number | null>, articleCommentsId: Array<number | null>, likedQuestionsId: Array<number | null>, likedQuestionCommentsId: Array<number | null>, likedSolutionsId: Array<number | null>, likedArticlesId: Array<number | null>, likedArticleCommentsId: Array<number | null> } | null };

export type UpdateUserMutationVariables = Exact<{
  updateUserId: Scalars['Int']['input'];
  userInput: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', UpdateUser?: { __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink: string, introduction?: string | null, questionsId: Array<number | null>, questionCommentsId: Array<number | null>, solutionsId: Array<number | null>, articlesId: Array<number | null>, articleCommentsId: Array<number | null>, likedQuestionsId: Array<number | null>, likedQuestionCommentsId: Array<number | null>, likedSolutionsId: Array<number | null>, likedArticlesId: Array<number | null>, likedArticleCommentsId: Array<number | null> } | null };

export type UpdateUserPasswordMutationVariables = Exact<{
  updateUserPasswordId: Scalars['Int']['input'];
  userPasswordInput: UserPasswordInput;
}>;


export type UpdateUserPasswordMutation = { __typename?: 'Mutation', UpdateUserPassword?: { __typename?: 'User', id: number, name: string, studentID: string, password: string } | null };

export type UpdateUserProfileMutationVariables = Exact<{
  updateUserProfileId: Scalars['Int']['input'];
  userProfileInput: UserProfileInput;
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', UpdateUserProfile?: { __typename?: 'User', id: number, name: string, introduction?: string | null, studentID: string, photoLink: string } | null };

export type CreateArticleMutationVariables = Exact<{
  articleInput: ArticleInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', CreateArticle?: { __typename?: 'Article', id: number, writerId: number, date: string, title: string, content: string, topic: string, tags: Array<string | null>, likesId: Array<number | null> } | null };

export type DeleteArticleMutationVariables = Exact<{
  deleteArticleId: Scalars['Int']['input'];
}>;


export type DeleteArticleMutation = { __typename?: 'Mutation', DeleteArticle?: { __typename?: 'Article', id: number, writerId: number, date: string, title: string, content: string, tags: Array<string | null>, topic: string, commentsId: Array<number | null>, likesId: Array<number | null> } | null };

export type UpdateArticleMutationVariables = Exact<{
  updateArticleId: Scalars['Int']['input'];
  articleInput: ArticleInput;
}>;


export type UpdateArticleMutation = { __typename?: 'Mutation', UpdateArticle?: { __typename?: 'Article', id: number, writerId: number, date: string, title: string, content: string, tags: Array<string | null>, topic: string, commentsId: Array<number | null>, likesId: Array<number | null> } | null };

export type LikeArticleMutationVariables = Exact<{
  articleLikeInput: ArticleLikeInput;
}>;


export type LikeArticleMutation = { __typename?: 'Mutation', LikeArticle?: { __typename?: 'LikedArticle', id: number, likerId: number, articleId: number } | null };

export type UnlikeArticleMutationVariables = Exact<{
  articleUnlikeInput: ArticleLikeInput;
}>;


export type UnlikeArticleMutation = { __typename?: 'Mutation', UnlikeArticle?: { __typename?: 'LikedArticle', id: number, likerId: number, articleId: number } | null };

export type CreateArticleCommentMutationVariables = Exact<{
  articleCommentInput: ArticleCommentInput;
}>;


export type CreateArticleCommentMutation = { __typename?: 'Mutation', CreateArticleComment?: { __typename?: 'ArticleComment', id: number, commenterId: number, content: string, date: string, rootArticleId: number, likesId: Array<number | null> } | null };

export type DeleteArticleCommentMutationVariables = Exact<{
  deleteArticleCommentId: Scalars['Int']['input'];
}>;


export type DeleteArticleCommentMutation = { __typename?: 'Mutation', DeleteArticleComment?: { __typename?: 'ArticleComment', id: number, commenterId: number, content: string, date: string, rootArticleId: number, likesId: Array<number | null> } | null };

export type UpdateArticleCommentMutationVariables = Exact<{
  updateArticleCommentId: Scalars['Int']['input'];
  articleCommentInput: ArticleCommentInput;
}>;


export type UpdateArticleCommentMutation = { __typename?: 'Mutation', UpdateArticleComment?: { __typename?: 'ArticleComment', id: number, commenterId: number, content: string, date: string, rootArticleId: number, likesId: Array<number | null> } | null };

export type LikeArticleCommentMutationVariables = Exact<{
  articleCommentLikeInput: ArticleCommentLikeInput;
}>;


export type LikeArticleCommentMutation = { __typename?: 'Mutation', LikeArticleComment?: { __typename?: 'LikedArticleComment', id: number, likerId: number, articleCommentId: number } | null };

export type UnlikeArticleCommentMutationVariables = Exact<{
  articleCommentUnlikeInput: ArticleCommentLikeInput;
}>;


export type UnlikeArticleCommentMutation = { __typename?: 'Mutation', UnlikeArticleComment?: { __typename?: 'LikedArticleComment', id: number, likerId: number, articleCommentId: number } | null };

export type CreateQuestionMutationVariables = Exact<{
  questionInput: QuestionInput;
}>;


export type CreateQuestionMutation = { __typename?: 'Mutation', CreateQuestion?: { __typename?: 'Question', id: number, askerId: number, title: string, date: string, content: string, topic: string, tags: Array<string | null>, commentsId: Array<number | null>, solutionsId: Array<number | null>, likesId: Array<number | null> } | null };

export type DeleteQuestionMutationVariables = Exact<{
  deleteQuestionId: Scalars['Int']['input'];
}>;


export type DeleteQuestionMutation = { __typename?: 'Mutation', DeleteQuestion?: { __typename?: 'Question', id: number, askerId: number, title: string, date: string, content: string, topic: string, tags: Array<string | null>, commentsId: Array<number | null>, solutionsId: Array<number | null>, likesId: Array<number | null> } | null };

export type UpdateQuestionMutationVariables = Exact<{
  updateQuestionId: Scalars['Int']['input'];
  questionInput: QuestionInput;
}>;


export type UpdateQuestionMutation = { __typename?: 'Mutation', UpdateQuestion?: { __typename?: 'Question', id: number, askerId: number, title: string, date: string, content: string, topic: string, tags: Array<string | null>, commentsId: Array<number | null>, solutionsId: Array<number | null>, likesId: Array<number | null> } | null };

export type LikeQuestionMutationVariables = Exact<{
  questionLikeInput: QuestionLikeInput;
}>;


export type LikeQuestionMutation = { __typename?: 'Mutation', LikeQuestion?: { __typename?: 'LikedQuestion', id: number, likerId: number, questionId: number } | null };

export type UnlikeQuestionMutationVariables = Exact<{
  questionUnlikeInput: QuestionLikeInput;
}>;


export type UnlikeQuestionMutation = { __typename?: 'Mutation', UnlikeQuestion?: { __typename?: 'LikedQuestion', id: number, likerId: number, questionId: number } | null };

export type CreateQuestionCommentMutationVariables = Exact<{
  questionCommentInput: QuestionCommentInput;
}>;


export type CreateQuestionCommentMutation = { __typename?: 'Mutation', CreateQuestionComment?: { __typename?: 'QuestionComment', id: number, commenterId: number, rootQuestionId: number, content: string, date: string } | null };

export type DeleteQuestionCommentMutationVariables = Exact<{
  deleteQuestionCommentId: Scalars['Int']['input'];
}>;


export type DeleteQuestionCommentMutation = { __typename?: 'Mutation', DeleteQuestionComment?: { __typename?: 'QuestionComment', id: number, commenterId: number, rootQuestionId: number, content: string, date: string } | null };

export type UpdateQuestionCommentMutationVariables = Exact<{
  updateQuestionCommentId: Scalars['Int']['input'];
  questionCommentInput: QuestionCommentInput;
}>;


export type UpdateQuestionCommentMutation = { __typename?: 'Mutation', UpdateQuestionComment?: { __typename?: 'QuestionComment', id: number, commenterId: number, rootQuestionId: number, content: string, date: string } | null };

export type LikeQuestionCommentMutationVariables = Exact<{
  questionCommentLikeInput: QuestionCommentLikeInput;
}>;


export type LikeQuestionCommentMutation = { __typename?: 'Mutation', LikeQuestionComment?: { __typename?: 'LikedQuestionComment', id: number, likerId: number, questionCommentId: number } | null };

export type UnlikeQuestionCommentMutationVariables = Exact<{
  questionCommentUnlikeInput: QuestionCommentLikeInput;
}>;


export type UnlikeQuestionCommentMutation = { __typename?: 'Mutation', UnlikeQuestionComment?: { __typename?: 'LikedQuestionComment', id: number, likerId: number, questionCommentId: number } | null };

export type CreateSolutionMutationVariables = Exact<{
  solutionInput: SolutionInput;
}>;


export type CreateSolutionMutation = { __typename?: 'Mutation', CreateSolution?: { __typename?: 'Solution', id: number, solverId: number, rootQuestionId: number, content: string, date: string, likesId: Array<number | null>, commentsId: Array<number | null> } | null };

export type DeleteSolutionMutationVariables = Exact<{
  deleteSolutionId: Scalars['Int']['input'];
}>;


export type DeleteSolutionMutation = { __typename?: 'Mutation', DeleteSolution?: { __typename?: 'Solution', id: number, solverId: number, rootQuestionId: number, content: string, date: string, likesId: Array<number | null>, commentsId: Array<number | null> } | null };

export type UpdateSolutionMutationVariables = Exact<{
  updateSolutionId: Scalars['Int']['input'];
  solutionInput: SolutionInput;
}>;


export type UpdateSolutionMutation = { __typename?: 'Mutation', UpdateSolution?: { __typename?: 'Solution', id: number, solverId: number, rootQuestionId: number, content: string, date: string, likesId: Array<number | null>, commentsId: Array<number | null> } | null };

export type LikeSolutionMutationVariables = Exact<{
  solutionLikeInput: SolutionLikeInput;
}>;


export type LikeSolutionMutation = { __typename?: 'Mutation', LikeSolution?: { __typename?: 'LikedSolution', id: number, likerId: number, solutionId: number } | null };

export type UnlikeSolutionMutationVariables = Exact<{
  solutionUnlikeInput: SolutionLikeInput;
}>;


export type UnlikeSolutionMutation = { __typename?: 'Mutation', UnlikeSolution?: { __typename?: 'LikedSolution', id: number, likerId: number, solutionId: number } | null };

export type CreateSolutionCommentMutationVariables = Exact<{
  solutionCommentInput: SolutionCommentInput;
}>;


export type CreateSolutionCommentMutation = { __typename?: 'Mutation', CreateSolutionComment?: { __typename?: 'SolutionComment', id: number, commenterId: number, rootSolutionId: number, content: string, date: string } | null };

export type DeleteSolutionCommentMutationVariables = Exact<{
  deleteSolutionCommentId: Scalars['Int']['input'];
}>;


export type DeleteSolutionCommentMutation = { __typename?: 'Mutation', DeleteSolutionComment?: { __typename?: 'SolutionComment', id: number, commenterId: number, rootSolutionId: number, content: string, date: string } | null };

export type UpdateSolutionCommentMutationVariables = Exact<{
  updateSolutionCommentId: Scalars['Int']['input'];
  solutionCommentInput: SolutionCommentInput;
}>;


export type UpdateSolutionCommentMutation = { __typename?: 'Mutation', UpdateSolutionComment?: { __typename?: 'SolutionComment', id: number, commenterId: number, rootSolutionId: number, content: string, date: string } | null };

export type LikeSolutionCommentMutationVariables = Exact<{
  solutionCommentLikeInput: SolutionCommentLikeInput;
}>;


export type LikeSolutionCommentMutation = { __typename?: 'Mutation', LikeSolutionComment?: { __typename?: 'LikedSolutionComment', id: number, likerId: number, solutionCommentId: number } | null };

export type UnlikeSolutionCommentMutationVariables = Exact<{
  solutionCommentUnlikeInput: SolutionCommentLikeInput;
}>;


export type UnlikeSolutionCommentMutation = { __typename?: 'Mutation', UnlikeSolutionComment?: { __typename?: 'LikedSolutionComment', id: number, likerId: number, solutionCommentId: number } | null };

export type AllAnnouncementsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAnnouncementsQuery = { __typename?: 'Query', AllAnnouncements?: Array<{ __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null> | null };

export type HomepageAnnouncementsQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageAnnouncementsQuery = { __typename?: 'Query', HomepageAnnouncements?: Array<{ __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null> | null };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', AllUsers?: Array<{ __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink: string, introduction?: string | null, questionsId: Array<number | null>, questionCommentsId: Array<number | null>, solutionsId: Array<number | null>, articlesId: Array<number | null>, articleCommentsId: Array<number | null>, likedQuestionsId: Array<number | null>, likedQuestionCommentsId: Array<number | null>, likedSolutionsId: Array<number | null>, likedArticlesId: Array<number | null>, likedArticleCommentsId: Array<number | null> } | null> | null };

export type AllArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllArticlesQuery = { __typename?: 'Query', AllArticles?: Array<{ __typename?: 'Article', id: number, writerId: number, date: string, title: string, content: string, tags: Array<string | null>, topic: string, commentsId: Array<number | null>, likesId: Array<number | null> } | null> | null };

export type HomepageArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageArticlesQuery = { __typename?: 'Query', HomepageArticles?: Array<{ __typename?: 'Article', id: number, writerId: number, date: string, title: string, content: string, tags: Array<string | null>, topic: string, commentsId: Array<number | null>, likesId: Array<number | null> } | null> | null };

export type SortArticlesByTimeQueryVariables = Exact<{ [key: string]: never; }>;


export type SortArticlesByTimeQuery = { __typename?: 'Query', SortArticlesByTime?: Array<{ __typename?: 'Article', id: number, writerId: number, date: string, title: string, content: string, tags: Array<string | null>, topic: string, commentsId: Array<number | null>, likesId: Array<number | null> } | null> | null };

export type SortArticlesByLikeQueryVariables = Exact<{ [key: string]: never; }>;


export type SortArticlesByLikeQuery = { __typename?: 'Query', SortArticlesByLike?: Array<{ __typename?: 'Article', id: number, writerId: number, date: string, title: string, content: string, tags: Array<string | null>, topic: string, commentsId: Array<number | null>, likesId: Array<number | null> } | null> | null };

export type AllLikedArticlesQueryVariables = Exact<{
  likerId: Scalars['Int']['input'];
}>;


export type AllLikedArticlesQuery = { __typename?: 'Query', AllLikedArticles?: Array<{ __typename?: 'Article', id: number, writerId: number, date: string, title: string, content: string, tags: Array<string | null>, topic: string, commentsId: Array<number | null>, likesId: Array<number | null> } | null> | null };

export type AllArticleCommentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllArticleCommentsQuery = { __typename?: 'Query', AllArticleComments?: Array<{ __typename?: 'ArticleComment', id: number, commenterId: number, content: string, date: string, rootArticleId: number, likesId: Array<number | null> } | null> | null };

export type AllLikedArticleCommentsQueryVariables = Exact<{
  likerId: Scalars['Int']['input'];
}>;


export type AllLikedArticleCommentsQuery = { __typename?: 'Query', AllLikedArticleComments?: Array<{ __typename?: 'ArticleComment', id: number, commenterId: number, content: string, date: string, rootArticleId: number, likesId: Array<number | null> } | null> | null };

export type AllQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllQuestionsQuery = { __typename?: 'Query', AllQuestions?: Array<{ __typename?: 'Question', id: number, askerId: number, title: string, date: string, content: string, topic: string, tags: Array<string | null>, commentsId: Array<number | null>, solutionsId: Array<number | null>, likesId: Array<number | null> } | null> | null };

export type HomepageQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQuestionsQuery = { __typename?: 'Query', HomepageQuestions?: Array<{ __typename?: 'Question', id: number, askerId: number, title: string, date: string, content: string, topic: string, tags: Array<string | null>, commentsId: Array<number | null>, solutionsId: Array<number | null>, likesId: Array<number | null> } | null> | null };

export type SortQuestionsByTimeQueryVariables = Exact<{ [key: string]: never; }>;


export type SortQuestionsByTimeQuery = { __typename?: 'Query', SortQuestionsByTime?: Array<{ __typename?: 'Question', id: number, askerId: number, title: string, date: string, content: string, topic: string, tags: Array<string | null>, commentsId: Array<number | null>, solutionsId: Array<number | null>, likesId: Array<number | null> } | null> | null };

export type SortQuestionsByLikeQueryVariables = Exact<{ [key: string]: never; }>;


export type SortQuestionsByLikeQuery = { __typename?: 'Query', SortQuestionsByLike?: Array<{ __typename?: 'Question', id: number, askerId: number, title: string, date: string, content: string, topic: string, tags: Array<string | null>, commentsId: Array<number | null>, solutionsId: Array<number | null>, likesId: Array<number | null> } | null> | null };

export type AllLikedQuestionsQueryVariables = Exact<{
  likerId: Scalars['Int']['input'];
}>;


export type AllLikedQuestionsQuery = { __typename?: 'Query', AllLikedQuestions?: Array<{ __typename?: 'Question', id: number, askerId: number, title: string, date: string, content: string, topic: string, tags: Array<string | null>, commentsId: Array<number | null>, solutionsId: Array<number | null>, likesId: Array<number | null> } | null> | null };

export type AllQuestionCommentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllQuestionCommentsQuery = { __typename?: 'Query', AllQuestionComments?: Array<{ __typename?: 'QuestionComment', id: number, commenterId: number, rootQuestionId: number, content: string, date: string } | null> | null };

export type AllLikedQuestionCommentsQueryVariables = Exact<{
  likerId: Scalars['Int']['input'];
}>;


export type AllLikedQuestionCommentsQuery = { __typename?: 'Query', AllLikedQuestionComments?: Array<{ __typename?: 'QuestionComment', id: number, commenterId: number, rootQuestionId: number, content: string, date: string } | null> | null };

export type AllSolutionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSolutionsQuery = { __typename?: 'Query', AllSolutions?: Array<{ __typename?: 'Solution', id: number, solverId: number, rootQuestionId: number, content: string, date: string, likesId: Array<number | null>, commentsId: Array<number | null> } | null> | null };

export type AllLikedSolutionsQueryVariables = Exact<{
  likerId: Scalars['Int']['input'];
}>;


export type AllLikedSolutionsQuery = { __typename?: 'Query', AllLikedSolutions?: Array<{ __typename?: 'Solution', id: number, solverId: number, rootQuestionId: number, content: string, date: string, likesId: Array<number | null>, commentsId: Array<number | null> } | null> | null };

export type AllSolutionCommentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSolutionCommentsQuery = { __typename?: 'Query', AllSolutionComments?: Array<{ __typename?: 'SolutionComment', id: number, commenterId: number, rootSolutionId: number, content: string, date: string } | null> | null };

export type AllLikedSolutionCommentsQueryVariables = Exact<{
  likerId: Scalars['Int']['input'];
}>;


export type AllLikedSolutionCommentsQuery = { __typename?: 'Query', AllLikedSolutionComments?: Array<{ __typename?: 'SolutionComment', id: number, commenterId: number, rootSolutionId: number, content: string, date: string } | null> | null };

export type AnnouncementCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AnnouncementCreatedSubscription = { __typename?: 'Subscription', AnnouncementCreated?: { __typename?: 'Announcement', id: number, date: string, title: string, content: string } | null };

export type AnnouncementDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AnnouncementDeletedSubscription = { __typename?: 'Subscription', AnnouncementDeleted?: { __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null };

export type AnnouncementUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AnnouncementUpdatedSubscription = { __typename?: 'Subscription', AnnouncementUpdated?: { __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null };

export type UserCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserCreatedSubscription = { __typename?: 'Subscription', UserCreated?: { __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink: string, introduction?: string | null, questionsId: Array<number | null>, questionCommentsId: Array<number | null>, solutionsId: Array<number | null>, articlesId: Array<number | null>, articleCommentsId: Array<number | null>, likedQuestionsId: Array<number | null>, likedQuestionCommentsId: Array<number | null>, likedSolutionsId: Array<number | null>, likedArticlesId: Array<number | null>, likedArticleCommentsId: Array<number | null> } | null };

export type UserDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserDeletedSubscription = { __typename?: 'Subscription', UserDeleted?: { __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink: string, introduction?: string | null, questionsId: Array<number | null>, questionCommentsId: Array<number | null>, solutionsId: Array<number | null>, articlesId: Array<number | null>, articleCommentsId: Array<number | null>, likedQuestionsId: Array<number | null>, likedQuestionCommentsId: Array<number | null>, likedSolutionsId: Array<number | null>, likedArticlesId: Array<number | null>, likedArticleCommentsId: Array<number | null> } | null };

export type UserUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserUpdatedSubscription = { __typename?: 'Subscription', UserUpdated?: { __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink: string, introduction?: string | null, questionsId: Array<number | null>, questionCommentsId: Array<number | null>, solutionsId: Array<number | null>, articlesId: Array<number | null>, articleCommentsId: Array<number | null>, likedQuestionsId: Array<number | null>, likedQuestionCommentsId: Array<number | null>, likedSolutionsId: Array<number | null>, likedArticlesId: Array<number | null>, likedArticleCommentsId: Array<number | null> } | null };

export type ArticleCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ArticleCreatedSubscription = { __typename?: 'Subscription', ArticleCreated?: { __typename?: 'Article', id: number, writerId: number, date: string, title: string, content: string, topic: string, tags: Array<string | null>, likesId: Array<number | null> } | null };

export type ArticleDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ArticleDeletedSubscription = { __typename?: 'Subscription', ArticleDeleted?: { __typename?: 'Article', id: number, writerId: number, date: string, title: string, content: string, tags: Array<string | null>, topic: string, commentsId: Array<number | null>, likesId: Array<number | null> } | null };

export type ArticleUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ArticleUpdatedSubscription = { __typename?: 'Subscription', ArticleUpdated?: { __typename?: 'Article', id: number, writerId: number, date: string, title: string, content: string, tags: Array<string | null>, topic: string, commentsId: Array<number | null>, likesId: Array<number | null> } | null };

export type ArticleLikedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ArticleLikedSubscription = { __typename?: 'Subscription', ArticleLiked?: { __typename?: 'LikedArticle', id: number, likerId: number, articleId: number } | null };

export type ArticleUnlikedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ArticleUnlikedSubscription = { __typename?: 'Subscription', ArticleUnliked?: { __typename?: 'LikedArticle', id: number, likerId: number, articleId: number } | null };

export type ArticleCommentCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ArticleCommentCreatedSubscription = { __typename?: 'Subscription', ArticleCommentCreated?: { __typename?: 'ArticleComment', id: number, commenterId: number, content: string, date: string, rootArticleId: number, likesId: Array<number | null> } | null };

export type ArticleCommentDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ArticleCommentDeletedSubscription = { __typename?: 'Subscription', ArticleCommentUpdated?: { __typename?: 'ArticleComment', id: number, commenterId: number, content: string, date: string, rootArticleId: number, likesId: Array<number | null> } | null };

export type ArticleCommentLikedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ArticleCommentLikedSubscription = { __typename?: 'Subscription', ArticleCommentLiked?: { __typename?: 'LikedArticleComment', id: number, likerId: number, articleCommentId: number } | null };

export type ArticleCommentUnlikedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ArticleCommentUnlikedSubscription = { __typename?: 'Subscription', ArticleCommentUnliked?: { __typename?: 'LikedArticleComment', id: number, likerId: number, articleCommentId: number } | null };

export type QuestionCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type QuestionCreatedSubscription = { __typename?: 'Subscription', QuestionCreated?: { __typename?: 'Question', id: number, askerId: number, title: string, date: string, content: string, topic: string, tags: Array<string | null>, commentsId: Array<number | null>, solutionsId: Array<number | null>, likesId: Array<number | null> } | null };

export type QuestionDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type QuestionDeletedSubscription = { __typename?: 'Subscription', QuestionDeleted?: { __typename?: 'Question', id: number, askerId: number, title: string, date: string, content: string, topic: string, tags: Array<string | null>, commentsId: Array<number | null>, solutionsId: Array<number | null>, likesId: Array<number | null> } | null };

export type QuestionUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type QuestionUpdatedSubscription = { __typename?: 'Subscription', QuestionUpdated?: { __typename?: 'Question', id: number, askerId: number, title: string, date: string, content: string, topic: string, tags: Array<string | null>, commentsId: Array<number | null>, solutionsId: Array<number | null>, likesId: Array<number | null> } | null };

export type QuestionLikedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type QuestionLikedSubscription = { __typename?: 'Subscription', QuestionLiked?: { __typename?: 'LikedQuestion', id: number, likerId: number, questionId: number } | null };

export type QuestionUnlikedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type QuestionUnlikedSubscription = { __typename?: 'Subscription', QuestionUnliked?: { __typename?: 'LikedQuestion', id: number, likerId: number, questionId: number } | null };

export type QuestionCommentCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type QuestionCommentCreatedSubscription = { __typename?: 'Subscription', QuestionCommentCreated?: { __typename?: 'QuestionComment', id: number, commenterId: number, rootQuestionId: number, content: string, date: string } | null };

export type QuestionCommentDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type QuestionCommentDeletedSubscription = { __typename?: 'Subscription', QuestionCommentDeleted?: { __typename?: 'QuestionComment', id: number, commenterId: number, rootQuestionId: number, content: string, date: string } | null };

export type QuestionCommentUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type QuestionCommentUpdatedSubscription = { __typename?: 'Subscription', QuestionCommentUpdated?: { __typename?: 'QuestionComment', id: number, commenterId: number, rootQuestionId: number, content: string, date: string } | null };

export type QuestionCommentLikedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type QuestionCommentLikedSubscription = { __typename?: 'Subscription', QuestionCommentLiked?: { __typename?: 'LikedQuestionComment', id: number, likerId: number, questionCommentId: number } | null };

export type QuestionCommentUnlikedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type QuestionCommentUnlikedSubscription = { __typename?: 'Subscription', QuestionCommentUnliked?: { __typename?: 'LikedQuestionComment', id: number, likerId: number, questionCommentId: number } | null };

export type SolutionCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SolutionCreatedSubscription = { __typename?: 'Subscription', SolutionCreated?: { __typename?: 'Solution', id: number, solverId: number, rootQuestionId: number, content: string, date: string, likesId: Array<number | null>, commentsId: Array<number | null> } | null };

export type SolutionDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SolutionDeletedSubscription = { __typename?: 'Subscription', SolutionDeleted?: { __typename?: 'Solution', id: number, solverId: number, rootQuestionId: number, content: string, date: string, likesId: Array<number | null>, commentsId: Array<number | null> } | null };

export type SolutionUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SolutionUpdatedSubscription = { __typename?: 'Subscription', SolutionUpdated?: { __typename?: 'Solution', id: number, solverId: number, rootQuestionId: number, content: string, date: string, likesId: Array<number | null>, commentsId: Array<number | null> } | null };

export type SolutionLikedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SolutionLikedSubscription = { __typename?: 'Subscription', SolutionLiked?: { __typename?: 'LikedSolution', id: number, likerId: number, solutionId: number } | null };

export type SolutionUnlikedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SolutionUnlikedSubscription = { __typename?: 'Subscription', SolutionUnliked?: { __typename?: 'LikedSolution', id: number, likerId: number, solutionId: number } | null };

export type SolutionCommentCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SolutionCommentCreatedSubscription = { __typename?: 'Subscription', SolutionCommentCreated?: { __typename?: 'SolutionComment', id: number, commenterId: number, rootSolutionId: number, content: string, date: string } | null };

export type SolutionCommentDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SolutionCommentDeletedSubscription = { __typename?: 'Subscription', SolutionCommentDeleted?: { __typename?: 'SolutionComment', id: number, commenterId: number, rootSolutionId: number, content: string, date: string } | null };


export const CreateAnnouncementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAnnouncement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"announcementInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AnnouncementInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateAnnouncement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"announcementInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"announcementInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>;
export const DeleteAnnouncementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAnnouncement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteAnnouncementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteAnnouncement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteAnnouncementId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables>;
export const UpdateAnnouncementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAnnouncement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateAnnouncementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"announcementInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AnnouncementInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateAnnouncement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateAnnouncementId"}}},{"kind":"Argument","name":{"kind":"Name","value":"announcementInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"announcementInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<UpdateAnnouncementMutation, UpdateAnnouncementMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"introduction"}},{"kind":"Field","name":{"kind":"Name","value":"questionsId"}},{"kind":"Field","name":{"kind":"Name","value":"questionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"articleCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedSolutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticlesId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticleCommentsId"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"introduction"}},{"kind":"Field","name":{"kind":"Name","value":"questionsId"}},{"kind":"Field","name":{"kind":"Name","value":"questionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"articleCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedSolutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticlesId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticleCommentsId"}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"introduction"}},{"kind":"Field","name":{"kind":"Name","value":"questionsId"}},{"kind":"Field","name":{"kind":"Name","value":"questionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"articleCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedSolutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticlesId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticleCommentsId"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserPasswordId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userPasswordInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateUserPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserPasswordId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userPasswordInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userPasswordInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}}]}}]}}]} as unknown as DocumentNode<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;
export const UpdateUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserProfileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProfileInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateUserProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserProfileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userProfileInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProfileInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"introduction"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}}]}}]}}]} as unknown as DocumentNode<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const CreateArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<CreateArticleMutation, CreateArticleMutationVariables>;
export const DeleteArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteArticleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteArticleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<DeleteArticleMutation, DeleteArticleMutationVariables>;
export const UpdateArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateArticleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateArticleId"}}},{"kind":"Argument","name":{"kind":"Name","value":"articleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<UpdateArticleMutation, UpdateArticleMutationVariables>;
export const LikeArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleLikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LikeArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleLikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleLikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"articleId"}}]}}]}}]} as unknown as DocumentNode<LikeArticleMutation, LikeArticleMutationVariables>;
export const UnlikeArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnlikeArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleUnlikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UnlikeArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleUnlikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleUnlikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"articleId"}}]}}]}}]} as unknown as DocumentNode<UnlikeArticleMutation, UnlikeArticleMutationVariables>;
export const CreateArticleCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateArticleComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleCommentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateArticleComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleCommentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleCommentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"rootArticleId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<CreateArticleCommentMutation, CreateArticleCommentMutationVariables>;
export const DeleteArticleCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteArticleComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteArticleCommentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteArticleComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteArticleCommentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"rootArticleId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<DeleteArticleCommentMutation, DeleteArticleCommentMutationVariables>;
export const UpdateArticleCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateArticleComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateArticleCommentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleCommentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateArticleComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateArticleCommentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"articleCommentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleCommentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"rootArticleId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<UpdateArticleCommentMutation, UpdateArticleCommentMutationVariables>;
export const LikeArticleCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeArticleComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleCommentLikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleCommentLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LikeArticleComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleCommentLikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleCommentLikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"articleCommentId"}}]}}]}}]} as unknown as DocumentNode<LikeArticleCommentMutation, LikeArticleCommentMutationVariables>;
export const UnlikeArticleCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnlikeArticleComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleCommentUnlikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleCommentLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UnlikeArticleComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleCommentUnlikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleCommentUnlikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"articleCommentId"}}]}}]}}]} as unknown as DocumentNode<UnlikeArticleCommentMutation, UnlikeArticleCommentMutationVariables>;
export const CreateQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"questionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"askerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<CreateQuestionMutation, CreateQuestionMutationVariables>;
export const DeleteQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteQuestionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteQuestionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"askerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<DeleteQuestionMutation, DeleteQuestionMutationVariables>;
export const UpdateQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateQuestionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateQuestionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"questionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"askerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<UpdateQuestionMutation, UpdateQuestionMutationVariables>;
export const LikeQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionLikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LikeQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"questionLikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionLikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}}]}}]}}]} as unknown as DocumentNode<LikeQuestionMutation, LikeQuestionMutationVariables>;
export const UnlikeQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnlikeQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionUnlikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UnlikeQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"questionUnlikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionUnlikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}}]}}]}}]} as unknown as DocumentNode<UnlikeQuestionMutation, UnlikeQuestionMutationVariables>;
export const CreateQuestionCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateQuestionComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionCommentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateQuestionComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"questionCommentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionCommentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<CreateQuestionCommentMutation, CreateQuestionCommentMutationVariables>;
export const DeleteQuestionCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteQuestionComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteQuestionCommentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteQuestionComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteQuestionCommentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<DeleteQuestionCommentMutation, DeleteQuestionCommentMutationVariables>;
export const UpdateQuestionCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateQuestionComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateQuestionCommentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionCommentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateQuestionComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateQuestionCommentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"questionCommentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionCommentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<UpdateQuestionCommentMutation, UpdateQuestionCommentMutationVariables>;
export const LikeQuestionCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeQuestionComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionCommentLikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionCommentLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LikeQuestionComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"questionCommentLikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionCommentLikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"questionCommentId"}}]}}]}}]} as unknown as DocumentNode<LikeQuestionCommentMutation, LikeQuestionCommentMutationVariables>;
export const UnlikeQuestionCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnlikeQuestionComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionCommentUnlikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionCommentLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UnlikeQuestionComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"questionCommentUnlikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionCommentUnlikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"questionCommentId"}}]}}]}}]} as unknown as DocumentNode<UnlikeQuestionCommentMutation, UnlikeQuestionCommentMutationVariables>;
export const CreateSolutionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSolution"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"solutionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SolutionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateSolution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"solutionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"solutionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"solverId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}}]}}]}}]} as unknown as DocumentNode<CreateSolutionMutation, CreateSolutionMutationVariables>;
export const DeleteSolutionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSolution"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSolutionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteSolution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSolutionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"solverId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}}]}}]}}]} as unknown as DocumentNode<DeleteSolutionMutation, DeleteSolutionMutationVariables>;
export const UpdateSolutionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSolution"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSolutionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"solutionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SolutionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateSolution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSolutionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"solutionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"solutionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"solverId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}}]}}]}}]} as unknown as DocumentNode<UpdateSolutionMutation, UpdateSolutionMutationVariables>;
export const LikeSolutionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeSolution"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"solutionLikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SolutionLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LikeSolution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"solutionLikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"solutionLikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionId"}}]}}]}}]} as unknown as DocumentNode<LikeSolutionMutation, LikeSolutionMutationVariables>;
export const UnlikeSolutionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnlikeSolution"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"solutionUnlikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SolutionLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UnlikeSolution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"solutionUnlikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"solutionUnlikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionId"}}]}}]}}]} as unknown as DocumentNode<UnlikeSolutionMutation, UnlikeSolutionMutationVariables>;
export const CreateSolutionCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSolutionComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"solutionCommentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SolutionCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateSolutionComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"solutionCommentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"solutionCommentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootSolutionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<CreateSolutionCommentMutation, CreateSolutionCommentMutationVariables>;
export const DeleteSolutionCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSolutionComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSolutionCommentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteSolutionComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSolutionCommentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootSolutionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<DeleteSolutionCommentMutation, DeleteSolutionCommentMutationVariables>;
export const UpdateSolutionCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSolutionComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSolutionCommentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"solutionCommentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SolutionCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateSolutionComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSolutionCommentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"solutionCommentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"solutionCommentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootSolutionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<UpdateSolutionCommentMutation, UpdateSolutionCommentMutationVariables>;
export const LikeSolutionCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeSolutionComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"solutionCommentLikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SolutionCommentLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LikeSolutionComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"solutionCommentLikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"solutionCommentLikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionCommentId"}}]}}]}}]} as unknown as DocumentNode<LikeSolutionCommentMutation, LikeSolutionCommentMutationVariables>;
export const UnlikeSolutionCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnlikeSolutionComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"solutionCommentUnlikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SolutionCommentLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UnlikeSolutionComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"solutionCommentUnlikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"solutionCommentUnlikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionCommentId"}}]}}]}}]} as unknown as DocumentNode<UnlikeSolutionCommentMutation, UnlikeSolutionCommentMutationVariables>;
export const AllAnnouncementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAnnouncements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllAnnouncements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AllAnnouncementsQuery, AllAnnouncementsQueryVariables>;
export const HomepageAnnouncementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomepageAnnouncements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HomepageAnnouncements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<HomepageAnnouncementsQuery, HomepageAnnouncementsQueryVariables>;
export const AllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"introduction"}},{"kind":"Field","name":{"kind":"Name","value":"questionsId"}},{"kind":"Field","name":{"kind":"Name","value":"questionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"articleCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedSolutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticlesId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticleCommentsId"}}]}}]}}]} as unknown as DocumentNode<AllUsersQuery, AllUsersQueryVariables>;
export const AllArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<AllArticlesQuery, AllArticlesQueryVariables>;
export const HomepageArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomepageArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HomepageArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<HomepageArticlesQuery, HomepageArticlesQueryVariables>;
export const SortArticlesByTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SortArticlesByTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SortArticlesByTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<SortArticlesByTimeQuery, SortArticlesByTimeQueryVariables>;
export const SortArticlesByLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SortArticlesByLike"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SortArticlesByLike"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<SortArticlesByLikeQuery, SortArticlesByLikeQueryVariables>;
export const AllLikedArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllLikedArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"likerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllLikedArticles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"likerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"likerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<AllLikedArticlesQuery, AllLikedArticlesQueryVariables>;
export const AllArticleCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllArticleComments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllArticleComments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"rootArticleId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<AllArticleCommentsQuery, AllArticleCommentsQueryVariables>;
export const AllLikedArticleCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllLikedArticleComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"likerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllLikedArticleComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"likerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"likerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"rootArticleId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<AllLikedArticleCommentsQuery, AllLikedArticleCommentsQueryVariables>;
export const AllQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"askerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<AllQuestionsQuery, AllQuestionsQueryVariables>;
export const HomepageQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomepageQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HomepageQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"askerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<HomepageQuestionsQuery, HomepageQuestionsQueryVariables>;
export const SortQuestionsByTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SortQuestionsByTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SortQuestionsByTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"askerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<SortQuestionsByTimeQuery, SortQuestionsByTimeQueryVariables>;
export const SortQuestionsByLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SortQuestionsByLike"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SortQuestionsByLike"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"askerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<SortQuestionsByLikeQuery, SortQuestionsByLikeQueryVariables>;
export const AllLikedQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllLikedQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"likerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllLikedQuestions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"likerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"likerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"askerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<AllLikedQuestionsQuery, AllLikedQuestionsQueryVariables>;
export const AllQuestionCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllQuestionComments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllQuestionComments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<AllQuestionCommentsQuery, AllQuestionCommentsQueryVariables>;
export const AllLikedQuestionCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllLikedQuestionComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"likerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllLikedQuestionComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"likerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"likerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<AllLikedQuestionCommentsQuery, AllLikedQuestionCommentsQueryVariables>;
export const AllSolutionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllSolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllSolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"solverId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}}]}}]}}]} as unknown as DocumentNode<AllSolutionsQuery, AllSolutionsQueryVariables>;
export const AllLikedSolutionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllLikedSolutions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"likerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllLikedSolutions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"likerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"likerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"solverId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}}]}}]}}]} as unknown as DocumentNode<AllLikedSolutionsQuery, AllLikedSolutionsQueryVariables>;
export const AllSolutionCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllSolutionComments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllSolutionComments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootSolutionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<AllSolutionCommentsQuery, AllSolutionCommentsQueryVariables>;
export const AllLikedSolutionCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllLikedSolutionComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"likerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllLikedSolutionComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"likerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"likerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootSolutionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<AllLikedSolutionCommentsQuery, AllLikedSolutionCommentsQueryVariables>;
export const AnnouncementCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"AnnouncementCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AnnouncementCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AnnouncementCreatedSubscription, AnnouncementCreatedSubscriptionVariables>;
export const AnnouncementDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"AnnouncementDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AnnouncementDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AnnouncementDeletedSubscription, AnnouncementDeletedSubscriptionVariables>;
export const AnnouncementUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"AnnouncementUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AnnouncementUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AnnouncementUpdatedSubscription, AnnouncementUpdatedSubscriptionVariables>;
export const UserCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UserCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"introduction"}},{"kind":"Field","name":{"kind":"Name","value":"questionsId"}},{"kind":"Field","name":{"kind":"Name","value":"questionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"articleCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedSolutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticlesId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticleCommentsId"}}]}}]}}]} as unknown as DocumentNode<UserCreatedSubscription, UserCreatedSubscriptionVariables>;
export const UserDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UserDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"introduction"}},{"kind":"Field","name":{"kind":"Name","value":"questionsId"}},{"kind":"Field","name":{"kind":"Name","value":"questionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"articleCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedSolutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticlesId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticleCommentsId"}}]}}]}}]} as unknown as DocumentNode<UserDeletedSubscription, UserDeletedSubscriptionVariables>;
export const UserUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UserUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"introduction"}},{"kind":"Field","name":{"kind":"Name","value":"questionsId"}},{"kind":"Field","name":{"kind":"Name","value":"questionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"articleCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedQuestionCommentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedSolutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticlesId"}},{"kind":"Field","name":{"kind":"Name","value":"likedArticleCommentsId"}}]}}]}}]} as unknown as DocumentNode<UserUpdatedSubscription, UserUpdatedSubscriptionVariables>;
export const ArticleCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ArticleCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticleCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<ArticleCreatedSubscription, ArticleCreatedSubscriptionVariables>;
export const ArticleDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ArticleDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticleDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<ArticleDeletedSubscription, ArticleDeletedSubscriptionVariables>;
export const ArticleUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ArticleUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticleUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<ArticleUpdatedSubscription, ArticleUpdatedSubscriptionVariables>;
export const ArticleLikedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ArticleLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticleLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"articleId"}}]}}]}}]} as unknown as DocumentNode<ArticleLikedSubscription, ArticleLikedSubscriptionVariables>;
export const ArticleUnlikedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ArticleUnliked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticleUnliked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"articleId"}}]}}]}}]} as unknown as DocumentNode<ArticleUnlikedSubscription, ArticleUnlikedSubscriptionVariables>;
export const ArticleCommentCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ArticleCommentCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticleCommentCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"rootArticleId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<ArticleCommentCreatedSubscription, ArticleCommentCreatedSubscriptionVariables>;
export const ArticleCommentDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ArticleCommentDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticleCommentUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"rootArticleId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<ArticleCommentDeletedSubscription, ArticleCommentDeletedSubscriptionVariables>;
export const ArticleCommentLikedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ArticleCommentLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticleCommentLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"articleCommentId"}}]}}]}}]} as unknown as DocumentNode<ArticleCommentLikedSubscription, ArticleCommentLikedSubscriptionVariables>;
export const ArticleCommentUnlikedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ArticleCommentUnliked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticleCommentUnliked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"articleCommentId"}}]}}]}}]} as unknown as DocumentNode<ArticleCommentUnlikedSubscription, ArticleCommentUnlikedSubscriptionVariables>;
export const QuestionCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"QuestionCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"QuestionCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"askerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<QuestionCreatedSubscription, QuestionCreatedSubscriptionVariables>;
export const QuestionDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"QuestionDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"QuestionDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"askerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<QuestionDeletedSubscription, QuestionDeletedSubscriptionVariables>;
export const QuestionUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"QuestionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"QuestionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"askerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionsId"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}}]}}]}}]} as unknown as DocumentNode<QuestionUpdatedSubscription, QuestionUpdatedSubscriptionVariables>;
export const QuestionLikedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"QuestionLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"QuestionLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}}]}}]}}]} as unknown as DocumentNode<QuestionLikedSubscription, QuestionLikedSubscriptionVariables>;
export const QuestionUnlikedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"QuestionUnliked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"QuestionUnliked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}}]}}]}}]} as unknown as DocumentNode<QuestionUnlikedSubscription, QuestionUnlikedSubscriptionVariables>;
export const QuestionCommentCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"QuestionCommentCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"QuestionCommentCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<QuestionCommentCreatedSubscription, QuestionCommentCreatedSubscriptionVariables>;
export const QuestionCommentDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"QuestionCommentDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"QuestionCommentDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<QuestionCommentDeletedSubscription, QuestionCommentDeletedSubscriptionVariables>;
export const QuestionCommentUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"QuestionCommentUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"QuestionCommentUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<QuestionCommentUpdatedSubscription, QuestionCommentUpdatedSubscriptionVariables>;
export const QuestionCommentLikedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"QuestionCommentLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"QuestionCommentLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"questionCommentId"}}]}}]}}]} as unknown as DocumentNode<QuestionCommentLikedSubscription, QuestionCommentLikedSubscriptionVariables>;
export const QuestionCommentUnlikedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"QuestionCommentUnliked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"QuestionCommentUnliked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"questionCommentId"}}]}}]}}]} as unknown as DocumentNode<QuestionCommentUnlikedSubscription, QuestionCommentUnlikedSubscriptionVariables>;
export const SolutionCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SolutionCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SolutionCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"solverId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}}]}}]}}]} as unknown as DocumentNode<SolutionCreatedSubscription, SolutionCreatedSubscriptionVariables>;
export const SolutionDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SolutionDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SolutionDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"solverId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}}]}}]}}]} as unknown as DocumentNode<SolutionDeletedSubscription, SolutionDeletedSubscriptionVariables>;
export const SolutionUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SolutionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SolutionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"solverId"}},{"kind":"Field","name":{"kind":"Name","value":"rootQuestionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"likesId"}},{"kind":"Field","name":{"kind":"Name","value":"commentsId"}}]}}]}}]} as unknown as DocumentNode<SolutionUpdatedSubscription, SolutionUpdatedSubscriptionVariables>;
export const SolutionLikedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SolutionLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SolutionLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionId"}}]}}]}}]} as unknown as DocumentNode<SolutionLikedSubscription, SolutionLikedSubscriptionVariables>;
export const SolutionUnlikedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SolutionUnliked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SolutionUnliked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likerId"}},{"kind":"Field","name":{"kind":"Name","value":"solutionId"}}]}}]}}]} as unknown as DocumentNode<SolutionUnlikedSubscription, SolutionUnlikedSubscriptionVariables>;
export const SolutionCommentCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SolutionCommentCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SolutionCommentCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootSolutionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<SolutionCommentCreatedSubscription, SolutionCommentCreatedSubscriptionVariables>;
export const SolutionCommentDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SolutionCommentDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SolutionCommentDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commenterId"}},{"kind":"Field","name":{"kind":"Name","value":"rootSolutionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<SolutionCommentDeletedSubscription, SolutionCommentDeletedSubscriptionVariables>;