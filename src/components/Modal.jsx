import { Link } from "react-scroll";

const Modal = ({clickedImg, handleRotationRight, handelRotationLeft, setClickedImg}) => {

  const handleClick =(e)=>{
    if(e.target.classList.contains("dismiss")){
      setClickedImg(null);
    }
  }
  return ( 
    <div className="overlay">
      <img src={clickedImg} alt="" className="overlay__img" />
      <Link to="gallery"><span className="dismiss overlay__close" onClick={handleClick}>X</span></Link>
      <div onClick={handelRotationLeft} className="overlay__arrows overlay__arrows__left">
      <i className="fas fa-chevron-left"></i>
      </div>
      <div onClick={handleRotationRight} className="overlay__arrows overlay__arrows__right">
      <i className="fas fa-chevron-right"></i>  
      </div>
    </div>
   );
}
 
export default Modal;