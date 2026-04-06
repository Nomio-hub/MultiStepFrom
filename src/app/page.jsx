"use client";
import React, { use, useState } from "react";
import { Step1 } from "../../components/Step1";
import { Step2 } from "../../components/Step2";
import { Step3 } from "../../components/Step3";
import { Step4 } from "../../components/Step4";

const page = () => {
  const [step, setStep] = useState(2);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    profile: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    profile: "",
  });
  const steps = [Step1, Step2, Step3, Step4];

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handleBackStep = () => {
    setStep(step - 1);
  };

  const StepForm = steps[step];

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <StepForm
        handleNextStep={handleNextStep}
        handleBackStep={handleBackStep}
        form={form}
        setForm={setForm}
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
};

export default page;
