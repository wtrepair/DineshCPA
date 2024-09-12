import PropTypes from "prop-types";

const Testimonials = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 bg-white border-white border-t-[1px] border-solid border-white border-b-[1px] border-solid box-border overflow-hidden flex flex-col items-center justify-start py-[94px] px-20 max-w-full text-center text-17xl text-black font-leading-none-text-sm-font-medium mq825:py-[61px] mq825:px-10 mq825:box-border ${className}`}
    >
      <div className="self-stretch bg-gray-100 flex flex-col items-center justify-start py-0 px-8 box-border gap-boundvariablesdata1 max-w-full mq450:gap-boundvariablesdata1 mq825:gap-boundvariablesdata1">
        <div className="w-[672px] flex flex-col items-start justify-start gap-boundvariablesdata2 max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-extrabold font-[inherit] mq450:text-3xl mq450:leading-[32px] mq825:text-10xl mq825:leading-[43px]">
            Happy customers
          </h1>
          <div className="self-stretch relative text-xl leading-[150%] text-gray-400 hidden mq450:text-base mq450:leading-[24px]">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata3 max-w-full text-5xl mq825:gap-boundvariablesdata3">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
            <blockquote className="m-0 w-[768px] h-[156px] relative leading-[162.5%] font-semibold inline-block max-w-full mq450:text-lgi mq450:leading-[31px]">
              “I’ve had a great experience with Dinesh Singh CPA.Their clear
              communication and ability to simplify complex financial matters
              have made managing my finances stress-free. Highly recommend!”
            </blockquote>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-5 gap-boundvariablesdata7 text-left text-base">
            <img
              className="h-6 w-6 relative rounded-81xl object-cover"
              alt=""
              src="/avatar-3@2x.png"
            />
            <div className="flex flex-row items-center justify-start gap-boundvariablesdata">
              <div className="relative leading-[125%] font-semibold">{`J.Lohuis `}</div>
              <div className="relative leading-[125%] font-semibold text-gray-200">
                /
              </div>
              <div className="relative text-sm leading-[125%]">{`C.E.O `}</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between py-0 px-[576px] gap-boundvariablesdata9 mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-36 mq825:pr-36 mq825:box-border mq1425:pl-72 mq1425:pr-72 mq1425:box-border">
            <img
              className="h-boundvariablesdata4 w-boundvariablesdata4 relative overflow-hidden shrink-0 min-h-[20px]"
              loading="lazy"
              alt=""
              src="/arrowleftoutline.svg"
            />
            <img
              className="h-boundvariablesdata4 w-boundvariablesdata4 relative overflow-hidden shrink-0 min-h-[20px]"
              alt=""
              src="/arrowrightoutline-7.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;