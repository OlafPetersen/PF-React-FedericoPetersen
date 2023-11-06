// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Productos from "./pages/Productos"
import Producto from "./pages/Producto"
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import { db } from "./config/firebase";
import {collection, doc, getDocs} from "firebase/firestore"
import { useEffect, useState } from "react";
function App(){

    const [itemList , setItemList ] = useState([]);

    const [newItemNombre , setNewItemNobre ] = useState("");
    const [newItemPrecio , setNewItemPrecio] = useState(0);
    const [newItemStock , setNewItemStock] = useState(0);

    const itemsCollectionRef = collection(db, "Items");

    console.log(itemsCollectionRef);

    useEffect( ()=>{

        const getItemList = async ()=>{
            const data = await getDocs(itemsCollectionRef);
            // console.log(data.docs);
            const filteredData = data.docs.map( (doc)=>({
                ...doc.data(),
                id: doc.id 
            }));
            setItemList(filteredData);
        }

        getItemList();
    },[])

    const onSubmitItem = ()=>{

    }

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