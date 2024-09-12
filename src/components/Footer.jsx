import { useCallback } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onColumn2ContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='services']");
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
    <footer
      className={`self-stretch bg-green-800 border-green-800 border-t-[1px] border-solid box-border flex flex-col items-start justify-start pt-[62px] px-20 pb-[114px] gap-12 max-w-full text-center text-17xl text-white font-leading-none-text-sm-font-medium mq450:pt-[26px] mq450:pb-12 mq450:box-border mq825:gap-6 mq825:pt-10 mq825:px-10 mq825:pb-[74px] mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata1 max-w-full lg:gap-boundvariablesdata1 mq825:gap-boundvariablesdata1">
        <div className="w-[468px] flex flex-col items-center justify-start gap-boundvariablesdata3 max-w-full mq825:gap-boundvariablesdata3">
          <h1 className="m-0 self-stretch relative text-inherit leading-[125%] font-bold font-[inherit] mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
            Let's work together
          </h1>
          <div className="flex flex-row items-start justify-center gap-boundvariablesdata2 text-left text-sm mq825:flex-wrap">
            <Button
              showRightIcon={false}
              showLeftIcon={false}
              buttonText="RECIEVE NEWS"
              showButtonText
              propBackgroundColor="#fff"
              propPadding="8px 59px"
              propOverflow="unset"
              propBorder="1px solid #e5e7eb"
              propWidth="unset"
              propBorderRadius="8px"
              propHeight="unset"
              cartPlus="pending_I9:1132;29:127802"
              propTextTransform="unset"
              propColor="#111928"
              propAlignSelf="unset"
              cartPlus1="pending_I9:1132;29:127804"
            />
            <Button
              showRightIcon
              showLeftIcon
              buttonText="Contact us"
              showButtonText
              cartPlus="pending_I9:1133;26:130982"
              cartPlus1="pending_I9:1133;26:128439"
            />
          </div>
        </div>
        <div className="w-[946px] overflow-hidden flex flex-row items-start justify-between pt-0 px-0 pb-[87px] box-border gap-5 max-w-full text-left text-sm lg:flex-wrap">
          <div className="w-44 flex flex-col items-start justify-start gap-boundvariablesdata2">
            <div className="self-stretch relative leading-[150%] uppercase font-semibold">
              home
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata2 text-base">
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
            className="w-44 flex flex-col items-start justify-start gap-boundvariablesdata2 cursor-pointer"
            onClick={onColumn2ContainerClick}
          >
            <div className="self-stretch relative leading-[150%] uppercase font-semibold">
              Services
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata2 text-base">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="relative leading-[150%]">Business Tax</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="relative leading-[150%]">Personal Tax</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 px-0">
                <div className="w-[188px] relative leading-[150%] inline-block shrink-0">{`Year-End & Bookkeeping`}</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 px-0">
                <div className="w-[185px] relative leading-[150%] inline-block shrink-0">{`Succession & Valuations`}</div>
              </div>
            </div>
          </div>
          <div className="w-44 flex flex-col items-start justify-start gap-boundvariablesdata2">
            <div className="self-stretch relative leading-[150%] uppercase font-semibold">
              blog
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata2 text-base">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[150%] whitespace-nowrap">
                  Guide to Tax Changes
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[150%]">{`SR&ED`}</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[150%] whitespace-nowrap">
                  Succession Planning
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[150%] whitespace-nowrap">
                  Individual Tax Planning
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[150%] whitespace-nowrap">
                  Business Growth
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[227px] flex flex-col items-start justify-start gap-boundvariablesdata2 cursor-pointer"
            onClick={onColumn4ContainerClick}
          >
            <div className="self-stretch relative leading-[150%] uppercase font-semibold">
              contact
            </div>
            <div className="flex flex-col items-start justify-start gap-boundvariablesdata2 text-base">
              <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[11px]">
                <div className="relative leading-[150%]">
                  E-mail: info@dineshcpa.com
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-0 pl-0 pr-7">
                <div className="relative leading-[150%]">
                  Telephone: 416-879-7023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative bg-gray-200" />
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-0 max-w-full [row-gap:20px] text-5xl">
        <div className="flex flex-row items-start justify-start gap-3 text-left">
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <img className="w-5 h-5 relative" alt="" src="/mountainsun-1.svg" />
          </div>
          <h2 className="m-0 relative text-inherit leading-[150%] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[29px]">
            Dinesh CPA
          </h2>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[632px] max-w-full text-base lg:min-w-full">
          <div className="self-stretch relative leading-[150%]">
            © 2024 Dinesh CPA. All rights reserved.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-sm">
          <div className="flex flex-row items-start justify-start gap-2">
            <img
              className="self-stretch w-7 relative max-h-full min-h-[20px]"
              alt=""
              src="/flags--ca.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <a className="[text-decoration:none] relative leading-[14px] font-medium text-[inherit] whitespace-nowrap">
                English (CA)
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-boundvariablesdata h-boundvariablesdata relative overflow-hidden shrink-0"
                alt=""
                src="/chevrondown-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
