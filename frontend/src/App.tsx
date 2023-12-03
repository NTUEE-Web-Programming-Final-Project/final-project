import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Common/NavBar.tsx";
// import NotFound from "./components/Common/NotFound.tsx";
import HomePage from "./containers/HomePage.tsx";
import Footer from "./components/Common/Footer.tsx";

const LoginPage = lazy(() => import("./containers/User/LoginPage.tsx"));
const ArticleMainPage = lazy(
  () => import("./containers/Article/ArticleMainPage.tsx"),
);
const ForumMainPage = lazy(
  () => import("./containers/Forum/ForumMainPage.tsx"),
);

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </Suspense>
          }
        />

        <Route
          path="/article"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticleMainPage />
            </Suspense>
          }
        />

        <Route
          path="/forum"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ForumMainPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
