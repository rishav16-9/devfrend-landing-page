import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CommitmentCardProps {
  name: string;
  description: string;
  tag: string;
}
export const CommitmentCard = ({
  name,
  description,
  tag,
}: CommitmentCardProps) => {
  return (
    <div className="flex flex-col bg-[#1F2937] rounded-lg gap-8 p-10 hover:-translate-y-2 group border-l-4 hover:border-t-4 hover:border hover:border-t-blue-400 border-l-blue-400 hover:delay-300 transition-all group hover:border-blue-400">
      <div className="bg-[#4b668c] group-hover:bg-[#3B82F6] w-20 h-20 rounded-md p-4 flex items-center justify-center">
        <p className="group-hover:text-white text-lg font-medium">{tag}</p>
      </div>
      <p className="text-white font-medium text-lg ">{name}</p>
      <Tooltip>
        <TooltipTrigger asChild>
          <p className="bg-oklch(.552 .016 285.938) text-white/70 ">
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
