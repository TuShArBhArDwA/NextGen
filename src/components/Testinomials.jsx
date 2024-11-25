import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Animate cards on scroll
    cardRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const testimonials = [
    {
      title: "170+ Point Increase",
      description:
        "“Using this software, my credit score improved by over 170 points in just a few months. It's life-changing!”",
      image: "/path-to-your-first-image.png",
    },
    {
      title: "Bankruptcy Deleted",
      description:
        "“I never thought it would be possible to remove two bankruptcies from my credit report, but it happened!”",
      image: "/path-to-your-second-image.png",
    },
    {
      title: "153+ Point Increase",
      description:
        "“In just one round of disputes, over $65K of debt was removed from my report. Unbelievable results!”",
      image: "/path-to-your-third-image.png",
    },
  ];

  return (
    <div
    id="testimonials"
      ref={containerRef}
      className="bg-black text-white py-20 px-8 lg:px-24 overflow-hidden"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6">Transformative Credit Results</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Real stories from people who improved their credit scores and took control of their financial futures.
        </p>
      </div>

      <div className="space-y-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center lg:items-stretch"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.title}
              className="w-full lg:w-1/2 h-96 object-cover"
            />
            <div className="p-8 lg:p-12 flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4">{testimonial.title}</h3>
              <p className="text-lg text-white italic mb-6">
                {testimonial.description}
              </p>
              <button className="btn">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
