import PropTypes from "prop-types";

const Textarea = ({
  className = "",
  labelText = "Your message",
  placeholderText = "Write text here ...",
  helperText = "A note for extra info",
  showHelper = false,
  showPlaceholder = false,
  showLabel = true,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-boundvariablesdata4 max-w-full text-left text-sm text-gray-500 font-leading-none-text-sm-font-medium ${className}`}
    >
      {showLabel && (
        <div className="self-stretch relative leading-[150%] font-medium text-gray-900">
          {labelText}
        </div>
      )}
      <div className="self-stretch h-[166px] rounded-lg bg-gray-50 border-gray-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-boundvariablesdata px-[15px] pb-[135px] max-w-full">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start max-w-full">
          {showPlaceholder && (
            <div className="self-stretch w-[462px] relative leading-[150%] items-center max-w-full">
              {placeholderText}
            </div>
          )}
        </div>
      </div>
      {showHelper && (
        <div className="w-[494px] relative text-xs leading-[150%] max-w-full">
          {helperText}
        </div>
      )}
    </div>
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  helperText: PropTypes.string,
  showHelper: PropTypes.bool,
  showPlaceholder: PropTypes.bool,
  showLabel: PropTypes.bool,
};

export default Textarea;
