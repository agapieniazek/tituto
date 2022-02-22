import "../style/about.scss";
import img from "../images/about.jpg";

const About = () => {
  return ( 
    <div className="about" id="about">
      <img src={img} alt="coffee"></img>
      <div className="about__info">
        <h2>O nas</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit vellpa! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit explicabo aliquid hic ea id, perferendis quas nesciunt ipsam corrupti tempore dignissimos placeat sint quis asperiores alias modi laudantium amet sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aut! Magni beatae ipsam suscipit officiis, laudantium repudiandae molestias totam aut aliquid cum delectus autem nisi molestiae, dolorum tempore nemo non! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, accusamus officiis. Id iure possimus vitae, temporibus doloremque quos tempora nulla voluptas voluptatibus saepe necessitatibus vero sapiente fuga libero assumenda adipisci?</p>
      </div>
    </div>
   );
}
 
export default About;