import "./Footer.css";
import img from "./image.png"

export default function Footer() {
  return (
    <div>
      <footer className='footer'>
        <nav>
            <img src={img} alt="0" />
            <ul>
              <li className="fa-brands fa-twitter fa-2x social-icon"></li>
              <li className="fa-brands fa-facebook fa-2x social-icon"></li>
              <li className="fa-brands fa-instagram fa-2x social-icon"></li>
            </ul>
            <p>Copywright 2020 Bella Onojie.com</p>
        </nav>
      </footer>
    </div>
  )
};