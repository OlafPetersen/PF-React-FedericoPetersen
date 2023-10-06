import "bulma/css/bulma.css";
import IconImage from "../image/Chantina-10.png";

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
        <a className="navbar-item">
          Inicio
        </a>
  
        <a className="navbar-item">
          Nosotros
        </a>
  
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            Catalogo
          </a>
  
          <div className="navbar-dropdown">
            <a className="navbar-item">
              Telas
            </a>
            <a className="navbar-item">
              Diseños
            </a>
            <a className="navbar-item">
              Personalizados 
            </a>
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