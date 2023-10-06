import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProfileCard from "./ProfilCard";
import NavBar from "./components/NavBar";
import Image1 from "./image/60352a14bed5c50011a2c0c9.webp";
import Image2 from "./image/Free-Amigurumi-Crochet-Patterns.jpg";
import Image3 from "./image/crochet-projects-643822eb921b1.jpg";
import ItemCount from './components/ItemCount/ItemCount.js';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){

    return (
        <div>
          <NavBar/>
          <div>
            <section className="hero">
                <div className="hero-body">
                    <p className="title has-text-centered">Nuestros Productos</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard titulo="Muñecos" arroba="@Muñecos" img={Image1}/>
                            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard titulo="Muñecos2" arroba="@Muñecos" img={Image2}/>
                            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard titulo="Crochet" arroba="@Crochet" img={Image3}/> 
                            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
                        </div>
                    </div>
                </section>
              </div>
            </div>
        </div>
  )
}
export default App;