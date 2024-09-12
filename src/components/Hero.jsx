import Button from "./Button";
import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-boundvariablesdata8 px-20 box-border max-w-full text-center text-41xl text-gray-900 font-leading-none-text-sm-font-medium mq450:pt-boundvariablesdata8 mq450:pb-boundvariablesdata8 mq450:box-border mq825:pl-boundvariablesdata8 mq825:pr-boundvariablesdata8 mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start max-w-full mq450:gap-boundvariablesdata8 mq825:gap-boundvariablesdata8">
        <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata3 max-w-full mq825:gap-boundvariablesdata3">
          <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata9 max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[60px] font-extrabold font-[inherit] mq450:text-17xl mq450:leading-[36px] mq825:text-29xl mq825:leading-[48px]">
              Numbers with Purpose: Building Your Path to Prosperity.
            </h1>
            <h3 className="m-0 w-[768px] h-[90px] relative text-xl leading-[150%] font-normal font-[inherit] text-gray-500 inline-block max-w-full mq450:text-base mq450:leading-[24px]">
              Our approach goes beyond just managing your finances; we give
              numbers purpose by using them to build a clear and prosperous path
              for your business’s future.
            </h3>
          </div>
          <div className="hidden flex-row items-start justify-start gap-boundvariablesdata2 max-w-full mq450:flex-wrap">
            <Button
              cartPlus="/arrowright.svg"
              buttonText="Learn more"
              cartPlus1="/arrowrightoutline-6.svg"
              showRightIcon
              showLeftIcon={false}
              showButtonText
              propBackgroundColor="#1a56db"
              propPadding="14px 24px"
              propOverflow="hidden"
              propBorder="unset"
              propWidth="unset"
              propBorderRadius="8px"
              propHeight="52px"
              propTextTransform="unset"
              propColor="#fff"
              propAlignSelf="stretch"
            />
            <Button
              cartPlus="/videocamera-1.svg"
              buttonText="Watch video"
              cartPlus1="/cartplus.svg"
              showRightIcon={false}
              showLeftIcon
              showButtonText
              propBackgroundColor="#fff"
              propPadding="14px 23px"
              propOverflow="unset"
              propBorder="1px solid #e5e7eb"
              propWidth="unset"
              propBorderRadius="8px"
              propHeight="52px"
              propTextTransform="unset"
              propColor="#111928"
              propAlignSelf="stretch"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
