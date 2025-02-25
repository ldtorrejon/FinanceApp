import "./App.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Outlet } from "react-router";

const App: React.FC = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
};

export default App;
