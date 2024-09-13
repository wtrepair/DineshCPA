import { FunctionComponent } from "react";
import Button from "./Button";
import ButtonWhitelDefaultTrueFa from "./ButtonWhitelDefaultTrueFa";

export type JumbotronType = {
  className?: string;
};

const Jumbotron: FunctionComponent<JumbotronType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[192px] left-[5px] w-[1430px] h-[664px] overflow-hidden flex flex-col items-center justify-start py-56 px-0 box-border bg-[url('/public/jumbotron@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-41xl text-white font-text-xl-font-normal ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata10">
        <div className="self-stretch relative tracking-[-0.01em] leading-[60px] font-extrabold">
          <p className="m-0">Streamlining finances for</p>
          <p className="m-0">individuals, businesses, growth</p>
        </div>
        <div className="w-[768px] relative text-xl leading-[150%] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          Empowering your financial journey with expert accounting services,
          precise tax planning, and effective financial strategies tailored to
          meet your unique needs.
        </div>
        <div className="flex flex-row items-center justify-start gap-boundvariablesdata4 text-left text-base">
          <Button
            showRightIcon
            showLeftIcon={false}
            buttonText="Get started"
            showButtonText
            propBackgroundColor="#0e9f6e"
            propPadding="12px 20px"
            propOverflow="hidden"
            propBorder="unset"
            propWidth="unset"
            propBorderRadius="8px"
            propHeight="unset"
            cartPlus="/cartplus.svg"
            propTextTransform="unset"
            propColor="#fff"
            propAlignSelf="unset"
            cartPlus1="/arrowright.svg"
            buttonFlex="unset"
            buttonAlignSelf="unset"
          />
          <ButtonWhitelDefaultTrueFa
            showLeftIcon
            buttonText="Learn more"
            showRightIcon
            showButtonText
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
