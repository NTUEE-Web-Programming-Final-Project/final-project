import { useNavigate } from "react-router-dom";

import facebookURL from "../images/facebook.png";
import instagramURL from "../images/instagram.png";
import githubURL from "../images/github.png";
import twitterURL from "../images/twitter.png";

const IntroductionPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-slate-100 ">
        <div className="flex flex-row py-7 overflow-hidden rounded-3xl">
          <div className="flex flex-col flex-1">
            <div className="flex justify-center m-3">
              <img
                src="https://i.imgur.com/bDLhJiP.jpg"
                width="100"
                className="rounded-full justify-center"
              />
            </div>
            <div className="text-center my-3">
              <span className="bg-slate-400 p-1 px-4 rounded text-white">
                Pro
              </span>
              <h5 className="m-1">陳秉緯</h5>
              <span className="my-1">Leader</span>

              <div className="px-4 my-1">
                <p className="text-base">自我介紹 </p>
              </div>

              <div className="flex flex-row justify-center space-x-6">
                <a
                  href="https://www.facebook.com/ChenBingWei.CBW"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <img
                    src={facebookURL}
                    alt="instagram link"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.instagram.com/rain4030633/"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <img
                    src={instagramURL}
                    alt="instagram link"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://github.com/ChenBingWei1201"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <img
                    src={githubURL}
                    alt="instagram link"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex justify-center m-3">
              <img
                src="https://i.imgur.com/bDLhJiP.jpg"
                width="100"
                className="rounded-full justify-center"
              />
            </div>
            <div className="text-center my-3">
              <span className="bg-slate-400 p-1 px-4 rounded text-white">
                Pro
              </span>
              <h5 className="m-1">張均豪</h5>
              <span className="my-1">Leader</span>

              <div className="px-4 my-1">
                <p className="text-base">自我介紹 </p>
              </div>

              <div className="flex flex-row justify-center space-x-6">
                <a
                  href="https://www.facebook.com/profile.php?id=100021374052790"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <img
                    src={facebookURL}
                    alt="instagram link"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <img
                    src={instagramURL}
                    alt="instagram link"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://github.com/jass921026"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <img
                    src={githubURL}
                    alt="instagram link"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex justify-center m-3">
              <img
                src="https://i.imgur.com/bDLhJiP.jpg"
                width="100"
                className="rounded-full justify-center"
              />
            </div>
            <div className="text-center my-3">
              <span className="bg-slate-400 p-1 px-4 rounded text-white">
                Pro
              </span>
              <h5 className="m-1">林禹融</h5>
              <span className="my-1">Leader</span>

              <div className="px-4 my-1">
                <p className="text-base">自我介紹</p>
              </div>

              <div className="flex flex-row justify-center space-x-6">
                <a
                  href="https://www.facebook.com/lin.y.rong.96/"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <img
                    src={facebookURL}
                    alt="instagram link"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.instagram.com/feather.ouo/"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <img
                    src={instagramURL}
                    alt="instagram link"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://github.com/Jackbear8868"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <img
                    src={githubURL}
                    alt="instagram link"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroductionPage;
