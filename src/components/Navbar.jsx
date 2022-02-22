import "../style/navbar.scss";
import {Link} from "react-scroll";

const Navbar = () => {
  return ( 
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__link"><Link to="about" smooth={true} spy={true} offset={-50} duration={500}>O nas</Link></li>
        <li className="navbar__link"><Link to="offer" smooth={true} spy={true} offset={-50} duration={500}> Oferta</Link></li>
        </ul>
        <ul className="navbar__list">
        <li className="navbar__link"><Link to="gallery" smooth={true} spy={true} offset={-50} duration={500}>Galeria</Link></li>
        <li className="navbar__link"><Link to="footer" smooth={true} spy={true} offset={-50} duration={500}>Kontakt</Link></li>
      </ul>
    </div>
   );
}
 
export default Navbar;