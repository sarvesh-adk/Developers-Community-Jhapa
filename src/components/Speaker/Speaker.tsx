import { Card } from "../Card/Card";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { Facebook } from "lucide-react"; // Use Facebook icon from Lucide

interface SpeakerProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  github: string;
  facebook: string;
  instagram: string;
}

export function Speaker({
  name,
  role,
  image,
  linkedin,
  github,
  facebook,
  instagram,
}: SpeakerProps) {
  return (
    <Card className="w-[270px] mx-4 shadow-sm p-4 flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold font-montserrat text-[#1f1f1f] mb-2">
        {name}
      </h3>
      <p className="text-[#575757] font-roboto font-light h-16">{role}</p>
      <div className="flex gap-4 mt-3">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedInLogoIcon className="w-6 h-6 text-black  " />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <GitHubLogoIcon className="w-6 h-6 text-black " />
        </a>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 text-black " />
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <InstagramLogoIcon className="w-6 h-6 text-black" />
        </a>
      </div>
    </Card>
  );
}
