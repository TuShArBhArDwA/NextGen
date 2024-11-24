import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
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
    {
      question: "If I Need Help Working The Software What Are My Options?",
      answer:
        "Inside the software, there are more detailed videos of how to use the software and a NextGen support group with over 15,142 software users. If you need more in-depth assistance, free live trainings are held 5 days a week (Times and days may change due to holidays). Check the software for times and links to join live support classes.",
    },
    {
      question: "How Do I Pay For The Software To Mail My Letters For Me?",
      answer:
        "Before you generate your NextGen attack letters, pick your PPAMS (Printing and Mailing Services) member in the 'Printing & Mailing' tab. Then generate your letters, and the PPAMS mailer will email you an invoice to be paid. Once paid, your letters will be mailed. You can always mail off your letters yourself, just be sure to print in black and white and double-sided to save money.",
    },
    {
      question: "What Is A GA, And How Many GA's Do I Use Each Round?",
      answer:
        "GA stands for General Attacks. These are the letters that are created to attack the problematic accounts reporting on your credit report. These can be used to send letters to the 3 credit bureaus, secondaries, and any creditors. 1 GA is used per round per person. 1 round is sent per month (30-35 days), and you have the ability to send unlimited letters with 1 GA.",
    },
    {
      question: "Do I Need A Copy Of My Credit Report?",
      answer:
        "Yes, inside the software you can get a copy of your credit report with MyFreeScoreNow. The software is only compatible with a few credit monitoring services, and MFSN is one. MyFreeScoreNow Epic Pro Report works best with the software to deliver the best results.",
    },
    {
      question: "What Am I Paying A Monthly Subscription For?",
      answer:
        "To have letters credited to your account and have access to the work area to process your NextGen AI auto-generated attack letters.",
    },
  ];

  useEffect(() => {
    // ScrollTrigger for animating FAQ items when they come into view
    faqRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-gray-800 py-16 text-white">
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
          <a
            href="mailto:born2rock5678@gmail.com"
            className="text-orange-500 underline"
          >
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
            {/* Question Section */}
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

            {/* Answer Section with Animation */}
            {openIndex === index && (
              <motion.div
                className="px-8 py-6 bg-gray-900 text-gray-100 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
