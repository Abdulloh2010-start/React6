import "./Section4.css";
import img from "./Rectangle.png";

export default function Section2 () {
  return (
    <div>
      <section className='section4'>
        <div className="text-contain4">
          <img src={img} alt="0" />
          <div className="text-block4">
            <h2>Checkout</h2>
            <h1>When you done check out and get it delivered.</h1>
            <p>When you done check out and get it delivered with ease.</p>
          </div>
        </div>
      </section>
    </div>
  )
};