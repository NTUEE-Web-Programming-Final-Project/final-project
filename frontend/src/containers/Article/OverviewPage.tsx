import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { ALL_ARTICLES_QUERY, ALL_LIKED_ARTICLES_QUERY } from "../../graphql";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { allPlugins } from "../../components/Common/MDX/allPlugins";
import { FunctionComponent } from "react";
import LikeButton from "../../components/Common/LikeButton.tsx";

const ArticlePageOverview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const likerId = 1;
  const {
    loading: allArticlesLoading,
    error: allArticlesError,
    data: allArticlesData,
  } = useQuery(ALL_ARTICLES_QUERY);

  const {
    loading: likedArticlesLoading,
    error: likedArticlesError,
    data: likedArticlesData,
  } = useQuery(ALL_LIKED_ARTICLES_QUERY, {
    variables: {
      likerId: likerId,
    },
  });

  if (allArticlesLoading) return "Loading...";
  if (allArticlesError) return `Error! ${allArticlesError.message}`;

  const articleContent =
    allArticlesData?.AllArticles?.[allArticlesData?.AllArticles?.length - 1]
      ?.content;
  if (!id) throw new Error("id is undefined");
  const articleId = parseInt(id);

  if (likedArticlesLoading) return "Loading...";
  if (likedArticlesError) return `Error! ${likedArticlesError.message}`;
  const intialLiked = likedArticlesData?.AllLikedArticles?.some(
    (article) => article?.id === articleId,
  );

  return (
    <>
      <div className="flex flex-col">
        <div
          id={id}
          style={{
            border: "#7C7C7C solid 2px",
            borderRadius: "20px",
            padding: "20px",
            margin: "20px",
            width: "70%",
            minHeight: "600px",
            marginLeft: "15%",
          }}
        >
          <MDXEditor
            markdown={`${articleContent}`}
            plugins={allPlugins(`${articleContent}`)}
            readOnly
          />
        </div>
        <div>
          <LikeButton
            likerId={likerId}
            articleId={articleId}
            initialLiked={intialLiked}
          />
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <button
          onClick={() => navigate(`/article/${id}/edit`)}
          className="border-2 border-black px-3 mr-5 mb-3"
        >
          edit
        </button>
      </div>
    </>
  );
};

export default ArticlePageOverview as FunctionComponent;
