import "./Section5.css";
import fon from "./Rectangle 47.png"

export default function Section5 () {
  return (
    <div>
      <div className='Section5'>
        <div className="text-menu5">
          <h1>Download the app now.</h1>
          <p>Available on your favorite store. Start your premium experience now</p>
        </div>
        <div className="button-menu5">
          <button className='button5'>Playstore</button>
          <button className='button5'>App store</button>
        </div>
      </div>
      <img style={{width: "1440px", height: "600px" , margin: "0 auto", zIndex: "-2", position: "relative", top: "-210px", left: "289px",}} src={fon} alt="0"/>
    </div>
  )
};