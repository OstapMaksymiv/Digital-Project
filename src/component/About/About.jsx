import './styles/aboutStyles.css'
import aboutF from '@assets/aboutF.png'
import aboutS from '@assets/aboutS.png'
import aboutT from '@assets/aboutT.png'
import arrow from '@assets/arrow.svg';
import { Fade, Slide } from "react-awesome-reveal";
function About() {
  return (
    <section className='about'>
        <div className="container">
            <div className="about_block">
                <div className="block_background">
                    <div className="about_images">
                        <img src={aboutF} alt="" className="about-imgF" />
                        <img src={aboutT} alt="" className="about-imgT" />
                        <img src={aboutS} alt="" className="about-imgS" />
                    </div>
                    <div className="about_text">
                        <Fade triggerOnce={true} delay={300}>
                            <Slide direction='down' triggerOnce={true}>
                                <h1>About</h1>
                            </Slide>
                        </Fade>
                        <p>Construction is a complex and multifaceted process that requires a <b>high level</b> of organization and planning. From the erection of small residential homes to large-scale commercial projects, construction plays a <b>key role</b> in the development of urban infrastructure. </p>
                        <Fade triggerOnce={true} delay={500}>
                            <Slide direction='up' triggerOnce={true}>
                                <a href="#">
                                    <span>Read More</span>
                                    <img src={arrow} alt="" />
                                </a>
                            </Slide>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About