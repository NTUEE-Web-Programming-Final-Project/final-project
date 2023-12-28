import TextArea from "../../components/Common/MDX/TextArea.tsx";
import Overview from "../../components/Common/MDX/Overview.tsx";
import { useParams } from "react-router-dom";
import { useState, FunctionComponent } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_ARTICLE_MUTATION } from "../../graphql";
const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState("");
  const [sended, setSended] = useState(false);
  const [createArticle, { loading, error }] = useMutation(
    CREATE_ARTICLE_MUTATION,
  );
  const handleSumbit = (article: string) => {
    createArticle({
      variables: {
        articleInput: {
          title: article.split("\n")[0],
          content: article,
          tags: ["test"],
          topic: "test",
          writerId: 2,
        },
      },
    });
    setSended(true);
  };
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
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
        {!sended ?(<TextArea
          article={article}
          setArticle={setArticle}
          createArticle={createArticle}
        />):(
          <Overview />
        )}

      </div>
      <div className="flex flex-row-reverse">
        {!sended?(
          <button
          onClick={() => handleSumbit(article)}
          className="border-2 border-black px-3 mr-5 mb-3"
        >
          save
        </button>): (
          <button
          onClick={() => setSended(false)}
          className="border-2 border-black px-3 mr-5 mb-3"
        >
          edit
        </button>
        )}

      </div>
    </>
  );
};
export default ArticlePage as FunctionComponent;
