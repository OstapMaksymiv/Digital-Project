import './styles/contactsStyle.css'
import { Fade, Slide } from "react-awesome-reveal";
function Contacts() {
  return (
    <section className='contacts-section'>
        <div className="container">
            <div className="contacts-mainInf">
                <Fade triggerOnce={true} delay={300}>
                    <Slide direction='down' triggerOnce={true}>
                        <h1>
                            Contact
                            <span>Information</span>
                        </h1>
                    </Slide>
                </Fade>
                <ul className='contact-info'>

                    <Fade delay={400}  triggerOnce={true}>
                        <li>
                            Digital Project
                            <span>1234 Sample Street Austin Texas 76401</span>
                        </li>
                    </Fade>

                    <Fade delay={500} triggerOnce={true}>
                        <li>
                            Phone number
                            <span>512.333.2222</span>
                        </li>
                    </Fade>
                    <Fade delay={600}  triggerOnce={true}>
                        <li>
                            Email address
                            <span>sampleemail@gmail.com</span>
                        </li>
                    </Fade>
                </ul>
                <a className='send-link' href='mailto:sampleemail@gmail.com'>
                    <span>Contact Us</span>
                </a>
            </div>
            <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d742.5317632638557!2d12.491953728554277!3d41.89012459654924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDUzJzI0LjQiTiAxMsKwMjknMzMuNCJF!5e0!3m2!1suk!2spl!4v1715634608227!5m2!1suk!2spl" 
                width="600" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            </div>
        </div>
    </section>
  )
}

export default Contacts