import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { menuLinks } from "./MobileMenu/constants";
import ToggleTheme from "./ToggleTheme";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/logos/jobLogo.png";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full bg-background border-b border-border fixed top-0 z-50">
      <ToggleTheme />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div
              className="w-20 cursor-pointer"
              onClick={() => navigate("/")}
              role="button"
              aria-label="Go to Home"
            >
              <img src={Logo} alt="Job Hunt" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-8">
              {menuLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label={item.title}
                >
                  {item.title}
                </a>
              ))}
            </nav>
            <Button
              variant="outline"
              className="text-foreground hover:!text-primary hover:!bg-white  dark:border-white dark:bg-black"
            >
              Login
            </Button>
            <Button
              variant="outline"
              className="text-foreground hover:!text-primary hover:!bg-white dark:border-white dark:bg-black"
            >
              Sign Up
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Post a Job
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="!h-7 !w-7" />
            </Button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;
