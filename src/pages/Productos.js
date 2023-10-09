import { Link } from "react-router-dom";
import Image1 from "../image/60352a14bed5c50011a2c0c9.webp";
import Image2 from "../image/Free-Amigurumi-Crochet-Patterns.jpg";
import Image3 from "../image/crochet-projects-643822eb921b1.jpg";
import ProfileCard from "../ProfilCard";
import ItemCount from '../components/ItemCount/ItemCount';
import data from '../data';

function Productos() {

    return (
        <div className="container">
            <div>
            <section className="hero">
                <div className="hero-body">
                    <p className="title has-text-centered">Nuestros Productos</p>
                </div>
            </section>
            </div>
            <section className="section">
                <div className="columns">
                    <div>
                        <h2>Muñeco</h2>
                        <div>
                            {data.map((producto)=>{
                                return (
                                    <article key={producto.id}>
                                        <h5>{producto.title}</h5>
                                        <img src={producto.image}/>
                                        <Link to={`/data/${producto.id}`}>Mas info</Link>
                                    </article>
                                )
                            })}
                        </div>
                    </div>
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
        <Link to={"/src/pages/Productos.js"}>Productos</Link>
        </div>
)
}
export default Productos;