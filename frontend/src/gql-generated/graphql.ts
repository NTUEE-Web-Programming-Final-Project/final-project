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

export type Mutation = {
  __typename?: 'Mutation';
  CreateAnnouncement?: Maybe<Announcement>;
  CreateUser?: Maybe<User>;
  DeleteAnnouncement?: Maybe<Announcement>;
  DeleteUser?: Maybe<User>;
  UpdateAnnouncement?: Maybe<Announcement>;
  UpdateUser?: Maybe<User>;
  UpdateUserPassword?: Maybe<User>;
};


export type MutationCreateAnnouncementArgs = {
  announcementInput: AnnouncementInput;
};


export type MutationCreateUserArgs = {
  userInput: UserInput;
};


export type MutationDeleteAnnouncementArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAnnouncementArgs = {
  announcementInput: AnnouncementInput;
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
  AllUsers?: Maybe<Array<Maybe<User>>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  AnnouncementCreated?: Maybe<Announcement>;
  AnnouncementDeleted?: Maybe<Announcement>;
  AnnouncementUpdated?: Maybe<Announcement>;
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