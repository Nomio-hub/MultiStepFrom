import React from "react";

export const Password = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  required,
  type,
}) => {
  return (
    <div className="space-y-2">
      <label className="font-semibold text-sm">
        {label} {required && <span className="text-[#E14942]"> * </span>}
      </label>
      <input
        className={` w-full h-11 rounded-lg border p-3 ${error ? "border-[#E14942]" : "border-[#CBD5E1]"}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="password"
      />
      {error && <p className="text-sm text-[#E14942]">{error}</p>}
    </div>
  );
};
