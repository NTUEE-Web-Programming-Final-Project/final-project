export type User = {
  id: string;
  name: string;
  studentID: string;
  password: string;
  photoLink: string;
  introduction?: string;
};

export type Question = {
  id: string;
  asker: string;
  date: string;
  title: string;
  content: string;
  topic: string;
  tags: string[];
  zap: number;
  isMe: number;
  bombFish: number;
};

export type QuestionComment = {
  id: string;
  commenter: string;
  date: string;
  content: string;
  tags: string[];
  zap: number;
};

export type Solution = {
  id: string;
  solver: string;
  date: string;
  content: string;
  zap: number;
  isMe: number;
  bombFish: number;
};

export type Article = {
  id: string;
  writer: string;
  date: string;
  title: string;
  content: string;
  topic: string;
  tags: string[];
  zap: number;
  isMe: number;
  bombFish: number;
};

export type ArticleComment = {
  id: string;
  commenter: string;
  date: string;
  content: string;
  zap: number;
};
