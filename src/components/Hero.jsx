import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const Hero = () => {
  const videoRef = useRef(null);
  const userImagesRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  useEffect(() => {
    if (videoRef.current) {
      const checkVideoPlaying = () => {
        setIsPlaying(!videoRef.current.paused);
      };

      checkVideoPlaying();

      videoRef.current.addEventListener('play', checkVideoPlaying);
      videoRef.current.addEventListener('pause', checkVideoPlaying);

      return () => {
        videoRef.current.removeEventListener('play', checkVideoPlaying);
        videoRef.current.removeEventListener('pause', checkVideoPlaying);
      };
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  const toggleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted((prev) => !prev);
    }
  };

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col text-center px-4">
        {/* Titles */}
        <p className="hero-title text-3xl md:text-5xl text-white font-bold mt-40">
          NextGen <br />NEUTRAL CREDIT OPTIMIZER
        </p>
        <p className="hero-title text-xl md:text-2xl text-gray-300 mt-4">
          Transform Your Credit Score with the Precision of Artificial Intelligence
        </p>

        {/* Video Section */}
        <div className="w-full md:w-8/12 mt-10 relative">
          <video
            ref={videoRef}
            className="w-full h-auto rounded-lg shadow-lg border-4 border-gray-800 opacity-1"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src="/assets/videos/intro.mp4" type="video/mp4" />
            <source src="/assets/videos/intro.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          {/* Video Controls */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-4 z-10">
            <button
              onClick={togglePlayPause}
              className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-500"
              aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
            >
              {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
            </button>
            <button
              onClick={toggleMuteUnmute}
              className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-500"
              aria-label={isMuted ? 'Unmute Video' : 'Mute Video'}
            >
              {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
            </button>
          </div>
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
