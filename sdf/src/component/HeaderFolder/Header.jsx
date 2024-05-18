import { Link } from 'react-router-dom'
import { useState } from 'react';
import './styles/headerStyles.css'
import logo from '@assets/logo.png';
import MobileNav from './mobileNav/MobileNav';
import {useLocation } from 'react-router-dom'
import { Fade, Slide } from "react-awesome-reveal";
function Header() {
  const [burgerButton, setBurgerButton] = useState('hamburger-toggler')
  const [mbnav, setMbnav] = useState('mobile-nav');
  const body = document.querySelector('body')
  const [linkss, setLinkss] = useState('mobile-nav__link');
  let [initialWindowWidth, setInitialWindowWidth] = useState(window.innerWidth);

  let location = useLocation();
  let { hash, pathname, search } = location;
  function handleToggle() {
    if (burgerButton === 'hamburger-toggler') {
        setBurgerButton('hamburger-toggler active');
        setMbnav("mobile-nav mobile-nav-active");
        body.classList.add('lock');

        const handleClickOutside = (event) => {
            if (!event.target.closest('.hamburger-toggler')) { 
                setMbnav("mobile-nav");
                body.classList.remove('lock');
                setBurgerButton("hamburger-toggler");
                document.removeEventListener('click', handleClickOutside);
            }
        };

        document.addEventListener('click', handleClickOutside);
    } else {
        setBurgerButton('hamburger-toggler');
        setMbnav("mobile-nav");
        body.classList.remove('lock');
    }

    window.scrollTo(0, 0);
}

  document.querySelectorAll(`.${linkss}`).forEach(element => {
    element.addEventListener('click', ()=> {
        setMbnav("mobile-nav")
        body.classList.remove('lock')
        setBurgerButton("hamburger-toggler");
    })
  })
  window.addEventListener('resize', function () {
    if (window.innerWidth > initialWindowWidth && window.innerWidth > 700 && initialWindowWidth <= 700) {
        body.classList.remove('lock')
        setMbnav("mobile-nav")
        setBurgerButton("hamburger-toggler");
        setInitialWindowWidth(window.innerWidth)
    } else {
      setInitialWindowWidth(window.innerWidth)
    }
  })
  return (
    <>
    <header className="mainHeader">
        <div className="container">
          <nav className='nav'>
            <Slide direction='down' triggerOnce={true}>
              <Fade  delay={300} triggerOnce={true}>
                <Link to="/" className="logo">
                  <img src={logo} alt="Logo" />
                </Link>
              </Fade>
            </Slide>
            <Slide direction='down' cascade triggerOnce={true}>
              <Fade cascade damping={0.2} triggerOnce={true}>
                <ul className='menu' >
                  <li className={pathname === '/' ? "menu_list active" : "menu_list"}>
                  <Link to="/">Main</Link>
                  </li>
                  <li className={pathname === '/Gallery' ? "menu_list active" : "menu_list"}>
                    <Link to="/Gallery">GALLERY</Link>
                  </li>
                  <li className={pathname === '/Projects' ? "menu_list active" : "menu_list"}>
                    <Link to="/Projects">PROJECTS</Link>
                  </li>
                  <li className={pathname === '/Certifications' ? "menu_list active" : "menu_list"}>
                    <Link to="/Certifications">CERTIFICATIONS</Link>
                  </li>
                  <li className={pathname === '/Contacts' ? "menu_list active" : "menu_list"}>
                    <Link to="/Contacts">COntacts</Link>
                  </li>
                </ul>
              </Fade>
            </Slide>
            <button onClick={handleToggle}  className={burgerButton}>
              <span className="hamburger-icon">
                  <span></span>
              </span>
            </button>
          </nav>
        </div>
    </header>
    <MobileNav  mbnav={mbnav} linkss={linkss}/>
    </>
  )
}

export default Header;
