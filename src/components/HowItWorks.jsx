import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import steps from '../../public/assets/images/steps.jpg'; // Ensure correct path

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Image Animation
    gsap.from(imageRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top bottom',
        end: 'top center',
        scrub: 1,
      },
    });

    // Text Animation
    gsap.from(textRef.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top bottom',
        end: 'top center',
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="common-padding">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl text-white font-bold">How It Works</h1>
        <p className="text-lg text-white mt-4">Follow these 4 simple steps to improve your credit score with ease</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center bg-black py-16">
        {/* Animated Image */}
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

        {/* Animated Text Content */}
        <div
          className="w-full lg:w-1/2 px-6 lg:pl-10 lg:pr-6 mt-10 lg:mt-0"
          ref={textRef}
        >
          <div className="space-y-12">
            <div className="flex items-start mb-6">
              <div className="text-white">
                <h3 className="text-3xl font-semibold mb-2">
                  Step 1: Sign Up For Free
                </h3>
                <p>
                  Create your free account on the Metro2 Phenom website to
                  access the platform and start your credit repair journey.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="text-white">
                <h3 className="text-3xl font-semibold mb-2">
                  Step 2: Analyze Your Credit Report
                </h3>
                <p>
                  Use the AI-driven tools to review and analyze your credit
                  report, identifying areas that need improvement.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="text-white">
                <h3 className="text-3xl font-semibold mb-2">
                  Step 3: Choose Your Plan
                </h3>
                <p>
                  Select the subscription plan that best suits your needs to
                  start addressing your credit issues with full access to all
                  features and resources.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="text-white">
                <h3 className="text-3xl font-semibold mb-2">
                  Step 4: Generate and Send Metro2 Dispute Letters
                </h3>
                <p>
                  Leverage the AI-powered compliance technology to generate
                  personalized dispute letters and send them to credit bureaus,
                  working towards improving your credit score.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
