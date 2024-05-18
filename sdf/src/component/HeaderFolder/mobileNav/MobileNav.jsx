import { Link } from 'react-router-dom'
import './styles/mobilenavStyles.css'
import {useLocation } from 'react-router-dom'
function MobileNav(props) {
  let location = useLocation();
  let { hash, pathname, search } = location;
    return (
      <div className={props.mbnav}>
        <p className='mnav_bg'>DIGITAL PROJECT</p>
        <nav>
          <ul className="mobile-nav__menu">
            <li className={pathname === '/' ? "menu_list active nav-menu_li" : props.linkss} >
              <Link to="/">Main</Link>
            </li>
            <li className={pathname === '/Gallery' ? "menu_list active nav-menu_li" :  props.linkss}>
            <Link to="/Gallery">GALLERY</Link>
            </li>
            <li className={pathname === '/Projects' ? "menu_list active nav-menu_li" :  props.linkss}>
            <Link to="/Projects">PROJECTS</Link>
            </li>
            <li className={pathname === '/Certifications' ? "menu_list active nav-menu_li" :  props.linkss}>
            <Link to="/Certifications">CERTIFICATIONS</Link>
            </li>
            <li className={pathname === '/Contacts' ? "menu_list active nav-menu_li" :  props.linkss}>
            <Link to="/Contacts">COntacts</Link>
            </li>
            <li className='socials'>
              <a href="#"><i className="ri-linkedin-box-line"></i></a>
              <a href="#"><i className="ri-twitter-x-fill"></i></a>
              <a href="#"><i className="ri-youtube-line"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

export default MobileNav