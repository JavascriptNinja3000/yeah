// components/TechCard.tsx
import Image from "next/image";
import { FC } from "react";
import Ellipse from "../public/images/ellipse.svg";

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
    <div className="flex items-center p-6 bg-white rounded-lg h-full w-full space-x-6">
      <div className="flex items-center justify-center p-10 bg-white rounded-lg h-full w-full space-x-6">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image src={Ellipse} alt="Module Icon" width={64} height={64} />
        </div>
        <div className="ml-4 flex-1">
          <div className="text-purple-600 underline text-sm">{module}</div>
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-gray-500 text-sm">
            {lessons} Lessons • {weeks} Weeks • {credits} Credits
          </div>
        </div>
      </div>

      <div className="flex items-center mx-auto space-x-10">
        <div className="text-gray-500 text-sm flex flex-col items-center">
          <span>Grade</span>
          <div className="font-semibold text-black text-lg">{grade}%</div>
        </div>
        <div className="w-px h-12 bg-gray-300"></div>
        <div className="text-gray-500 text-sm flex flex-col items-center">
          <span>Progress</span>
          <div className="relative w-32 h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
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
