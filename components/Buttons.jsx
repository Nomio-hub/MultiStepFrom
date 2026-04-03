import React from "react";

export const Buttons = ({
  btnName,
  btnIcon,
  handleNextStep,
  disabled,
  onChange,
}) => {
  return (
    <button
      className="flex gap-2 items-center justify-center w-full h-11 bg-black text-white font-medium rounded-lg text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={handleNextStep}
      onChange={onchange}
      disabled={disabled}
    >
      {btnName}
      {btnIcon}
    </button>
  );
};
