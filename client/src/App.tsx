import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Register from "./pages/Resgiter/Resgiter";
import Login from "./pages/Login/Login";
import { SegundaPg } from "./pages/SegundaPagina/SegundaPg";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vagas" element={<SegundaPg />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}


export default App;
