import { FunctionComponent } from "react";
import InputField from "./InputField";
import SelectInput from "./SelectInput";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import Button from "./Button";

export type ContactType = {
  className?: string;
};

const Contact: FunctionComponent<ContactType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[9203px] left-[12px] w-[1416px] h-[1213px] text-center text-xl text-gray-900 font-text-xl-font-normal ${className}`}
      data-scroll-to="contactContainer"
    >
      <div className="absolute top-[0px] left-[0px] w-[1416px] h-[1213px]">
        <div className="absolute top-[153px] left-[0px] w-[1416px] h-[1060px] flex flex-col items-center justify-center py-boundvariablesdata px-0 box-border gap-boundvariablesdata5">
          <div className="self-stretch flex flex-row items-start justify-between">
            <div className="flex-1 overflow-hidden flex flex-col items-center justify-start py-0 px-4 gap-boundvariablesdata4">
              <div className="w-boundvariablesdata5 rounded-rounded-full bg-gray-100 h-boundvariablesdata5 flex flex-row items-center justify-center">
                <img
                  className="w-boundvariablesdata22 relative h-boundvariablesdata22 overflow-hidden shrink-0"
                  alt=""
                  src="/store.svg"
                />
              </div>
              <div className="flex flex-col items-center justify-start gap-boundvariablesdata21">
                <b className="relative leading-[150%]">Company information:</b>
                <div className="w-[328px] relative text-base leading-[150%] text-gray-500 inline-block h-[54px] shrink-0">
                  <p className="m-0">Dinesh Singh CGA, CPA</p>
                  <p className="m-0">Dinesh Professional Corporation</p>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col items-center justify-start py-0 px-4 gap-boundvariablesdata4">
              <div className="w-boundvariablesdata5 rounded-rounded-full bg-gray-100 h-boundvariablesdata5 flex flex-row items-center justify-center">
                <img
                  className="w-boundvariablesdata22 relative h-boundvariablesdata22 overflow-hidden shrink-0"
                  alt=""
                  src="/mappin.svg"
                />
              </div>
              <div className="flex flex-col items-center justify-start gap-boundvariablesdata21">
                <b className="relative leading-[150%]">Address:</b>
                <div className="w-[328px] relative text-base leading-[150%] text-gray-500 inline-block">
                  <p className="m-0">216-2985 Drew Road</p>
                  <p className="m-0">Mississauga, ON</p>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col items-center justify-start py-0 px-4 gap-boundvariablesdata4 text-base">
              <div className="w-boundvariablesdata5 rounded-rounded-full bg-gray-100 h-boundvariablesdata5 flex flex-row items-center justify-center">
                <img
                  className="w-boundvariablesdata22 relative h-boundvariablesdata22 overflow-hidden shrink-0"
                  alt=""
                  src="/phone.svg"
                />
              </div>
              <div className="flex flex-col items-center justify-start gap-boundvariablesdata21">
                <b className="relative text-xl leading-[150%]">Contact us:</b>
                <div className="w-[328px] relative leading-[150%] text-gray-500 inline-block h-[54px] shrink-0">
                  Email us for general queries, including marketing and
                  partnership opportunities.
                </div>
                <div className="relative leading-[150%] font-semibold">
                  info@dineshcpa.com
                </div>
              </div>
            </div>
          </div>
          <div className="w-[768px] flex flex-col items-start justify-start gap-boundvariablesdata10 text-left text-sm text-gray-500">
            <div className="self-stretch flex flex-row items-start justify-start gap-boundvariablesdata9">
              <InputField
                labelText="First name"
                showHelperText={false}
                showRightIcon={false}
                showLabel
                showPlaceholder
                showLeftIcon={false}
                placeholderText="Your name"
                propMinWidth="unset"
                propBackgroundColor="#f9fafb"
                propBorder="1px solid #d1d5db"
                propBorderTop="unset"
                propBorderBottom="unset"
                propBorderLeft="unset"
                propOverflow="unset"
                user1="/user.svg"
                labelAlignSelf="stretch"
                labelWidth="unset"
              />
              <InputField
                labelText="Last name"
                showHelperText={false}
                showRightIcon={false}
                showLabel
                showPlaceholder
                showLeftIcon={false}
                placeholderText="name@example.com"
                propMinWidth="unset"
                propBackgroundColor="#f9fafb"
                propBorder="1px solid #d1d5db"
                propBorderTop="unset"
                propBorderBottom="unset"
                propBorderLeft="unset"
                propOverflow="unset"
                user1="/user.svg"
                labelAlignSelf="stretch"
                labelWidth="unset"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-boundvariablesdata9">
              <InputField
                labelText="Email"
                showHelperText={false}
                showRightIcon={false}
                showLabel
                showPlaceholder
                showLeftIcon={false}
                placeholderText="+1(646) 786-5060"
                propMinWidth="unset"
                propBackgroundColor="#f9fafb"
                propBorder="1px solid #d1d5db"
                propBorderTop="unset"
                propBorderBottom="unset"
                propBorderLeft="unset"
                propOverflow="unset"
                user1="/user.svg"
                labelAlignSelf="stretch"
                labelWidth="unset"
              />
              <InputField
                labelText="Phone number"
                showHelperText
                showRightIcon
                showLabel
                showPlaceholder
                showLeftIcon
                placeholderText="+(12) 345 6789"
                user1="/user.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-boundvariablesdata9 text-gray-900">
              <SelectInput
                labelText="Country"
                showLabel
                showLabelIcon
                placeholderText="United States"
                showPlaceholder
              />
              <SelectInput
                labelText="Select language"
                showLabel
                showLabelIcon
                placeholderText="English (US)"
                showPlaceholder
              />
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
              <Textarea
                placeholderText="Write text here ..."
                showHelper
                labelText="Your message"
                showPlaceholder
                helperText="A note for extra info"
                showLabel
              />
            </div>
            <Checkbox helperText="Some helper text here" showHelper showLabel />
            <Button
              showRightIcon={false}
              showLeftIcon={false}
              buttonText="Send message"
              showButtonText
              propBackgroundColor="#057a55"
              propPadding="10px 20px"
              propOverflow="hidden"
              propBorder="unset"
              propWidth="unset"
              propBorderRadius="8px"
              propHeight="unset"
              cartPlus="/cartplus2.svg"
              propTextTransform="unset"
              propColor="#fff"
              propAlignSelf="unset"
              cartPlus1="/cartplus2.svg"
              buttonFlex="unset"
              buttonAlignSelf="unset"
            />
          </div>
        </div>
        <b className="absolute top-[0px] left-[446.9px] text-41xl leading-[125%] inline-block text-left w-[378.3px] h-[35.7px]">
          Contact Us
        </b>
      </div>
    </div>
  );
};

export default Contact;
