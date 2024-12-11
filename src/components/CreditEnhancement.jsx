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
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight mt-40">
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
  src="/assets/images/credit-score.jpg"
  alt="Credit Enhancement Showcase"
  className="showcase-image max-w-full rounded-lg shadow-lg"
  style={{
    objectFit: "cover",
    width: "80%",
    maxWidth: "700px",
    height: "auto",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  }}
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
            type="submit"
            className="glowing-button w-auto px-6 py-3 rounded-lg font-bold text-lg transition-colors relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            >
            JOIN 15,777+ USERS
        </motion.button>
         {/* Glowing Button CSS */}
      <style jsx>{`
        .glowing-button {
          background-color: #ffd700;
          color: #1a1a1a;
          overflow: hidden;
          z-index: 1;
          transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
        }

        .glowing-button:hover {
          box-shadow: 0 0 20px #ffd700, 0 0 40px #ffd700, 0 0 60px #ffd700;
        }

        .glowing-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(255, 215, 0, 0.8) 10%,
            rgba(255, 215, 0, 0) 60%
          );
          transform: translate(-50%, -50%);
          z-index: 0;
          filter: blur(30px);
          opacity: 0;
          transition: opacity 0.3s, transform 0.3s;
        }

        .glowing-button:hover::before {
          opacity: 1;
          transform: translate(0, 0);
        }

        .glowing-button:focus {
          outline: none;
        }
      `}</style>
        <div className="flex justify-center items-center mt-6 space-x-2">
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
    </div>
  );
};

export default CreditEnhancement;
