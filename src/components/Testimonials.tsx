import { FunctionComponent } from "react";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: FunctionComponent<TestimonialsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[6279px] left-[11px] bg-white border-white border-t-[1px] border-solid border-white border-b-[1px] border-solid box-border w-[1440px] overflow-hidden flex flex-col items-center justify-start py-boundvariablesdata px-0 text-center text-17xl text-black font-text-xl-font-normal ${className}`}
    >
      <div className="w-[1280px] bg-gray-100 flex flex-col items-center justify-start gap-boundvariablesdata5">
        <div className="flex flex-col items-start justify-start gap-boundvariablesdata4">
          <div className="w-[672px] relative leading-[150%] font-extrabold flex items-center justify-center">
            Happy customers
          </div>
          <div className="w-[672px] relative text-xl leading-[150%] text-gray-400 hidden items-center justify-center">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </div>
        </div>
        <div className="w-[1216px] flex flex-col items-start justify-start gap-boundvariablesdata9 text-5xl">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="w-[768px] relative leading-[162.5%] font-semibold inline-block">
              “I’ve had a great experience with Dinesh Singh CPA.Their clear
              communication and ability to simplify complex financial matters
              have made managing my finances stress-free. Highly recommend!”
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-boundvariablesdata8 text-left text-base">
            <img
              className="w-6 relative rounded-81xl h-6 object-cover"
              alt=""
              src="/avatar1@2x.png"
            />
            <div className="flex flex-row items-center justify-start gap-boundvariablesdata11">
              <div className="relative leading-[125%] font-semibold">{`J.Lohuis `}</div>
              <div className="relative leading-[125%] font-semibold text-gray-200">
                /
              </div>
              <div className="relative text-sm leading-[125%]">{`C.E.O `}</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-boundvariablesdata10">
            <img
              className="w-boundvariablesdata6 relative h-boundvariablesdata6 overflow-hidden shrink-0"
              alt=""
              src="/arrowleftoutline.svg"
            />
            <img
              className="w-boundvariablesdata6 relative h-boundvariablesdata6 overflow-hidden shrink-0"
              alt=""
              src="/arrowrightoutline2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;