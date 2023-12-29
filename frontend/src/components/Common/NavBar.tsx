import { Link } from "react-router-dom";
import logoURL from "../../images/lightning.png";

const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-white py-4 px-12 shadow overflow-x-hidden">
        <div className="flex min-x-fit justify-between border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <Link to="/" className="flex items-center">
              <img src={logoURL} alt="logo" className="w-8" />
              <span className="font-semibold text-xl tracking-tight">
                Final Project
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-row flex-grow items-center justify-end px-3 px-8 overflow-x-hidden min-x-fit">
          <Link to={"/forum"}>
            <div className="text-md font-bold text-blue-700 mt-4 mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
              Forum
            </div>
          </Link>
          <Link to={"/article"}>
            <div className="text-md font-bold text-blue-700 mt-4 mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
              Article
            </div>
          </Link>
          <Link to={"/introduction"}>
            <div className="text-md font-bold text-blue-700 mt-4 mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
              About
            </div>
          </Link>
          <Link to={"/login"}>
            <div className="text-md font-bold text-blue-700 mt-4 mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
              login
            </div>
          </Link>
          <Link to={"/login"}>
            <img src={logoURL} alt="logo" className="w-8 rounded-full" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
