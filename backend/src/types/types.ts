// for Mutation.tsx
export interface AnnouncementInput {
  title: string;
  content: string;
}

export interface UserInput {
  name: string;
  studentID: string;
  password: string;
  photoLink: string;
  introduction: string;
}

export interface UserPasswordInput {
  password: string;
}

export interface ArticleInput {
  writerId: number;
  title: string;
  content: string;
  tags: string[];
  topic: string;
}

export interface ArticleCommentInput {
  commenterId: number;
  content: string;
  rootArticleId: number;
}

export interface ArticleLikeInput {
  likerId: number;
  articleId: number;
}

export interface ArticleCommentLikeInput {
  likerId: number;
  articleCommentId: number;
}


export interface QuestionInput {
  askerId: number
  title: string
  content: string
  topic: string
  tags: string[]
}

export interface QuestionCommentInput {
  commenterId: number
  rootQuestionId: number
  content: string
}

export interface SolutionInput {
  solverId: number
  rootQuestionId: number
  content: string
}