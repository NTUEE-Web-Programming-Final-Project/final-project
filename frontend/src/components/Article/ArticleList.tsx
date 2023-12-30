import { useQuery } from "@apollo/client";
import {
  SORT_ARTICLES_BY_LIKE_QUERY,
  SORT_ARTICLES_BY_TIME_QUERY,
  ALL_USERS_QUERY,
} from "../../graphql/queries.ts";
import ArticleItem from "./ArticleItem.tsx";
import { Article, User } from "@shared/shared_types.ts";

type filter = {
  order: string;
};

const ArticleList = (filter: filter) => {
  const { order } = filter;
  const {
    loading: article_loading,
    error: article_error,
    data: article_data,
  } = useQuery(SORT_ARTICLES_BY_TIME_QUERY);
  const {
    loading: article_like_loading,
    error: article_like_error,
    data: article_like_data,
  } = useQuery(SORT_ARTICLES_BY_LIKE_QUERY);
  const {
    loading: user_loading,
    error: user_error,
    data: user_data,
  } = useQuery(ALL_USERS_QUERY);

  if (article_loading) return "Loading...";
  if (article_error) return `Error! ${article_error.message}`;
  if (article_like_loading) return "Loading...";
  if (article_like_error) return `Error! ${article_like_error.message}`;
  if (user_loading) return "Loading...";
  if (user_error) return `Error! ${user_error?.message}`;

  const sortbytime = JSON.parse(
    JSON.stringify(article_data?.SortArticlesByTime),
  );
  const sortbylikes = JSON.parse(
    JSON.stringify(article_like_data?.SortArticlesByLike),
  );
  const users = JSON.parse(JSON.stringify(user_data?.AllUsers));

  return (
    <>
      {order === "time" &&
        sortbytime.map((article: Article) => {
          const user = users.filter(
            (user: User) => user.id === article.writerId,
          )[0];
          const time = new Date(Date.parse(article.date))
            .toISOString()
            .split("T")[0];
          return (
            <ArticleItem
              id={article.id}
              title={article.title}
              writer={user.name}
              writerId={user.id}
              likes={article.likesId.length}
              date={time}
              content={article.content}
              tags={article.tags}
              photoLink={user.photoLink}
            />
          );
        })}
      {order === "like" &&
        sortbylikes.map((article: Article) => {
          const user = users.filter(
            (user: User) => user.id === article.writerId,
          )[0];
          const time = new Date(Date.parse(article.date))
            .toISOString()
            .split("T")[0];
          return (
            <ArticleItem
              id={article.id}
              title={article.title}
              writer={user.name}
              writerId={user.id}
              likes={article.likesId.length}
              date={time}
              content={article.content}
              tags={article.tags}
              photoLink={user.photoLink}
            />
          );
        })}
    </>
  );
};

export default ArticleList;
