import { useMemo } from "react";
import PropTypes from "prop-types";

const InputField = ({
  className = "",
  labelText = "Phone number",
  showHelperText = false,
  showRightIcon = false,
  showLabel = true,
  showPlaceholder = true,
  showLeftIcon = false,
  placeholderText = "+(12) 345 6789",
  propMinWidth,
  propBackgroundColor,
  propBorder,
  propBorderTop,
  propBorderBottom,
  propBorderLeft,
  propOverflow,
  user1,
  x,
}) => {
  const inputFieldStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const inputStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
      borderTop: propBorderTop,
      borderBottom: propBorderBottom,
      borderLeft: propBorderLeft,
      overflow: propOverflow,
    };
  }, [
    propBackgroundColor,
    propBorder,
    propBorderTop,
    propBorderBottom,
    propBorderLeft,
    propOverflow,
  ]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-boundvariablesdata5 min-w-[239px] max-w-full text-left text-sm text-gray-500 font-leading-none-text-sm-font-medium ${className}`}
      style={inputFieldStyle}
    >
      {showLabel && (
        <div className="self-stretch relative leading-[150%] font-medium text-gray-900">
          {labelText}
        </div>
      )}
      <div
        className="self-stretch rounded-lg bg-gray-50 border-gray-300 border-[1px] border-solid box-border flex flex-row items-center justify-start py-2.5 px-[15px] max-w-full"
        style={inputStyle}
      >
        <div className="flex-1 flex flex-row items-center justify-start gap-2.5 max-w-full">
          {showLeftIcon && (
            <img
              className="h-boundvariablesdata2 w-boundvariablesdata2 relative overflow-hidden shrink-0"
              alt=""
              src={user1}
            />
          )}
          {showPlaceholder && (
            <div className="flex-1 relative leading-[125%] inline-block max-w-full">
              {placeholderText}
            </div>
          )}
          {showRightIcon && (
            <img
              className="h-boundvariablesdata w-boundvariablesdata relative overflow-hidden shrink-0"
              alt=""
              src={x}
            />
          )}
        </div>
      </div>
      {showHelperText && (
        <div className="self-stretch relative leading-[125%]">
          <span>{`We’ll never share your details. See our `}</span>
          <span className="text-gray-900">Privacy Policy.</span>
        </div>
      )}
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  showHelperText: PropTypes.bool,
  showRightIcon: PropTypes.bool,
  showLabel: PropTypes.bool,
  showPlaceholder: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  placeholderText: PropTypes.string,
  user1: PropTypes.string,
  x: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBorder: PropTypes.any,
  propBorderTop: PropTypes.any,
  propBorderBottom: PropTypes.any,
  propBorderLeft: PropTypes.any,
  propOverflow: PropTypes.any,
};

export default InputField;