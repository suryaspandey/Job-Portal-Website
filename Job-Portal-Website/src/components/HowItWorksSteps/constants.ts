import { FaUser } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { FaDotCircle } from "react-icons/fa";

import { PiBagSimpleFill } from "react-icons/pi";

export const workingStepsList = [
  {
    title: "Create Account",
    description:
      "Start your journey by creating a free account. Set up your profile to stand out to top employers.",
    icon: FaUser,
    iconColor: "#ff8c00", // Orange
  },
  {
    title: "Upload CV/Resume",
    description:
      "Showcase your skills by uploading your latest Resume. Make it easy for employers to find you.",
    icon: IoDocumentText,
    iconColor: "#00BFA5", // Teal
  },
  {
    title: "Find Suitable Jobs",
    description:
      "Browse through thousands of job listings tailored to your expertise and goals.",
    icon: FaDotCircle,
    iconColor: "#7B61FF", // Purple
  },
  {
    title: "Apply for Job",
    description:
      "Send your application directly and boost your chances of getting hired faster with real-time alerts.",
    icon: PiBagSimpleFill,
    iconColor: "#f8e963", // Yellow
  },
];
