"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Arrow from "../public/images/sidebar/arrow-prev-small-svgrepo-com.svg";
import Home from "../public/images/sidebar/home.svg";
import Explore from "../public/images/sidebar/explore.svg";
import Learn from "../public/images/sidebar/learn.svg";
import Achieve from "../public/images/sidebar/achieve.svg";
import Practice from "../public/images/sidebar/practice.svg";
import Projects from "../public/images/sidebar/projects.svg";
import Career from "../public/images/sidebar/career.svg";
import Mentorship from "../public/images/sidebar/mentorship.svg";
import Blogs from "../public/images/sidebar/blogs.svg";
import Community from "../public/images/sidebar/community.svg";
import Rightbar from "../public/images/sidebar/rightbar.svg";
import Connections from "../public/images/sidebar/connections.svg";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${
        open ? "w-60" : "w-0"
      } h-screen border  transition-width duration-300 relative`}
    >
      <div
        className={`absolute -right-7 top-1/3 transform cursor-pointer flex items-center`}
        onClick={() => setOpen(!open)}
      >
        <Image src={Arrow} alt="Toggle" className="w-6 h-6 text-green-500" />
      </div>
      <div className={`p-5 ${open ? "block" : "hidden"} duration-300`}>
        <ul className="mt-5 space-y-6">
          <div>
            <Link href="/">
              <Image src={Home} alt="Home" />
            </Link>
          </div>
          <div>
            <Link href="/explore">
              <Image src={Explore} alt="Explore" />
            </Link>
          </div>
          <div>
            <Link href="/learn">
              <Image src={Learn} alt="Learn" />
            </Link>
          </div>
          <div>
            <Link href="/achieve">
              <Image src={Achieve} alt="Achieve" />
            </Link>
          </div>
          <div>
            <Link href="/practice">
              <Image src={Practice} alt="Practice" />
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <Image src={Projects} alt="Projects" />
            </Link>
          </div>
          <div>
            <Link href="/career">
              <Image src={Career} alt="Career" />
            </Link>
          </div>
          <div>
            <Link href="/mentorship">
              <Image src={Mentorship} alt="Mentorship" />
            </Link>
          </div>
          <div>
            <Link href="/blogs">
              <Image src={Blogs} alt="Blogs" />
            </Link>
          </div>
          <div>
            <Link href="/community">
              <Image src={Community} alt="Community" />
            </Link>
          </div>
          <div>
            <Link href="/rightbar">
              <Image src={Rightbar} alt="Rightbar" />
            </Link>
          </div>
          <div>
            <Link href="/connections">
              <Image src={Connections} alt="Connections" />
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
