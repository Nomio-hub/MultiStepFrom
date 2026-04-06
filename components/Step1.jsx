import React, { useState } from "react";
import { TextField } from "./TextField";
import { Buttons } from "./Buttons";
import { Logo } from "./Logo";

export const Step1 = ({ handleNextStep, form, setForm, errors, setErrors }) => {
  const isFirstNameValid = (value) => {
    if (value === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(value))
      return "First name cannot contain special characters or numbers.";
  };
  const isLastNameValid = (value) => {
    if (value === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(value))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUserNameValid = (value) => {
    if (value === "") return "First name cannot be empty...";
    if (!/[a-zA-Z0-9]{3,16}$/.test(value))
      return "This username is already taken. Please choose another one.";
  };

  const isHavingError = () => {
    return (
      isFirstNameValid(form.firstname) ||
      isLastNameValid(form.firstname) ||
      isUserNameValid(form.username)
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
          value={form.firstname}
          onChange={(e) => {
            setErrors({
              ...errors,
              firstname: isFirstNameValid(e.target.value),
            });
            setForm({ ...form, firstname: e.target.value });
          }}
          error={errors.firstname}
          required={true}
          label="First name"
          placeholder="Nomin..."
        />
        <TextField
          value={form.lastname}
          onChange={(e) => {
            setErrors({
              ...errors,
              lastname: isLastNameValid(e.target.value),
            });
            setForm({ ...form, lastname: e.target.value });
          }}
          error={errors.lastname}
          required={true}
          label="Last name"
          placeholder="Erdene..."
        />
        <TextField
          value={form.username}
          onChange={(e) => {
            setErrors({
              ...errors,
              username: isUserNameValid(e.target.value),
            });
            setForm({ ...form, username: e.target.value });
          }}
          error={errors.username}
          required={true}
          label="Username"
          placeholder="Nimo..."
        />
      </div>
      <div>
        <Buttons
          btnName={"Continue 1/3"}
          btnIcon={<Logo />}
          handleNextStep={handleNextStep}
          disabled={isHavingError()}
        />
      </div>
    </div>
  );
};
