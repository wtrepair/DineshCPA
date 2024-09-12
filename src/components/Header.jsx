import { useCallback } from "react";
import InputField1 from "./InputField1";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutUsContainer1']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='services']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-center text-sm text-gray-900 font-leading-none-text-sm-font-medium ${className}`}
    >
      <div className="self-stretch bg-gray-800 flex flex-row items-center justify-center py-boundvariablesdata25 px-20 box-border max-w-full text-white mq825:gap-boundvariablesdata24 mq825:pl-boundvariablesdata25 mq825:pr-boundvariablesdata25 mq825:box-border">
        <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq1425:flex-wrap">
          <div className="w-[1109px] flex flex-row items-center justify-start py-0 pl-0 pr-[62px] box-border gap-boundvariablesdata24 max-w-full lg:flex-wrap lg:pr-[31px] lg:box-border mq825:gap-boundvariablesdata24">
            <div className="flex-1 flex flex-row items-start justify-center gap-boundvariablesdata27 min-w-[86px]">
              <div className="relative leading-[150%] font-semibold">{`S&P 500`}</div>
              <div className="flex-1 rounded-10xs border-green-400 border-[1px] border-solid flex flex-row items-center justify-center py-0 px-2 text-xs text-green-400">
                <div className="relative leading-[150%] font-medium">
                  +0.69%
                </div>
              </div>
            </div>
            <div className="w-[121px] flex flex-row items-start justify-center gap-boundvariablesdata27">
              <div className="relative leading-[150%] font-semibold shrink-0">
                Nasdaq
              </div>
              <div className="flex-1 rounded-10xs border-red-400 border-[1px] border-solid flex flex-row items-center justify-center py-0 px-2 text-xs text-red-400">
                <div className="relative leading-[150%] font-medium">
                  -0.97%
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-center gap-boundvariablesdata27 min-w-[81px]">
              <div className="relative leading-[150%] font-semibold">
                Dow 30
              </div>
              <div className="flex-1 rounded-10xs border-green-400 border-[1px] border-solid flex flex-row items-center justify-center py-0 px-2 text-xs text-green-400">
                <div className="relative leading-[150%] font-medium">
                  +0.74%
                </div>
              </div>
            </div>
            <div className="w-[105px] flex flex-row items-start justify-center gap-boundvariablesdata27">
              <div className="relative leading-[150%] font-semibold shrink-0">
                Gold
              </div>
              <div className="flex-1 rounded-10xs border-green-400 border-[1px] border-solid flex flex-row items-center justify-center py-0 px-2 text-xs text-green-400">
                <div className="relative leading-[150%] font-medium">
                  +0.43%
                </div>
              </div>
            </div>
            <div className="w-[111px] flex flex-row items-start justify-center gap-boundvariablesdata27">
              <div className="relative leading-[150%] font-semibold shrink-0">
                Silver
              </div>
              <div className="flex-1 rounded-10xs border-green-400 border-[1px] border-solid flex flex-row items-center justify-center py-0 px-2 text-xs text-green-400">
                <div className="relative leading-[150%] font-medium">
                  +0.30%
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-center gap-boundvariablesdata27 min-w-[86px]">
              <div className="relative leading-[150%] font-semibold">
                Crude Oil
              </div>
              <div className="flex-1 rounded-10xs border-red-400 border-[1px] border-solid flex flex-row items-center justify-center py-0 px-2 text-xs text-red-400">
                <div className="relative leading-[150%] font-medium">
                  -1.01%
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-center gap-boundvariablesdata27 min-w-[86px]">
              <div className="relative leading-[150%] font-semibold">
                EUR/USD
              </div>
              <div className="flex-1 rounded-10xs border-green-400 border-[1px] border-solid flex flex-row items-center justify-center py-0 px-2 text-xs text-green-400">
                <div className="relative leading-[150%] font-medium">
                  +0.71%
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center">
            <div className="relative leading-[150%] font-semibold whitespace-nowrap">
              Visit Markets Data
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-center py-boundvariablesdata26 px-20 box-border max-w-full shrink-0 text-left text-5xl mq825:gap-4 mq825:pl-boundvariablesdata26 mq825:pr-boundvariablesdata26 mq825:box-border">
        <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq1425:flex-wrap mq1425:justify-center">
          <div className="w-[922px] flex flex-row items-center justify-between max-w-full mq825:flex-wrap">
            <div className="flex flex-row items-center justify-start gap-3">
              <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/mountainsun.svg"
              />
              <h2 className="m-0 relative text-inherit leading-[150%] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[29px]">
                Dinesh CPA
              </h2>
            </div>
            <InputField1
              labelText="First name"
              showHelperText
              showRightIcon
              showLabel
              showPlaceholder
              showLeftIcon
              placeholderText="Search"
            />
          </div>
          <div className="h-[21px] flex flex-row items-center justify-start gap-boundvariablesdata26 text-sm text-primary-700">
            <div className="relative leading-[150%] font-medium">Sign In</div>
            <div className="h-[22px] w-px relative border-gray-200 border-r-[1px] border-solid box-border" />
            <img
              className="h-boundvariablesdata26 w-boundvariablesdata26 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/bell.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative border-gray-200 border-t-[1px] border-solid box-border" />
      <div className="self-stretch bg-white flex flex-row items-center justify-center py-boundvariablesdata25 px-20 box-border max-w-full mq825:gap-boundvariablesdata24 mq825:pl-boundvariablesdata25 mq825:pr-boundvariablesdata25 mq825:box-border">
        <div className="flex-1 overflow-x-auto flex flex-row items-center justify-between py-0 pl-0 pr-[808px] box-border max-w-full gap-boundvariablesdata24 mq450:pr-5 mq450:box-border mq825:pr-[202px] mq825:box-border mq1425:pr-[404px] mq1425:box-border">
          <div className="flex flex-col items-start justify-center">
            <div className="relative leading-[150%] font-medium whitespace-nowrap">
              Home
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-center cursor-pointer"
            onClick={onLinkContainerClick}
          >
            <div className="relative leading-[150%] font-medium whitespace-nowrap">
              About Us
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-center cursor-pointer"
            onClick={onLinkContainerClick1}
          >
            <div className="relative leading-[150%] font-medium whitespace-nowrap">
              Our Services
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="relative leading-[150%] font-medium whitespace-nowrap">
              Blog
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-center cursor-pointer"
            onClick={onLinkContainerClick2}
          >
            <div className="relative leading-[150%] font-medium whitespace-nowrap">{`Contact `}</div>
          </div>
          <div className="h-[21px] w-[38px] shrink-0" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
