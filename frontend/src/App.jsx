import "./App.css";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddGoal from "./pages/AddGoal";

function App() {
  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          <div className="home ">
            <Home />
          </div>
        }
      />
      <Route
        path="/add-goal"
        element={
          <div className="add-goal">
            <AddGoal />
          </div>
        }
      />
    </Routes>
    <Toaster />
    </>
  );
}

export default App;
