import { useEffect, useState } from "react";
import newsTitleLogo from "../../assets/TitleBg/p2.png";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const LatestNews = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="container mx-auto my-24" >
      <img className="mx-auto my-12" src={newsTitleLogo} alt="news title" />
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 4000 }}
        >
          {news?.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestNews;
