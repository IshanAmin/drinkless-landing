import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EmailPlatformSectionProps {
  email: string;
  platform: string;
  setEmail: (value: string) => void;
  setPlatform: (value: string) => void;
}

export const EmailPlatformSection = ({
  email,
  platform,
  setEmail,
  setPlatform,
}: EmailPlatformSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="h-12"
        required
      />
      
      <Select
        value={platform}
        onValueChange={(value) => setPlatform(value)}
      >
        <SelectTrigger className="h-12">
          <SelectValue placeholder="Select platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="ios">iOS</SelectItem>
            <SelectItem value="android">Android</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};