import { useNavigate } from "react-router-dom";

const FourmMainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Fourm Main Page</h1>
      <button onClick={() => navigate("/")}>back</button>
    </>
  );
};

export default FourmMainPage;
