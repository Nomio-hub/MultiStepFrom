import React, { useState } from "react";
import { TextField } from "./TextField";
import { Buttons } from "./Buttons";
import { Logo } from "./Logo";

export const Step1 = ({ handleNextStep }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const isFirstNameValid = () => {
    if (firstname === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(firstname))
      return "First name cannot contain special characters or numbers.";
  };
  const isLastNameValid = () => {
    if (lastname === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(lastname))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUserNameValid = () => {
    if (username === "") return "First name cannot be empty...";
    if (!/[a-zA-Z0-9]{3,16}$/.test(username))
      return "This username is already taken. Please choose another one.";
  };

  const isHavingError = () => {
    return isFirstNameValid() || isLastNameValid() || isUserNameValid();
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
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          error={isFirstNameValid()}
          required={true}
          label="First name"
          placeholder="Nomin..."
        />
        <TextField
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          error={isLastNameValid()}
          required={true}
          label="Last name"
          placeholder="Erdene..."
        />
        <TextField
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          error={isUserNameValid()}
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
