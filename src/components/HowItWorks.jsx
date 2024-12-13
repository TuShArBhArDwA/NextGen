import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import card3d from '../../public/assets/images/card3d.png';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const steps = [
    {
      title: 'Step 1: Sign Up For Free',
      description:
        'Create a free account on the Next Gen website to gain access to the platform and begin your credit repair journey.',
    },
    {
      title: 'Step 2: Examine Your Credit Report',
      description:
        'Utilize AI-driven technologies to examine and assess your credit record, pinpointing areas requiring enhancement.',
    },
    {
      title: 'Step 3: Select your plan',
      description:
        'Choose the subscription package that most effectively addresses your requirements to commence resolving your credit troubles with complete access to all features and resources.',
    },
    {
      title: 'Step 4: Produce and Dispatch Next Generation Dispute Correspondence',
      description:
        'Utilize AI-powered compliance technology to write individualized dispute letters and send them to credit bureaus, thereby increasing your credit score.',
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  };

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    const handleHashChange = () => {
      if (window.location.hash === '#how-it-works') {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          ScrollTrigger.refresh(true);
        }, 500);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    if (window.location.hash === '#how-it-works') {
      handleHashChange();
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="common-padding">
      <div className="text-center mb-16">
        <h1 className="text-5xl text-white font-bold">How It Works</h1>
        <p className="text-lg text-white mt-4">
          Follow these 4 simple steps to improve your credit score with ease
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center bg-black py-16">
        <div
          className="hiw-image-container lg:w-1/2 flex justify-center"
          ref={imageRef}
          style={{
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <img
            src={card3d}
            alt="How It Works"
            className="hiw-image"
            style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
        <div className="lg:w-1/2 px-6 lg:px-16 relative mt-10 lg:mt-0">
          <div
            className="card bg-gray-800 text-white p-10 rounded-lg shadow-lg transform transition-transform text-center flex flex-col justify-center"
            style={{
              width: '100%',
              height: '100%',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) rotateY(5deg)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3 className="text-4xl font-bold mb-6">{steps[currentSlide].title}</h3>
            <p className="text-xl leading-relaxed">{steps[currentSlide].description}</p>
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 new-user-btn"
            onClick={handlePrevSlide}
          >
            &#8592;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 new-user-btn"
            onClick={handleNextSlide}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
