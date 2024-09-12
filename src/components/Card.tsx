import { useMemo } from "react";
import PropTypes from "prop-types";

const Card = ({ className = "", propBorderRadius, title, description }) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div
      className={`self-stretch [filter:drop-shadow(0px_1px_3px_rgba(0,_0,_0,_0.1))_drop-shadow(0px_1px_2px_rgba(0,_0,_0,_0.1))] rounded-8xs flex flex-col items-start justify-start py-4 pl-4 pr-[15px] gap-2 text-left text-lg text-white font-leading-none-text-sm-font-medium ${className}`}
    >
      <div
        className="self-stretch h-1 relative rounded-sm bg-gray-500"
        style={rectangleDivStyle}
      />
      <div className="self-stretch relative leading-[125%] font-semibold">
        {title}
      </div>
      <div className="self-stretch relative text-base leading-[150%] text-gray-400">
        {description}
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
};

export default Card;
