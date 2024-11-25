import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [result, setResult] = useState("");
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "edc56d1c-267a-4868-94e6-d1ebafaff240");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            end: "top 50%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="contact-us"
      className="bg-gradient-to-b from-gray-800 via-gray-900 to-black py-16 text-white"
    >
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Get In Touch With Us
        </motion.h2>
        <motion.p
          className="mt-4 text-lg  text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        >
          Have any questions or feedback? Drop us a message below!
        </motion.p>
      </div>

      <div ref={formRef} className="max-w-2xl mx-auto bg-gray-700 rounded-lg shadow-lg p-8">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium  text-white"
            >
              Name
            </label>
            <motion.input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-200 text-gray-900 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium  text-white"
            >
              Email
            </label>
            <motion.input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-200 text-gray-900 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium  text-white"
            >
              Message
            </label>
            <motion.textarea
              name="message"
              id="message"
              required
              rows="5"
              className="mt-1 block w-full px-4 py-2 bg-gray-200 text-gray-900 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
          </div>

          <motion.button
            type="submit"
            className="glowing-button w-full py-3 px-6 rounded-lg font-bold text-lg transition-colors relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit
          </motion.button>
        </form>

        <AnimatePresence>
          {result && (
            <motion.p
              className="mt-4 text-center text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {result}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

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
    </section>
  );
}
