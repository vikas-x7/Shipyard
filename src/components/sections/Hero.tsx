"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";

function Hero() {
  const ref = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const blur = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["blur(0px)", "blur(100px)"],
  );

  const textOpacity = useTransform(scrollYProgress, [0, 0], [1, 0]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.01) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <section ref={ref} className="fixed w-full h-screen overflow-hidden">
        {/* Video layer */}
        <motion.video
          style={{ filter: blur }}
          className="absolute top-0 left-0 w-full h-full object-cover"
          preload="metadata"
          muted
          loop
          autoPlay
          playsInline
          src="https://res.cloudinary.com/dyv9kenuj/video/upload/v1770732487/22d7fbc7-2c17a5b1_yw79vd.mp4"
        />

        <div
          style={{
            backgroundColor: hasScrolled ? "#262624be" : "transparent",
            transition: "background-color 0.3s ease",
          }}
          className="relative z-100 flex items-center justify-between h-full text-white bg-[#262624be]"
        >
          <motion.div style={{ opacity: textOpacity }}>
            <h1 className="text-6xl p-7 font-tomorrow">
              Own every <br /> moment
            </h1>
          </motion.div>

          <motion.div
            style={{ opacity: textOpacity }}
            className="max-w-85 text-justify p-7 mr-15 font-outfit"
          >
            <p>
              The Frontify DAM simplifies brand workflows so marketing teams can
              deliver engaging experiences on a global scale fast.
            </p>

            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 bg-white text-black rounded-full">
                Book demo
              </button>
              <button className="border px-4 py-2 rounded-full">
                See the Platform
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="h-screen bg-black" />
    </>
  );
}

export default Hero;
