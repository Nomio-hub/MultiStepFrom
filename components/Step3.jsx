import React, { useState } from "react";
import { BackBtn } from "./BackBtn";
import { Buttons } from "./Buttons";
import { Logo2 } from "./Logo2";
import { Logo } from "./Logo";
import { DateInput } from "./DateInput";
import { UploadImg } from "./UploadImg";

export const Step3 = ({ handleNextStep, handleBackStep, form, setForm }) => {
  const isDateBirthValid = () => {
    if (form.birthDate === "") return "Please select a date.";
    if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(birthDate))
      return "Please select a date.";
  };
  const isProfileValid = () => {
    if (form.profile === "") return "Image cannot be blank";
    if (!/^[689]\d{7}$/.test(profile)) return "Image cannot be blank";
  };
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfile(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div className="w-120 min-h-163.75 shadow-xl rounded-lg p-8 text-black flex flex-col justify-between">
      <div>
        <div className="space-y-2">
          <img className="h-15 w-15 object-contain" src="icon.png" />
          <p className=" font-semibold text-2xl">Join Us! 😎</p>
          <p className="text-gray-400 font-400 text-[18px]">
            Please provide all current information accuratel.
          </p>
        </div>
        <div>
          <DateInput
            value={form.birthDate}
            label={"Date of birth"}
            required={true}
            onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
          />
          <UploadImg
            value={form.profile}
            label={"Profile Image"}
            required={true}
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <BackBtn backLogo={<Logo2 />} handleBackStep={handleBackStep} />
        <Buttons
          btnName={"Continue 3/3"}
          btnIcon={<Logo />}
          handleNextStep={handleNextStep}
        />
      </div>
    </div>
  );
};
