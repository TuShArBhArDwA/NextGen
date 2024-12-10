import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const Hero = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause
  const [isMuted, setIsMuted] = useState(true); // State to track mute/unmute

  useGSAP(() => {
    gsap.to('.hero-title', { opacity: 1, delay: 2 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);

  // Use effect to set the initial state based on the video element
  useEffect(() => {
    if (videoRef.current) {
      // Check if the video is playing on mount
      const checkVideoPlaying = () => {
        setIsPlaying(!videoRef.current.paused); // Set isPlaying based on paused state
      };

      // Set the initial state based on the video status
      checkVideoPlaying();

      // Add event listener for the video's play and pause events
      videoRef.current.addEventListener('play', checkVideoPlaying);
      videoRef.current.addEventListener('pause', checkVideoPlaying);

      // Clean up the event listeners on unmount
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
      setIsPlaying((prev) => !prev); // Toggle play/pause state
    }
  };

  const toggleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted; // Mute or unmute the video
      setIsMuted((prev) => !prev); // Toggle mute state
    }
  };

  return (
    <section className="w-full nav-height bg-black relative">
      {/* Hero Content */}
      <div className="h-5/6 w-full flex-center flex-col text-center">
        <p className="hero-title text-3xl md:text-5xl text-white font-bold">
          COMBATIVE CREDIT REPAIR SOFTWARE
        </p>
        <p className="hero-title text-xl md:text-2xl text-gray-300 mt-2">
          Elevate Your Credit Score with the Power of Ai
        </p>

        {/* Video Section */}
        <div className="w-10/12 md:w-8/12 mt-6 relative">
          <video
            ref={videoRef}
            className="w-full h-auto rounded-lg shadow-lg border-4 border-gray-800"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="../../public/assets/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause and Mute/Unmute Controls */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-4 z-10">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-500"
              aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
            >
              {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
            </button>

            {/* Mute/Unmute Button */}
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
        className="flex flex-col items-center opacity-0 translate-y-20 mt-10"
      >
        <a
          href="#highlights"
          className="btn bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-400"
        >
          STARTING AT ONLY $147/MO
        </a>
        <p className="mt-4 text-xl text-gray-300">FIX YOUR CREDIT ISSUES FAST</p>

        {/* Star Ratings */}
        <div className="flex items-center justify-center gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="inline-block w-[15px] h-[15px] bg-white clip-star transition-transform duration-200 ease-[cubic-bezier(0.12,0.28,0.5,1.67)]"
            ></div>
          ))}
        </div>
        <p className="mt-2 text-gray-400">Loved by 12,300+</p>

        {/* User Avatars */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          {Array.from({ length: 15 }).map((_, i) => (
            <img
              key={i}
              src={`/path-to-user-image-${i}.png`} // Replace with actual image paths
              alt={`User ${i}`}
              className="w-8 h-8 rounded-full border-2 border-gray-700"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
