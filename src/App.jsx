import "./App.css";
import Lists from "./components/Lists";
import Items from "./components/Items";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Routes>
        <Route path={"/"} element={<Lists />} />
        <Route path={"list/:listId"} element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
