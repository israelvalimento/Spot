import { Route, Routes } from "react-router-dom";
import { Login, Register, Spot, Add_Item, Inventory } from "./pages";
import { SpotProvider } from "./context/SpotProvider";
function App() {
  return (
    <SpotProvider>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Spot />} />
          <Route path="/Add_Item" element={<Add_Item />} />
          <Route path="/Inventory" element={<Inventory />} />
        </Routes>
      </main>
    </SpotProvider>
  );
}

export default App;
