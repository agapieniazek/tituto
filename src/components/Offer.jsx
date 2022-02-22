import "../style/offer.scss";
import img1 from "../images/coffee-g162304a9d_1920.jpg";
import img2 from "../images/coffe-grains-gbcc72b9db_1920.jpg";
import img3 from "../images/pancakes-g050b113c5_1920.jpg";


const list= [
  {
    img: img1,
    title: "Wyśmienite kawy"
  },
  {
    img: img2,
    title: "Ziarna na wynos"
  },
   {
    img: img3,
    title: "Ciasta jak domowe"
  }
]

const Offer = () => {
  const offerList = list.map((offer, index)=>{
    return (
      <li key={index} className="offer__list__item">
        <img src={offer.img} alt="offer"/>
        <h3>{offer.title}</h3>
      </li>
    )    
  })

  return ( 
    <div className="offer" id="offer">
      <div className="offer__title">
        <h2>Oferta</h2>
      </div>
      <div className="offer__list">
        {offerList}
      </div>

      
    </div>
   );
}
 
export default Offer;