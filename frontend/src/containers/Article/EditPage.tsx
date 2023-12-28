import TextArea from "../../components/Common/MDX/TextArea.tsx";
import { useNavigate } from "react-router-dom";
import { useState, FunctionComponent } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_ARTICLE_MUTATION } from "../../graphql";

const ArticlePage = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState("");
  const [createArticle, { loading, error }] = useMutation(
    CREATE_ARTICLE_MUTATION,
  );
  const handleSumbit = async (article: string) => {
    const newArticle = await createArticle({
      variables: {
        articleInput: {
          title: article.split("\n")[0],
          content: article,
          tags: ["test"],
          topic: "test",
          writerId: 3,
        },
      },
    });
    navigate(`/article/${newArticle.data?.CreateArticle?.id}`);
  };
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  return (
    <>
      <div
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
        <TextArea
          article={article}
          setArticle={setArticle}
          createArticle={createArticle}
        />
      </div>
      <div className="flex flex-row-reverse">
        <button
          onClick={() => handleSumbit(article)}
          className="border-2 border-black px-3 mr-5 mb-3"
        >
          post
        </button>
      </div>
    </>
  );
};
export default ArticlePage as FunctionComponent;
