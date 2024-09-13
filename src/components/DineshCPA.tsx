import { FunctionComponent } from "react";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import GroupComponent from "./GroupComponent";
import Button from "./Button";
import Contact from "./Contact";
import Carousel from "./Carousel";
import Newsletter from "./Newsletter";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Hero from "./Hero";
import Container from "./Container";
import AboutUs1 from "./AboutUs1";

export type DineshCPAType = {
  className?: string;
};

const DineshCPA: FunctionComponent<DineshCPAType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1432px] bg-white max-w-full h-[11340px] overflow-hidden text-left text-xl text-black font-text-xl-font-normal ${className}`}
    >
      <Header />
      <Jumbotron />
      <Footer />
      <div className="absolute top-[7955px] left-[323px] leading-[150%]">
        Stay informed with the most recent financial and business updates by
        subscribing to our blog.​
      </div>
      <GroupComponent />
      <div
        className="absolute top-[953px] left-[-3px] bg-green-800 w-[1455px] h-[750px] overflow-hidden flex flex-col items-center justify-start py-boundvariablesdata px-0 box-border text-center text-41xl text-white"
        data-scroll-to="servicesContainer"
      >
        <div className="w-[1177px] h-[811px] flex flex-col items-center justify-center">
          <div className="w-[1113px] h-[497px] flex flex-col items-center justify-start gap-boundvariablesdata9">
            <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata10">
              <div className="self-stretch relative tracking-[-0.01em] leading-[60px] font-extrabold">
                Together we can achieve your financial goals.
              </div>
              <div className="w-[768px] relative text-xl leading-[150%] inline-block">
                We specialize in transforming your financial data into
                actionable insights for the future. We will work with you to
                craft a top-tier personal or corporate strategy, ensuring
                maximum growth opportunities.
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-boundvariablesdata4">
              <Button
                showRightIcon
                showLeftIcon={false}
                buttonText="Learn more"
                showButtonText
                propBackgroundColor="#f9fafb"
                propPadding="14px 24px"
                propOverflow="hidden"
                propBorder="unset"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight="unset"
                cartPlus="/arrowright1.svg"
                propTextTransform="unset"
                propColor="#000"
                propAlignSelf="unset"
                cartPlus1="/arrowrightoutline.svg"
                buttonFlex="unset"
                buttonAlignSelf="unset"
              />
              <Button
                showRightIcon={false}
                showLeftIcon
                buttonText="Watch video"
                showButtonText
                propBackgroundColor="#fff"
                propPadding="14px 24px"
                propOverflow="unset"
                propBorder="1px solid #e5e7eb"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight="unset"
                cartPlus="/videocamera.svg"
                propTextTransform="unset"
                propColor="#111928"
                propAlignSelf="unset"
                cartPlus1="/cartplus3.svg"
                buttonFlex="unset"
                buttonAlignSelf="unset"
              />
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <b className="absolute top-[6539px] left-[1026px] leading-[150%] flex text-gray-500 text-center items-center justify-center w-[344px]">
        Visit the Blog
      </b>
      <Carousel />
      <Newsletter />
      <div className="absolute top-[1800px] left-[-11px] w-[1451px] h-[6853px] text-17xl text-gray-900">
        <Services />
        <Testimonials />
        <b className="absolute top-[0px] left-[127px] [text-decoration:underline] leading-[125%] inline-block whitespace-pre-wrap w-[436.6px] h-[35px]">
          Our Areas of Expertise
        </b>
      </div>
      <Hero />
      <Container />
      <AboutUs1 />
    </div>
  );
};

export default DineshCPA;