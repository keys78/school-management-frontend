import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import AOS from 'aos'


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";


// import required modules
import { FreMode, Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import styled from 'styled-components';

const Hero = () => {

    function removeCC () {
        const cardo = document.querySelector('.card')
        cardo.hide(0);
        cardo.removeClass('aos-init').removeClass('aos-animate');
         AOS.init();
    }

    // function startCC () {
    //         document.querySelector('.card').show(0);
    //         AOS.init();
    // }

    // AOS.init({
    //     duration: 600,
    //     once: true
    // });
    return (
        <>
            <SlidesContainer>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    freeMode
                    pagination={{
                        type: "progressbar",
                    }}
                    speed={3000}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    slideChangeTransitionStart={ removeCC() }
                    // slideChangeTransitionEnd={startCC()}
                    modules={[Autoplay, Pagination, Navigation, FreeMode]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <SliderContainer data-aos="fade-right">
                            <img src="https://images.pexels.com/photos/2305203/pexels-photo-2305203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="alt-2" />
                            <Content className='card' data-aos="fade-right">
                                <h1>Welcome To e-school</h1>
                                {/* <Link to="/login">Login</Link> */}
                            </Content>
                        </SliderContainer>
                        <SliderContainer data-aos="fade-right">
                            <img src="https://images.pexels.com/photos/2305203/pexels-photo-2305203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="alt-2" />
                            <Content className='card' data-aos="fade-right">
                                <h1>Welcome To e-school</h1>
                                {/* <Link to="/login">Login</Link> */}
                            </Content>
                        </SliderContainer>
                        <SliderContainer data-aos="fade-right">
                            <img src="https://images.pexels.com/photos/2305203/pexels-photo-2305203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="alt-2" />
                            <Content className='card' data-aos="fade-right">
                                <h1>Welcome To e-school</h1>
                                {/* <Link to="/login">Login</Link> */}
                            </Content>
                        </SliderContainer>
                        <SliderContainer data-aos="fade-right">
                            <img src="https://images.pexels.com/photos/2305203/pexels-photo-2305203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="alt-2" />
                            <Content className='card' data-aos="fade-right">
                                <h1>Welcome To e-school</h1>
                                {/* <Link to="/login">Login</Link> */}
                            </Content>
                        </SliderContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderContainer data-aos="fade-right">
                            <img src="https://images.pexels.com/photos/2305203/pexels-photo-2305203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="alt-2" />
                            <Content className='card' data-aos="fade-right">
                                <h1>Welcome To e-school</h1>
                                {/* <Link to="/login">Login</Link> */}
                            </Content>
                        </SliderContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderContainer data-aos="fade-right">
                            <img src="https://images.pexels.com/photos/2305203/pexels-photo-2305203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="alt-2" />
                            <Content className='card' data-aos="fade-right">
                                <h1>Welcome To e-school</h1>
                                {/* <Link to="/login">Login</Link> */}
                            </Content>
                        </SliderContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderContainer data-aos="fade-right">
                            <img src="https://images.pexels.com/photos/2305203/pexels-photo-2305203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="alt-2" />
                            <Content className='card' data-aos="fade-right">
                                <h1>Welcome To e-school</h1>
                                {/* <Link to="/login">Login</Link> */}
                            </Content>
                        </SliderContainer>
                    </SwiperSlide>
                    {/* <SwiperSlide><img src="https://images.pexels.com/photos/2305203/pexels-photo-2305203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="alt-2" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.pexels.com/photos/2305203/pexels-photo-2305203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="alt-2" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.pexels.com/photos/2305203/pexels-photo-2305203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="alt-2" /></SwiperSlide> */}
                </Swiper>
            </SlidesContainer>

        </>
    );
}

const SlidesContainer = styled.div`
    background: #000;
`

const SliderContainer = styled.div`
    position: relative;
    width:100%;
    overflow:hidden;

  


`
const Content = styled.div`
    background: #00000067;
    position: absolute;
    width: 100%;
    height: 100%;

    animation: 4s slide-slow;
    top: 0;
    z-index: 999 !important;

    @keyframes slide-slow {
     from {
       margin-left: 100%;
       width: 300%;
     }

     to {
       margin-slow: 0%;
       width: 100%;
     }
   }

    & > h1 { color: #fff; }
`
export default Hero;

// var swiper = new Swiper('.swiper-container', {
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     on: {
//       slideChangeTransitionStart: function () {
//         document.querySelector('.card').hide(0);
//         document.querySelector('.card').removeClass('aos-init').removeClass('aos-animate');
//       },
//       slideChangeTransitionEnd: function () {
//         document.querySelector('.card').show(0);
//         AOS.init();
//       },
//     } 
  
  
//   }); 
  
//   AOS.init();