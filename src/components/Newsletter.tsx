import { FunctionComponent } from "react";
import InputField from "./InputField";
import Button from "./Button";

export type NewsletterType = {
  className?: string;
};

const Newsletter: FunctionComponent<NewsletterType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[8742px] left-[0px] bg-white border-gray-100 border-t-[1px] border-solid box-border w-[1440px] overflow-hidden flex flex-col items-center justify-start py-boundvariablesdata px-0 text-left text-13xl text-gray-900 font-text-xl-font-normal ${className}`}
    >
      <div className="w-[1280px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_rgba(0,_0,_0,_0.05)] rounded-lg bg-gray-50 flex flex-row items-center justify-start p-boundvariablesdata3 box-border gap-boundvariablesdata9">
        <div className="flex flex-col items-start justify-start gap-boundvariablesdata4">
          <b className="w-[672px] relative tracking-[-0.01em] leading-[125%] flex items-center">
            Subscribe to our email
          </b>
          <div className="w-[672px] relative text-xl leading-[150%] text-gray-500 flex items-center">
            Stay informed with the most recent financial and business updates by
            subscribing to our blog.​
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-boundvariablesdata11 text-sm text-gray-500">
          <div className="self-stretch flex flex-row items-start justify-start">
            <InputField
              labelText="First name"
              showHelperText={false}
              showRightIcon={false}
              showLabel={false}
              showPlaceholder
              showLeftIcon
              placeholderText="Enter your email"
              propMinWidth="unset"
              propBackgroundColor="#fff"
              propBorder="unset"
              propBorderTop="1px solid #d1d5db"
              propBorderBottom="1px solid #d1d5db"
              propBorderLeft="1px solid #d1d5db"
              propOverflow="hidden"
              user1="/mail.svg"
              labelAlignSelf="unset"
              labelWidth="364px"
            />
            <Button
              showRightIcon={false}
              showLeftIcon={false}
              buttonText="Subscribe"
              showButtonText
              propBackgroundColor="#057a55"
              propPadding="14px 24px"
              propOverflow="hidden"
              propBorder="unset"
              propWidth="unset"
              propBorderRadius="0px 8px 8px 0px"
              propHeight="unset"
              cartPlus="/cartplus.svg"
              propTextTransform="unset"
              propColor="#fff"
              propAlignSelf="unset"
              cartPlus1="/cartplus.svg"
              buttonFlex="unset"
              buttonAlignSelf="stretch"
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

export default Newsletter;