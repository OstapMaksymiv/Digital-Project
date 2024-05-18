import './styles/mainfocusStyles.css'
import { Fade, Slide } from "react-awesome-reveal";
function MainFocus() {
  return (
    <section className="main-focus">
        <div className="container">
            <div className="main-focus_info">
                <Fade triggerOnce={true} delay={300}>
                    <Slide direction='down' triggerOnce={true}>
                        <h1>Main Focus/Mission Statement</h1>
                    </Slide>
                </Fade>
                <div className="statements">
                    <article className="statement-F">
                        <Fade triggerOnce={true} delay={500}>
                            <Slide direction='up' triggerOnce={true}>
                                <span>1</span>
                            </Slide>
                        </Fade>
                        <Fade triggerOnce={true} delay={700}>
                            <Slide direction='right' triggerOnce={true}>
                                <p>High-quality materials are essential for ensuring durability and longevity.</p>
                          </Slide>
                        </Fade>                      
                    </article>
                    <article className="statement-S">
                        <Fade triggerOnce={true} delay={700}>
                            <Slide direction='up' triggerOnce={true}>
                                <span>2</span>
                            </Slide>
                        </Fade>
                        <Fade triggerOnce={true} delay={700}>
                            <Slide direction='right' triggerOnce={true}>
                                <p>Whether it's residential or commercial projects, the focus on structural integrity and aesthetic appeal is paramount.</p>
                          </Slide>
                        </Fade>       
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainFocus