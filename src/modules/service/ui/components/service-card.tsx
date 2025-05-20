import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
interface ServiceCardProps {
  imageUrl: string;
  name: string;
  description: string;
}
export const ServiceCard = ({
  imageUrl,
  name,
  description,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col bg-[#1F2937] rounded-lg gap-8 p-10 hover:-translate-y-2 hover:bg-gradient-to-r hover:from-blue-500 hover:via-white hover:to-orange-500 group h-full group ">
      <div className="bg-[#374151] w-20 h-20 rounded-md p-4 flex items-center">
        <Image
          src={imageUrl}
          alt={name}
          height={100}
          width={100}
          className="object-contain"
          loading="lazy"
        />
      </div>
      <p className="text-white font-medium text-lg group-hover:text-black/70">
        {name}
      </p>
      <Tooltip>
        <TooltipTrigger asChild>
          <p className="bg-oklch(.552 .016 285.938) text-white/70 group-hover:text-black line-clamp-4">
            {description}
          </p>
        </TooltipTrigger>
        <TooltipContent className="align-center bg-black/70 max-w-2xs">
          {description}
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
