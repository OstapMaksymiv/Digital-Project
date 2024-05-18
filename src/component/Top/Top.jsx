import './styles/topStyles.css'
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import arrow from '@assets/arrow.svg';
import { Fade } from "react-awesome-reveal";
const CustomPrevArrowW = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-prev-arrow slideArrow prev-arrow" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };
  
  const CustomNextArroww = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-next-arrow slideArrow next-arrow" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };
function Top() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <CustomPrevArrowW/>,
        nextArrow: <CustomNextArroww/>
      };

  return (
    <section className='top'>
        <div className="container">
            <div className="slider-container" style={{position:'relative'}}>
                <Slider className='slider' {...settings} >
                    <div className='slideImg slide1'>
                        <div>
                            <h1>PROJECT</h1>
                            <h2>W.L-House</h2>
                        </div>
                        <Fade triggerOnce={true}>
                          <a href="/Projects">
                              <span>View Project</span>
                              <img src={arrow} alt="" />
                          </a>
                        </Fade>
                    </div>
                    <div className='slideImg slide2'>
                        <p>Build your Way</p>
                        <a href="">
                            <i className="ri-arrow-up-s-line"></i>
                        </a>
                    </div>
                    <div className='slideImg slide3'>
                        <div>
                            <h1>PROJECT</h1>
                            <h2>Glass-LA</h2>
                        </div>
                        <a href="/Projects">
                            <span>View Project</span>
                            <img src={arrow} alt="" />
                        </a>
                    </div>
                    <div className='slideImg slide4'>
                    </div>
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default Top