import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { rightImg, watchImg } from "../../public/assets/images";

import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-black flex items-center justify-center" // Added flex for centering
    >
      <div className="screen-max-width text-center"> {/* Ensures text is centered */}
        <div className="mb-12 w-full md:flex items-center justify-center"> {/* Center content inside this div */}
          <h1
            id="title"
            className="section-heading text-white text-6xl font-bold" // Large font size and bold text
            // style={{ fontFamily: "'Arial', sans-serif" }} // Inline font family
          >
            How It Works
          </h1>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
