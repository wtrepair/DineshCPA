import PropTypes from "prop-types";

const Checkbox = ({
  className = "",
  helperText = "Some helper text here",
  showHelper = false,
  showLabel = true,
}) => {
  return (
    <div
      className={`rounded flex flex-row items-center justify-start gap-boundvariablesdata5 max-w-full text-left text-xs text-gray-500 font-leading-none-text-sm-font-medium ${className}`}
    >
      <div className="h-[16.5px] w-[16.5px] rounded bg-gray-50 border-gray-300 border-[0.5px] border-solid box-border" />
      {showLabel && (
        <div className="flex flex-col items-start justify-start gap-boundvariablesdata10 max-w-[calc(100%_-_24px)]">
          <div className="relative leading-[150%]">
            <span>{`By submitting this form, you confirm that you have read and agree to `}</span>
            <span className="[text-decoration:underline] text-black">
              <b className="font-leading-none-text-sm-font-medium">
                <span className="text-gray1-100">Dinesh CPA</span>
              </b>
              <span>
                <b className="font-leading-none-text-sm-font-medium">{` `}</b>
                <span className="font-medium">Terms of Service</span>
              </span>
            </span>
            <span>{` and `}</span>
            <span className="[text-decoration:underline] font-medium text-black">
              Privacy Statement
            </span>
          </div>
          {showHelper && (
            <div className="w-[126px] relative leading-[150%]">
              {helperText}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  helperText: PropTypes.string,
  showHelper: PropTypes.bool,
  showLabel: PropTypes.bool,
};

export default Checkbox;