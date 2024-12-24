import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ReactPlayer from 'react-player';
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
      window.removeEventListener('reisze', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])
  
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
      <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p id="hero" className="hero-title"> NextGen <br />NEUTRAL CREDIT OPTIMIZER</p>
        <br/>
        <p id="hero" className="hero-title">
          Transform Your Credit Score with the Precision of Artificial Intelligence
        </p>
        <div className="w-full md:w-8/12 mt-6 sm:mt-10 flex justify-center">
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
        <ReactPlayer
              controls
              url="https://youtu.be/-qFpZQAZDdo"
              width="100%"
              height="100%"
              className="rounded-lg"
            />
        </div>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <a href="#highlights" className="btn"> STARTING AT ONLY $147/MO</a>
        <p className="font-normal text-xl">FIX YOUR CREDIT ISSUES FAST</p>
        <div className="flex items-center justify-center gap-1 mt-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="inline-block w-[15px] h-[15px] bg-white clip-star transition-transform duration-200 ease-[cubic-bezier(0.12,0.28,0.5,1.67)]"
            ></div>
          ))}
        </div>
        <p className="mt-2 text-gray-400 text-sm">Loved by 15,777+</p>

      </div>
    </section>
  )
}

export default Hero