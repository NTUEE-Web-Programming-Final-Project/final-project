import { useNavigate } from "react-router-dom";

const FourmMainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-3xl m-2">Fourm Main Page</h1>
      <button onClick={() => navigate("/")} className="border-2 border-black px-3 m-1">home</button>
    </>
  );
};

export default FourmMainPage;
