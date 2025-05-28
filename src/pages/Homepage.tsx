"use client";

import { Dock, DockIcon } from "../components/magicui/dock";
import { Link } from "react-router-dom";
import { buttonVariants, Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { cn } from "../lib/utils";

import HomeIcon from "../assets/icons/home-icon.svg";
import BehanceIcon from "../assets/icons/behance-icon.svg";
import DribbbleIcon from "../assets/icons/dribbble-icon.svg";
import LinkedInMyIcon from "../assets/icons/linkedin-icon.svg";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Dock direction="middle">
        <DockIcon>
          <Link
            to="#"
            aria-label="Home"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-12 rounded-full"
            )}
          >
            <img src={HomeIcon} alt="Home" className="size-6" />
          </Link>
        </DockIcon>

        <Separator orientation="vertical" className="h-full" />

        {[{ icon: BehanceIcon, label: "Behance" }, { icon: DribbbleIcon, label: "Dribbble" }, { icon: LinkedInMyIcon, label: "LinkedIn" }].map((item) => (
          <DockIcon key={item.label}>
            <Link
              to="#"
              aria-label={item.label}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-12 rounded-full"
              )}
            >
              <img src={item.icon} alt={item.label} className="size-6" />
            </Link>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-full " />


        <Button variant="default" className="pt-[12px] pb-[13px] px-[24px] leading-[1.2]">See my Resume</Button>


      </Dock>

      {/* <div className="bg-green-500 text-white p-4 rounded-md">
        Tailwind Test Box
      </div>
      <Button variant="outline" className="pt-[12px] pb-[13px] px-[24px] ">See my Resume</Button> */}

    </div>
  );
};

export default Homepage;