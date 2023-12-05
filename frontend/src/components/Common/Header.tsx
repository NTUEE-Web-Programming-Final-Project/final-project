import logoURL from "../../images/lightning.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex flex-row mt-2">
        <Link to="/">
          <img src={logoURL} alt="logo" className="w-20" />
        </Link>
        <p className="text-6xl m-2">Final Project</p>
      </div>
    </>
  );
};

export default Header;
