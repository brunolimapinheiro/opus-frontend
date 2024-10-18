import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Register from "./pages/Resgiter/Resgiter";
import { SecondPg } from "./pages/SecondPg/SecondPg";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vagas" element={<SecondPg />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}


export default App;
