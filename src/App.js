import "./style/global.scss";

import Header from "./components/Header";
import About from "./components/About";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Offer/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
