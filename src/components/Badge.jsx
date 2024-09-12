import PropTypes from "prop-types";

const Badge = ({
  className = "",
  clock,
  badgeText = "Tutorial",
  x,
  showText = true,
  showIcon = false,
  showCloseIcon = false,
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
          className="h-boundvariablesdata4 w-boundvariablesdata4 relative overflow-hidden shrink-0"
          alt=""
          src={x}
        />
      )}
    </div>
  );
};

Badge.propTypes = {
  className: PropTypes.string,
  clock: PropTypes.string,
  badgeText: PropTypes.string,
  x: PropTypes.string,
  showText: PropTypes.bool,
  showIcon: PropTypes.bool,
  showCloseIcon: PropTypes.bool,
};

export default Badge;
