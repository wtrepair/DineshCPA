import { FunctionComponent, useCallback } from "react";
import Button from "./Button";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onColumn2ContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onColumn4ContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`absolute top-[10539px] left-[0px] bg-green-800 border-green-800 border-t-[1px] border-solid box-border w-[1440px] h-[801px] flex flex-col items-center justify-start text-center text-17xl text-white font-text-xl-font-normal ${className}`}
    >
      <div className="w-[1280px] flex flex-col items-center justify-start py-boundvariablesdata5 px-0 box-border gap-boundvariablesdata3">
        <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata5">
          <div className="w-[468px] flex flex-col items-center justify-start gap-boundvariablesdata9">
            <b className="self-stretch relative leading-[125%]">
              Let's work together
            </b>
            <div className="self-stretch flex flex-row items-start justify-start gap-boundvariablesdata4 text-left text-sm">
              <Button
                showRightIcon={false}
                showLeftIcon={false}
                buttonText="RECIEVE NEWS"
                showButtonText
                propBackgroundColor="#fff"
                propPadding="10px 20px"
                propOverflow="unset"
                propBorder="1px solid #e5e7eb"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight="unset"
                cartPlus="/cartplus1.svg"
                propTextTransform="unset"
                propColor="#111928"
                propAlignSelf="unset"
                cartPlus1="/cartplus1.svg"
                buttonFlex="1"
                buttonAlignSelf="unset"
              />
              <Button
                showRightIcon
                showLeftIcon
                buttonText="Contact us"
                showButtonText
                cartPlus="/cartplus2.svg"
                cartPlus1="/cartplus2.svg"
              />
            </div>
          </div>
          <div className="w-[946px] h-[308px] overflow-hidden shrink-0 flex flex-row items-start justify-between text-left text-sm">
            <div className="w-44 flex flex-col items-start justify-start gap-boundvariablesdata4">
              <div className="self-stretch relative leading-[150%] uppercase font-semibold">
                home
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata4 text-base">
                <div
                  className="self-stretch flex flex-row items-center justify-start cursor-pointer"
                  onClick={onLinkContainerClick}
                >
                  <div className="relative leading-[150%]">About</div>
                </div>
                <div className="self-stretch h-6" />
              </div>
            </div>
            <div
              className="w-44 flex flex-col items-start justify-start gap-boundvariablesdata4 cursor-pointer"
              onClick={onColumn2ContainerClick}
            >
              <div className="self-stretch relative leading-[150%] uppercase font-semibold">
                Services
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata4 text-base">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="relative leading-[150%]">Business Tax</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="relative leading-[150%]">Personal Tax</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="relative leading-[150%]">{`Year-End & Bookkeeping`}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="relative leading-[150%]">{`Succession & Valuations`}</div>
                </div>
              </div>
            </div>
            <div className="w-44 flex flex-col items-start justify-start gap-boundvariablesdata4">
              <div className="self-stretch relative leading-[150%] uppercase font-semibold">
                blog
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata4 text-base">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex-1 relative leading-[150%]">
                    Guide to Tax Changes
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex-1 relative leading-[150%]">{`SR&ED`}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex-1 relative leading-[150%]">
                    Succession Planning
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex-1 relative leading-[150%]">
                    Individual Tax Planning
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex-1 relative leading-[150%]">
                    Business Growth
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[227px] flex flex-col items-start justify-start gap-boundvariablesdata4 cursor-pointer"
              onClick={onColumn4ContainerClick}
            >
              <div className="self-stretch relative leading-[150%] uppercase font-semibold">
                contact
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata4 text-base">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="relative leading-[150%]">
                    E-mail: info@dineshcpa.com
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="relative leading-[150%]">
                    Telephone: 1-855-DINESH-1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative bg-gray-200 h-px" />
        <div className="self-stretch flex flex-row items-center justify-between text-5xl">
          <div className="flex flex-row items-center justify-start gap-3 text-left">
            <img className="w-5 relative h-5" alt="" src="/mountainsun1.svg" />
            <div className="relative leading-[150%] font-semibold">
              Dinesh CPA
            </div>
          </div>
          <div className="flex-1 relative text-base leading-[150%]">
            © 2024 Dinesh CPA. All rights reserved.
          </div>
          <div className="flex flex-row items-center justify-start gap-boundvariablesdata7 text-sm">
            <img className="w-7 relative h-5" alt="" src="/flags--ca.svg" />
            <div className="relative leading-[14px] font-medium">
              English (CA)
            </div>
            <img
              className="w-boundvariablesdata11 relative h-boundvariablesdata11 overflow-hidden shrink-0"
              alt=""
              src="/chevrondown.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
