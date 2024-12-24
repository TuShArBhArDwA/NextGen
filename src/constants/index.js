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
      "Step 1: Register For Free - Create a free Next Gen account to access the platform and start repairing your credit.",
    ],
    video: highlightFirstVideo, 
    videoDuration: 3,
  },
  {
    id: 2,
    textLists: ["Step 2: Examine Your Credit Report - Leverage AI to analyze your credit report and identify areas for improvement."],
    video: highlightSecondVideo,
    videoDuration: 6,
  },
  {
    id: 3,
    textLists: [
      "Step 3: Select your plan - Select the subscription plan that best suits your needs to fully access tools and resolve credit issues.",
    ],
    video: highlightThirdVideo,
    videoDuration: 4,
  },
  {
    id: 4,
    textLists: ["Step 4: Produce and Dispatch - Next Generation Dispute Correspondence, Use AI-powered compliance tools to draft and send personalized dispute letters to credit bureaus boosting your credit score.",],
    video: highlightFourthVideo,
    videoDuration: 7,
  },
];