import { useCallback } from "react";
import InputField1 from "./InputField1";
import Button from "./Button";
import ButtonWhitelDefaultTrueFa from "./ButtonWhitelDefaultTrueFa";
import Row from "./Row";
import Row1 from "./Row1";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Card from "./Card";
import Badge from "./Badge";
import BlogCard from "./BlogCard";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import InputField from "./InputField";
import SelectInput from "./SelectInput";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import PropTypes from "prop-types";

const DineshCPA = ({ className = "" }) => {
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

  const onLinkContainerClick3 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`w-[1432px] bg-white max-w-full overflow-hidden flex flex-col items-start justify-start gap-[25px] leading-[normal] tracking-[normal] text-center text-xl text-gray-500 font-leading-none-text-sm-font-medium ${className}`}
    >
      <header className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-sm text-gray-900 font-leading-none-text-sm-font-medium">
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
                placeholderText="Search"
                showHelperText={false}
                showRightIcon={false}
                showLabel={false}
                showPlaceholder
                showLeftIcon
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
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[72px] pl-[5px] pr-0 box-border max-w-full text-center text-41xl text-white font-leading-none-text-sm-font-medium mq825:pb-[47px] mq825:box-border">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-end py-[164px] px-0 box-border bg-[url('/public/jumbotron@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[664px] max-w-full mq825:pt-[107px] mq825:pb-[107px] mq825:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata9 max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[60px] font-extrabold font-[inherit] mq450:text-17xl mq450:leading-[36px] mq825:text-29xl mq825:leading-[48px]">
              <p className="m-0">Streamlining finances for</p>
              <p className="m-0">individuals, businesses, growth</p>
            </h1>
            <h3 className="m-0 w-[768px] relative text-xl leading-[150%] font-normal font-[inherit] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq450:text-base mq450:leading-[24px]">
              Empowering your financial journey with expert accounting services,
              precise tax planning, and effective financial strategies tailored
              to meet your unique needs.
            </h3>
            <div className="flex flex-row items-center justify-start py-0 px-5 box-border gap-boundvariablesdata2 max-w-full">
              <Button
                cartPlus="/cartplus.svg"
                buttonText="Get started"
                cartPlus1="/arrowright.svg"
                showRightIcon
                showLeftIcon={false}
                showButtonText
                propBackgroundColor="#0e9f6e"
                propPadding="12px 19px"
                propOverflow="hidden"
                propBorder="unset"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight="unset"
                propTextTransform="unset"
                propColor="#fff"
                propAlignSelf="unset"
              />
              <ButtonWhitelDefaultTrueFa
                buttonText="Learn more"
                showLeftIcon={false}
                showRightIcon={false}
                showButtonText
              />
            </div>
          </div>
        </div>
      </section>
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
                cartPlus="/arrowright.svg"
                buttonText="Learn more"
                cartPlus1="/arrowrightoutline.svg"
                showRightIcon
                showLeftIcon={false}
                showButtonText
                propBackgroundColor="#f9fafb"
                propPadding="14px 23px"
                propOverflow="hidden"
                propBorder="unset"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight="unset"
                propTextTransform="unset"
                propColor="#000"
                propAlignSelf="unset"
              />
              <Button
                cartPlus="/videocamera.svg"
                buttonText="Watch video"
                cartPlus1="/cartplus.svg"
                showRightIcon={false}
                showLeftIcon
                showButtonText
                propBackgroundColor="#fff"
                propPadding="12px 22px"
                propOverflow="unset"
                propBorder="1px solid #e5e7eb"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight="unset"
                propTextTransform="unset"
                propColor="#111928"
                propAlignSelf="unset"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start pt-0 pb-[91px] pl-[116px] pr-[3px] box-border max-w-full text-left text-17xl text-gray-900 font-leading-none-text-sm-font-medium mq450:pb-5 mq450:box-border mq825:pl-[29px] mq825:pb-[25px] mq825:box-border mq1425:pl-[58px] mq1425:pb-[38px] mq1425:box-border">
        <h1 className="m-0 w-[437.6px] h-[35px] relative text-inherit [text-decoration:underline] leading-[125%] font-bold font-[inherit] whitespace-pre-wrap inline-block shrink-0 max-w-full z-[1] mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
          Our Areas of Expertise
        </h1>
        <div className="ml-[-127px] w-[1440px] flex flex-col items-start justify-start gap-[20.2px] max-w-[110%] shrink-0">
          <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-boundvariablesdata16 px-0 box-border max-w-full mq825:pt-boundvariablesdata16 mq825:pb-boundvariablesdata16 mq825:box-border mq1425:pt-boundvariablesdata16 mq1425:pb-boundvariablesdata16 mq1425:box-border">
            <div className="w-[1280px] flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq825:gap-8">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-8 box-border gap-boundvariablesdata17 max-w-full lg:flex-wrap mq450:gap-boundvariablesdata17 mq825:gap-boundvariablesdata17">
                <img
                  className="w-[528px] relative max-h-full object-cover max-w-full lg:flex-1"
                  loading="lazy"
                  alt=""
                  src="/collagefinancebannerconcept-1@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-boundvariablesdata18 min-w-[416px] max-w-full mq825:min-w-full">
                  <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[125%] font-extrabold font-[inherit] mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
                    Personal Income Tax Preparation
                  </h1>
                  <div className="self-stretch relative text-lg leading-[150%] text-gray-500">
                    Preparing your personal income tax is crucial, and our
                    comprehensive services ensure that all your financial
                    details are accurately captured and filed. We guide you
                    through the entire process, from gathering essential
                    personal information and documenting various income sources
                    to claiming deductions and credits specific to your
                    situation. Whether you have business income, rental
                    properties, or have made significant life changes in the
                    past year, we help you maximize your tax returns while
                    ensuring compliance with the latest tax regulations. Let our
                    expert advisors assist you in preparing and filing your tax
                    returns efficiently and accurately.
                  </div>
                  <div className="flex flex-row items-center justify-start gap-boundvariablesdata19">
                    <Button
                      cartPlus="/arrownarrowright.svg"
                      buttonText="Get  started"
                      cartPlus1="/arrowrightoutline-1.svg"
                      showRightIcon
                      showLeftIcon={false}
                      showButtonText
                      propBackgroundColor="#057a55"
                      propPadding="10px 19px"
                      propOverflow="hidden"
                      propBorder="unset"
                      propWidth="unset"
                      propBorderRadius="8px"
                      propHeight="unset"
                      propTextTransform="unset"
                      propColor="#fff"
                      propAlignSelf="unset"
                    />
                    <Button
                      cartPlus="/arrownarrowright.svg"
                      buttonText="Learn more"
                      cartPlus1="/arrownarrowright.svg"
                      showRightIcon={false}
                      showLeftIcon={false}
                      showButtonText
                      propBackgroundColor="#fff"
                      propPadding="8px 18px"
                      propOverflow="unset"
                      propBorder="1px solid #e5e7eb"
                      propWidth="116px"
                      propBorderRadius="8px"
                      propHeight="unset"
                      propTextTransform="unset"
                      propColor="#111928"
                      propAlignSelf="unset"
                    />
                  </div>
                </div>
              </div>
              <Row
                heading="Bookkeeping Support "
                supportingText="Stay on top of your business transactions with our expert bookkeeping support, providing you with the crucial insights needed to make informed and profitable decisions. We assist with the recording, tracking, and analysis of your financial data, allowing you to focus on growing your business. With consistent financial reports and expert guidance, you’ll stay up-to-date on your finances, empowering you to make smarter, more strategic decisions."
                arrowNarrowRight1="/arrownarrowright.svg"
                arrowNarrowRight2="/arrownarrowright.svg"
                collageFinanceBannerConcept="/collagefinancebannerconcept-2@2x.png"
                cartPlus="/arrownarrowright.svg"
                buttonText="Get started"
                cartPlus1="/arrowrightoutline-2.svg"
                showRightIcon
                showLeftIcon={false}
                showButtonText
                propBackgroundColor="#057a55"
                propPadding2="10px 19px"
                propOverflow="hidden"
                propBorder="unset"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight="unset"
                propTextTransform="unset"
                propColor="#fff"
                propAlignSelf="unset"
              />
              <Row1
                mockup="/mockup@2x.png"
                heading="Financial Year End"
                supportingText="Preparing year-end financial statements is a vital task for every business, and our expert support ensures that it’s done smoothly. With our services, you’ll have accurate financial data, optimized tax returns, and timely completion of all year-end statements. At Dinesh Singh, we go beyond just preparation—we analyze your financial data to develop strategies that can propel your business to new heights.​"
                arrowNarrowRight1="/arrownarrowright.svg"
                arrowNarrowRight2="/arrownarrowright.svg"
                cartPlus="/arrownarrowright.svg"
                buttonText="Get started"
                cartPlus1="/arrowrightoutline-3.svg"
                showRightIcon
                showLeftIcon={false}
                showButtonText
                propBackgroundColor="#057a55"
                propPadding1="10px 19px"
                propOverflow="hidden"
                propBorder="unset"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight1="unset"
                propTextTransform="unset"
                propColor="#fff"
                propAlignSelf="unset"
              />
            </div>
            <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-boundvariablesdata16 px-20 box-border max-w-full lg:pt-boundvariablesdata16 lg:pb-boundvariablesdata16 lg:box-border mq825:p-boundvariablesdata16 mq825:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq825:gap-8">
                <Row
                  heading={`Business Planning & Advisory`}
                  supportingText="With decades of experience, we provide strategic planning advice to help your business grow to the next level. Our team analyzes your financial data to interpret past trends and guide informed decisions for your business’s future. We also assist with bookkeeping, ensuring you have the tools, support, and training needed for effective financial management, all aimed at mitigating risk and driving long-term success."
                  arrowNarrowRight1="/arrownarrowright.svg"
                  arrowNarrowRight2="/arrownarrowright.svg"
                  collageFinanceBannerConcept="/collagefinancebannerconcept-2-1@2x.png"
                  propPadding="20px 0px"
                  propPadding1="unset"
                  cartPlus="/arrownarrowright.svg"
                  buttonText="Get started"
                  cartPlus1="/arrowrightoutline-4.svg"
                  showRightIcon
                  showLeftIcon={false}
                  showButtonText
                  propBackgroundColor="#057a55"
                  propPadding2="10px 19px"
                  propOverflow="hidden"
                  propBorder="unset"
                  propWidth="unset"
                  propBorderRadius="8px"
                  propHeight="unset"
                  propTextTransform="unset"
                  propColor="#fff"
                  propAlignSelf="unset"
                />
                <Row1
                  mockup="/mockup-1@2x.png"
                  heading="Legacy Planning and Business Valuations"
                  supportingText="At Dinesh Singh, we specialize in business valuation and succession planning to help you preserve and maximize the wealth you’ve built. Whether you’re a small business owner or leading a corporation, we guide you through the transition process—addressing both the mindset shift and the technical tax aspects. Our team works with you to develop a comprehensive succession plan that aligns with your business goals, family needs, and financial aspirations, ensuring you exit on your terms. Don’t leave your business’s future to chance; let us help you create a plan that provides peace of mind and secures the value you’ve worked hard to build."
                  arrowNarrowRight1="/arrownarrowright.svg"
                  arrowNarrowRight2="/arrownarrowright.svg"
                  propPadding="unset"
                  propHeight="90px"
                  propDisplay="flex"
                  cartPlus="/arrownarrowright.svg"
                  buttonText="Get started"
                  cartPlus1="/arrowrightoutline-5.svg"
                  showRightIcon
                  showLeftIcon={false}
                  showButtonText
                  propBackgroundColor="#057a55"
                  propPadding1="10px 19px"
                  propOverflow="hidden"
                  propBorder="unset"
                  propWidth="unset"
                  propBorderRadius="8px"
                  propHeight1="unset"
                  propTextTransform="unset"
                  propColor="#fff"
                  propAlignSelf="unset"
                />
              </div>
            </div>
          </div>
          <Hero />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[76px] pb-[209px] box-border max-w-full text-left text-lg text-gray-500 font-leading-none-text-sm-font-medium mq825:pl-[38px] mq825:pr-[38px] mq825:pb-[136px] mq825:box-border">
        <div className="flex-1 flex flex-col items-center justify-start max-w-full mq825:gap-boundvariablesdata13">
          <div className="self-stretch h-[450px] flex flex-row items-center justify-start py-0 px-0 box-border gap-boundvariablesdata1 max-w-full mq450:gap-boundvariablesdata1 mq825:gap-boundvariablesdata1">
            <div className="flex-1 flex flex-col items-start justify-start gap-boundvariablesdata2 max-w-[calc(100%_-_672px)] shrink-0 lg:hidden lg:max-w-full">
              <h1 className="m-0 self-stretch h-[162px] relative text-17xl leading-[150%] font-extrabold font-[inherit] text-gray-900 flex items-center mq450:text-3xl mq450:leading-[32px] mq825:text-10xl mq825:leading-[43px]">
                Protect your wealth against economic changes and financial
                uncertainty.
              </h1>
              <div className="self-stretch relative leading-[150%]">
                Dinesh CPA offers tailored services to help you manage your
                finances efficiently, ensuring that you stay ahead of financial
                challenges and maximize your wealth.
              </div>
              <div className="self-stretch relative leading-[150%]">
                <p className="m-0">{`With our expert guidance, you’ll gain clarity and confidence in your financial decisions, allowing you to focus on what truly matters-securing your financial future. `}</p>
                <p className="m-0">
                  Whether it’s tax planning, accounting, or strategic advice,
                  Dinesh CPA is your trusted partner every step of the way.
                </p>
              </div>
              <Button
                cartPlus="/cartplus.svg"
                buttonText="Read more"
                cartPlus1="/arrownarrowright.svg"
                showRightIcon
                showLeftIcon={false}
                showButtonText
                propBackgroundColor="#057a55"
                propPadding="8px 18px"
                propOverflow="unset"
                propBorder="1px solid #e5e7eb"
                propWidth="134px"
                propBorderRadius="8px"
                propHeight="unset"
                propTextTransform="unset"
                propColor="#fff"
                propAlignSelf="unset"
              />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start max-w-[calc(100%_-_672px)] lg:hidden lg:max-w-full">
              <img
                className="h-[411px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/pirateartifactsarrangementstilllife-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <b className="w-[344px] relative leading-[150%] hidden items-center justify-center max-w-full mq450:text-base mq450:leading-[24px]">
        Visit the Blog
      </b>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-5 pb-20 box-border max-w-full text-left text-17xl text-gray-900 font-leading-none-text-sm-font-medium mq825:pb-[52px] mq825:box-border">
        <div
          className="flex flex-row items-end justify-start relative gap-[7.8px] max-w-full mq1425:flex-wrap"
          data-scroll-to="aboutUsContainer"
        >
          <h1 className="!m-[0] h-[35px] w-[437.6px] absolute top-[0px] left-[30.2px] text-inherit [text-decoration:underline] leading-[125%] font-bold font-[inherit] inline-block mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
            About Us
          </h1>
          <div className="h-[455px] w-[274.9px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-end justify-start gap-[18.5px]">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[30px] pr-[27px]">
                <img
                  className="h-[254px] flex-1 relative max-w-full overflow-hidden object-cover"
                  loading="lazy"
                  alt=""
                  src="/blockchain-2246959removebgpreview-4@2x.png"
                />
              </div>
              <div className="self-stretch h-[69.5px] relative rounded-[33px] bg-darkslategray" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start relative max-w-full text-xl text-gray-500">
            <AboutUs />
            <h3 className="!m-[0] h-[120px] w-[772.5px] absolute bottom-[224px] left-[152.9px] text-inherit leading-[150%] font-normal font-[inherit] inline-block z-[2] mq450:text-base mq450:leading-[24px]">
              Strategy is of upmost importance, and Mr.Singh takes a broad
              stance where it comes to analyzing your or your company’s
              particular situation. Having been himself involved in numerous
              business deals, Mr.Singh is an experienced comptroller and is apt
              in delivering financial advice.
            </h3>
            <h3 className="!m-[0] h-[90px] w-[772.5px] absolute bottom-[93px] left-[151.8px] text-inherit leading-[150%] font-normal font-[inherit] inline-block z-[2] mq450:text-base mq450:leading-[24px]">
              At Dinesh CPA, we aim to always use a proactive approach to
              address your accounting needs and keep you informed about the
              latest financial trends and regulations.
            </h3>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[147px] pl-2.5 pr-0 box-border max-w-full text-left text-lg text-white font-leading-none-text-sm-font-medium lg:pb-24 lg:box-border mq825:pb-[62px] mq825:box-border">
        <div className="w-[1440px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[54px] px-7 pb-[78px] box-border gap-[197px] bg-[url('/public/carousel@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-[102%] z-[1] mq450:gap-[25px] mq450:pt-[23px] mq450:pb-[33px] mq450:box-border mq825:gap-[49px] mq825:pt-[35px] mq825:pb-[51px] mq825:box-border mq1425:gap-[98px] mq1425:flex-wrap">
          <div className="w-80 flex flex-col items-start justify-start gap-8 min-w-[320px] mq450:gap-4 mq1425:flex-1">
            <div className="self-stretch shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-8xs bg-gray1-200 flex flex-col items-start justify-start py-4 pl-4 pr-[15px] gap-2">
              <div className="self-stretch h-1 relative bg-primary-600" />
              <div className="self-stretch relative leading-[125%] font-semibold">
                Trustworthy
              </div>
              <div className="self-stretch h-12 relative text-base leading-[150%] text-gray-200 inline-block">
                We build lasting relationships built on trust
              </div>
            </div>
            <Card
              title="Meticulous"
              description="Give you confidence in your financial plan"
            />
            <Card
              title="Reliable"
              description="Consistent and dependable service so you can focus on your goals, knowing we have your back"
              propBorderRadius="unset"
            />
            <Card
              title="Proactive"
              description="We stay ahead of the curve"
              propBorderRadius="unset"
            />
          </div>
          <div className="w-[800px] flex flex-col items-start justify-start pt-[187px] px-0 pb-0 box-border min-w-[800px] max-w-full text-41xl lg:min-w-full mq825:pt-[122px] mq825:box-border mq1425:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[113px] mq450:gap-7 mq825:gap-14">
              <h1 className="m-0 self-stretch h-[311px] relative text-inherit leading-[125%] font-extrabold font-[inherit] flex items-center shrink-0 mq450:text-17xl mq450:leading-[45px] mq825:text-29xl mq825:leading-[60px]">
                Empowering your financial future with expert guidance and clear
                communication, so you can focus on what truly matters.
              </h1>
              <div className="rounded-rounded-lg bg-gray-400 overflow-hidden flex flex-row items-start justify-start py-boundvariablesdata pl-boundvariablesdata5 pr-[19px] gap-boundvariablesdata4 text-base">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-boundvariablesdata5 h-boundvariablesdata5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/videocamera-2.svg"
                  />
                </div>
                <div className="relative leading-[150%] font-medium">
                  Watch video
                </div>
                <img
                  className="h-boundvariablesdata2 w-boundvariablesdata2 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/cartplus.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[69px] box-border gap-[27px] max-w-full text-center text-17xl text-gray-900 font-leading-none-text-sm-font-medium lg:pb-[45px] lg:box-border mq450:pb-[29px] mq450:box-border">
        <h1 className="ml-[-95px] m-0 w-[673px] relative text-inherit [text-decoration:underline] tracking-[-0.01em] leading-[125%] font-extrabold font-[inherit] flex items-center justify-center max-w-full mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
          Latest Posts
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full text-left text-5xl">
          <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center py-[70px] px-0 box-border max-w-full mq825:pt-[45px] mq825:pb-[45px] mq825:box-border">
            <div className="self-stretch flex flex-col items-center justify-start max-w-full mq825:gap-boundvariablesdata13">
              <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-x-[31px] gap-y-8 max-w-full mq825:gap-[15px]">
                <div className="flex-1 shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start min-w-[433px] max-w-full mq450:min-w-full mq825:w-[calc(100%_-_40px)]">
                  <div className="self-stretch h-[216px] flex flex-col items-start justify-start pt-boundvariablesdata9 px-boundvariablesdata9 pb-0 box-border">
                    <img
                      className="self-stretch flex-1 rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                      loading="lazy"
                      alt=""
                      src="/cardheader@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start p-boundvariablesdata9 box-border max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-end pt-[22px] px-0 pb-0 box-border gap-boundvariablesdata max-w-full">
                      <Badge
                        clock="/clock.svg"
                        badgeText="Article"
                        x="/x.svg"
                        showText
                        showIcon={false}
                        showCloseIcon={false}
                      />
                      <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata6 max-w-full">
                        <h2 className="m-0 relative text-inherit leading-[125%] font-bold font-[inherit] inline-block max-w-full mq450:text-lgi mq450:leading-[24px]">
                          <p className="m-0">SEO Basics: Beginner’s Guide to</p>
                          <p className="m-0">Tax Planning Success</p>
                        </h2>
                        <div className="self-stretch relative text-base leading-[150%] text-gray-500">{`Tax planning is crucial for maximizing your financial position. Our guide helps you navigate the essentials of effective tax strategies. `}</div>
                      </div>
                      <div className="flex flex-col items-start justify-end text-sm">
                        <div className="flex flex-row items-center justify-start gap-boundvariablesdata">
                          <img
                            className="h-8 w-8 relative rounded-81xl object-cover"
                            loading="lazy"
                            alt=""
                            src="/avatar@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[125%] font-medium">
                              Bonnie Green
                            </div>
                            <div className="relative leading-[125%] text-gray-500 whitespace-nowrap">
                              Aug 15, 2021 · 16 min read
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BlogCard
                  cardHeader="/cardheader-1@2x.png"
                  title="How to Optimize Your Business for Financial Growth"
                  preview="Discover how to structure your business finances for long-term growth and success."
                  avatar="/avatar-1@2x.png"
                  small="Aug 10, 2021 · 6 min read"
                  clock="/clock.svg"
                  badgeText="Article"
                  x="/x.svg"
                  showText
                  showIcon={false}
                  showCloseIcon={false}
                />
                <BlogCard
                  cardHeader="/cardheader-2@2x.png"
                  title="Understanding the Latest Tax Changes: A Guide for Small Businesses and Individuals"
                  preview="Navigate recent tax law updates and how they impact your finances.                                       "
                  avatar="/avatar-2@2x.png"
                  small="Aug 1, 2021 · 23 min read"
                  propPadding="unset"
                  propHeight="90px"
                  clock="/clock.svg"
                  badgeText="Tutorial"
                  x="/x.svg"
                  showText
                  showIcon={false}
                  showCloseIcon={false}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[122px] pr-5 text-xl text-black lg:pl-[61px] lg:box-border mq825:pl-[30px] mq825:box-border">
            <h3 className="m-0 relative text-inherit leading-[150%] font-normal font-[inherit] mq450:text-base mq450:leading-[24px]">
              Stay informed with the most recent financial and business updates
              by subscribing to our blog.​
            </h3>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-16 box-border max-w-full mq825:pb-[42px] mq825:box-border">
        <Testimonials />
      </section>
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[98px] box-border gap-[57px] max-w-full text-left text-41xl text-gray-900 font-leading-none-text-sm-font-medium lg:pb-[42px] lg:box-border mq450:pb-[27px] mq450:box-border mq825:gap-7 mq1425:pb-16 mq1425:box-border">
        <Newsletter />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-1 box-border max-w-full">
          <div
            className="flex-1 flex flex-col items-start justify-start gap-[117.3px] max-w-full mq450:gap-[29px] mq825:gap-[59px]"
            data-scroll-to="contactContainer"
          >
            <div className="w-[1271.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 w-[379.3px] relative text-inherit leading-[35.7px] font-bold font-[inherit] inline-block shrink-0 max-w-full mq450:text-17xl mq450:leading-[45px] mq825:text-29xl mq825:leading-[60px]">
                Contact Us
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center py-[106.5px] px-0 box-border gap-boundvariablesdata1 max-w-full text-center text-xl lg:pt-[69px] lg:pb-[69px] lg:box-border mq450:gap-boundvariablesdata1 mq825:gap-boundvariablesdata1 mq825:pt-[45px] mq825:pb-[45px] mq825:box-border">
              <div className="self-stretch flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-0 mq1425:flex-wrap mq1425:justify-center">
                <div className="w-[472px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-0 px-[72px] box-border gap-boundvariablesdata2 max-w-full mq825:pl-9 mq825:pr-9 mq825:box-border">
                  <div className="w-boundvariablesdata1 h-boundvariablesdata1 rounded-rounded-full bg-gray-100 flex flex-row items-center justify-center p-3.5 box-border">
                    <img
                      className="h-boundvariablesdata12 w-boundvariablesdata12 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/store.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata11">
                    <h3 className="m-0 relative text-inherit leading-[150%] font-bold font-[inherit] mq450:text-base mq450:leading-[24px]">
                      Company information:
                    </h3>
                    <div className="self-stretch h-[54px] relative text-base leading-[150%] text-gray-500 inline-block shrink-0">
                      <p className="m-0">Dinesh Singh CGA, CPA</p>
                      <p className="m-0">Dinesh Professional Corporation</p>
                    </div>
                  </div>
                </div>
                <div className="w-[472px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-0 px-[72px] box-border gap-boundvariablesdata2 max-w-full mq825:pl-9 mq825:pr-9 mq825:box-border">
                  <div className="w-boundvariablesdata1 h-boundvariablesdata1 rounded-rounded-full bg-gray-100 flex flex-row items-center justify-center p-3.5 box-border">
                    <img
                      className="h-boundvariablesdata12 w-boundvariablesdata12 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/mappin.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata11">
                    <h3 className="m-0 relative text-inherit leading-[150%] font-bold font-[inherit] mq450:text-base mq450:leading-[24px]">
                      Address:
                    </h3>
                    <div className="self-stretch h-[72px] relative text-base leading-[150%] text-gray-500 inline-block">
                      <p className="m-0">216-2985 Drew Road</p>
                      <p className="m-0">Mississauga, ON</p>
                    </div>
                  </div>
                </div>
                <div className="w-[472px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-0 px-[72px] box-border gap-boundvariablesdata2 max-w-full text-base mq825:pl-9 mq825:pr-9 mq825:box-border">
                  <div className="w-boundvariablesdata1 h-boundvariablesdata1 rounded-rounded-full bg-gray-100 flex flex-row items-center justify-center p-3.5 box-border">
                    <img
                      className="h-boundvariablesdata12 w-boundvariablesdata12 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/phone.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata11">
                    <h3 className="m-0 relative text-xl leading-[150%] font-bold font-[inherit] mq450:text-base mq450:leading-[24px]">
                      Contact us:
                    </h3>
                    <div className="self-stretch h-[54px] relative leading-[150%] text-gray-500 inline-block shrink-0">
                      Email us for general queries, including marketing and
                      partnership opportunities.
                    </div>
                    <div className="relative leading-[150%] font-semibold whitespace-nowrap">
                      info@dineshcpa.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[808px] flex flex-col items-start justify-start py-0 px-5 box-border gap-boundvariablesdata9 max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-boundvariablesdata3 max-w-full mq450:gap-boundvariablesdata3">
                  <InputField
                    labelText="First name"
                    user="/user.svg"
                    placeholderText="Your name"
                    x="/x.svg"
                    showHelperText={false}
                    showRightIcon={false}
                    showLabel
                    showPlaceholder
                    showLeftIcon={false}
                    propMinWidth="239px"
                    propBackgroundColor="#f9fafb"
                    propBorder="1px solid #d1d5db"
                    propBorderTop="unset"
                    propBorderBottom="unset"
                    propBorderLeft="unset"
                    propOverflow="unset"
                  />
                  <InputField
                    labelText="Last name"
                    user="/user.svg"
                    placeholderText="name@example.com"
                    x="/x.svg"
                    showHelperText={false}
                    showRightIcon={false}
                    showLabel
                    showPlaceholder
                    showLeftIcon={false}
                    propMinWidth="239px"
                    propBackgroundColor="#f9fafb"
                    propBorder="1px solid #d1d5db"
                    propBorderTop="unset"
                    propBorderBottom="unset"
                    propBorderLeft="unset"
                    propOverflow="unset"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-boundvariablesdata3 max-w-full mq450:gap-boundvariablesdata3">
                  <InputField
                    labelText="Email"
                    user="/user.svg"
                    placeholderText="+1(646) 786-5060"
                    x="/x.svg"
                    showHelperText={false}
                    showRightIcon={false}
                    showLabel
                    showPlaceholder
                    showLeftIcon={false}
                    propMinWidth="239px"
                    propBackgroundColor="#f9fafb"
                    propBorder="1px solid #d1d5db"
                    propBorderTop="unset"
                    propBorderBottom="unset"
                    propBorderLeft="unset"
                    propOverflow="unset"
                  />
                  <InputField
                    labelText="Phone number"
                    user="/user.svg"
                    placeholderText="+(12) 345 6789"
                    x="/x.svg"
                    showHelperText={false}
                    showRightIcon={false}
                    showLabel
                    showPlaceholder
                    showLeftIcon={false}
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-boundvariablesdata3 max-w-full mq450:gap-boundvariablesdata3">
                  <SelectInput
                    labelText="Country"
                    info="/info.svg"
                    placeholderText="United States"
                    chevronDown="/chevrondown.svg"
                    showLabel
                    showLabelIcon
                    showPlaceholder
                  />
                  <SelectInput
                    labelText="Select language"
                    info="/info-1.svg"
                    placeholderText="English (US)"
                    chevronDown="/chevrondown-1.svg"
                    showLabel
                    showLabelIcon
                    showPlaceholder
                  />
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start max-w-full">
                  <Textarea
                    labelText="Your message"
                    placeholderText="Write text here ..."
                    helperText="A note for extra info"
                    showHelper={false}
                    showPlaceholder={false}
                    showLabel
                  />
                </div>
                <Checkbox
                  helperText="Some helper text here"
                  showHelper={false}
                  showLabel
                />
                <Button
                  cartPlus="/cartplus.svg"
                  buttonText="Send message"
                  cartPlus1="/cartplus.svg"
                  showRightIcon={false}
                  showLeftIcon={false}
                  showButtonText
                  propBackgroundColor="#057a55"
                  propPadding="10px 19px"
                  propOverflow="hidden"
                  propBorder="unset"
                  propWidth="unset"
                  propBorderRadius="8px"
                  propHeight="unset"
                  propTextTransform="unset"
                  propColor="#fff"
                  propAlignSelf="unset"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="self-stretch bg-green-800 border-green-800 border-t-[1px] border-solid box-border flex flex-col items-start justify-start pt-[62px] px-20 pb-[114px] gap-12 max-w-full text-center text-17xl text-white font-leading-none-text-sm-font-medium mq450:pt-[26px] mq450:pb-12 mq450:box-border mq825:gap-6 mq825:pt-10 mq825:px-10 mq825:pb-[74px] mq825:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata1 max-w-full lg:gap-boundvariablesdata1 mq825:gap-boundvariablesdata1">
          <div className="w-[468px] flex flex-col items-center justify-start gap-boundvariablesdata3 max-w-full mq825:gap-boundvariablesdata3">
            <h1 className="m-0 self-stretch relative text-inherit leading-[125%] font-bold font-[inherit] mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
              Let's work together
            </h1>
            <div className="flex flex-row items-start justify-center gap-boundvariablesdata2 mq825:flex-wrap">
              <Button
                cartPlus="/cartplus.svg"
                buttonText="RECIEVE NEWS"
                cartPlus1="/cartplus.svg"
                showRightIcon={false}
                showLeftIcon={false}
                showButtonText
                propBackgroundColor="#fff"
                propPadding="8px 59px"
                propOverflow="unset"
                propBorder="1px solid #e5e7eb"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight="unset"
                propTextTransform="unset"
                propColor="#111928"
                propAlignSelf="unset"
              />
              <Button
                cartPlus="/cartplus.svg"
                buttonText="Contact us"
                cartPlus1="/cartplus.svg"
                showRightIcon={false}
                showLeftIcon={false}
                showButtonText
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
                  onClick={onLinkContainerClick3}
                >
                  <div className="relative leading-[150%]">About</div>
                </div>
                <div className="self-stretch h-6" />
              </div>
            </div>
            <div
              className="w-44 flex flex-col items-start justify-start gap-boundvariablesdata2 cursor-pointer"
              onClick={onLinkContainerClick1}
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
              onClick={onLinkContainerClick2}
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
              <img
                className="w-5 h-5 relative"
                alt=""
                src="/mountainsun-1.svg"
              />
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
    </div>
  );
};

DineshCPA.propTypes = {
  className: PropTypes.string,
};

export default DineshCPA;
