import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "If I Need Help Working The Software What Are My Options?", answer: "Inside the software, there are more detailed videos..." },
    { question: "How Do I Pay For The Software To Mail My Letters For Me?", answer: "Before you generate your NextGen attack letters..." },
    { question: "What Is A GA, And How Many GA's Do I Use Each Round?", answer: "GA stands for General Attacks..." },
    { question: "Do I Need A Copy Of My Credit Report?", answer: "Yes, inside the software you can get a copy..." },
    { question: "What Am I Paying A Monthly Subscription For?", answer: "To have letters credited to your account..." },
  ];

  useEffect(() => {
    faqRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: window.innerWidth < 768 ? index * 0.5 : index * 0.2, // Adjust delay for mobile
          force3D: true,
          scrollTrigger: {
            trigger: el,
            start: window.innerWidth < 768 ? "top 90%" : "top 75%", // Mobile adjustment
            end: window.innerWidth < 768 ? "top 60%" : "top 50%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section id="faq" className="bg-gradient-to-b from-black via-gray-900 to-gray-800 py-16 text-white">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Got Questions? NextGen Got Answers...
        </motion.h2>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        >
          Have further questions about enrollment?{" "}
          <a href="mailto:born2rock5678@gmail.com" className="text-orange-500 underline">
            Reach out to us.
          </a>
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            ref={(el) => (faqRefs.current[index] = el)} // Assign ref for scroll trigger
          >
            <motion.button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left px-8 py-6 text-xl font-semibold bg-gray-700 flex justify-between items-center hover:bg-gray-600 focus:outline-none"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-white">{faq.question}</span>
              <span className="text-3xl text-orange-500">
                {openIndex === index ? "-" : "+"}
              </span>
            </motion.button>

            {openIndex === index && (
              <AnimatePresence>
                <motion.div
                  className="px-8 py-6 bg-gray-900 text-gray-100 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {faq.answer}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
