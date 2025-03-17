
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ReferencesDialog = () => {
  return (
    <div className="mt-12 text-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="text-sm text-slate-600 hover:text-slate-800">
            Statistical Data Source
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl mb-2">References</DialogTitle>
            <DialogDescription className="text-base leading-6 space-y-4">
              <p className="mb-4">
                1. SAMHSA, Center for Behavioral Health Statistics and Quality. 2022 National Survey on Drug Use and Health. 
                Table 5.9A—Alcohol use disorder in past year: among people aged 12 or older; by age group and demographic 
                characteristics, numbers in thousands, 2022 and 2023. [cited 2024 Aug 2]. Available from: 
                <a href="https://www.samhsa.gov/data/report/2023-nsduh-detailed-tables" 
                  className="text-blue-600 hover:underline ml-1" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  https://www.samhsa.gov/data/report/2023-nsduh-detailed-tables
                </a>
              </p>
              <p>
                2. SAMHSA, Center for Behavioral Health Statistics and Quality. 2022 National Survey on Drug Use and Health. 
                Table 5.9B—Alcohol use disorder in past year: among people aged 12 or older; by age group and demographic 
                characteristics, percentages, 2022 and 2023. [cited 2024 Aug 2]. Available from: 
                <a href="https://www.samhsa.gov/data/report/2023-nsduh-detailed-tables" 
                  className="text-blue-600 hover:underline ml-1" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  https://www.samhsa.gov/data/report/2023-nsduh-detailed-tables
                </a>
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReferencesDialog;
