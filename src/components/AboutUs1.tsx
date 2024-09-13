import { FunctionComponent } from "react";
import AboutUs from "./AboutUs";

export type AboutUs1Type = {
  className?: string;
};

const AboutUs1: FunctionComponent<AboutUs1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[5583px] left-[47px] w-[1365px] h-[569px] text-left text-17xl text-gray-900 font-text-xl-font-normal ${className}`}
      data-scroll-to="aboutUsContainer"
    >
      <b className="absolute top-[0px] left-[30.2px] [text-decoration:underline] leading-[125%] inline-block w-[436.6px] h-[35px]">
        About Us
      </b>
      <div className="absolute top-[0px] left-[282.7px] w-[1082.3px] h-[569px] text-xl text-gray-500">
        <AboutUs />
        <div className="absolute top-[225px] left-[152.9px] leading-[150%] inline-block w-[772.5px]">
          Strategy is of upmost importance, and Mr.Singh takes a broad stance
          where it comes to analyzing your or your company’s particular
          situation. Having been himself involved in numerous business deals,
          Mr.Singh is an experienced comptroller and is apt in delivering
          financial advice.
        </div>
        <div className="absolute top-[386px] left-[151.8px] leading-[150%] inline-block w-[772.5px]">
          At Dinesh CPA, we aim to always use a proactive approach to address
          your accounting needs and keep you informed about the latest financial
          trends and regulations.
        </div>
      </div>
      <div className="absolute top-[114px] left-[0px] w-[274.9px] h-[342px]">
        <div className="absolute top-[272.5px] left-[0px] rounded-14xl bg-darkslategray w-[274.9px] h-[69.5px]" />
        <img
          className="absolute top-[0px] left-[29.8px] w-[217.4px] h-[254px] object-cover"
          alt=""
          src="/blockchain-2246959removebgpreview-4@2x.png"
        />
      </div>
    </div>
  );
};

export default AboutUs1;
