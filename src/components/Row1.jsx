import { useMemo } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Row1 = ({
  className = "",
  mockup,
  heading,
  supportingText,
  arrowNarrowRight1,
  arrowNarrowRight2,
  propPadding,
  propHeight,
  propDisplay,
  cartPlus,
  buttonText,
  cartPlus1,
  showRightIcon,
  showLeftIcon,
  showButtonText,
  propBackgroundColor,
  propPadding1,
  propOverflow,
  propBorder,
  propWidth,
  propBorderRadius,
  propHeight1,
  propTextTransform,
  propColor,
  propAlignSelf,
}) => {
  const rightContent1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const headingStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[19px] box-border gap-boundvariablesdata17 max-w-full text-left text-17xl text-gray-900 font-leading-none-text-sm-font-medium lg:flex-wrap mq450:gap-boundvariablesdata17 mq825:gap-boundvariablesdata17 ${className}`}
    >
      <div className="h-[406.8px] w-[540.5px] relative rounded-lg max-w-full flex items-center justify-center">
        <img
          className="h-full w-full object-contain absolute left-[0px] top-[10px] [transform:scale(1.059)] lg:flex-1"
          loading="lazy"
          alt=""
          src={mockup}
        />
      </div>
      <div
        className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-boundvariablesdata18 min-w-[416px] max-w-full mq825:min-w-full"
        style={rightContent1Style}
      >
        <h1
          className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[125%] font-extrabold font-[inherit] mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]"
          style={headingStyle}
        >
          {heading}
        </h1>
        <div className="self-stretch relative text-lg leading-[150%] text-gray-500">
          {supportingText}
        </div>
        <div className="flex flex-row items-center justify-start gap-boundvariablesdata19 text-sm">
          <Button
            cartPlus={cartPlus}
            buttonText={buttonText}
            cartPlus1={cartPlus1}
            showRightIcon={showRightIcon}
            showLeftIcon={showLeftIcon}
            showButtonText={showButtonText}
            propBackgroundColor={propBackgroundColor}
            propPadding={propPadding1}
            propOverflow={propOverflow}
            propBorder={propBorder}
            propWidth={propWidth}
            propBorderRadius={propBorderRadius}
            propHeight={propHeight1}
            propTextTransform={propTextTransform}
            propColor={propColor}
            propAlignSelf={propAlignSelf}
          />
          <div className="self-stretch rounded-rounded-lg1 bg-white border-gray-200 border-[1px] border-solid hidden flex-row items-center justify-center py-boundvariablesdata22 px-[19px] gap-boundvariablesdata20">
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
              alt=""
              src={arrowNarrowRight1}
            />
            <div className="self-stretch relative leading-[150%] font-medium">
              Read more
            </div>
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
              alt=""
              src={arrowNarrowRight2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Row1.propTypes = {
  className: PropTypes.string,
  mockup: PropTypes.string,
  heading: PropTypes.string,
  supportingText: PropTypes.string,
  arrowNarrowRight1: PropTypes.string,
  arrowNarrowRight2: PropTypes.string,
  cartPlus: PropTypes.string,
  buttonText: PropTypes.string,
  cartPlus1: PropTypes.string,
  showRightIcon: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  showButtonText: PropTypes.bool,
  propBackgroundColor: PropTypes.string,
  propPadding1: PropTypes.string,
  propOverflow: PropTypes.string,
  propBorder: PropTypes.string,
  propWidth: PropTypes.string,
  propBorderRadius: PropTypes.string,
  propHeight1: PropTypes.string,
  propTextTransform: PropTypes.string,
  propColor: PropTypes.string,
  propAlignSelf: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default Row1;
