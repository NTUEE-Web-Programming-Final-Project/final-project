import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_ARTICLE_MUTATION } from "../../graphql";

const ArticleMainPage = () => {
  const navigate = useNavigate();
  const [createArticle, { loading, error }] = useMutation(
    CREATE_ARTICLE_MUTATION,
  );
  const handleWrite = async () => {
    const newArticle = await createArticle({
      variables: {
        articleInput: {
          title: "",
          content: "",
          tags: [""],
          topic: "",
          writerId: 1,
        },
      },
    });
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
    navigate(`/article/${newArticle.data?.CreateArticle?.id}/edit`);
  };

  return (
    <>
      <h1 className="m-4">Article Main Page</h1>
      <button
        onClick={() => navigate("/")}
        className="border-2 border-black px-3 m-1"
      >
        home
      </button>
      <button onClick={handleWrite} className="border-2 border-black px-3 m-1">
        發文
      </button>
    </>
  );
};

export default ArticleMainPage;
