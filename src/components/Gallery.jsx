import "../style/gallery.scss";
import Modal from "../components/Modal";

import img1 from "../images/coffee-g1d05741af_1920.jpg";
import img2 from "../images/coffee-g8e6326781_1920.jpg";
import img3 from "../images/coffee-gc1d0cbcb2_1920.jpg";
import img4 from "../images/coffee-g162304a9d_1920.jpg";
import { useState } from "react";

const images = [img1, img2, img3, img4];

const Gallery = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);


  const handleClick= (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
    window.scrollTo(0, 0);
}
const handleRotationRight = () =>{
    const totalLength = images.length;
    if (currentIndex === totalLength - 1) {
      setCurrentIndex(0);
      const newUrl = images[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  

const handelRotationLeft = () => {
  const totalLength = images.length;
  if (currentIndex === 0) {
    setCurrentIndex(totalLength - 1);
    const newUrl = images[totalLength - 1];
    setClickedImg(newUrl);
    return;
  }
  const newIndex = currentIndex - 1;
  const newUrl = images.filter((item) => {
    return images.indexOf(item) === newIndex;
  });
  const newItem = newUrl[0];
  setClickedImg(newItem);
  setCurrentIndex(newIndex);
};

const gallery = images.map((image, index)=> {
  return (
    <div key={index} className="imageBox">
      <img src={image} alt="coffee"/>
      <button onClick={()=>handleClick(image, index)}><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
})


  return ( 
    <div className="gallery" id="gallery">
      <h2>Galeria</h2>
      <div className="galleryBox">
      {gallery}
      </div>
      {clickedImg && <Modal clickedImg={clickedImg} handelRotationLeft={handelRotationLeft} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg}/>}
    </div>
   );
}
 
export default Gallery;