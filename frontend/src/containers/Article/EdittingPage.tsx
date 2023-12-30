import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";

import {
  ALL_ARTICLES_QUERY,
  UPDATE_ARTICLE_MUTATION,
} from "../../graphql/index.ts";
import TextArea from "../../components/Common/MDX/TextArea.tsx";

function EdittingPage() {
  const { id } = useParams();
  if (!id) throw new Error("id is undefined");
  const navigate = useNavigate();
  const { data: allData, error: allError } = useQuery(ALL_ARTICLES_QUERY);
  const [article, setArticle] = useState("# Title"); // initialize with default value

  const [updateArticle, { loading, error }] = useMutation(
    UPDATE_ARTICLE_MUTATION,
  );

  const handleUpdate = async (article?: string) => {
    if (!article) throw new Error("article is undefined!");
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
    console.log(article);
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

  useEffect(() => {
    if (allError) {
      throw new Error(allError.message);
    }
    const queryArticle = allData?.AllArticles?.find(
      (article) => article?.id === parseInt(id),
    );
    if (queryArticle?.content) {
      setArticle(queryArticle?.content); // update state when data is available
    }
    console.log(article);
  }, [allData, allError]);

  return (
    <>
      <div className="w-[70%] min-h-[600px] ml-[17%] bg-white m-5 py-6 px-10 shadow hover:shadow-lg rounded-lg">
        <TextArea article={article} setArticle={setArticle} />
      </div>
      <div className="flex flex-row-reverse">
        <button
          onClick={() => handleUpdate(article)}
          className="border-2 px-3 mr-[16%] mb-3 text-lginline-flex items-center py-2.5 px-4 text-lg font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 bg-blue-600 hover:bg-blue-700"
        >
          post
        </button>
      </div>
    </>
  );
}
export default EdittingPage;
