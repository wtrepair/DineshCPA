import { FunctionComponent, useCallback } from "react";
import InputField1 from "./InputField1";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutUsContainer1']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesContainer']"
    );
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
    <div
      className={`absolute top-[0px] left-[0px] w-[1440px] flex flex-col items-start justify-start text-center text-sm text-gray-900 font-text-xl-font-normal ${className}`}
    >
      <div className="self-stretch bg-gray-800 flex flex-row items-center justify-center p-boundvariablesdata25 text-white">
        <div className="w-[1280px] flex flex-row items-center justify-between">
          <div className="w-[1109px] flex flex-row items-center justify-start gap-boundvariablesdata24">
            <div className="flex flex-row items-start justify-center gap-boundvariablesdata27">
              <div className="relative leading-[150%] font-semibold">{`S&P 500`}</div>
              <div className="rounded-10xs border-green-400 border-[1px] border-solid flex flex-row items-center justify-center py-boundvariablesdata30 px-boundvariablesdata28 text-xs text-green-400">
                <div className="relative leading-[150%] font-medium">
                  +0.69%
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-boundvariablesdata27">
              <div className="relative leading-[150%] font-semibold">
                Nasdaq
              </div>
              <div className="rounded-10xs border-red-400 border-[1px] border-solid flex flex-row items-center justify-center py-boundvariablesdata30 px-boundvariablesdata28 text-xs text-red-400">
                <div className="relative leading-[150%] font-medium">
                  -0.97%
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-boundvariablesdata27">
              <div className="relative leading-[150%] font-semibold">
                Dow 30
              </div>
              <div className="rounded-10xs border-green-400 border-[1px] border-solid flex flex-row items-center justify-center py-boundvariablesdata30 px-boundvariablesdata28 text-xs text-green-400">
                <div className="relative leading-[150%] font-medium">
                  +0.74%
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-boundvariablesdata27">
              <div className="relative leading-[150%] font-semibold">Gold</div>
              <div className="rounded-10xs border-green-400 border-[1px] border-solid flex flex-row items-center justify-center py-boundvariablesdata30 px-boundvariablesdata28 text-xs text-green-400">
                <div className="relative leading-[150%] font-medium">
                  +0.43%
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-boundvariablesdata27">
              <div className="relative leading-[150%] font-semibold">
                Silver
              </div>
              <div className="rounded-10xs border-green-400 border-[1px] border-solid flex flex-row items-center justify-center py-boundvariablesdata30 px-boundvariablesdata28 text-xs text-green-400">
                <div className="relative leading-[150%] font-medium">
                  +0.30%
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-boundvariablesdata27">
              <div className="relative leading-[150%] font-semibold">
                Crude Oil
              </div>
              <div className="rounded-10xs border-red-400 border-[1px] border-solid flex flex-row items-center justify-center py-boundvariablesdata30 px-boundvariablesdata28 text-xs text-red-400">
                <div className="relative leading-[150%] font-medium">
                  -1.01%
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-boundvariablesdata27">
              <div className="relative leading-[150%] font-semibold">
                EUR/USD
              </div>
              <div className="rounded-10xs border-green-400 border-[1px] border-solid flex flex-row items-center justify-center py-boundvariablesdata30 px-boundvariablesdata28 text-xs text-green-400">
                <div className="relative leading-[150%] font-medium">
                  +0.71%
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center">
            <div className="relative leading-[150%] font-semibold">
              Visit Markets Data
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-center p-boundvariablesdata26 text-left text-5xl">
        <div className="w-[1280px] flex flex-row items-center justify-between">
          <div className="w-[922px] flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-3">
              <img className="w-5 relative h-5" alt="" src="/mountainsun.svg" />
              <div className="relative leading-[150%] font-semibold">
                Dinesh CPA
              </div>
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
          <div className="flex flex-row items-center justify-start gap-boundvariablesdata26 text-sm text-primary-700">
            <div className="relative leading-[150%] font-medium">Sign In</div>
            <div className="self-stretch w-px relative border-gray-200 border-r-[1px] border-solid box-border" />
            <img
              className="w-boundvariablesdata26 relative h-boundvariablesdata26 overflow-hidden shrink-0"
              alt=""
              src="/bell.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch relative border-gray-200 border-t-[1px] border-solid box-border h-px" />
      <div className="self-stretch bg-white flex flex-row items-center justify-center p-boundvariablesdata25">
        <div className="w-[1280px] flex flex-row items-center justify-start gap-boundvariablesdata24">
          <div className="flex flex-col items-start justify-center">
            <div className="relative leading-[150%] font-medium">Home</div>
          </div>
          <div
            className="flex flex-col items-start justify-center cursor-pointer"
            onClick={onLinkContainerClick}
          >
            <div className="relative leading-[150%] font-medium">About Us</div>
          </div>
          <div
            className="flex flex-col items-start justify-center cursor-pointer"
            onClick={onLinkContainerClick1}
          >
            <div className="relative leading-[150%] font-medium">
              Our Services
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="relative leading-[150%] font-medium">Blog</div>
          </div>
          <div
            className="flex flex-col items-start justify-center cursor-pointer"
            onClick={onLinkContainerClick2}
          >
            <div className="relative leading-[150%] font-medium">{`Contact `}</div>
          </div>
          <div className="w-[38px] h-[21px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;