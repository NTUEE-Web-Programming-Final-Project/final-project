import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row-reverse flex-wrap border-2 m-3 border-black">
        <button className="border-2 border-black px-3 m-1">
          <Link to="/login">login</Link>
        </button>

        <button className="border-2 border-black px-3 m-1">
          <Link
            to="/article"
            style={{ textDecoration: "none", color: "Black" }}
          >
            all articles
          </Link>
        </button>

        <button className="border-2 border-black px-3 m-1">
          <Link to="/forum" style={{ textDecoration: "none", color: "Black" }}>
            all forums
          </Link>
        </button>

        <button className="border-2 border-black px-3 m-1">
          <Link
            to="/introduction"
            style={{ textDecoration: "none", color: "Black" }}
          >
            introduction
          </Link>
        </button>
      </div>
    </>
  );
};

export default NavBar;
