import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Home", "How It Works", "Pricing", "Testimonials", "FAQ", "Contact Us"];


export const footerLinks = [
  "Privacy Policy",
  "Terms & Conditions",
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Step 1: Register For Free",
      "Create a free account on the Next Gen website to gain",
      "access to the platform and begin your credit repair journey.",
    ],
    video: highlightFirstVideo, 
    videoDuration: 3,
  },
  {
    id: 2,
    textLists: ["Step 2: Examine Your Credit Report", 
      "Utilize AI-driven technologies to examine and assess your",
      "credit record, pinpointing areas requiring enhancement."],
    video: highlightSecondVideo,
    videoDuration: 6,
  },
  {
    id: 3,
    textLists: [
      "Step 3: Select your plan",
      "Choose the subscription package that most effectively addresses your requirements to",
      "commence resolving your credit troubles with complete access to all features and resources.",
    ],
    video: highlightThirdVideo,
    videoDuration: 4,
  },
  {
    id: 4,
    textLists: ["Step 4: Produce and Dispatch Next Generation Dispute Correspondence", "Utilize AI-powered compliance technology to write individualized dispute","letters and send them to credit bureaus, thereby increasing your credit score."],
    video: highlightFourthVideo,
    videoDuration: 7,
  },
];