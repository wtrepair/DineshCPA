import { useMemo } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Row = ({
  className = "",
  propPadding,
  heading,
  supportingText,
  propPadding1,
  arrowNarrowRight1,
  arrowNarrowRight2,
  collageFinanceBannerConcept,
  cartPlus,
  buttonText,
  cartPlus1,
  showRightIcon,
  showLeftIcon,
  showButtonText,
  propBackgroundColor,
  propPadding2,
  propOverflow,
  propBorder,
  propWidth,
  propBorderRadius,
  propHeight,
  propTextTransform,
  propColor,
  propAlignSelf,
}) => {
  const rightContentStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const buttonsStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-0.5 box-border gap-boundvariablesdata17 max-w-full text-left text-17xl text-gray-900 font-leading-none-text-sm-font-medium lg:flex-wrap mq450:gap-boundvariablesdata17 mq825:gap-boundvariablesdata17 ${className}`}
    >
      <div
        className="flex-1 flex flex-col items-start justify-start gap-boundvariablesdata18 min-w-[416px] max-w-full mq825:min-w-full"
        style={rightContentStyle}
      >
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[125%] font-extrabold font-[inherit] mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
          {heading}
        </h1>
        <div className="self-stretch relative text-lg leading-[150%] text-gray-500">
          {supportingText}
        </div>
        <div
          className="flex flex-row items-center justify-start py-0 pl-0 pr-5 gap-boundvariablesdata19 text-sm"
          style={buttonsStyle}
        >
          <Button
            showRightIcon={showRightIcon}
            showLeftIcon={showLeftIcon}
            buttonText={buttonText}
            showButtonText={showButtonText}
            propBackgroundColor={propBackgroundColor}
            propPadding={propPadding2}
            propOverflow={propOverflow}
            propBorder={propBorder}
            propWidth={propWidth}
            propBorderRadius={propBorderRadius}
            propHeight={propHeight}
            cartPlus={cartPlus}
            propTextTransform={propTextTransform}
            propColor={propColor}
            propAlignSelf={propAlignSelf}
            cartPlus1={cartPlus1}
          />
          <div className="self-stretch rounded-rounded-lg1 bg-white border-gray-200 border-[1px] border-solid hidden flex-row items-center justify-center py-boundvariablesdata21 px-[19px] gap-boundvariablesdata20">
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
      <img
        className="w-[558px] relative max-h-full object-cover max-w-full lg:flex-1"
        loading="lazy"
        alt=""
        src={collageFinanceBannerConcept}
      />
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  supportingText: PropTypes.string,
  arrowNarrowRight1: PropTypes.string,
  arrowNarrowRight2: PropTypes.string,
  collageFinanceBannerConcept: PropTypes.string,
  cartPlus: PropTypes.string,
  buttonText: PropTypes.string,
  cartPlus1: PropTypes.string,
  showRightIcon: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  showButtonText: PropTypes.bool,
  propBackgroundColor: PropTypes.string,
  propPadding2: PropTypes.string,
  propOverflow: PropTypes.string,
  propBorder: PropTypes.string,
  propWidth: PropTypes.string,
  propBorderRadius: PropTypes.string,
  propHeight: PropTypes.string,
  propTextTransform: PropTypes.string,
  propColor: PropTypes.string,
  propAlignSelf: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default Row;
