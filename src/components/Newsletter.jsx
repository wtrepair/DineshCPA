import InputField from "./InputField";
import Button from "./Button";
import PropTypes from "prop-types";

const Newsletter = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-white border-gray-100 border-t-[1px] border-solid box-border overflow-hidden flex flex-col items-center justify-start pt-[94px] px-20 pb-boundvariablesdata8 max-w-full text-left text-13xl text-gray-900 font-leading-none-text-sm-font-medium mq450:pt-boundvariablesdata8 mq450:pb-boundvariablesdata8 mq450:box-border mq825:pl-boundvariablesdata8 mq825:pr-boundvariablesdata8 mq825:box-border ${className}`}
    >
      <div className="self-stretch shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_rgba(0,_0,_0,_0.05)] rounded-lg bg-gray-50 flex flex-row items-center justify-start p-boundvariablesdata13 box-border gap-boundvariablesdata3 max-w-full mq825:gap-boundvariablesdata3 mq1425:flex-wrap mq1425:pl-boundvariablesdata13 mq1425:pr-boundvariablesdata13 mq1425:box-border">
        <div className="w-[672px] flex flex-col items-start justify-start gap-boundvariablesdata2 min-w-[672px] max-w-full lg:min-w-full mq1425:flex-1">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[125%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[24px] mq825:text-7xl mq825:leading-[32px]">
            Subscribe to our email
          </h1>
          <h3 className="m-0 self-stretch h-[60px] relative text-xl leading-[150%] font-normal font-[inherit] text-gray-500 flex items-center mq450:text-base mq450:leading-[24px]">
            Stay informed with the most recent financial and business updates by
            subscribing to our blog.​
          </h3>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-boundvariablesdata min-w-[312px] max-w-full text-sm text-gray-500">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq825:flex-wrap">
            <InputField
              labelText="First name"
              showHelperText={false}
              showRightIcon={false}
              showLabel={false}
              showPlaceholder
              showLeftIcon
              placeholderText="Enter your email"
              propMinWidth="230px"
              propBackgroundColor="#fff"
              propBorder="unset"
              propBorderTop="1px solid #d1d5db"
              propBorderBottom="1px solid #d1d5db"
              propBorderLeft="1px solid #d1d5db"
              propOverflow="hidden"
              user1="/mail.svg"
              x="pending_I32:4922;92:131096;45:127906"
            />
            <Button
              showRightIcon={false}
              showLeftIcon={false}
              buttonText="Subscribe"
              showButtonText
              propBackgroundColor="#057a55"
              propPadding="14px 23px"
              propOverflow="hidden"
              propBorder="unset"
              propWidth="unset"
              propBorderRadius="0px 8px 8px 0px"
              propHeight="unset"
              cartPlus="pending_I32:4922;92:131097;26:141394"
              propTextTransform="unset"
              propColor="#fff"
              propAlignSelf="unset"
              cartPlus1="pending_I32:4922;92:131097;26:141344"
            />
          </div>
          <div className="self-stretch relative">
            <span className="leading-[14px]">{`We care about the protection of your data. Read our `}</span>
            <span className="text-gray-900">
              <span className="[text-decoration:underline] leading-[150%] font-medium">
                Privacy Policy
              </span>
              <span className="leading-[14px]">.</span>
            </span>
            <span className="leading-[14px]">
              <span>{` `}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;