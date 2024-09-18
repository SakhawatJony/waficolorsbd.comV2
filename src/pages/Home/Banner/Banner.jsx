
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import banner1 from "../../../assets/Bannar-Images/slide_10.jpg"
import banner2 from "../../../assets/Bannar-Images/slide_11.jpg"
import banner3 from "../../../assets/Bannar-Images/slide_12.jpg"
import banner4 from "../../../assets/Bannar-Images/slide_4.jpg"
import banner5 from "../../../assets/Bannar-Images/slide_5.jpg"
import banner6 from "../../../assets/Bannar-Images/slide_6.jpg"
import banner7 from "../../../assets/Bannar-Images/slide_7.jpg"
import banner8 from "../../../assets/Bannar-Images/slide_8.jpg"
import banner9 from "../../../assets/Bannar-Images/slide_9.jpg"



const Banner = () => {

    return (
        <>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                navigation

            >
                <SwiperSlide >
                    <img src={banner4} alt="Banner 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} alt="Banner 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} alt="Banner 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner1} alt="Banner 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner5} alt="Banner 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner6} alt="Banner 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner7} alt="Banner 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner8} alt="Banner 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner9} alt="Banner 3" />
                </SwiperSlide>

            </Swiper>

        </>
    );
};

export default Banner;