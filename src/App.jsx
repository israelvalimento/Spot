import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Register, Spot } from "./pages";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Spot />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
