import { useNavigate } from "react-router-dom";
import ArticleList from "../../components/Article/ArticleList";
import { useMutation } from "@apollo/client";
import { CREATE_ARTICLE_MUTATION } from "../../graphql";
import { useState, useContext } from "react";
import Sidebar from "../../components/Article/SideBar";
import { Search } from "lucide-react";
import { UserContext } from "../../context/userContext";
const ArticleMainPage = () => {
  const { user } = useContext(UserContext);
  // console.log(user);
  if (!user) throw new Error("user not found");
  const navigate = useNavigate();
  const [filter, setFilter] = useState("time");
  const [search, setSearch] = useState("");
  const [createArticle, { loading, error }] = useMutation(
    CREATE_ARTICLE_MUTATION,
  );
  const handleCreateArticle = async () => {
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error.message}</div>;
    }
    const newArticle = await createArticle({
      variables: {
        articleInput: {
          writerId: user?.id,
          title: "# Title",
          content: "# Title",
          tags: [""],
          topic: "",
        },
      },
    });
    navigate(`/article/${newArticle.data?.CreateArticle?.id}/edit`);
  };
  return (
    <>
      <div className="flex flex-row flex-auto">
        <Sidebar />
        <div className="flex flex-col flex-grow overflow-x-hidden min-h-screen bg-slate-100">
          <div className="flex flex-row min-h-fit justify-between bg-slate-50">
            <div className="flex">
              <button
                onClick={() => setFilter("time")}
                className="border-2 p-2 m-1 text-md font-bold text-black bg-gray-200 hover:text-white hover:bg-gray-400 px-4 rounded self-center"
              >
                最新
              </button>
              <button
                onClick={() => setFilter("like")}
                className="border-2 p-2 m-1 text-md font-bold text-black bg-gray-200 hover:text-white hover:bg-gray-400 px-4 rounded self-center"
              >
                最多讚
              </button>
            </div>

            <div className="flex max-w-md mx-auto">
              <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-gray-50 overflow-hidden">
                <button className="grid place-items-center h-full w-12 text-gray-300">
                  <Search />
                </button>

                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700"
                  type="text"
                  id="search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                  placeholder="Search something.."
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleCreateArticle}
                className="border-2 p-2 m-1 text-md font-bold text-black bg-gray-200 hover:text-white hover:bg-gray-400 px-4 rounded self-center"
              >
                發文
              </button>
            </div>
          </div>
          <ArticleList order={filter} />
        </div>
      </div>
    </>
  );
};

export default ArticleMainPage;
