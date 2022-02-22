import "../style/footer.scss";


const Footer = () => {
  return ( 
    <div className="footer" id="footer">
      <h2>Kontakt</h2>
    <div className="contact">
      <div className="contactBox">
      <div className="contact__element">
      <i class="fa-solid fa-location-dot"></i>
        <p>ul. Ziemowit 42<br>
        </br>
        35-605 Rzeszów</p>
      </div>
      <div className="contact__element">
      <i class="fa-solid fa-phone"></i>
        <p>+48 506 900 590</p>
      </div>
      <div className="contact__element">
      <i class="fa-solid fa-envelope"></i>
        <p>office@tituto.com</p>
      </div>
      </div> 
      
      <div className="map">
        <p>Miejsce na mapke</p>
      </div>  
      </div>   
    </div>
   );
}
 
export default Footer;