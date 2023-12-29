import { useNavigate } from "react-router-dom";
import ArticleList from "../../components/Article/ArticleList";
import { useMutation } from "@apollo/client";
import { CREATE_ARTICLE_MUTATION } from "../../graphql";

const ArticleMainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="m-4">Article Main Page</h1>
      <button
        onClick={() => navigate("/")}
        className="border-2 border-black px-3 m-1"
      >
        home
      </button>
      <button
        onClick={() => navigate("/article/draft")}
        className="border-2 border-black px-3 m-1"
      >
        發文
      </button>
      <ArticleList />
    </>
  );
};

export default ArticleMainPage;
