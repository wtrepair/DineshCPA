import { useMemo } from "react";
import Badge from "./Badge";
import PropTypes from "prop-types";

const BlogCard = ({
  className = "",
  cardHeader,
  title,
  preview,
  avatar,
  small,
  propPadding,
  propHeight,
  clock,
  badgeText,
  x,
  showText,
  showIcon,
  showCloseIcon,
}) => {
  const contentStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const titleStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`flex-1 shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start gap-boundvariablesdata2 min-w-[433px] max-w-full text-left text-5xl text-gray-900 font-leading-none-text-sm-font-medium mq450:min-w-full mq825:w-[calc(100%_-_40px)] ${className}`}
    >
      <div className="self-stretch h-[216px] flex flex-col items-start justify-start pt-boundvariablesdata9 px-boundvariablesdata9 pb-0 box-border">
        <img
          className="self-stretch flex-1 rounded-lg max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={cardHeader}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start p-boundvariablesdata9">
        <div
          className="self-stretch flex flex-col items-start justify-end pt-[30px] px-0 pb-0 gap-boundvariablesdata"
          style={contentStyle}
        >
          <Badge
            clock={clock}
            badgeText={badgeText}
            x={x}
            showText={showText}
            showIcon={showIcon}
            showCloseIcon={showCloseIcon}
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata6">
            <h2
              className="m-0 self-stretch h-[60px] relative text-inherit leading-[125%] font-bold font-[inherit] inline-block mq450:text-lgi mq450:leading-[24px]"
              style={titleStyle}
            >
              {title}
            </h2>
            <div className="self-stretch relative text-base leading-[150%] text-gray-500">
              {preview}
            </div>
          </div>
          <div className="flex flex-row items-end justify-center gap-boundvariablesdata text-sm">
            <img
              className="h-8 w-8 relative rounded-81xl object-cover"
              alt=""
              src={avatar}
            />
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[125%] font-medium">
                Bonnie Green
              </div>
              <div className="relative leading-[125%] text-gray-500 whitespace-nowrap">
                {small}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  className: PropTypes.string,
  cardHeader: PropTypes.string,
  title: PropTypes.string,
  preview: PropTypes.string,
  avatar: PropTypes.string,
  small: PropTypes.string,
  clock: PropTypes.string,
  badgeText: PropTypes.string,
  x: PropTypes.string,
  showText: PropTypes.bool,
  showIcon: PropTypes.bool,
  showCloseIcon: PropTypes.bool,

  /** Style props */
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
};

export default BlogCard;
