import { Link } from "react-router-dom";
import facebookURL from "../../images/facebook.png";
import logoURL from "../../images/lightning.png";

type ArticleItemProps = {
  id: number;
  title: string;
  writer: string;
  writerId: number;
  date: string;
  likes: number;
  photoLink: string;
  // topic: string;
  content: string;
  tags: string[];
};

const ArticleItem = ({
  id,
  title,
  writer,
  writerId,
  date,
  likes,
  photoLink,
  content,
  tags,
}: ArticleItemProps) => {
  return (
    <>
      <div className="flex flex-row border-2 border-black m-3">
        <div className="flex flex-col border-r-4 w-60">
          <button className="text-3xl m-3 rounded-lg bg-gray-200 hover:bg-gray-300 ">
            <Link to={`/article/${id}`}>{`${title}`}</Link>
          </button>
          <div className="flex flex-row">
            <div className="flex m-3 justify-around">
              {tags.map((tag) => (
                <Link to={`/${tag}`}>
                  <button className="flex m-0.5 bg-gray-300 hover:bg-gray-400 rounded-lg text-base px-2">
                    {`${tag}`}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col grow">
          <div className="flex flex-row justify-between">
            <div className="flex justify-between">
              <Link to={`/user/${writerId}`} className="w-8 m-1">
                <img
                  src={facebookURL}
                  alt="twitter link"
                  className="rounded-full"
                />
              </Link>
              <Link to={`/user/${writerId}`} className="flex self-center px-2">
                <p>{`${writer}`}</p>
              </Link>
              <p className="flex self-center px-2">{`${date}`}</p>
            </div>

            <div className="flex">
              <img src={logoURL} alt="logo" className="w-8 m-1" />
              <p className="flex self-center px-2">{`${likes}`} likes</p>
            </div>
          </div>
          <Link
            to={`/article/${id}`}
            className="flex grow bg-gray-100 hover:bg-gray-200"
          >
            <div className="flex flex-wrap text-balance">
              <p className="self-center px-2">{`${content}`}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArticleItem;
