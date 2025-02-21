import "./App.scss";
import { FinanceDetail } from "./components/financeDetailComponent/FinanceDetail";

const App: React.FC = () => {
  return (
    <>
      <FinanceDetail></FinanceDetail>
      <div>Color palette:</div>
      <ul>
        <li style={{ color: "#BB86FC" }}>Primary Color</li>
        <li style={{ color: "#03DAC6" }}>Secondary color</li>
        <li style={{ color: "#E4E4E4" }}>Text color</li>
        <li style={{ color: "#6200EE" }}>Button color</li>
        <li style={{ color: "#03A9F4" }}>Link Color</li>
        <li style={{ color: "#1E1E1E" }}>Background Color Dark Gray</li>
        <li style={{ color: "#333333" }}>Background Color Light Gray</li>
        <li style={{ color: "#4CAF50" }}>Success</li>
        <li style={{ color: "#D32F2F" }}>Error</li>
        <li style={{ color: "#FF9800" }}>Warning</li>
      </ul>
    </>
  );
};

export default App;
