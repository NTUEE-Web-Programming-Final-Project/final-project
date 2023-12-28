import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { ALL_ARTICLE_QUERY } from "../../graphql";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { allPlugins } from "../../components/Common/MDX/allPlugins";

const ArticlePageOverview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(ALL_ARTICLE_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const article = JSON.parse(
    JSON.stringify(data?.AllArticles?.[data?.AllArticles?.length - 1]),
  )?.content;

  return (
    <>
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
          markdown={`${article}`}
          plugins={allPlugins(`${article}`)}
          readOnly
        />
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

export default ArticlePageOverview;
