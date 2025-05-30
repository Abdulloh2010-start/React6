import "./Section3.css";
import img from "./Rectangle (1).png";

export default function Section2 () {
  return (
    <div>
      <section className='section3'>
        <div className="text-contain3">
          <div className="text-block3">
            <h2>Explore varieties</h2>
            <h1>Shop for your favorites meal as e dey hot.</h1>
            <p>Shop for your favorite meals or drinks and enjoy while doing it.</p>
          </div>
        <img src={img} alt="0" />
        </div>
      </section>
    </div>
  )
};