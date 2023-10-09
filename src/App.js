// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Productos from "./pages/Productos"
import Producto from "./pages/Producto"
import Layout from "./pages/Layout";
import Error from "./pages/Error";
function App(){

    return (
        <div className="App">
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/productos" element={<Productos/>}/>
                        <Route path="/productos/:productoId" element={<Producto/>}/>
                        </Route>
                        <Route path="*" element={<Error/>}/>
                    </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;