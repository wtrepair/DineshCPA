import PropTypes from "prop-types";

const Badge = ({
  className = "",
  showText = true,
  badgeText = "Tutorial",
  showIcon = false,
  showCloseIcon = false,
  clock,
  x,
}) => {
  return (
    <div
      className={`rounded-rounded-md bg-indigo-100 flex flex-row items-center justify-center py-boundvariablesdata10 px-[9px] gap-boundvariablesdata11 text-center text-xs text-indigo-800 font-leading-none-text-sm-font-medium ${className}`}
    >
      {showIcon && (
        <img
          className="h-boundvariablesdata6 w-boundvariablesdata6 relative overflow-hidden shrink-0"
          alt=""
          src={clock}
        />
      )}
      {showText && (
        <div className="relative leading-[150%] font-medium">{badgeText}</div>
      )}
      {showCloseIcon && (
        <img
          className="h-boundvariablesdata5 w-boundvariablesdata5 relative overflow-hidden shrink-0"
          alt=""
          src={x}
        />
      )}
    </div>
  );
};

Badge.propTypes = {
  className: PropTypes.string,
  showText: PropTypes.bool,
  badgeText: PropTypes.string,
  showIcon: PropTypes.bool,
  showCloseIcon: PropTypes.bool,
  clock: PropTypes.string,
  x: PropTypes.string,
};

export default Badge;