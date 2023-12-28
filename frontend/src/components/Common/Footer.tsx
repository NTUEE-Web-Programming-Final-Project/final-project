import facebookURL from "../../images/facebook.png";
import instagramURL from "../../images/instagram.png";
import githubURL from "../../images/github.png";
import twitterURL from "../../images/twitter.png";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-evenly border-2 border-black m-2">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
        className="w-10 m-1"
      >
        <img src={facebookURL} alt="facebook link" />
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
        className="w-10 m-1"
      >
        <img src={instagramURL} alt="instgram link" />
      </a>

      <a
        href="https://www.github.com"
        target="_blank"
        rel="noreferrer"
        className="w-10 m-1"
      >
        <img src={githubURL} alt="github link" />
      </a>

      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
        className="w-10 m-1"
      >
        <img src={twitterURL} alt="twitter link" />
      </a>
    </footer>
  );
};

export default Footer;
