
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type ExpandableSectionProps = {
  isExpanded: boolean;
  onToggle: () => void;
  buttonText: {
    show: string;
    hide: string;
  };
  children: ReactNode;
};

const ExpandableSection = ({ 
  isExpanded, 
  onToggle, 
  buttonText, 
  children 
}: ExpandableSectionProps) => {
  return (
    <>
      <div className="flex justify-center mt-8 mb-4">
        <Button 
          variant="outline" 
          onClick={onToggle}
          className="flex items-center gap-2 group"
        >
          {isExpanded ? buttonText.hide : buttonText.show}
          <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </Button>
      </div>
      
      {isExpanded && children}
    </>
  );
};

export default ExpandableSection;
