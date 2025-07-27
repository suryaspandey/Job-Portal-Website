import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuLinks } from "./constants";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/logos/jobLogo.png";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-background z-50 p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div
          className="w-20"
          onClick={() => navigate("/")}
          role="button"
          aria-label="Go to Home"
        >
          <img src={Logo} alt="Job Hunt" />
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X role="button" aria-label="Close Menu" className="h-5 w-5" />
        </Button>
      </div>

      <nav className="flex items-center flex-col space-y-4 text-lg">
        {menuLinks.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={onClose}
            aria-label={item.title}
          >
            {item.title}
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-3 mt-6">
        <Button
          variant="outline"
          className="dark:bg-black dark:border-white dark:hover:bg-black"
        >
          Login
        </Button>
        <Button
          variant="outline"
          className="dark:bg-black dark:border-white dark:hover:bg-black"
        >
          Sign Up
        </Button>
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={onClose}
        >
          Post a Job
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
