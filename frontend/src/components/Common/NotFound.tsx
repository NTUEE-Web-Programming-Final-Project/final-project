import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Page Not Found</div>
      <button
        className="border-2 border-black px-3 m-1"
        onClick={() => navigate("/")}
      >
        back to home
      </button>
    </>
  );
};

export default NotFound;
