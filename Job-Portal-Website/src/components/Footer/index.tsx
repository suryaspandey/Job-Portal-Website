import { Mail, MapPin, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { footerLinks } from "./constants";

export const Footer = () => {
  return (
    <footer className="max-w-8xl mx-auto flex justify-center px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="text-2xl font-bold text-primary">
            Job<span className="text-foreground">hunt</span>
          </div>
          <p className="text-muted-foreground mb-4 max-w-md">
            Your trusted partner in finding the perfect career opportunity. We
            connect talented individuals with leading companies worldwide.
          </p>
          <div className="space-y-3 text-muted-foreground text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4" />
              <span>123 Business Street, Suite 100, City, State 12345</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              <span>contact@jobhunt.com</span>
            </div>
          </div>
        </div>

        {footerLinks.map((section, i) => (
          <div key={i} className="hidden lg:block text-sm">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="block lg:hidden col-span-full">
          <Accordion type="single" collapsible className="w-full">
            {footerLinks.map((section, i) => (
              <AccordionItem value={section.title} key={i}>
                <AccordionTrigger>{section.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pl-2">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
