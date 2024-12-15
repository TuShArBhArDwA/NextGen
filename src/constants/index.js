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
      "Step 1: Sign Up For Free",
      "Create a free account to",
      "start your credit repair journey",
    ],
    video: highlightFirstVideo,
    videoDuration: 3,
  },
  {
    id: 2,
    textLists: ["Step 2: Examine Your Credit Report", "Use AI to analyze your credit","record and identify issues"],
    video: highlightSecondVideo,
    videoDuration: 6,
  },
  {
    id: 3,
    textLists: [
      "Step 3: Select your plan",
      "'Choose the best plan to",
      "address your credit needs",
    ],
    video: highlightThirdVideo,
    videoDuration: 4,
  },
  {
    id: 4,
    textLists: ["Step 4: Send Dispute Letters", "Utilize AI to draft and send","dispute letters to bureaus"],
    video: highlightFourthVideo,
    videoDuration: 7,
  },
];