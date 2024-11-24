import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    // GSAP animation for card on scroll
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      id="pricing"
      className="bg-black text-white py-16 flex flex-col items-center"
    >
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">Finally, Unlock Better Credit.</h2>
        <p className="text-lg text-gray-400">
          Join The NextGen software today, enjoy unrestricted access to ALL
          content and benefits PLUS today's limited-time bonuses.
        </p>
      </div>

      {/* Motion card with hover and click animations */}
      <motion.div
        ref={cardRef}
        className="w-full max-w-lg bg-gray-900 text-center rounded-lg shadow-lg p-8"
        whileHover={{ scale: 1.1 }} // Zoom on hover
        whileTap={{ scale: 1.15 }} // Slightly more zoom on click
        transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
      >
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <div className="text-gray-400 line-through text-lg">$597/mo</div>
          <div className="text-4xl font-bold" style={{ color: "#FFD700" }}>
            $147
          </div>
          <div className="text-gray-400 text-sm">/month</div>
        </div>

        <ul className="text-left text-sm space-y-4 mb-6">
          {[
            "Service 1-4 People / Month",
            "Generate Unlimited Metro 2 Letters Per Attach",
            "6 NextGen Attack Types Included",
            "Free Live Weekly Software Training",
            "Free Support Community Access",
            "Printing & Mailing Service Available",
            "1:1 Training Support Available",
            "Add Unlimited Clients",
            "Client Portal Available",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> {item}
            </li>
          ))}
        </ul>

        <button className="glowing-button relative inline-block text-white py-3 px-6 rounded-lg font-bold transition-colors">
          Fix My Credit ASAP
        </button>
        <p className="text-xs text-gray-400 mt-2">Hurry, Price Increasing Soon</p>
      </motion.div>

      {/* Styles for glowing button */}
      <style jsx>{`
        .glowing-button {
          position: relative;
          overflow: hidden;
          z-index: 1;
          transition: background-color 0.3s, color 0.3s;
        }

        .glowing-button:hover {
          background-color: #ffd700; /* Gold background */
          color: #1a1a1a; /* Dark text on hover */
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
          outline: none; /* Removes focus outline */
        }
      `}</style>
    </div>
  );
};

export default Pricing;
