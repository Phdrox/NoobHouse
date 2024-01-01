import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex  flex-col w-full">
      {/*container Menu */}
      <div className="flex justify-around items-center w-full">
        <NavBar />
        {/* Layout do Route */}
      </div>

      <Outlet />
    </div>
  );
}

export default App;
