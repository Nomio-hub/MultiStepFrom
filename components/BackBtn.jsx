import React from "react";

export const BackBtn = ({ backLogo, handleBackStep }) => {
  return (
    <button
      onClick={handleBackStep}
      className="flex gap-1 items-center justify-center w-32 h-11  text-black font-medium rounded-lg text-base border-2 border-[#CBD5E1]"
    >
      {backLogo}
      Back
    </button>
  );
};
