import { MapPin, Phone } from "lucide-react";

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Find Jobs", href: "/jobs" },
      { label: "For Companies", href: "#" },
      { label: "Contact Us", href: "#footer" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        label: "+1 (555) 123-4567",
        icon: Phone,
      },
      {
        label: "123 Business Street, Suite 100, ",
        icon: MapPin,
      },

      {
        label: "City, State 12345",
      },
    ],
  },
];
