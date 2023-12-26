import { useNavigate } from "react-router-dom";
const IntroductionPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-3xl m-2">Inroduction Page</h1>
      <button
        onClick={() => navigate("/")}
        className="border-2 border-black px-3 m-1"
      >
        home
      </button>
    </>
  );
};

export default IntroductionPage;
