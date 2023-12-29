import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/Article/SideBar";

const ArticleMainPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="flex flex-row flex-auto">
        <Sidebar />
        <div className="flex flex-col flex-grow overflow-x-hidden min-h-screen">
          <div className="flex flex-row min-h-fit justify-between bg-slate-50">
            <div className="flex">
              <button
                onClick={() => setFilter("time")}
                className="border-2 px-3 m-1 text-md font-bold text-black bg-gray-200 mt-4 mt-0 hover:text-white hover:bg-gray-400 px-4 py-2 rounded mr-2"
              >
                最新
              </button>
              <button
                onClick={() => setFilter("like")}
                className="border-2 px-3 m-1 text-md font-bold text-black bg-gray-200 mt-4 mt-0 hover:text-white hover:bg-gray-400 px-4 py-2 rounded mr-2"
              >
                最多讚
              </button>
            </div>

            <div className="flex max-w-md mx-auto">
              <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <button className="grid place-items-center h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>

                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
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
                onClick={() => navigate("/article/draft")}
                className="border-2 px-3 m-1 text-md font-bold text-black bg-gray-200 mt-4 mt-0 hover:text-white hover:bg-gray-400 px-4 py-2 rounded mr-2"
              >
                發文
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ArticleMainPage;
