import React, { useState } from "react";
import { TextField } from "./TextField";
import { BackBtn } from "./BackBtn";
import { Logo2 } from "./Logo2";
import { Logo } from "./Logo";
import { Buttons } from "./Buttons";

export const Step2 = ({ handleNextStep, handleBackStep, form, setForm }) => {
  const isEmailNameValid = () => {
    if (form.email === "") return "Email cannot be empty...";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
      return "Please provide a valid email address.";
  };
  const isPhoneNumberValid = () => {
    if (form.phoneNumber === "") return "Phone number cannot be empty...";
    if (!/^[689]\d{7}$/.test(phoneNumber))
      return "Please enter a valid phone number.";
  };
  const isPasswordValid = () => {
    if (form.password === "") return "Password cannot be empty...";
    if (
      /!^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password,
      )
    )
      return "Password must include letters and numbers.";
  };
  const isConfirmPasswordValid = () => {
    if (form.confirmPassword === "") return "Password cannot be empty...";
    if (
      /!^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        confirmPassword,
      )
    )
      return "Passwords do not match. Please try again.";
  };
  return (
    <div className="w-120 min-h-163.75 shadow-xl rounded-lg p-8 text-black flex flex-col justify-between">
      <div>
        <div className="space-y-2">
          <img className="h-15 w-15 object-contain" src="icon.png" />
          <p className=" font-semibold text-2xl">Join Us! 😎</p>
          <p className="text-gray-400 font-400 text-[18px]">
            Please provide all current information accurately.
          </p>
        </div>

        <TextField
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
          error={isEmailNameValid()}
          required={true}
          label="Email"
          placeholder="nominjourney@gmail.com"
        />
        <TextField
          value={form.phoneNumber}
          onChange={(e) => {
            setForm({ ...form, phoneNumber: e.target.value });
          }}
          error={isPhoneNumberValid()}
          required={true}
          label="Phone number"
          placeholder="xxxxxxxx"
        />
        <TextField
          value={form.password}
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
          error={isPasswordValid()}
          required={true}
          label="Password"
          placeholder=""
        />
        <TextField
          value={form.confirmPassword}
          onChange={(e) => {
            setForm({ ...form, confirmPassword: e.target.value });
          }}
          error={isConfirmPasswordValid()}
          required={true}
          label="Confirm password"
          placeholder=""
        />
      </div>
      <div className="flex gap-2 w-full">
        <BackBtn
          backLogo={<Logo2 />}
          handleBackStep={handleBackStep}
          disabled={true}
        />
        <Buttons
          btnName={"Continue 2/3"}
          btnIcon={<Logo />}
          handleNextStep={handleNextStep}
        />
      </div>
    </div>
  );
};
