import Nav from "../common/Nav/Nav";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Typewriter } from "react-simple-typewriter";

const HomeBanner = () => {
  return (
    <header className="relative">
      {/* Nav */}
      <Nav />
      {/* Banner  */}
      <section>
        <div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            effect="fade"
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
          >
            {/* United States of America */}
            <SwiperSlide>
              <img
                className="w-full object-cover h-[400px] md:h-[500px] lg:h-screen"
                src="https://i.postimg.cc/xjs7KchP/United-States-of-America.jpg"
                alt="United States of America"
              />
            </SwiperSlide>
            {/* Canada */}
            <SwiperSlide>
              <img
                className="w-full object-cover h-[400px] md:h-[500px] lg:h-screen"
                src="https://i.postimg.cc/jdpMXNXy/Canada.jpg"
                alt="Canada"
              />
            </SwiperSlide>
            {/* Brazil */}
            <SwiperSlide>
              <img
                className="w-full object-cover h-[400px] md:h-[500px] lg:h-screen"
                src="https://i.postimg.cc/7hvpTcfT/Brazil.jpg"
                alt="Brazil"
              />
            </SwiperSlide>
            {/* Peru */}
            <SwiperSlide>
              <img
                className="w-full object-cover h-[400px] md:h-[500px] lg:h-screen"
                src="https://i.postimg.cc/Sxt1M5PN/Peru.jpg"
                alt="Peru"
              />
            </SwiperSlide>
            {/* Mexico */}
            <SwiperSlide>
              <img
                className="w-full object-cover h-[400px] md:h-[500px] lg:h-screen"
                src="https://i.postimg.cc/BnGnGYpb/Mexico.jpg"
                alt="Mexico"
              />
            </SwiperSlide>
            {/* Argentina */}
            <SwiperSlide>
              <img
                className="w-full object-cover h-[400px] md:h-[500px] lg:h-screen"
                src="https://i.postimg.cc/QC1VpRSL/Argentina.jpg"
                alt="Argentina"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Home Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 z-10  overflow-hidden bg-gray-200 dark:bg-gray-800 bg-opacity-25 dark:bg-opacity-50">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-base md:text-2xl lg:text-4xl lg:leading-normal font-extrabold text-gray-800 dark:text-gray-200">
              Embark on a journey to the most breathtaking destinations in the
              Americas, like{" "}
              <span className="text-[#F91842]">
                <Typewriter
                  words={[
                    "the Statue of Liberty in New York, USA",
                    "CN Tower in Toronto, Canada",
                    "Christ the Redeemer in Rio de Janeiro, Brazil",
                    "Machu Picchu in Cusco, Peru",
                    "Chichen Itza in Yucatan, Mexico",
                    "Perito Moreno Glacier in Patagonia, Argentina",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={500}
                />
              </span>
            </h1>
          </div>
        </div>
      </section>
    </header>
  );
};

export default HomeBanner;
