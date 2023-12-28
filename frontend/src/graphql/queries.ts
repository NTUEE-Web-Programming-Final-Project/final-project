import { graphql } from "../gql-generated";

const ALL_ANNOUNCEMENT_QUERY = graphql(`
  query AllAnnouncements {
    AllAnnouncements {
      id
      title
      date
      content
    }
  }
`);

const ALL_ARTICLE_QUERY = graphql(`
  query AllArticles {
    AllArticles {
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

export { ALL_ANNOUNCEMENT_QUERY, ALL_ARTICLE_QUERY };
