import Sidebar from "../components/Common/Sidebar";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-row flex-auto">
        <Sidebar />
        <h1 className="ml-3">Home Page</h1>
      </div>
    </>
  );
};

export default HomePage;
