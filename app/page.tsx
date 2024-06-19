// pages/index.tsx
import Image from "next/image";
import TechCard from "../components/techcard";
import Robot from "../public/images/robot.svg";
import HorizontalCard from "../components/card";

export default function Home() {
  return (
    <>
      <div className="flex flex-col space-y-4 p-5 h-full bg-purple-200 rounded-lg">
        <div className="flex flex-1">
          <div className="grid grid-cols-3 gap-4 flex-1">
            <div className="col-span-2 space-y-4 flex flex-col">
              <div className="bg-white flex-grow h-64 rounded-lg">
                <HorizontalCard
                  imageSrc={Robot}
                  title="Introduction to Machine Learning"
                  module="Data science"
                  chapter="Supervised learning and applications"
                  duration="6 months"
                  progress={90}
                />
              </div>
            </div>
            <div className="bg-white flex-grow col-span-1 rounded-lg"></div>
          </div>
        </div>
        <div className="bg-white h-32 rounded-lg">
          <TechCard
            imageSrc="/path/to/image.png"
            module="Module 1"
            title="Tech 101: Starting in Tech"
            lessons={7}
            weeks={7}
            credits={7}
            grade={66}
            progress={66}
          />
        </div>
        <div className="bg-white h-32 rounded-lg">
          <TechCard
            imageSrc="/path/to/image.png"
            module="Module 1"
            title="Tech 101: Starting in Tech"
            lessons={7}
            weeks={7}
            credits={7}
            grade={66}
            progress={66}
          />
        </div>
        <div className="bg-white h-32 rounded-lg">
          <TechCard
            imageSrc="/path/to/image.png"
            module="Module 1"
            title="Tech 101: Starting in Tech"
            lessons={7}
            weeks={7}
            credits={7}
            grade={66}
            progress={66}
          />
        </div>
      </div>
    </>
  );
}
