import "./App.css";
import PokomonProvider from "./context/PokomonProvider";
import Router from "./shared/Router";

function App() {
  return (
    <PokomonProvider>
      <Router /> {/* 홈, 덱스, 디테일 들어있음 */}
    </PokomonProvider>
  );
}

export default App;
