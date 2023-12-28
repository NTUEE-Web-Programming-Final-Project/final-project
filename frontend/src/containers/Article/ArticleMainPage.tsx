import { useNavigate } from "react-router-dom";

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
        onClick={() => navigate("/article/1")}
        className="border-2 border-black px-3 m-1"
      >
        article 1
      </button>
      <button
        onClick={() => navigate("/article/2")}
        className="border-2 border-black px-3 m-1"
      >
        article 2
      </button>
    </>
  );
};

export default ArticleMainPage;
