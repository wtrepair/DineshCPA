import { FunctionComponent } from "react";
import Badge from "./Badge";
import BlogCard from "./BlogCard";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[7220px] left-[-95px] w-[1527px] h-[722px] text-center text-17xl text-gray-900 font-text-xl-font-normal ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
        <div className="w-[672px] relative [text-decoration:underline] tracking-[-0.01em] leading-[125%] font-extrabold flex items-center justify-center">
          Latest Posts
        </div>
      </div>
      <div className="absolute h-[90.03%] w-[93.78%] top-[9.97%] right-[0%] bottom-[0%] left-[6.22%] bg-white overflow-hidden flex flex-col items-center justify-center text-left text-5xl">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-8">
            <div className="flex-1 shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white h-[510px] overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start pt-boundvariablesdata10 px-boundvariablesdata10 pb-0">
                <img
                  className="self-stretch rounded-lg max-w-full overflow-hidden h-48 shrink-0 object-cover"
                  alt=""
                  src="/cardheader@2x.png"
                />
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start p-boundvariablesdata10">
                <div className="self-stretch flex-1 flex flex-col items-start justify-end gap-boundvariablesdata11">
                  <Badge
                    showText
                    badgeText="Article"
                    showIcon={false}
                    showCloseIcon={false}
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata1">
                    <b className="relative leading-[125%]">
                      <p className="m-0">SEO Basics: Beginner’s Guide to</p>
                      <p className="m-0">Tax Planning Success</p>
                    </b>
                    <div className="self-stretch relative text-base leading-[150%] text-gray-500">{`Tax planning is crucial for maximizing your financial position. Our guide helps you navigate the essentials of effective tax strategies. `}</div>
                  </div>
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="flex flex-row items-center justify-start gap-boundvariablesdata11">
                      <img
                        className="w-8 relative rounded-81xl h-8 object-cover"
                        alt=""
                        src="/avatar@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[125%] font-medium">
                          Bonnie Green
                        </div>
                        <div className="relative leading-[125%] text-gray-500">
                          Aug 15, 2021 · 16 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BlogCard
              cardHeader="/cardheader1@2x.png"
              title="How to Optimize Your Business for Financial Growth"
              preview="Discover how to structure your business finances for long-term growth and success."
              small="Aug 10, 2021 · 6 min read"
              badgeText="Article"
              showText
              showIcon={false}
              showCloseIcon={false}
            />
            <BlogCard
              cardHeader="/cardheader2@2x.png"
              propPadding="unset"
              title="Understanding the Latest Tax Changes: A Guide for Small Businesses and Individuals"
              propHeight="unset"
              preview="Navigate recent tax law updates and how they impact your finances.                                       "
              small="Aug 1, 2021 · 23 min read"
              badgeText="Tutorial"
              showText
              showIcon
              showCloseIcon
              cardBodyFlex="unset"
              contentFlex="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
