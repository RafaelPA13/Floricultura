import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Cliente from "./pages/Cliente.jsx";
import Produtos from "./pages/Produtos.jsx";

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cliente" element={<Cliente/>}/>
          <Route path="/produtos" element={<Produtos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;