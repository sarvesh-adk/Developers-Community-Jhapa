import { Card } from "../Card/Card";

interface SpeakerProps {
  name: string;
  role: string;
  image: string;
}

export function Speaker({ name, role, image }: SpeakerProps) {
  return (
    <Card className="w-[270px] mx-4 shadow-sm ">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold font-montserrat text-[#1f1f1f] mb-2">
        {name}
      </h3>
      <p className="text-[#575757] font-roboto font-light">{role}</p>
    </Card>
  );
}
