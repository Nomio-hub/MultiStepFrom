import React from "react";

export const DateInput = ({ label, required, error, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label className="font-semibold text-sm">
          {label} {required && <span className="text-[#E14942]"> * </span>}
        </label>
        <input
          className={` w-full h-11 rounded-lg border p-3 ${error ? "border-[#E14942]" : "border-[#CBD5E1]"}`}
          type="date"
          value={value}
          onChange={onChange}
        />
        {error && <p className="text-sm text-[#E14942]">{error}</p>}
      </div>
    </div>
  );
};
