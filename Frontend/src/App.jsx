import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Courses from "./component/Courses";
import Signup from "./component/Signup";

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
