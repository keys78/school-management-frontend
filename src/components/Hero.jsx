import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useHistory } from 'react-router-dom';


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";


// import required modules
import { FreMode, Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import styled from 'styled-components';
import { useState } from 'react';

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const history = useHistory();
    const [slides] = useState([
        {
            logo: true,
            text: 'Welcome To E-School',
            subText: 'Where great minds achieve wonders',
            img:'https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            text:'Explore the power of knowledge',
            img:'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            text:'We believe in excellence',
            img:'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            text: 'E-School is what you make it',
            subText: 'Explore our undergraduate prospectus for 2023 admission',
            link: true,
            img:'https://images.pexels.com/photos/7683897/pexels-photo-7683897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

            
        },
    ])

    const runChange = (value) => { setActiveSlide(value.realIndex) }

    return (
        <SlidesContainer>
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                pagination={{
                    type: "progressbar",
                }}
                speed={3000}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                onSlideChange={(e) => runChange(e)}
                modules={[Autoplay, Pagination, Navigation, FreeMode]}
                className="mySwiper"
            >
                 {(slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <SliderContainer>
                            <img src={slide.img} />
                            <Content className={i === activeSlide ? 'new-anime' : 'bg-red-500'}>
                                <div>
                                    <h1>{slide.text}</h1>
                                    <h2>{slide.subText}</h2>
                                    <h6>{slide.link && <ElButtono onClick={() => history.push('/login')}>Login</ElButtono>}</h6>
                                </div>
                            </Content>
                        </SliderContainer>
                    </SwiperSlide>
                 )))}
            </Swiper>
        

        </SlidesContainer>
    );
}

const SlidesContainer = styled.section`
    /* margin-top:90px ; */
    background: #000;
    height:100% ;
    

    & > img { width: 100%; height: 100%; }
    @media screen and (min-width: 1024px){
      height: calc(100vh - 90px) ;
    }
`

const SliderContainer = styled.div`
    position: relative;
    width:100%;
    overflow:hidden;
   

   
`
const Content = styled.div`
    background: #00000047;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 999 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
   
    & > div {
        width: 100%;
        height: 100%;
        text-align: center;

        & > h1 { font-size: 50px; font-weight:900; color: #fff; padding-top:200px;
            @media screen and (max-width: 767px) { font-size:32px ;  padding-top:100px; }
            @media screen and (max-width: 480px) { font-size:25px ; padding-top:80px; }
        }
        & > h2 { font-size: 20px; font-weight:400; color: #fff;
            @media screen and (max-width: 767px) {
            font-size:18px ;
             }
            @media screen and (max-width: 480px) {
            font-size:16px ; 
             }
        }
    }
    & > h1 { color: #fff; }
`

const ElButtono = styled.button`
    padding:5px 20px; background: linear-gradient(to right, #c31432, #240b36);; color: #fff; margin-top: 20px;
`

export default Hero;