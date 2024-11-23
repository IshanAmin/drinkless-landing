import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactSectionProps {
  email: string;
  setEmail: (value: string) => void;
  platform: string;
  setPlatform: (value: string) => void;
}

export const ContactSection = ({ email, setEmail, platform, setPlatform }: ContactSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="h-12"
        required
      />
      
      <Select
        value={platform}
        onValueChange={setPlatform}
        required
      >
        <SelectTrigger className="h-12">
          <SelectValue placeholder="Select Platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="iOS">iOS</SelectItem>
            <SelectItem value="Android">Android</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};