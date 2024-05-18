import { useState, useEffect, createRef, useRef} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, A11y, Scrollbar, Pagination, Navigation } from 'swiper/modules';
import { storage } from '../../Firebase/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/phtgalleryStyles.css';
function PhtGallery() {
    const [imageListSL1, setimageListSL1] = useState([]);
    const imageListRefSL1 = ref(storage, "slider1/");
    const [photosLoaded, setPhotosLoaded] = useState(false);
    const [imageListSL2, setimageListSL2] = useState([]);
    const[slidesBtw,setslidesBtw] = useState(false)
    const[slidesShow,setslidesShow] = useState(5)
    const imageListRefSL2 = ref(storage, "slider2/");

    useEffect(() => {
        const fetchData = async () => {
            await listAll(imageListRefSL1).then((response) => {
              response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                  setimageListSL1((prev) => [...prev, url])
                })
              })
            })
            await listAll(imageListRefSL2).then((response) => {
                response.items.forEach((item) => {
                  getDownloadURL(item).then((url) => {
                    setimageListSL2((prev) => [...prev, url])
                  })
                })
              })
            setPhotosLoaded(true);
          };
          fetchData();
    },[])
    setInterval(() => {
        if(window.innerWidth <= 1090 && window.innerWidth > 750){
            setslidesBtw(true)
            setslidesShow(3)
        }
        else if(window.innerWidth > 1090){
            setslidesBtw(false)
            setslidesShow(5)
        }
        else if(window.innerWidth <= 750 && window.innerWidth > 530 ){
            setslidesShow(2)
        }
        else if(window.innerWidth <= 530){
            setslidesShow(1)
        }
    }, 1000)
    const [modalWrapper, setModalWrapper] = useState('modal-wrapper');
    const [modalCoordWrapper, setModalCoordWrapper] = useState('modal-coordinates-wrapper');
    const body = document.querySelector('body');
    const modalMenu = useRef(null)
    const modalWrapperRef = createRef();
    const modalCoordWrapperRef = createRef();
    const [isModalOpen, setIsMadalOpen] = useState(false);
    const [canbeClick, setCanbeClick] = useState(true);


    function closeInterface(e){
        if (modalMenu.current.contains(e.target)) {
            return;
        }
        if (modalMenu.current && modalMenu.current.classList.contains('modal-menu-on') && isModalOpen === true) {
            if (!modalMenu.current.classList.contains(e.target)) {
                body.classList.remove('lock');
                modalMenu.current.classList.remove('modal-menu-on');
                modalMenu.current.classList.add('modal-menu-closing');
                
                setModalWrapper('modal-wrapper modal-wrapper-on');
                setTimeout(() => {
                    setModalWrapper('modal-wrapper');
                    modalMenu.current.removeAttribute('style');
                    modalMenu.current.classList.remove('modal-menu-closing');
    
                    setCanbeClick(true);
                    setIsMadalOpen(false)
                }, 500);
            }
        }
    }
    const [modalMenuWidth, setModalMenuWidth] = useState(500);

    useEffect(() => {
        if (modalMenu.current) {
            setModalMenuWidth(modalMenu.current.offsetWidth);
        }
    }, [modalMenu.current]);
    function OpenModalMenu(event) {
        setCanbeClick(false);
        const targetSlide = event.currentTarget;
        const ImgURL = targetSlide.getAttribute('src');
        if (modalMenu.current.children[0]) {
            modalMenu.current.children[0].setAttribute('src', ImgURL);
        }
        setModalWrapper('modal-wrapper modal-wrapper-on');
        modalMenu.current.setAttribute('style', 'transform: scale(1)');
        const wrapperPadding = Number(getComputedStyle(modalWrapperRef.current)['padding-left'].slice(0, -2));
        const menuSidesWidth = (modalMenuWidth - 310) / 2;
        const modalX = targetSlide.getBoundingClientRect().x - wrapperPadding - menuSidesWidth;
        const modalY = targetSlide.getBoundingClientRect().y / 3.5;
        body.classList.add('lock');
        setTimeout(() => {
            setModalWrapper('modal-wrapper modal-wrapper-on modal-wrapper-blackout');
            modalMenu.current.setAttribute('style', `top: ${modalY}px; left: ${modalX}px`);
        }, 10);
        setTimeout(() => {
            modalMenu.current.setAttribute('style', ` opacity: 1;transform: scale(1);  transition: 0.7s ease`);
            modalMenu.current.classList.add('modal-menu-on');
        }, 60);
        setTimeout(() => {
            setIsMadalOpen(true);
        }, 560);
    }

    return (
        <>
        {photosLoaded ? (
            <section className='gallery'>
                <div className={modalWrapper} ref={modalWrapperRef} onClick={(e) => closeInterface(e)}>
                    <div className={modalCoordWrapper} ref={modalCoordWrapperRef} >
                        <div className="modal-menu" ref={modalMenu} >
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h1 className="title">
                        Photo
                        <span>Gallery</span>
                    </h1>
                    <Swiper
                        spaceBetween={slidesBtw ? 0 : 20}
                        slidesPerView={slidesShow}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay,Scrollbar,A11y]}
                    >
                        <div className="swiper-wrapper">
                            {imageListSL1.map((url) => (
                                <SwiperSlide key={v4()}><img  onClick={canbeClick ? (e) => OpenModalMenu(e) : null} src={url} /></SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                    <Swiper
                        spaceBetween={slidesBtw ? 0 : 20}
                        slidesPerView={slidesShow}

                        loop={true}
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            reverseDirection:true,
                        }}
                        modules={[Autoplay,Scrollbar,A11y, Pagination, Navigation]}
                    >
                        <div className="swiper-wrapper">
                            {imageListSL2.map((url) => (
                                <SwiperSlide key={v4()}><img  onClick={canbeClick ? (e) => OpenModalMenu(e) : null}  src={url} /></SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </section>
            ) :  (
                <div className="bg-loader">
                    <span className="loader"></span>
                </div>
            )  }
        </>
    );
}

export default PhtGallery;
