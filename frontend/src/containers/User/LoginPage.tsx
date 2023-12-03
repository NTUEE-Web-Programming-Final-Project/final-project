import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={() => navigate("/")}>back</button>
    </>
  );
};

export default LoginPage;
