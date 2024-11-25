import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">COMBATIVE CREDIT REPAIR SOFTWARE</p>
        <p id="hero" className="hero-title">Elevate Your Credit Score
        with the Power of Ai</p>
        {/* <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div> */}
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">STARTING AT ONLY $147/MO</a>
        <p className="font-normal text-xl">FIX YOUR CREDIT ISSUES FAST</p>
        <div class="flex items-center justify-center gap-1">
          <div class="inline-block w-[15px] h-[15px] bg-white clip-star transition-transform duration-200 ease-[cubic-bezier(0.12,0.28,0.5,1.67)]"></div>
          <div class="inline-block w-[15px] h-[15px] bg-white clip-star transition-transform duration-200 ease-[cubic-bezier(0.12,0.28,0.5,1.67)]"></div>
          <div class="inline-block w-[15px] h-[15px] bg-white clip-star transition-transform duration-200 ease-[cubic-bezier(0.12,0.28,0.5,1.67)]"></div>
          <div class="inline-block w-[15px] h-[15px] bg-white clip-star transition-transform duration-200 ease-[cubic-bezier(0.12,0.28,0.5,1.67)]"></div>
          <div class="inline-block w-[15px] h-[15px] bg-white clip-star transition-transform duration-200 ease-[cubic-bezier(0.12,0.28,0.5,1.67)]"></div>
        </div>

        <p>Loved by 12,300+</p>
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
  )
}

export default Hero