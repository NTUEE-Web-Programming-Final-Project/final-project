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

const ANNOUNCEMENT_DELETE_SUBSCRIPTION = graphql(`
  subscription AnnouncementDeleted {
    AnnouncementDeleted {
      id
      title
      date
      content
    }
  }
`);

const ANNOUNCEMENT_UPDATED_SUBSCRIPTION = graphql(`
  subscription AnnouncementUpdated {
    AnnouncementUpdated {
      id
      title
      date
      content
    }
  }
`);

const USER_CREATED_SUBSCRIPTION = graphql(`
  subscription UserCreated {
    UserCreated {
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

const USER_DELETE_SUBSCRIPTION = graphql(`
  subscription UserDeleted {
    UserDeleted {
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

const USER_UPDATED_SUBSCRIPTION = graphql(`
  subscription UserUpdated {
    UserUpdated {
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

const ARTICLE_DELETE_SUBSCRIPTION = graphql(`
  subscription ArticleDeleted {
    ArticleDeleted {
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

const ARTICLE_UPDATED_SUBSCRIPTION = graphql(`
  subscription ArticleUpdated {
    ArticleUpdated {
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

const ARTICLE_LIKE_SUBSCRIPTION = graphql(`
  subscription ArticleLiked {
    ArticleLiked {
      id
      likerId
      articleId
    }
  }
`);

const ARTICLE_UNLIKE_SUBSCRIPTION = graphql(`
  subscription ArticleUnliked {
    ArticleUnliked {
      id
      likerId
      articleId
    }
  }
`);

const ARTICLECOMMENT_CREATED_SUBSCRIPTION = graphql(`
  subscription ArticleCommentCreated {
    ArticleCommentCreated {
      id
      commenterId
      content
      date
      rootArticleId
      likesId
    }
  }
`);

const ARTICLECOMMENT_DELETE_SUBSCRIPTION = graphql(`
  subscription ArticleDeleted {
    ArticleDeleted {
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

const ARTICLECOMMENT_UPDATED_SUBSCRIPTION = graphql(`
  subscription ArticleCommentDeleted {
    ArticleCommentUpdated {
      id
      commenterId
      content
      date
      rootArticleId
      likesId
    }
  }
`);

const ARTICLECOMMENT_LIKE_SUBSCRIPTION = graphql(`
  subscription ArticleCommentLiked {
    ArticleCommentLiked {
      id
      likerId
      articleCommentId
    }
  }
`);

const ARTICLECOMMENT_UNLIKE_SUBSCRIPTION = graphql(`
  subscription ArticleCommentUnliked {
    ArticleCommentUnliked {
      id
      likerId
      articleCommentId
    }
  }
`);

export {
  ANNOUNCEMENT_CREATED_SUBSCRIPTION,
  ANNOUNCEMENT_DELETE_SUBSCRIPTION,
  ANNOUNCEMENT_UPDATED_SUBSCRIPTION,
  USER_CREATED_SUBSCRIPTION,
  USER_DELETE_SUBSCRIPTION,
  USER_UPDATED_SUBSCRIPTION,
  ARTICLE_CREATED_SUBSCRIPTION,
  ARTICLE_DELETE_SUBSCRIPTION,
  ARTICLE_UPDATED_SUBSCRIPTION,
  ARTICLE_LIKE_SUBSCRIPTION,
  ARTICLE_UNLIKE_SUBSCRIPTION,
  ARTICLECOMMENT_CREATED_SUBSCRIPTION,
  ARTICLECOMMENT_DELETE_SUBSCRIPTION,
  ARTICLECOMMENT_UPDATED_SUBSCRIPTION,
  ARTICLECOMMENT_LIKE_SUBSCRIPTION,
  ARTICLECOMMENT_UNLIKE_SUBSCRIPTION,
};
