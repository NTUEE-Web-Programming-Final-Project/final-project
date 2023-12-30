import { Link } from "react-router-dom";

const Sidebar = () => {
  const tags = [
    "Life",
    "Evalutaion",
    "ACG",
    "Programing",
    "Tech_News",
    "Recruit",
  ];

  return (
    <>
      <div className="min-h-screen max-w-fit flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
        <div className="flex flex-col top-0 left-0 w-64 bg-gray-50 h-full border-r">
          {/* <div className="flex items-center justify-center h-14 border-b">
            <div>Side bar</div>
          </div> */}
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Menu
                  </div>
                </div>
              </li>
              {/* <li> */}
              {/* <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                </a> */}
              {/* </li> */}
              {tags.map((tag) => {
                return (
                  <li key={tag}>
                    <Link
                      to={`/article`}
                      // to={`/article/${tag}`}
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                      <span className="ml-2 text-sm tracking-wide truncate">{`${tag}`}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
