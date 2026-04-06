import React, { useState } from "react";
import { TextField } from "./TextField";
import { BackBtn } from "./BackBtn";
import { Logo2 } from "./Logo2";
import { Logo } from "./Logo";
import { Buttons } from "./Buttons";

export const Step2 = ({
  handleNextStep,
  handleBackStep,
  form,
  setForm,
  errors,
  setErrors,
}) => {
  const isEmailNameValid = (value) => {
    if (value === "") return "Email cannot be empty...";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
      return "Please provide a valid email address.";
  };
  const isPhoneNumberValid = (value) => {
    if (value === "") return "Phone number cannot be empty...";
    if (!/^[689]\d{7}$/.test(value))
      return "Please enter a valid phone number.";
  };
  const isPasswordValid = (value) => {
    if (value === "") return "Password cannot be empty...";
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value))
      return "Password must include letters and numbers.";
  };
  const isConfirmPasswordValid = (value) => {
    if (value === "") return "Confirm password cannot be empty...";
    if (value !== form.password) {
      return "Passwords do not match. Please try again.";
    }
  };
  const isHavingError = () => {
    return (
      isEmailNameValid(form.email) ||
      isPhoneNumberValid(form.phoneNumber) ||
      isPasswordValid(form.password) ||
      isConfirmPasswordValid(form.confirmPassword)
    );
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
            setErrors({
              ...errors,
              email: isEmailNameValid(e.target.value),
            });
            setForm({ ...form, email: e.target.value });
          }}
          error={errors.email}
          required={true}
          label="Email"
          placeholder="nominjourney@gmail.com"
        />
        <TextField
          value={form.phoneNumber}
          onChange={(e) => {
            setErrors({
              ...errors,
              phoneNumber: isPhoneNumberValid(e.target.value),
            });
            setForm({ ...form, phoneNumber: e.target.value });
          }}
          error={errors.phoneNumber}
          required={true}
          label="Phone number"
          placeholder="xxxxxxxx"
        />
        <TextField
          value={form.password}
          onChange={(e) => {
            setErrors({
              ...errors,
              password: isPasswordValid(e.target.value),
            });
            setForm({ ...form, password: e.target.value });
          }}
          error={errors.password}
          required={true}
          label="Password"
          placeholder=""
        />
        <TextField
          value={form.confirmPassword}
          onChange={(e) => {
            setErrors({
              ...errors,
              confirmPassword: isConfirmPasswordValid(e.target.value),
            });
            setForm({ ...form, confirmPassword: e.target.value });
          }}
          error={errors.confirmPassword}
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
          disabled={isHavingError()}
        />
      </div>
    </div>
  );
};
