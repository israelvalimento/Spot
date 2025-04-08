import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Register, Spot, Add_Item } from "./pages";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Spot />} />
          <Route path="/Add_Item" element={<Add_Item />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
