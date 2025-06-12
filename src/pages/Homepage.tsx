"use client";

import { Dock, DockIcon } from "../components/magicui/dock";
import { Link } from "react-router-dom";
import { buttonVariants, Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { cn } from "../lib/utils";
import { SmoothCursor } from "../components/ui/smooth-cursor";
import { Check } from "lucide-react";
import { Copy, } from "iconsax-react";
import { useState, useEffect } from "react";
import { PointerHighlight } from "../components/ui/pointer-highlight";

import HomeIcon from "../assets/icons/home-icon.svg";
import BehanceIcon from "../assets/icons/behance-icon.svg";
import DribbbleIcon from "../assets/icons/dribbble-icon.svg";
import LinkedInMyIcon from "../assets/icons/linkedin-icon.svg";

import heroimage1x from "../assets/images/homepage/hero_image.png";
import heroimage2x from "../assets/images/homepage/hero_image2x.png";
import heroimage3x from "../assets/images/homepage/hero_image3x.png";

import CafeprojectThumbnail from "../assets/images/homepage/cafe_project_thumbnail2x.png";

import AboutMeImage from "../assets/images/homepage/about_me_photos.png";
import UpArrow from "../assets/icons/up-arrow.svg";

import SyscoLabsLogo from "../assets/images/homepage/sysco-labs-logo.svg";
import Code94LabsLogo from "../assets/images/homepage/code94-labs-logo.svg";

const Homepage = () => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("pamoda.ravihansa@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <>
      <SmoothCursor />
      <div className="dock_wrapper">
        <Dock direction="middle" className="my_dock">
          <DockIcon className="dock_icon">
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
            <DockIcon key={item.label} className="dock_icon">
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


          <Button variant="default" data-hide-cursor className="pt-[12px] pb-[13px] px-[24px] leading-[1.2]">See My Resume</Button>


        </Dock>
      </div>

      <div className="main_container">

        <div className="hero_container">
          <div className="hero_text_container">
            <div className="hero_title_text">
              <div className="lne_1">
                <h1 className="font-pjs-h1">Hey, I’m</h1>
                <img
                  src={heroimage1x}
                  srcSet={`${heroimage1x} 1x, ${heroimage2x} 2x, ${heroimage3x} 3x`}
                  width={85}
                  height={50}
                  alt="Pamoda's Potrait"
                />
                <h1 className="font-pjs-h1">Pamoda</h1>
              </div>
              <div className="line_2">
                <h1 className="font-pjs-h1">
                  <span>Designer & Problem Solver</span>
                </h1>
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
            <Button variant="default" data-hide-cursor className="pt-[12px] pb-[13px] px-[24px] leading-[1.2]">See My Work</Button>
            <Button variant="outline" data-hide-cursor className="pt-[12px] pb-[13px] px-[24px] leading-[1.2]">See My Resume</Button>
          </div>

        </div>

        <div className="section-divider" />

        <div className="projects_container">
          <h2 className="font-pjs-h2">Check Out My Cool Projects!</h2>

          <div className="project_card">
            <img
              src={CafeprojectThumbnail}
              width={568}
              height={375}
              alt="Cafe Website Project Thumbnail"
            />
            <div className="project_text_container">
              <p className="font-pjs-b1-l">Web Design &nbsp; / &nbsp; UI Design &nbsp; / &nbsp; UI Showcase</p>
              <h3 className="font-pjs-h3">
                Website Design for a Charming European Cafe Shop, Showcasing Authentic Cuisine and Inviting Atmosphere
              </h3>
            </div>
          </div>


        </div>

        <div className="section-divider" />

        <div className="about_container">
          <div className="about_text_section">
            <h2 className="font-pjs-h2">A Little Bit About Me!</h2>
            <div className="about_me_description">
              <p className="font-pjs-b1-l">
                I am an <span className="font-pjs-b1-m">Information Technology graduate from SLIIT. </span>My UX Design journey started in university, where I found my passion for<span className="font-pjs-b1-m"> solving problems through design.</span> Since then I expanded my knowledge through bootcamps and online resources, always want to enhance my skills!
              </p>
              <p className="font-pjs-b1-l">
                Beyond design and development, I also have a love for<span className="font-pjs-b1-m"> photography,</span>  especially macro and wildlife photography.
              </p>
              <div className="about_buttons">
                <a href="#">
                  <div data-hide-cursor className="about_btn">
                    <p className="font-pjs-b2-sb">See some photos I took</p>
                    <img src={UpArrow}
                      height={17}
                      width={17}
                      alt="Link Up Arrow"
                    />
                  </div>
                </a>
                <a href="#">
                  <div data-hide-cursor className="about_btn">
                    <p className="font-pjs-b2-sb">Let’s connect on Instagram!</p>
                    <img src={UpArrow}
                      height={17}
                      width={17}
                      alt="Link Up Arrow"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <img src={AboutMeImage}
            width={600}
            height={297}
            alt="Pamoda's Portraits"
          />
        </div>

        <div className="section-divider" />

        <div className="work_container">
          <div className="work_text_section">
            <h2 className="font-pjs-h2">Let's Talk About My Work Journey!</h2>
            <div className="about_me_description">
              <p className="font-pjs-b1-l">
                Hi, I’m a UX Designer & Engineer with<span className="font-pjs-b1-m"> 2 years of experience.</span> During my career, I worked at service based startup and product based company. I worked on<span className="font-pjs-b1-m"> web and product design,</span> and I handled<span className="font-pjs-b1-m"> UI development</span>  as well.
              </p>
            </div>
          </div>
          <div className="worked_companies_section">

            <div className="company_row">
              <div className="company_text">
                <h4 className="font-pjs-h4">Junior UX Engineer</h4>
                <p className="font-pjs-b1-l">February 2024 - May 2025</p>
              </div>
              <div className="company_logo_container">
                <img src={SyscoLabsLogo}
                  className="sysco_labs_logo"
                  height={20}
                  width={92}
                  alt="Sysco LABS Logo"
                />
              </div>
            </div>

            <div className="company_row">
              <div className="company_text">
                <h4 className="font-pjs-h4">Associate UI/UX Designer</h4>
                <p className="font-pjs-b1-l">September 2023 - December 2023</p>
              </div>
              <div className="company_logo_container">
                <img src={Code94LabsLogo}
                  className="code94_labs_logo"
                  height={102}
                  width={12}
                  alt="Code94 LABS Logo"
                />
              </div>
            </div>

            <div className="company_row">
              <div className="company_text">
                <h4 className="font-pjs-h4">UI/UX Designer Intern</h4>
                <p className="font-pjs-b1-l">March 2023 - August 2023</p>
              </div>
              <div className="company_logo_container">
                <img src={Code94LabsLogo}
                  className="code94_labs_logo"
                  height={102}
                  width={12}
                  alt="Code94 LABS Logo"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="section-divider" />

        <div className="contact_section">
          <h2 className="font-pjs-h2">I'd love to hear from you!</h2>
          <div className="email_container items-center gap-2">
            <p className="font-pjs-b1-l">pamoda.ravihansa@gmail.com</p>
            <Button
              data-hide-cursor
              onClick={handleCopy}
              variant="outline"
              size="icon"
              className=" transition-all duration-300 border solid border-[#EDEDED]"
              aria-label="Copy email"
            >
              {copied ? <Check className="w-4 h-4 text-[#3e3e3e]" /> : <Copy size="16" color="#3e3e3e" variant="Linear" />}
            </Button>
          </div>
        </div>

        <div className="section-divider" />

        <div className="footer_section">
          {/* <PointerHighlight
            rectangleClassName="bg-transparent border-[1px] border-solid border-[#ededed]"
            pointerClassName="text-[#2e2e2e]">
            <span data-hide-cursor data-item="pamoda.me " className="big_text">pamoda.me</span>
          </PointerHighlight> */}


          <span data-hide-cursor data-item="pamoda.me " className="big_text">pamoda.me</span>


          <div className="bottom_section">
            <span className="font-pjs-b1-l">© 2025. Designed & Developed by Pamoda Ravihansa.</span>
            <div className="footer_icons">
              <img src={BehanceIcon}
                alt="Behance Icn"
              />
              <img src={DribbbleIcon}
                alt="Behance Icn"
              />
              <img src={LinkedInMyIcon}
                alt="Behance Icn"
              />
            </div>
          </div>
        </div>

      </div >
    </>

  );
};

export default Homepage;