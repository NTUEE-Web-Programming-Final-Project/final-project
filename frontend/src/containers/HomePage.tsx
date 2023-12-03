import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>

      <button>
        <Link to="/login" style={{ textDecoration: "none", color: "Black" }}>
          login
        </Link>
      </button>

      <button>
        <Link to="/article" style={{ textDecoration: "none", color: "Black" }}>
          all articles
        </Link>
      </button>

      <button>
        <Link to="/forum" style={{ textDecoration: "none", color: "Black" }}>
          all forums
        </Link>
      </button>
    </>
  );
};

export default HomePage;
