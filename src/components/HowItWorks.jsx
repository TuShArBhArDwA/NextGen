import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import steps from '../../public/assets/images/steps.jpg';
import './style/HowItWorks.css'; 


gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const imageRef = useRef(null);
  const textRefs = useRef([]);
  const sectionRef = useRef(null);

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
        },
      }
    );

    textRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'top center',
            scrub: 1,
          },
        }
      );
    });

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
          className="w-full lg:w-1/2 flex justify-center"
          ref={imageRef}
        >
          <img
            src={steps}
            alt="How It Works"
            className="max-w-md w-full rounded-lg shadow-xl"
          />
        </div>
        <div
          className="w-full lg:w-1/2 px-6 lg:pl-10 lg:pr-6 mt-10 lg:mt-0 space-y-12 hiw-content"
        >
          {[ 
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
          ].map((step, index) => (
            <div
              key={index}
              className="flex flex-col text-white"
              ref={(el) => (textRefs.current[index] = el)}
            >
              <h3 className="text-3xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;