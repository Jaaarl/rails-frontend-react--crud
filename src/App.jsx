import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="px-2 py-1">
        <div className="text-blue-500 text-3xl">
          React + <span className="text-red-700">Rails</span> Blog
        </div>
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
