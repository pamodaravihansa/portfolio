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

import heroimage1x from "../assets/images/homepage/hero_image.png";
import heroimage2x from "../assets/images/homepage/hero_image2x.png";
import heroimage3x from "../assets/images/homepage/hero_image3x.png";


const Homepage = () => {
  return (
    <>
      <div className="dock_wrapper">
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
      </div>

      <div className="main_container">

        <div className="hero_container">
          <div className="hero_text_container">
            <div className="hero_title_text">
              <div className="lne_1">
                <h1 className="font-pjs-h2">Hey, I’m</h1>
                <img
                  src={heroimage1x}
                  srcSet={`${heroimage1x} 1x, ${heroimage2x} 2x, ${heroimage3x} 3x`}
                  width={85}
                  height={50}
                  alt="Pamoda Face"
                />
                <h1 className="font-pjs-h2">Pamoda</h1>
              </div>
              <div className="line_2">
                <h1 className="font-pjs-h2">Designer & Problem Solver</h1>
              </div>
            </div>
            <div className="hero_description">
              <p className="font-pjs-b1-l">
                Hi, I’m a UX Designer with <span className="font-pjs-b1-m">2 years of experience.</span><br></br>
                Previously worked at <span className="font-pjs-b1-m">Sysco LABS</span> as a <span className="font-pjs-b1-m">Junior UX Engineer.</span> I work on web and product design, and I handle UI development as well.
              </p>
            </div>
          </div>
          <div className="cta_buttons">
            <Button variant="default" className="pt-[12px] pb-[13px] px-[24px] leading-[1.2]">See my Work</Button>
            <Button variant="outline" className="pt-[12px] pb-[13px] px-[24px] leading-[1.2]">See my Resume</Button>
          </div>


        </div>

        <div className="section-divider" />




      </div>
    </>

  );
};

export default Homepage;