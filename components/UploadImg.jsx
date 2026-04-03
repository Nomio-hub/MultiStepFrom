import React from "react";

export const UploadImg = ({ onChange, label, required }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-sm">
        {label} {required && <span className="text-[#E14942]"> * </span>}
      </label>
      <input
        className="w-full h-45 bg-[#7F7F800D]"
        type="file"
        accept="image/*"
        onChange={onChange}
        alt="add image"
      />
    </div>
  );
};
