import PropTypes from "prop-types";

const SelectInput = ({
  className = "",
  labelText = "Select language",
  showLabel = true,
  showLabelIcon = true,
  placeholderText = "English (US)",
  showPlaceholder = true,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-boundvariablesdata5 min-w-[239px] max-w-full text-left text-sm text-gray-900 font-leading-none-text-sm-font-medium ${className}`}
    >
      {showLabel && (
        <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[239px] gap-boundvariablesdata5 mq450:pr-5 mq450:box-border">
          <div className="relative leading-[150%] font-medium">{labelText}</div>
          {showLabelIcon && (
            <img
              className="h-boundvariablesdata w-boundvariablesdata relative overflow-hidden shrink-0"
              alt=""
              src="/info.svg"
            />
          )}
        </div>
      )}
      <div className="self-stretch rounded-lg bg-gray-50 border-gray-300 border-[1px] border-solid box-border flex flex-col items-start justify-start py-2.5 px-[11px] max-w-full text-gray-500">
        <div className="self-stretch flex flex-row items-center justify-start max-w-full">
          {showPlaceholder && (
            <div className="flex-1 relative leading-[125%] inline-block max-w-[calc(100%_-_10px)]">
              {placeholderText}
            </div>
          )}
          <img
            className="h-boundvariablesdata6 w-boundvariablesdata6 relative overflow-hidden shrink-0"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  showLabel: PropTypes.bool,
  showLabelIcon: PropTypes.bool,
  placeholderText: PropTypes.string,
  showPlaceholder: PropTypes.bool,
};

export default SelectInput;
