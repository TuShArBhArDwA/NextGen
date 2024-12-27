import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const plans = {
    "Individual Plans": [
      {
        name: "Iron Package",
        price: "$97/month",
        services: [
          "Service 1 people/month",
          "Generate Unlimited NextGen Letters Per Attack",
          "Artificial Intelligence Generated Letters",
          "Free Live Weekly Software Training",
          "Free Support Community Access",
          "Printing & Mailing Service Available",
          "1:1 Training Support Available",
          "Client Portal Available",
        ],
      },
      {
        name: "Bronze Package",
        price: "$147/month",
        services: [
          "Service 1-4 people/month",
          "Generate Unlimited NextGen Letters Per Attack",
          "Artificial Intelligence Generated Letters",
          "Free Live Weekly Software Training",
          "Free Support Community Access",
          "Printing & Mailing Service Available",
          "1:1 Training Support Available",
          "Add Unlimited Clients",
          "Client Portal Available",
        ],
      },
    ],
    "Business Plans": [
      {
        name: "Silver Package (Most recommended)",
        price: "$197/month",
        services: [
          "Service 8 people/month",
          "Generate Unlimited NextGen Letters Per Attack",
          "Artificial Intelligence Generated Letters",
          "Free Live Weekly Software Training",
          "Free Support Community Access",
          "Printing & Mailing Service Available",
          "1:1 Training Support Available",
          "Add Unlimited Clients",
          "Client Portal Available",
        ],
      },
      {
        name: "Gold Package",
        price: "$297/month",
        services: [
          "Service 17 people/month",
          "Generate Unlimited NextGen Letters Per Attack",
          "Artificial Intelligence Generated Letters",
          "Free Live Weekly Software Training",
          "Free Support Community Access",
          "Printing & Mailing Service Available",
          "1:1 Training Support Available",
          "Add Unlimited Clients",
          "Client Portal Available",
        ],
      },
    ],
    "Enterprise Plans": [
      {
        name: "Platinum Package",
        price: "$397/month",
        services: [
          "Service 30 people/month",
          "Generate Unlimited NextGen Letters Per Attack",
          "Artificial Intelligence Generated Letters",
          "Free Live Weekly Software Training",
          "Free Support Community Access",
          "Printing & Mailing Service Available",
          "1:1 Training Support Available",
          "Add Unlimited Clients",
          "Client Portal Available",
        ],
      },
      {
        name: "Diamond Package",
        price: "$997/month",
        services: [
          "Service 100 people/month",
          "Generate Unlimited NextGen Letters Per Attack",
          "Artificial Intelligence Generated Letters",
          "Free Live Weekly Software Training",
          "Free Support Community Access",
          "Printing & Mailing Service Available",
          "1:1 Training Support Available",
          "Add Unlimited Clients",
          "Client Portal Available",
        ],
      },
    ],
  };

  return (
    <div id="pricing" className="bg-black text-white py-16">
      {Object.entries(plans).map(([section, cards]) => (
        <div key={section} className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">{section}</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {cards.map((plan, index) => (
              <motion.div
                key={index}
                ref={(el) => sectionsRef.current.push(el)}
                className="w-full max-w-sm bg-gray-900 text-center rounded-lg shadow-lg p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="text-xl font-bold mb-4">{plan.name}</div>
                <div className="text-4xl font-bold mb-4" style={{ color: "#FFD700" }}>
                  {plan.price}
                </div>
                <ul className="text-left text-sm space-y-2 mb-4">
                  {plan.services.map((service, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> {service}
                    </li>
                  ))}
                </ul>
                <button className="glowing-button text-white py-2 px-4 rounded-lg font-bold transition-colors">
                  Buy Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        .glowing-button {
          position: relative;
          overflow: hidden;
          z-index: 1;
          transition: background-color 0.3s, color 0.3s;
        }

        .glowing-button:hover {
          background-color: #ffd700;
          color: #1a1a1a;
          box-shadow: 0 0 20px #ffd700, 0 0 40px #ffd700, 0 0 60px #ffd700;
        }

        .glowing-button:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Pricing;
