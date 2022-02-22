import Navbar from "./Navbar";
import "../style/header.scss";
import img from "../images/header.jpg";


const Header = () => {
  return ( 
    <div className="header" id="header">
      <img src={img} alt="coffee"></img>
      <Navbar/>
      <div className="main">
        <h1>
          Kawiarnia u Gabrysi
        </h1>
      </div>
      Header
    </div>
   );
}
 
export default Header;