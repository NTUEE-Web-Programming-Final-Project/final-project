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

export type Mutation = {
  __typename?: 'Mutation';
  CreateAnnouncement?: Maybe<Announcement>;
  CreateArticle?: Maybe<Article>;
  CreateArticleComment?: Maybe<ArticleComment>;
  CreateUser?: Maybe<User>;
  DeleteAnnouncement?: Maybe<Announcement>;
  DeleteArticle?: Maybe<Article>;
  DeleteArticleComment?: Maybe<ArticleComment>;
  DeleteUser?: Maybe<User>;
  LikeArticle?: Maybe<LikedArticle>;
  LikeArticleComment?: Maybe<LikedArticleComment>;
  UnlikeArticle?: Maybe<LikedArticle>;
  UnlikeArticleComment?: Maybe<LikedArticleComment>;
  UpdateAnnouncement?: Maybe<Announcement>;
  UpdateArticle?: Maybe<Article>;
  UpdateArticleComment?: Maybe<ArticleComment>;
  UpdateUser?: Maybe<User>;
  UpdateUserPassword?: Maybe<User>;
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


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLikeArticleArgs = {
  articleLikeInput: ArticleLikeInput;
};


export type MutationLikeArticleCommentArgs = {
  articleCommentLikeInput: ArticleCommentLikeInput;
};


export type MutationUnlikeArticleArgs = {
  articleUnlikeInput: ArticleLikeInput;
  id: Scalars['Int']['input'];
};


export type MutationUnlikeArticleCommentArgs = {
  id: Scalars['Int']['input'];
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


export type MutationUpdateUserArgs = {
  id: Scalars['Int']['input'];
  userInput: UserInput;
};


export type MutationUpdateUserPasswordArgs = {
  id: Scalars['Int']['input'];
  userPasswordInput: UserPasswordInput;
};

export type Query = {
  __typename?: 'Query';
  AllAnnouncements?: Maybe<Array<Maybe<Announcement>>>;
  AllArticleComments?: Maybe<Array<Maybe<ArticleComment>>>;
  AllArticles?: Maybe<Array<Maybe<Article>>>;
  AllLikedArticleComments?: Maybe<Array<Maybe<ArticleComment>>>;
  AllLikedArticles?: Maybe<Array<Maybe<Article>>>;
  AllUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryAllLikedArticleCommentsArgs = {
  likerId: Scalars['Int']['input'];
};


export type QueryAllLikedArticlesArgs = {
  likerId: Scalars['Int']['input'];
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
  ArticleUnLiked?: Maybe<LikedArticle>;
  ArticleUpdated?: Maybe<Article>;
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
  likedSolutionsId: Array<Maybe<Scalars['Int']['output']>>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  photoLink: Scalars['String']['output'];
  questionCommentsId: Array<Maybe<Scalars['Int']['output']>>;
  questionsId: Array<Maybe<Scalars['Int']['output']>>;
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

export type AllAnnouncementsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAnnouncementsQuery = { __typename?: 'Query', AllAnnouncements?: Array<{ __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null> | null };


export const AllAnnouncementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAnnouncements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllAnnouncements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AllAnnouncementsQuery, AllAnnouncementsQueryVariables>;