import { graphql } from "../gql-generated";

const ANNOUNCEMENT_CREATED_SUBSCRIPTION = graphql(`
  subscription AnnouncementCreated {
    AnnouncementCreated {
      id
      date
      title
      content
    }
  }
`);

const ARTICLE_CREATED_SUBSCRIPTION = graphql(`
  subscription ArticleCreated {
    ArticleCreated {
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

export { ANNOUNCEMENT_CREATED_SUBSCRIPTION, ARTICLE_CREATED_SUBSCRIPTION };
