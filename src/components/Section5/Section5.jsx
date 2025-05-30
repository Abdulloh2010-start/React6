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
      <img className="section5-img" src={fon} alt="fon"/>
    </div>
  )
};