import { useQuery } from "@apollo/client"
import { ALL_ARTICLE_QUERY, ALL_USER_QUERY } from "../../graphql/queries.ts";
import ArticleItem from "./ArticleItem.tsx";
import { Article, User } from "@shared/shared_types.ts";

const ArticleList = () => {
  const { loading:article_loading, error:article_error, data:article_data } = useQuery(ALL_ARTICLE_QUERY);
  const { loading:user_loading, error:user_error, data:user_data } = useQuery(ALL_USER_QUERY);

  if (article_loading) return "Loading...";
  if (article_error) return `Error! ${article_error.message}`;
  if (user_loading) return "Loading...";
  if (user_error) return `Error! ${user_error?.message}`;

  const articles = JSON.parse(JSON.stringify(article_data?.AllArticles),);
  const users = JSON.parse(JSON.stringify(user_data?.AllUsers),);
  
  return (
    <>
      {articles.map(( article: Article ) => {
        const user = users.filter((user:User)=> user.id === article.writerId)[0];
        const time = new Date(Date.parse(article.date)).toISOString().split("T")[0];
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
            photoLink={user.photoLink} />
        );
      })}
    </>
  );
};

export default ArticleList;
