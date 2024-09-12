import { useCallback } from "react";
import PropTypes from "prop-types";

const ButtonWhitelDefaultTrueFa = ({
  className = "",
  showLeftIcon = false,
  buttonText = "Learn more",
  showRightIcon = false,
  showButtonText = true,
}) => {
  const onButtonWhitelDefaultTrueFaContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='services']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`w-[127px] rounded-rounded-lg border-white border-[1px] border-solid box-border flex flex-row items-center justify-center py-2.5 px-[18px] gap-boundvariablesdata5 cursor-pointer text-left text-base text-white font-leading-none-text-sm-font-medium ${className}`}
      onClick={onButtonWhitelDefaultTrueFaContainerClick}
    >
      {showLeftIcon && (
        <img
          className="h-boundvariablesdata2 w-boundvariablesdata2 relative overflow-hidden shrink-0"
          alt=""
        />
      )}
      {showButtonText && (
        <div className="relative leading-[150%] font-medium whitespace-nowrap">
          {buttonText}
        </div>
      )}
      {showRightIcon && (
        <img
          className="h-boundvariablesdata2 w-boundvariablesdata2 relative overflow-hidden shrink-0"
          alt=""
        />
      )}
    </div>
  );
};

ButtonWhitelDefaultTrueFa.propTypes = {
  className: PropTypes.string,
  showLeftIcon: PropTypes.bool,
  buttonText: PropTypes.string,
  showRightIcon: PropTypes.bool,
  showButtonText: PropTypes.bool,
};

export default ButtonWhitelDefaultTrueFa;