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

export { ALL_ANNOUNCEMENT_QUERY };
