import "./Section2.css";
import img from "./Rectangle (2).png";

export default function Section2 () {
  return (
    <div>
      <section className='section2'>
        <h1>How the app works</h1>
        <div className="text-contain2">
          <img src={img} alt="0" />
          <div className="text-block2">
            <h2>Create an account</h2>
            <h1>Create/login to an existing account to get started</h1>
            <p>An account is created with your email and a desired password</p>
          </div>
        </div>
      </section>
    </div>
  )
};