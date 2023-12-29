import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_ARTICLE_MUTATION } from "../../graphql/index.ts";
import TextArea from "../../components/Common/MDX/TextArea.tsx";

function EditingPage() {
  const { id } = useParams();
  const [article, setArticle] = useState("# Title");
  const navigate = useNavigate();

  if (!id) throw new Error("id is undefined");

  const [updateArticle, { loading, error }] = useMutation(
    UPDATE_ARTICLE_MUTATION,
  );

  const handleUpdate = async (article?: string) => {
    if (!article) throw new Error("article is undefined!");
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
    const updatedArticle = await updateArticle({
      variables: {
        updateArticleId: parseInt(id),
        articleInput: {
          title: article.split("\n")[0],
          content: article,
          tags: ["test"],
          topic: "test",
          writerId: 1,
        },
      },
    });
    navigate(`/article/${updatedArticle.data?.UpdateArticle?.id}`);
  };

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
        <TextArea article={article} setArticle={setArticle} />
      </div>
      <div className="flex flex-row-reverse">
        <button
          onClick={() => handleUpdate(article)}
          className="border-2 border-black px-3 mr-5 mb-3"
        >
          post
        </button>
      </div>
    </>
  );
}
export default EditingPage;
