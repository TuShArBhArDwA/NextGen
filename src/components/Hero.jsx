import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useGSAP(() => {
    gsap.to('.hero-title', { opacity: 1, delay: 2 });
    gsap.to(videoRef.current, { opacity: 1, delay: 2 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
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
          COMBATIVE CREDIT REPAIR SOFTWARE
        </p>
        <p className="hero-title text-xl md:text-2xl text-gray-300 mt-4">
          Elevate Your Credit Score with the Power of Ai
        </p>
        {/* Video Section */}
        <div className="w-full md:w-8/12 mt-10 relative">
          <video
            ref={videoRef}
            className="w-full h-auto rounded-lg shadow-lg border-4 border-gray-800 opacity-0"
            autoPlay
            muted={isMuted}
            loop
            playsInline
          >
            <source src="/assets/videos/intro.mp4" type="video/mp4" />
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
        <p className="font-normal text-xl mt-6 text-white">
          FIX YOUR CREDIT ISSUES FAST
        </p>
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
        <div className="flex justify-center items-center mt-6 flex-wrap gap-3">
        {['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9', 't10','t11','t12','t13'].map((name, i) => (
          <img
            key={i}
            src={`/assets/images/${name}.png`}
            alt={`User ${name}`}
            className="w-8 h-8 rounded-full border-2 border-gray-700"
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Hero;