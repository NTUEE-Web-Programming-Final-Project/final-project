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

const ALL_USER_QUERY = graphql(`
  query AllUsers {
    AllUsers {
      id
      name
      studentID
      password
      photoLink
      introduction
      questionsId
      questionCommentsId
      solutionsId
      articlesId
      articleCommentsId
      likedQuestionsId
      likedQuestionCommentsId
      likedSolutionsId
      likedArticlesId
      likedArticleCommentsId
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

const ALL_LIKE_ARTICLE_QUERY = graphql(`
  query AllLikedArticles($likerId: Int!) {
    AllLikedArticles(likerId: $likerId) {
      id
      writerId
      date
      title
      content
      tags
      topic
      commentsId
      likesId
    }
  }
`);

const ALL_ARTICLECOMMENT_QUERY = graphql(`
  query AllArticleComments {
    AllArticleComments {
      id
      commenterId
      content
      date
      rootArticleId
      likesId
    }
  }
`);

const ALL_LIKE_ARTICLECOMMENT_QUERY = graphql(`
  query AllLikedArticleComments($likerId: Int!) {
    AllLikedArticleComments(likerId: $likerId) {
      id
      commenterId
      content
      date
      rootArticleId
      likesId
    }
  }
`);

export {
  ALL_ANNOUNCEMENT_QUERY,
  ALL_USER_QUERY,
  ALL_ARTICLE_QUERY,
  ALL_LIKE_ARTICLE_QUERY,
  ALL_ARTICLECOMMENT_QUERY,
  ALL_LIKE_ARTICLECOMMENT_QUERY,
};
