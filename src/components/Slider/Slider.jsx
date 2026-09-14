// components/Slider.jsx
import Product from "../Home/Product/Product.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ items }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Swiper
        className="custom-swiper relative  h-[27rem] "
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Product {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
