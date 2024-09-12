import PropTypes from "prop-types";

const InputField1 = ({
  className = "",
  labelText = "First name",
  showHelperText = false,
  showRightIcon = false,
  showLabel = false,
  showPlaceholder = true,
  showLeftIcon = true,
  placeholderText = "Search",
}) => {
  return (
    <div
      className={`w-[514px] flex flex-col items-start justify-start gap-boundvariablesdata27 max-w-full text-left text-sm text-gray-500 font-leading-none-text-sm-font-medium ${className}`}
    >
      {showLabel && (
        <div className="w-[364px] relative leading-[150%] font-medium text-gray-900 max-w-full">
          {labelText}
        </div>
      )}
      <div className="self-stretch rounded-lg bg-gray-50 border-gray-300 border-[1px] border-solid box-border flex flex-row items-center justify-start py-2.5 px-[15px] max-w-full">
        <div className="flex-1 flex flex-row items-center justify-start gap-2.5 max-w-full">
          {showLeftIcon && (
            <img
              className="h-boundvariablesdata29 w-boundvariablesdata29 relative overflow-hidden shrink-0 min-h-[20px]"
              alt=""
              src="/searchoutline.svg"
            />
          )}
          {showPlaceholder && (
            <div className="flex-1 relative leading-[125%] inline-block max-w-[calc(100%_-_30px)]">
              {placeholderText}
            </div>
          )}
          {showRightIcon && (
            <img
              className="h-boundvariablesdata25 w-boundvariablesdata25 relative overflow-hidden shrink-0"
              alt=""
            />
          )}
        </div>
      </div>
      {showHelperText && (
        <div className="w-[364px] relative leading-[125%] max-w-full">
          <span>{`We’ll never share your details. See our `}</span>
          <span className="text-gray-900">Privacy Policy.</span>
        </div>
      )}
    </div>
  );
};

InputField1.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  showHelperText: PropTypes.bool,
  showRightIcon: PropTypes.bool,
  showLabel: PropTypes.bool,
  showPlaceholder: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  placeholderText: PropTypes.string,
};

export default InputField1;