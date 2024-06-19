import Image from "next/image";
import { FC } from "react";

interface TechCardProps {
  imageSrc: string;
  module: string;
  title: string;
  lessons: number;
  weeks: number;
  credits: number;
  grade: number;
  progress: number;
}

const TechCard: FC<TechCardProps> = ({
  imageSrc,
  module,
  title,
  lessons,
  weeks,
  credits,
  grade,
  progress,
}) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg h-full w-full">
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <Image src={imageSrc} alt="Module Icon" width={64} height={64} />
      </div>
      <div className="ml-4 flex-1">
        <div className="text-purple-600 underline text-sm">{module}</div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-gray-500 text-sm">
          {lessons} Lessons • {weeks} Weeks • {credits} Credits
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-gray-500 text-sm">
          Grade
          <div className="font-semibold text-black">{grade}%</div>
        </div>
        <div className="w-px h-6 bg-gray-300"></div>
        <div className="text-gray-500 text-sm">
          Progress
          <div className="relative w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-purple-600"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
