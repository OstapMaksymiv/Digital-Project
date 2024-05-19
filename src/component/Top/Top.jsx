import './styles/topStyles.css'
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import arrow from '@assets/arrow.svg';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
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
                          <Link to="/Projects">
                              <span>View Project</span>
                              <img src={arrow} alt="" />
                          </Link>
                        </Fade>
                    </div>
                    <div className='slideImg slide2'>
                        <p>Build your Way</p>
                        <Link to="#">
                            <i className="ri-arrow-up-s-line"></i>
                        </Link>
                    </div>
                    <div className='slideImg slide3'>
                        <div>
                            <h1>PROJECT</h1>
                            <h2>Glass-LA</h2>
                        </div>
                        <Link to="/Projects">
                            <span>View Project</span>
                            <img src={arrow} alt="" />
                        </Link>
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