import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Register, Spot } from "./pages";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Spot />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
