import Header from "./Header";
import FrameComponent from "./FrameComponent";
import Button from "./Button";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent5 from "./FrameComponent5";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent7 from "./FrameComponent7";
import Newsletter from "./Newsletter";
import FrameComponent1 from "./FrameComponent1";
import Footer from "./Footer";
import PropTypes from "prop-types";

const DineshCPA = ({ className = "" }) => {
  return (
    <div
      className={`w-[1432px] bg-white max-w-full overflow-hidden flex flex-col items-start justify-start gap-[25px] leading-[normal] tracking-[normal] text-center text-xl text-gray-500 font-leading-none-text-sm-font-medium ${className}`}
    >
      <Header />
      <FrameComponent />
      <section
        className="ml-[-3px] mb-[72px] self-stretch h-[750px] bg-green-800 overflow-hidden shrink-0 flex flex-col items-center justify-start pt-boundvariablesdata8 px-0 pb-0 box-border max-w-[102%] text-center text-41xl text-white font-leading-none-text-sm-font-medium lg:pt-boundvariablesdata8 lg:box-border mq450:h-auto mq450:pt-boundvariablesdata8 mq450:box-border"
        data-scroll-to="services"
      >
        <div className="w-[1177px] flex flex-col items-center justify-center py-[157px] px-8 box-border max-w-full shrink-0 mq450:pt-[66px] mq450:pb-[66px] mq450:box-border mq825:gap-boundvariablesdata8 mq825:pt-[102px] mq825:pb-[102px] mq825:box-border mq1425:gap-boundvariablesdata8">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[179px] box-border gap-boundvariablesdata3 max-w-full mq825:gap-boundvariablesdata3 mq825:pb-[116px] mq825:box-border">
            <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata9 max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[60px] font-extrabold font-[inherit] mq450:text-17xl mq450:leading-[36px] mq825:text-29xl mq825:leading-[48px]">
                Together we can achieve your financial goals.
              </h1>
              <h3 className="m-0 w-[768px] h-[90px] relative text-xl leading-[150%] font-normal font-[inherit] inline-block max-w-full mq450:text-base mq450:leading-[24px]">
                We specialize in transforming your financial data into
                actionable insights for the future. We will work with you to
                craft a top-tier personal or corporate strategy, ensuring
                maximum growth opportunities.
              </h3>
            </div>
            <div className="flex flex-row items-start justify-start gap-boundvariablesdata2 max-w-full mq450:flex-wrap">
              <Button
                showRightIcon
                showLeftIcon={false}
                buttonText="Learn more"
                showButtonText
                propBackgroundColor="#f9fafb"
                propPadding="14px 23px"
                propOverflow="hidden"
                propBorder="unset"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight="unset"
                cartPlus="pending_I32:1436;26:141394"
                propTextTransform="unset"
                propColor="#000"
                propAlignSelf="unset"
                cartPlus1="/arrowrightoutline.svg"
              />
              <Button
                showRightIcon={false}
                showLeftIcon
                buttonText="Watch video"
                showButtonText
                propBackgroundColor="#fff"
                propPadding="12px 22px"
                propOverflow="unset"
                propBorder="1px solid #e5e7eb"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight="unset"
                cartPlus="/videocamera.svg"
                propTextTransform="unset"
                propColor="#111928"
                propAlignSelf="unset"
                cartPlus1="pending_I32:1437;29:127796"
              />
            </div>
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent3 />
      <b className="w-[344px] relative leading-[150%] hidden items-center justify-center max-w-full mq450:text-base mq450:leading-[24px]">
        Visit the Blog
      </b>
      <FrameComponent4 />
      <FrameComponent5 />
      <FrameComponent6 />
      <FrameComponent7 />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[98px] box-border gap-[57px] max-w-full lg:pb-[42px] lg:box-border mq450:pb-[27px] mq450:box-border mq825:gap-7 mq1425:pb-16 mq1425:box-border">
        <Newsletter />
        <FrameComponent1 />
      </section>
      <Footer />
    </div>
  );
};

DineshCPA.propTypes = {
  className: PropTypes.string,
};

export default DineshCPA;