import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuLinks } from "./constants";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <div className="fixed inset-0 bg-background z-50 p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          Job<span className="text-foreground">hunt</span>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <nav className="flex flex-col space-y-4 text-lg">
        {menuLinks.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={onClose}
          >
            {item.title}
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-3 mt-6">
        <Button variant="outline">Login</Button>
        <Button variant="outline">Sign Up</Button>
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
