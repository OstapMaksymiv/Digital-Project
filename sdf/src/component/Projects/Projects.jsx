import project1 from '@assets/v1.jpg';
import project2 from '@assets/v2.jpg';
import project3 from '@assets/v5.jpg';
import arrow from '@assets/white-arrow.svg';
import './styles/projectsStyles.css'
import { Fade, Slide } from "react-awesome-reveal";
function Projects() {
  return (
    <section className="projects">
        <div className="container">
            <Fade triggerOnce={true} delay={300}>
                <Slide direction='down' triggerOnce={true}>
                    <h2>Our Projects</h2>
                </Slide>
            </Fade>
            <div className="projects-images">
                    <div className="project-block_img">
                        <a href='/Projects'>
                            <div className='background_link'>
                                <h3>Route Project</h3>
                                <p>
                                    <span>View Project</span>
                                    <img src={arrow} alt="" />
                                </p>
                            </div>
                        </a>
                    </div>
                <Fade triggerOnce={true} delay={300}>
                    <img src={project2} alt="" className='first-project'/>
                </Fade>
                <Fade triggerOnce={true}  delay={500}>
                    <img src={project1} alt="" className='second-project'/>
                </Fade>
                <img src={project3} alt="" className='third-project'/>
            </div>
            <Fade triggerOnce={true} delay={600}>
                <a className='project-link' href="/Projects">
                    <span>All Projects</span>
                    <img src={arrow} alt="" />
                </a>
            </Fade>
        </div>
    </section>
  )
}

export default Projects