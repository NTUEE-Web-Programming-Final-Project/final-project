export type User = {
  id: number;
  name: string;
  studentid: number;
  password: string;
  photoLink: string;
  introduction?: string;
};

export type Question = {
  id: number;
  asker: string;
  date: string;
  title: string;
  content: string;
  topic: string;
  tags: string[];
  likes: number[];
};

export type QuestionComment = {
  id: number;
  commenter: string;
  date: string;
  content: string;
  tags: string[];
  likes: number[];
};

export type Solution = {
  id: number;
  solver: string;
  date: string;
  content: string;
  likes: number[];
};

export type Article = {
  id: number;
  writer: string;
  date: string;
  title: string;
  content: string;
  topic: string;
  tags: string[];
  likes: number[];
};

export type ArticleComment = {
  id: number;
  commenter: string;
  date: string;
  content: string;
  likes: number[];
};
