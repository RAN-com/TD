import { useState, useEffect } from "react";
import banner from '../../assets/banner.jpg'
import banner2 from '../../assets/banner2.jpg'
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    img: banner,
    text: "Exclusive Deals Just for You!",
  },
  {
    id: 2,
    img: banner2,
    text: "New Arrivals Are Here!",
  },
  {
    id: 3,
    img: banner2,
    text: "Limited Time Offers!",
  },
];

export default function AutoSlideBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[50vh] sm:h-[70vh] overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={slide.img}
                alt="banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center pl-6 sm:pl-16">
                <h2 className="text-white text-2xl sm:text-4xl font-bold">
                  {slide.text}
                </h2>
                <button className="mt-4 bg-white text-black px-6 py-2 text-lg font-medium w-fit">
                  Shop Now
                </button>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
}
