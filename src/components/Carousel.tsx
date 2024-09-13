import { FunctionComponent } from "react";
import Card from "./Card";
import Button3 from "./Button3";

export type CarouselType = {
  className?: string;
};

const Carousel: FunctionComponent<CarouselType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[6257px] left-[10px] rounded-lg w-[1440px] h-[791px] overflow-hidden bg-[url('/public/carousel@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-lg text-white font-text-xl-font-normal ${className}`}
    >
      <div className="absolute top-[54px] left-[28px] flex flex-col items-start justify-start gap-8">
        <div className="w-80 shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-8xs bg-gray1-200 flex flex-col items-start justify-start p-boundvariablesdata4 box-border gap-boundvariablesdata7">
          <div className="self-stretch relative bg-primary-600 h-1" />
          <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata7">
            <div className="self-stretch relative leading-[125%] font-semibold">
              Trustworthy
            </div>
            <div className="self-stretch relative text-base leading-[150%] text-gray-200">
              We build lasting relationships built on trust
            </div>
          </div>
        </div>
        <Card
          title="Meticulous"
          description="Give you confidence in your financial plan"
        />
        <Card
          propBorderRadius="unset"
          title="Reliable"
          description="Consistent and dependable service so you can focus on your goals, knowing we have your back"
        />
        <Card
          propBorderRadius="unset"
          title="Proactive"
          description="We stay ahead of the curve"
        />
      </div>
      <div className="absolute top-[241px] left-[545px] w-[800px] flex flex-col items-start justify-start text-41xl">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[125%] font-extrabold flex items-center h-[311px] shrink-0">
            Empowering your financial future with expert guidance and clear
            communication, so you can focus on what truly matters.
          </div>
        </div>
      </div>
      <Button3
        cartPlus="/videocamera1.svg"
        buttonText="Watch video"
        cartPlus1="/cartplus.svg"
        showRightIcon={false}
        showLeftIcon
        showButtonText
        buttonPosition="absolute"
        buttonPadding="12px 20px"
        buttonBackgroundColor="#9ca3af"
        buttonOverflow="hidden"
        buttonBorder="unset"
        buttonTop="665px"
        buttonLeft="545px"
        buttonBorderRadius="8px"
        buttonAlignSelf="unset"
        cartPlusIconWidth="20px"
        cartPlusIconHeight="20px"
        textColor="#fff"
      />
    </div>
  );
};

export default Carousel;
