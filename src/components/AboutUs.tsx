import { FunctionComponent } from "react";

export type AboutUsType = {
  className?: string;
};

const AboutUs: FunctionComponent<AboutUsType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] bg-white w-[1082.3px] h-[569px] overflow-hidden flex flex-col items-center justify-start py-boundvariablesdata px-0 box-border text-center text-41xl text-gray-900 font-text-xl-font-normal ${className}`}
      data-scroll-to="aboutUsContainer1"
    >
      <div className="w-[1280px] flex flex-col items-center justify-start gap-boundvariablesdata3">
        <div className="w-[768px] flex flex-col items-start justify-start gap-boundvariablesdata4">
          <div className="w-[768px] relative tracking-[-0.01em] leading-[125%] font-extrabold hidden">
            Why Us?
          </div>
          <div className="w-[768px] relative text-xl leading-[150%] text-gray-500 text-left inline-block">{`With 30 years of accounting experience, spanning multiple industries, Mr.Dinesh Singh has acquired exceptional experience in a variety of services areas relating to both corporate and personal accounting and taxation issues. `}</div>
        </div>
        <div className="w-[768px] hidden flex-row items-start justify-between text-17xl">
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch relative tracking-[-0.01em] leading-[125%] font-extrabold">
              73M+
            </div>
            <div className="self-stretch relative text-xl leading-[150%] text-gray-500">
              developers
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch relative tracking-[-0.01em] leading-[125%] font-extrabold">
              1B+
            </div>
            <div className="self-stretch relative text-xl leading-[150%] text-gray-500">
              contributors
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch relative tracking-[-0.01em] leading-[125%] font-extrabold">
              4M+
            </div>
            <div className="self-stretch relative text-xl leading-[150%] text-gray-500">
              organizations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;