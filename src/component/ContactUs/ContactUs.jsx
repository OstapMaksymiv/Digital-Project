import './styles/contactusStyles.css'
import { useState } from 'react';
import arrow from '@assets/white-arrow.svg';
import b1 from '@assets/b1.jpg'
import { Fade, Slide } from "react-awesome-reveal";
function ContactUs() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [interest, setInterest] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    function handleClick(){
        const mailtoLink = `mailto:sampleemail@gmail.com?subject=Get in Touch&body=
        Name: ${name}
        Phone Number: ${phoneNumber}
        Email: ${email}
        Interested In: ${interest}
        Message: ${message}`;
        if (!isChecked) {
            alert('Please check the checkbox');
            return;
        }
        else{
            window.location.href = encodeURI(mailtoLink)
        }
    }
  return (
    <section className="contact">
        <div className="container">
            <Fade triggerOnce={true} delay={300}>
                <Slide direction='down' triggerOnce={true}>
                    <h1>Contact Us</h1>
                </Slide>
            </Fade>
            <div className="contact-block">
                <form className= "contact-form">
                    <input 
                    type="text" 
                    className="form-name"
                    placeholder='Name' 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="text" 
                    className="formNumber" 
                    placeholder='Phone Number' 
                    required 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                />
                <input 
                    type="text" 
                    className="formEmail" 
                    placeholder='E-mail' 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="text" 
                    className="formInterest" 
                    placeholder='Interested In' 
                    required 
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)} 
                />
                <textarea 
                    cols="30" 
                    rows="12"
                    required
                    className="formTextarea" 
                    placeholder='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} 
                ></textarea>
                <span className='checkbox-block'>
                    <input className='checkbox' type="checkbox" required onChange={(e) => setIsChecked(e.target.checked)}/>
                    <label>By submitting an application you agree to the privacy policy</label>
                </span>
                </form>
                {/* <Slide direction='right'  triggerOnce={true}>
              <Fade  triggerOnce={true}> */}
                <img src={b1} style={{width:'749px', height:'459px'}} alt="" className="contact-img" />
                {/* </Fade>
            </Slide> */}
            </div>
            <button onClick={handleClick} className='submit_btn' type='submit'>
                <span>Send Email</span>
                <img src={arrow} alt="" />
            </button>
        </div>
    </section>
  )
}

export default ContactUs