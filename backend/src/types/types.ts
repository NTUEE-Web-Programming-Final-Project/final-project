// for Mutation.tsx
export interface AnnouncementInput {
  title: string,
  content: string
}

export interface ArticleInput {
  title: string,
  content: string,
  tags: [string]
  likes: [number]
  topic: string
}

export interface ArticleCommentInput {
  content: string,
  like: number
}