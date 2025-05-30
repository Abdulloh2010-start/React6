import img from "./Group 53.png";
import fon from "./Rectangle 48.png";
import "./Section.css";

export default function Section() {
  return (
    <div className='container'>
      <div className="text-menu">
        <h3>Food App</h3>
        <h1><span>Why stay hungry when</span> you can order form Bella Onojie</h1>
        <p>Download the bella onoje’s food app now on</p>
      </div>
      <div className="button-menu">
        <button className='button'>Playstore</button>
        <button className='button'>App store</button>
      </div>
      <div className="border"></div>
      <img style={{width: "1440px", margin: "0 auto", zIndex: "-2", position: "relative", top: "-280px", left: "0px",}} src={fon} alt="0"/>
      <img src={img} alt="0" />
    </div>
  )
};