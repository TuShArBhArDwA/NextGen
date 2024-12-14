import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ReactPlayer from 'react-player';

const Hero = () => {
  const userImagesRef = useRef(null);

  useGSAP(() => {
    // Title animations
    gsap.fromTo(
      '.hero-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 1 }
    );

    // Call-to-action animations
    gsap.fromTo(
      '#cta',
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'elastic.out(1, 0.6)', delay: 1.5 }
    );

    // Star animations
    gsap.fromTo(
      '.clip-star',
      { scale: 0, rotation: -90 },
      {
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.1,
        delay: 2,
      }
    );

    // User images slideshow animation
    const totalImages = 13;
    const imageWidth = 40;
    const totalWidth = totalImages * imageWidth;

    gsap.to(userImagesRef.current, {
      x: `-${totalWidth}px`,
      duration: 10,
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col text-center px-4">
        {/* Titles */}
        <p className="hero-title text-3xl md:text-5xl text-white font-bold mt-40 md:mt-24">
          NextGen <br />NEUTRAL CREDIT OPTIMIZER
        </p>
        <p className="hero-title text-xl md:text-2xl text-gray-300 mt-4">
          Transform Your Credit Score with the Precision of Artificial Intelligence
        </p>

        {/* Video Section */}
        <div className="w-full md:w-8/12 mt-10 flex justify-center">
          <ReactPlayer 
            controls 
            url='https://youtu.be/1OAjeECW90E?si=lUqtgv9J7DFtqHrt'
            width="100%" 
            height="480px" // Adjust this value as needed for your design
          />
        </div>
      </div>

      {/* CTA Section */}
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 mt-14 px-4 text-center"
      >
        <a
          href="#highlights"
          className="btn bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-400"
        >
          STARTING AT ONLY $147/MO
        </a>
        <p className="font-normal text-xl mt-6 text-white">FIX YOUR CREDIT ISSUES FAST</p>

        {/* Star Animation */}
        <div className="flex items-center justify-center gap-1 mt-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="inline-block w-[15px] h-[15px] bg-white clip-star transition-transform duration-200 ease-[cubic-bezier(0.12,0.28,0.5,1.67)]"
            ></div>
          ))}
        </div>
        <p className="mt-2 text-gray-400 text-sm">Loved by 15,777+</p>

        {/* User Images */}
        <div
          className="flex justify-center items-center mt-6 overflow-hidden"
          ref={userImagesRef}
        >
          <div className="flex space-x-1">
            {[...Array(13)].map((_, i) => (
              <img
                key={i}
                src={`/assets/images/t${i + 1}.png`}
                alt={`User t${i + 1}`}
                className="w-8 h-8 rounded-full border-2 border-gray-700"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
