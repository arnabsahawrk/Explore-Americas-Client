import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountUpSection = () => {
  const [countOn, setCountOn] = useState(false);

  return (
    <section className="bg-[#F91842] text-gray-200">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-5 lg:py-10 text-center">
        <ScrollTrigger
          onEnter={() => {
            setCountOn(true);
          }}
          onExit={() => {
            setCountOn(false);
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                {countOn && (
                  <CountUp start={0} end={500} duration={3} delay={0} />
                )}
              </h2>
              <p className="text-sm font-medium">#of travels</p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                {countOn && (
                  <CountUp start={0} end={300} duration={3} delay={0} />
                )}
              </h2>
              <p className="text-sm font-medium">#of clients</p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                {countOn && (
                  <CountUp start={0} end={36} duration={3} delay={0} />
                )}
              </h2>
              <p className="text-sm font-medium">#of places</p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                {countOn && (
                  <CountUp start={0} end={50} duration={3} delay={0} />
                )}
              </h2>
              <p className="text-sm font-medium">#of countries</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default CountUpSection;
