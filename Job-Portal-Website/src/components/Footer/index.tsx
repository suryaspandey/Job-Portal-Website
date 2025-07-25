import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { footerLinks } from "./constants";

export const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="max-w-7xl mx-auto flex justify-center px-4 py-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="text-2xl font-bold text-primary">
              Job<span className="text-foreground">hunt</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Your trusted partner in finding the perfect career opportunity. We
              connect talented individuals with leading companies worldwide.
            </p>
          </div>

          {footerLinks.map((section, i) => (
            <div key={i} className="hidden lg:block text-sm">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <div className="flex items-center gap-1">
                          {link.icon && (
                            <span>
                              <Icon className="w-4 h-4 mt-1" />
                            </span>
                          )}
                          <span> {link.label}</span>
                        </div>
                      </a>
                    </li>
                  );
                })}
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
                      {section.links.map((link, idx) => {
                        const Icon = link.icon;
                        return (
                          <li key={idx}>
                            <a
                              href="#"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <div className="flex items-center gap-1">
                                {link.icon && (
                                  <span>
                                    <Icon className="w-4 h-4 mt-1" />
                                  </span>
                                )}
                                <span> {link.label}</span>
                              </div>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </footer>
      <div className="flex justify-center text-xs pb-6">
        <p className="text-muted-foreground  mt-6 text-center">
          © Copyright {new Date().getFullYear()} Jobhunt. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
