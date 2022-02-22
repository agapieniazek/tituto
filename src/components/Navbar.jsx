import "../style/navbar.scss";
import {Link} from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu= () => {
    setIsActive(!isActive);
  }


  return ( 
    <>
    <div className={isActive ? "navbar-active" : "navbar"}>
      <ul className="navbar__list navbar-active__list">
        <li className="navbar__link navbar-active__link" ><Link to="about" onClick={()=> setIsActive(false)} smooth={true} spy={true} offset={-50} duration={500}>O nas</Link></li>
        <li className="navbar__link navbar-active__link"><Link to="offer" onClick={()=> setIsActive(false)} smooth={true} spy={true} offset={-50} duration={500}> Oferta</Link></li>
        </ul>
        <ul className="navbar__list navbar-active__list">
        <li className="navbar__link navbar-active__link"><Link to="gallery" onClick={()=> setIsActive(false)} smooth={true} spy={true} offset={-50} duration={500}>Galeria</Link></li>
        <li className="navbar__link navbar-active__link"><Link to="footer" onClick={()=> setIsActive(false)} smooth={true} spy={true} offset={-50} duration={500}>Kontakt</Link></li>
      </ul>
    </div>
          <div className="toggle">
          <button onClick={toggleMenu}>
          {isActive ?  <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
        </div>
        </>
  
    
   );
}
 
export default Navbar;