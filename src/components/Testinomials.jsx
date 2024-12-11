import React, { useRef, useEffect, useState } from "react";
import check1 from "../../public/assets/images/check1.png";
import check2 from "../../public/assets/images/check2.png";
import check3 from "../../public/assets/images/check3.png";

const Testimonial = () => {
  const containerRef = useRef(null);

  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 28,
    seconds: 6,
  });

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { hours, minutes, seconds } = prevTime;
        if (seconds > 0) return { ...prevTime, seconds: seconds - 1 };
        if (minutes > 0)
          return { hours, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { hours: hours - 1, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      title: "170+ Point Increase",
      description:
        "“Using this software, my credit score improved by over 170 points in just a few months. It's life-changing!”",
      image: check2,
    },
    {
      title: "Bankruptcy Deleted",
      description:
        "“I never thought it would be possible to remove two bankruptcies from my credit report, but it happened!”",
      image: check3,
    },
    {
      title: "153+ Point Increase",
      description:
        "“In just one round of disputes, over $65K of debt was removed from my report. Unbelievable results!”",
      image: check1,
    },
  ];

  return (
    <div>
      {/* Testimonials Section */}
      <div
        id="testimonials"
        ref={containerRef}
        className="bg-black text-white py-20 px-8 lg:px-24 overflow-hidden"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">
            Transformative Credit Results
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real stories from people who improved their credit scores and took
            control of their financial futures.
          </p>
        </div>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center lg:items-stretch"
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
                <button className="btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Credit Repair Offer Section */}
      <div className="bg-black text-white text-center py-12 px-4">
        <h1 className="text-2xl font-bold mb-4">
          Total Value: <span className="text-yellow-500">$3,788</span>
        </h1>
        <h2 className="text-3xl font-extrabold mb-8">
          Repair Multiple Peoples Credit Starting At Just{" "}
          <span className="text-yellow-500">$147/mo</span>
        </h2>
        <button className="glowing-button w-auto px-6 py-3 rounded-lg font-bold text-lg transition-colors relative">
          JOIN 15,777+ USERS
        </button>

        <div className="flex justify-center items-center mt-6 flex-wrap gap-1">
  {['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9', 't10', 't11', 't12', 't13'].map((name, i) => (
    <img
      key={i}
      src={`/assets/images/${name}.png`}
      alt={`User ${name}`}
      className="w-8 h-8 rounded-full border-2 border-gray-700"
    />
  ))}
</div>
        <p className="text-gray-400 text-sm mt-6">
          Price increases to <span className="text-yellow-500">$597/mo</span> in:
        </p>
        <div className="flex justify-center mt-4 space-x-4 text-center">
          <div>
            <p className="text-2xl font-bold">{timeLeft.hours}</p>
            <p className="text-gray-400 text-sm">hours</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{timeLeft.minutes}</p>
            <p className="text-gray-400 text-sm">minutes</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{timeLeft.seconds}</p>
            <p className="text-gray-400 text-sm">seconds</p>
          </div>
        </div>
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
      <br />
    </div>
  );
};

export default Testimonial;
