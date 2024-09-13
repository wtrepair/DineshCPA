import { FunctionComponent } from "react";
import Button from "./Button";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[4357px] left-[-11px] bg-white w-[1440px] overflow-hidden flex flex-col items-center justify-start py-boundvariablesdata px-0 box-border text-center text-41xl text-gray-900 font-text-xl-font-normal ${className}`}
    >
      <div className="w-[1280px] flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata9">
          <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata10">
            <div className="self-stretch relative tracking-[-0.01em] leading-[60px] font-extrabold">
              Numbers with Purpose: Building Your Path to Prosperity.
            </div>
            <div className="w-[768px] relative text-xl leading-[150%] text-gray-500 inline-block">
              Our approach goes beyond just managing your finances; we give
              numbers purpose by using them to build a clear and prosperous path
              for your business’s future.
            </div>
          </div>
          <div className="hidden flex-row items-start justify-start gap-boundvariablesdata4">
            <Button
              showRightIcon
              showLeftIcon={false}
              buttonText="Learn more"
              showButtonText
              propBackgroundColor="#1a56db"
              propPadding="14px 24px"
              propOverflow="hidden"
              propBorder="unset"
              propWidth="unset"
              propBorderRadius="8px"
              propHeight="unset"
              cartPlus="/arrowright1.svg"
              propTextTransform="unset"
              propColor="#fff"
              propAlignSelf="unset"
              cartPlus1="/arrowright.svg"
              buttonFlex="unset"
              buttonAlignSelf="unset"
            />
            <Button
              showRightIcon={false}
              showLeftIcon
              buttonText="Watch video"
              showButtonText
              propBackgroundColor="#fff"
              propPadding="14px 24px"
              propOverflow="unset"
              propBorder="1px solid #e5e7eb"
              propWidth="unset"
              propBorderRadius="8px"
              propHeight="unset"
              cartPlus="/videocamera.svg"
              propTextTransform="unset"
              propColor="#111928"
              propAlignSelf="unset"
              cartPlus1="/cartplus3.svg"
              buttonFlex="unset"
              buttonAlignSelf="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;