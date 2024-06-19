import React from "react";
import Image from "next/image";
import Chapter from "../public/images/chapter.png";
import Group from "../public/images/group.png";

interface HorizontalCardProps {
  imageSrc: string;
  title: string;
  module: string;
  chapter: string;
  duration: string;
  progress: number;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  imageSrc,
  title,
  module,
  chapter,
  duration,
  progress,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white text-black p-4 rounded-lg w-full h-full">
      <div className="w-full md:w-72 md:h-96 relative mb-4 md:mb-0">
        <Image
          src={imageSrc}
          alt="Card Image"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>

      <div className="ml-0 md:ml-4 space-y-4 flex-1">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
          {/* Duration Buttons */}
          <div className="flex flex-wrap space-x-2">
            <button className="bg-gray-200 text-blue-800 text-xs px-1 py-0.5 rounded-md sm:text-sm sm:px-2 sm:py-1">
              {duration}
            </button>
            <button className="bg-gray-200 text-blue-800 text-xs px-1 py-0.5 rounded-md sm:text-sm sm:px-2 sm:py-1">
              {duration}
            </button>
          </div>
        </div>

        {/* Module */}
        <div className="flex items-center space-x-2">
          <div className="w-full md:w-3 md:h-4 relative mb-4 md:mb-0">
            <Image
              src={Group}
              alt="Card Image"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
          <p className="text-xs sm:text-sm">
            <span className="font-semibold">Module: {module}</span>
          </p>
        </div>

        {/* Chapter */}
        <div className="flex items-center space-x-2">
          <div className="w-full md:w-3 md:h-4 relative mb-4 md:mb-0">
            <Image
              src={Chapter}
              alt="Card Image"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
          <p className="text-xs sm:text-sm">
            <span className="font-semibold">Chapter: {chapter}</span>
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center space-x-3">
          <span className="font-semibold text-xs sm:text-sm">{progress}%</span>
          <div className="w-24 sm:w-32 h-1 bg-gray-600 rounded-full">
            <div
              className="h-1 bg-purple-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Resume Learning & View Insights */}
        <div className="flex flex-wrap space-x-2">
          <button className="bg-white text-purple-500 px-2 py-1 rounded-md border-2 border-purple-500 text-xs sm:text-sm sm:px-4 sm:py-2">
            View Insights
          </button>

          <button className="bg-purple-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm sm:px-4 sm:py-2">
            Resume Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
