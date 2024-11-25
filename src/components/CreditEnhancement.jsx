import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CreditEnhancement = () => {
  const showcaseRef = useRef(null);
  const featuresRef = useRef([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Showcase image animation
    gsap.fromTo(
      showcaseRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top 80%",
          end: "bottom 20%", // Delay the trigger for end position
          toggleActions: "play reverse play reverse", // Animate in and out
        },
      }
    );

    // Feature cards animation
    featuresRef.current.forEach((feature, index) => {
      gsap.fromTo(
        feature,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: feature,
            start: "top 90%", // Delay start a bit more
            end: "top 30%",   // Ensure it ends near the bottom of the feature
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // Sections animation (e.g., title, CTA)
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%", // Trigger later, when it's closer to the viewport
            end: "top 25%",   // Ensure it ends later when the section is almost at the end
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div id="home" className="credit-enhancement bg-black text-white py-16 px-6 lg:px-20">
      {/* Title Section */}
      <div
        className="text-center mb-12"
        ref={(el) => sectionsRef.current.push(el)}
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
          Transform Your Credit: The Ultimate AI-Powered Enhancement Journey
        </h1>
        <p className="text-gray-400 text-lg">
          Discover how AI can help you fix your credit faster and smarter.
        </p>
      </div>

      {/* Visual Showcase Section */}
      <div
        className="visual mb-16 flex justify-center"
        ref={showcaseRef}
      >
        <motion.img
          src="https://via.placeholder.com/800x400"
          alt="Credit Enhancement Showcase"
          className="showcase-image max-w-full rounded-lg shadow-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/800x400/444/fff?text=Image+Unavailable";
          }}
        />
      </div>

      {/* Features Section */}
      <div className="features grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {[
          {
            icon: "🤖",
            title: "Automated Credit Assessment",
            description:
              "Negative and inaccurate items are automatically identified.",
          },
          {
            icon: "📄",
            title: "Personalized Next Gen Letters",
            description:
              "Avoid using generic templates. The software generates dispute letters.",
          },
          {
            icon: "💰",
            title: "Increased Revenue Streams",
            description:
              "Generate income with a single subscription that provides credit repair services for both you and a friend or family member.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            ref={(el) => (featuresRef.current[index] = el)}
            className="feature-card bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-2xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="icon text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div
        className="cta text-center mt-16"
        ref={(el) => sectionsRef.current.push(el)}
      >
        <p className="text-lg text-gray-400 mb-6">
          Join the{" "}
          <span className="text-yellow-400 font-bold">NextGen</span> credit
          repair software and start your journey today.
        </p>
        <motion.button
          className="cta-button bg-yellow-400 text-black py-3 px-8 rounded-full font-bold text-lg hover:bg-yellow-500 transition-transform transform hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Join 12,300+ People
        </motion.button>
      </div>
    </div>
  );
};

export default CreditEnhancement;
