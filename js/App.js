import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import CourseOnline from "./CourseOnline";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/online" element={<CourseOnline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
