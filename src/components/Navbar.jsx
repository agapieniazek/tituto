import "../style/navbar.scss";

const Navbar = () => {
  return ( 
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__link"><a href="/">O nas</a></li>
        <li className="navbar__link"><a href=""> Oferta</a></li>
        </ul>
        <ul className="navbar__list">
        <li className="navbar__link"><a href="">Galeria</a></li>
        <li className="navbar__link"><a href="">Kontakt</a></li>
      </ul>
    </div>
   );
}
 
export default Navbar;