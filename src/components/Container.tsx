import { FunctionComponent } from "react";
import Button from "./Button";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[4899px] left-[76px] w-[1280px] flex flex-col items-center justify-start text-left text-lg text-gray-500 font-text-xl-font-normal ${className}`}
    >
      <div className="self-stretch h-[450px] flex flex-row items-center justify-start gap-boundvariablesdata5">
        <div className="flex-1 flex flex-col items-start justify-start gap-boundvariablesdata4">
          <div className="self-stretch relative text-17xl leading-[150%] font-extrabold text-gray-900">
            Protect your wealth against economic changes and financial
            uncertainty.
          </div>
          <div className="self-stretch relative leading-[150%]">
            Dinesh CPA offers tailored services to help you manage your finances
            efficiently, ensuring that you stay ahead of financial challenges
            and maximize your wealth.
          </div>
          <div className="self-stretch relative leading-[150%]">
            <p className="m-0">{`With our expert guidance, you’ll gain clarity and confidence in your financial decisions, allowing you to focus on what truly matters-securing your financial future. `}</p>
            <p className="m-0">
              Whether it’s tax planning, accounting, or strategic advice, Dinesh
              CPA is your trusted partner every step of the way.
            </p>
          </div>
          <Button
            showRightIcon
            showLeftIcon={false}
            buttonText="Read more"
            showButtonText
            propBackgroundColor="#057a55"
            propPadding="10px 20px"
            propOverflow="unset"
            propBorder="1px solid #e5e7eb"
            propWidth="unset"
            propBorderRadius="8px"
            propHeight="unset"
            cartPlus="/cartplus1.svg"
            propTextTransform="unset"
            propColor="#fff"
            propAlignSelf="unset"
            cartPlus1="/arrownarrowright.svg"
            buttonFlex="unset"
            buttonAlignSelf="unset"
          />
        </div>
        <div className="flex-1 h-[411px] flex flex-row items-start justify-start">
          <img
            className="w-[608px] relative h-[411px] object-cover"
            alt=""
            src="/pirateartifactsarrangementstilllife-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
