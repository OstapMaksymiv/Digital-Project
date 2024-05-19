import './styles/footerStyles.css'
import Flogo from '@assets/footer-Logo.svg'
import facebook from '@assets/facebook.png'
import linkedIn from '@assets/LinkedIn.png'
import pininterest from '@assets/pininterest.png'
import twitter from '@assets/twitter.png'
import { useLocation, Link } from 'react-router-dom'
import { useRef, useState } from 'react'
function Footer() {
    const location = useLocation()
    const { hash, pathname, search } = location
    const coordinates = useRef();
    const [locationto, setLocationto] = useState('location');

    function toLocation(event) {
        event.preventDefault();
        window.open(`https://www.google.com/maps?q=${coordinates.current.innerText}`, "_blank");
    };
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-block">
                <div className="main-footer_links">
                    <a href={pathname === '/' ? '#' : '/'}><img src={Flogo} alt="" /></a>
                    <ul className="footer-information">
                        <h4>Information</h4>

                        <li><Link to={pathname === '/' ? '#' : '/'}>Main</Link></li>
                        <li><Link to={pathname === '/Gallery' ? '#' : '/Gallery'}>Gallery</Link></li>
                        <li><Link to={pathname === '/Projects' ? '#' : '/Projects'}>Projects</Link></li>
                        <li><Link to={pathname === '/Certifications' ? '#' : '/Certifications'}>Certifications</Link></li>
                        <li><Link to={pathname === '/Contacts' ? '#' : '/Contacts'}>Contacts</Link></li>
                    </ul>
                    <ul className="footer-contacts">
                        <h4>Contacts</h4>
                        <li>
                        <a className={locationto} href="#" onClick={toLocation}>
                            <i className="ri-map-pin-line"></i>
                            <p ref={coordinates} style={{ maxWidth: '132px' }}>1234 Sample Street Austin Texas 78704</p>
                        </a>
                        </li>
                        <li>
                            <a href="tel:512-333-2222">
                                <i className="ri-phone-line"></i>
                                <p>512-333-2222</p>
                            </a>
                        </li>
                        <li>    
                            <a href="mailto:sampleemail@gmail.com">
                                <i className="ri-mail-line"></i>
                                <p>sampleemail@gmail.com</p>
                            </a>
                        </li>
                    </ul>
                    <ul className="footer-media">
                        <h4>Social Media</h4>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com">
                                    <img src={facebook} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com">
                                    <img src={twitter} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/">
                                    <img src={linkedIn} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://pl.pinterest.com/">
                                    <img src={pininterest} alt="" />
                                </a>
                            </li>
                        </ul>
                    </ul>
                </div>
                <hr />
                <p className='footer-copyright'>© 2024 All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer