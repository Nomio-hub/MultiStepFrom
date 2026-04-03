import React from "react";

export const UploadImg = ({ onChange, label, required }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-sm">
        {label} {required && <span className="text-[#E14942]"> * </span>}
      </label>

      <div className="w-full h-45 rounded-sm bg-[#7F7F800D] flex flex-col gap-2 justify-center items-center relative">
        <input
          type="file"
          accept="image/*"
          onChange={onChange}
          className="absulute w-full h-full opacity-0"
        />
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
            fill="white"
          />
          <path
            d="M17.5 10.5V17.5H10.5V10.5H17.5ZM17.5 9.5H10.5C9.95 9.5 9.5 9.95 9.5 10.5V17.5C9.5 18.05 9.95 18.5 10.5 18.5H17.5C18.05 18.5 18.5 18.05 18.5 17.5V10.5C18.5 9.95 18.05 9.5 17.5 9.5ZM15.07 13.93L13.57 15.865L12.5 14.57L11 16.5H17L15.07 13.93Z"
            fill="#202124"
          />
        </svg>
        <span>Add image</span>
      </div>
    </div>
  );
};
