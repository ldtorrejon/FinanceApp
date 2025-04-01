import { Navbar } from "./components/navbar/Navbar";
import { Outlet } from "react-router";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Outlet />
      <Navbar />
    </div>
  );
};

export default App;
