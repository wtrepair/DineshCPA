import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  showRightIcon = false,
  showLeftIcon = false,
  buttonText = "Contact us",
  showButtonText = true,
  propBackgroundColor,
  propPadding,
  propOverflow,
  propBorder,
  propWidth,
  propBorderRadius,
  propHeight,
  cartPlus,
  propTextTransform,
  propColor,
  propAlignSelf,
  cartPlus1,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
      overflow: propOverflow,
      border: propBorder,
      width: propWidth,
      borderRadius: propBorderRadius,
      height: propHeight,
    };
  }, [
    propBackgroundColor,
    propPadding,
    propOverflow,
    propBorder,
    propWidth,
    propBorderRadius,
    propHeight,
  ]);

  const textStyle = useMemo(() => {
    return {
      textTransform: propTextTransform,
      color: propColor,
      alignSelf: propAlignSelf,
    };
  }, [propTextTransform, propColor, propAlignSelf]);

  return (
    <div
      className={`rounded-rounded-lg bg-green-800 overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata6 px-[66px] gap-boundvariablesdata5 text-left text-sm text-white font-leading-none-text-sm-font-medium ${className}`}
      style={buttonStyle}
    >
      {showLeftIcon && (
        <img
          className="h-boundvariablesdata7 w-boundvariablesdata7 relative overflow-hidden shrink-0 hidden"
          alt=""
          src={cartPlus}
        />
      )}
      {showButtonText && (
        <div
          className="relative leading-[150%] uppercase font-medium"
          style={textStyle}
        >
          {buttonText}
        </div>
      )}
      {showRightIcon && (
        <img
          className="h-boundvariablesdata7 w-boundvariablesdata7 relative overflow-hidden shrink-0 hidden"
          alt=""
          src={cartPlus1}
        />
      )}
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  showRightIcon: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  buttonText: PropTypes.string,
  showButtonText: PropTypes.bool,
  cartPlus: PropTypes.string,
  cartPlus1: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propPadding: PropTypes.any,
  propOverflow: PropTypes.any,
  propBorder: PropTypes.any,
  propWidth: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propHeight: PropTypes.any,
  propTextTransform: PropTypes.any,
  propColor: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default Button;