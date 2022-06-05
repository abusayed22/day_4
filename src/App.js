import Home from "./components/pages/Home";
import Header from "./components/partials/Header";
import Add from "./components/pages/Add";
import Read from "./components/pages/Read";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_student" element={<Add />} />
        <Route path="/all_students" element={<Read />} />
      </Routes>
    </div>
  );
}

export default App;
