import "bulma/css/bulma.css";
import IconImage from "../image/Chantina-10.png";
import { Link } from "react-router-dom";

function NavBar() {

return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="">
        <img src={IconImage} width="112" height="28"/>
      </a>
  
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link to={"/"}>
          <a className="navbar-item">
          Inicio
        </a>
        </Link>

        <Link to={"/"}>
        <a className="navbar-item">
          Nosotros
        </a>
        </Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <Link  to={"/Productos"} >
          <a className="navbar-link">
            Catalogo
          </a>
          </Link>
          <div className="navbar-dropdown">
            <Link to={"../pages/Productos.js"}>
            <a className="navbar-item">
              Telas
            </a>
            </Link>
            <Link to={"../pages/Productos.js"}>
            <a className="navbar-item">
              Diseños
            </a>
            </Link>
            <Link to={"../pages/Productos.js"}>
            <a className="navbar-item">
              Personalizados
            </a>
            </Link>
            <hr className="navbar-divider"/>
            <a className="navbar-item">
              Contactanos
            </a>
          </div>
        </div>
      </div>
  
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-link">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
}
export default NavBar;