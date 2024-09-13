import { FunctionComponent } from "react";
import Button from "./Button";
import Row from "./Row";
import Row1 from "./Row1";

export type ServicesType = {
  className?: string;
};

const Services: FunctionComponent<ServicesType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[35px] left-[0px] w-[1440px] h-[2501.8px] text-left text-17xl text-gray-900 font-text-xl-font-normal ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] overflow-hidden flex flex-col items-center justify-start py-boundvariablesdata12 px-0 box-border">
        <div className="flex flex-col items-start justify-start gap-16">
          <div className="w-[1280px] flex flex-row items-center justify-start gap-boundvariablesdata13">
            <img
              className="w-[528px] relative h-[342px] object-cover"
              alt=""
              src="/collagefinancebannerconcept-1@2x.png"
            />
            <div className="w-[640px] flex flex-col items-start justify-start gap-boundvariablesdata14">
              <div className="self-stretch relative tracking-[-0.01em] leading-[125%] font-extrabold">
                Personal Income Tax Preparation
              </div>
              <div className="self-stretch relative text-lg leading-[150%] text-gray-500">
                Preparing your personal income tax is crucial, and our
                comprehensive services ensure that all your financial details
                are accurately captured and filed. We guide you through the
                entire process, from gathering essential personal information
                and documenting various income sources to claiming deductions
                and credits specific to your situation. Whether you have
                business income, rental properties, or have made significant
                life changes in the past year, we help you maximize your tax
                returns while ensuring compliance with the latest tax
                regulations. Let our expert advisors assist you in preparing and
                filing your tax returns efficiently and accurately.
              </div>
              <div className="flex flex-row items-center justify-start gap-boundvariablesdata15">
                <Button
                  showRightIcon
                  showLeftIcon={false}
                  buttonText="Get  started"
                  showButtonText
                  propBackgroundColor="#057a55"
                  propPadding="10px 20px"
                  propOverflow="hidden"
                  propBorder="unset"
                  propWidth="unset"
                  propBorderRadius="8px"
                  propHeight="unset"
                  cartPlus="/arrownarrowright.svg"
                  propTextTransform="unset"
                  propColor="#fff"
                  propAlignSelf="unset"
                  cartPlus1="/arrowrightoutline1.svg"
                  buttonFlex="unset"
                  buttonAlignSelf="unset"
                />
                <Button
                  showRightIcon={false}
                  showLeftIcon={false}
                  buttonText="Learn more"
                  showButtonText
                  propBackgroundColor="#fff"
                  propPadding="10px 20px"
                  propOverflow="unset"
                  propBorder="1px solid #e5e7eb"
                  propWidth="unset"
                  propBorderRadius="8px"
                  propHeight="unset"
                  cartPlus="/arrownarrowright1.svg"
                  propTextTransform="unset"
                  propColor="#111928"
                  propAlignSelf="unset"
                  cartPlus1="/arrownarrowright1.svg"
                  buttonFlex="unset"
                  buttonAlignSelf="unset"
                />
              </div>
            </div>
          </div>
          <Row
            heading="Bookkeeping Support "
            supportingText="Stay on top of your business transactions with our expert bookkeeping support, providing you with the crucial insights needed to make informed and profitable decisions. We assist with the recording, tracking, and analysis of your financial data, allowing you to focus on growing your business. With consistent financial reports and expert guidance, you’ll stay up-to-date on your finances, empowering you to make smarter, more strategic decisions."
            collageFinanceBannerConcept="/collagefinancebannerconcept-2@2x.png"
            cartPlus="/arrownarrowright.svg"
            buttonText="Get started"
            cartPlus1="/arrowrightoutline1.svg"
            showRightIcon
            showLeftIcon={false}
            showButtonText
            propBackgroundColor="#057a55"
            propPadding2="10px 20px"
            propOverflow="hidden"
            propBorder="unset"
            propWidth="unset"
            propBorderRadius="8px"
            propHeight="unset"
            propTextTransform="unset"
            propColor="#fff"
            propAlignSelf="unset"
            buttonFlex="unset"
            buttonAlignSelf="unset"
          />
          <Row1
            mockup="/mockup@2x.png"
            heading="Financial Year End"
            supportingText="Preparing year-end financial statements is a vital task for every business, and our expert support ensures that it’s done smoothly. With our services, you’ll have accurate financial data, optimized tax returns, and timely completion of all year-end statements. At Dinesh Singh, we go beyond just preparation—we analyze your financial data to develop strategies that can propel your business to new heights.​"
            cartPlus="/arrownarrowright.svg"
            buttonText="Get started"
            cartPlus1="/arrowrightoutline1.svg"
            showRightIcon
            showLeftIcon={false}
            showButtonText
            propBackgroundColor="#057a55"
            propPadding1="10px 20px"
            propOverflow="hidden"
            propBorder="unset"
            propWidth="unset"
            propBorderRadius="8px"
            propHeight1="unset"
            propTextTransform="unset"
            propColor="#fff"
            propAlignSelf="unset"
            buttonFlex="unset"
            buttonAlignSelf="unset"
          />
        </div>
        <div className="w-[1440px] bg-white overflow-hidden flex flex-col items-center justify-start py-boundvariablesdata12 px-0 box-border">
          <div className="flex flex-col items-start justify-start gap-16">
            <Row
              propPadding="unset"
              heading={`Business Planning & Advisory`}
              supportingText="With decades of experience, we provide strategic planning advice to help your business grow to the next level. Our team analyzes your financial data to interpret past trends and guide informed decisions for your business’s future. We also assist with bookkeeping, ensuring you have the tools, support, and training needed for effective financial management, all aimed at mitigating risk and driving long-term success."
              propPadding1="unset"
              collageFinanceBannerConcept="/collagefinancebannerconcept-21@2x.png"
              cartPlus="/arrownarrowright.svg"
              buttonText="Get started"
              cartPlus1="/arrowrightoutline1.svg"
              showRightIcon
              showLeftIcon={false}
              showButtonText
              propBackgroundColor="#057a55"
              propPadding2="10px 20px"
              propOverflow="hidden"
              propBorder="unset"
              propWidth="unset"
              propBorderRadius="8px"
              propHeight="unset"
              propTextTransform="unset"
              propColor="#fff"
              propAlignSelf="unset"
              buttonFlex="unset"
              buttonAlignSelf="unset"
            />
            <Row1
              mockup="/mockup1@2x.png"
              propPadding="unset"
              heading="Legacy Planning and Business Valuations"
              propHeight="unset"
              propDisplay="unset"
              supportingText="At Dinesh Singh, we specialize in business valuation and succession planning to help you preserve and maximize the wealth you’ve built. Whether you’re a small business owner or leading a corporation, we guide you through the transition process—addressing both the mindset shift and the technical tax aspects. Our team works with you to develop a comprehensive succession plan that aligns with your business goals, family needs, and financial aspirations, ensuring you exit on your terms. Don’t leave your business’s future to chance; let us help you create a plan that provides peace of mind and secures the value you’ve worked hard to build."
              cartPlus="/arrownarrowright.svg"
              buttonText="Get started"
              cartPlus1="/arrowrightoutline1.svg"
              showRightIcon
              showLeftIcon={false}
              showButtonText
              propBackgroundColor="#057a55"
              propPadding1="10px 20px"
              propOverflow="hidden"
              propBorder="unset"
              propWidth="unset"
              propBorderRadius="8px"
              propHeight1="unset"
              propTextTransform="unset"
              propColor="#fff"
              propAlignSelf="unset"
              buttonFlex="unset"
              buttonAlignSelf="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
