import { useNavigate } from "react-router-dom";

const ArticleMainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Article Main Page</h1>
      <button onClick={() => navigate("/")}>back</button>
    </>
  );
};

export default ArticleMainPage;
