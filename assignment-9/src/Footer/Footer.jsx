import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <footer className="footer text-white py-10">
        <aside>
          <figure>
            <img src="https://i.ibb.co/NCCqqqx/iso-certification-1-1.png" alt="" />
          </figure>
        </aside>
        <nav>
          <header className="footer-title text-2xl">Important Links</header>
          <Link to='/'><p className="link link-hover text-xl">Home</p></Link>
          <Link to='/course'><p className="link link-hover text-xl">Course</p></Link>
          <Link to='/about'><p className="link link-hover text-xl">About</p></Link>
          
        </nav>
        <nav>
          <header className="footer-title text-2xl">Important Links</header>
          <Link to='/contact'><p className="link link-hover text-xl">Contact Us</p></Link>
          <Link to='/login'><p className="link link-hover text-xl">Login</p></Link>
        </nav>
        <nav>
          <header className="footer-title text-2xl">Get In Touch</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <hr />
      <div>

      </div>
    </div>
  );
};

export default Footer;
