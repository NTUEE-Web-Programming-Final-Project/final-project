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

export { CREATE_ANNOUNCEMENT_MUTATION, CREATE_ARTICLE_MUTATION };
