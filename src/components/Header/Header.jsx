import "./Header.css";
import img from "./Group 3.png";

const Header = () => {
  return (
    <div>
      <header className='header'>
        <nav>
            <img src={img} alt="0" />
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Faq</li>
                <li>Contact</li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header;