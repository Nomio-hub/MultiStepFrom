"use client";
import React, { use, useEffect, useState } from "react";
import { Step1 } from "../../components/Step1";
import { Step2 } from "../../components/Step2";
import { Step3 } from "../../components/Step3";
import { Step4 } from "../../components/Step4";

const page = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(null);
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

  useEffect(() => {
    if (form !== null) {
      localStorage.setItem("form", JSON.stringify(form));
    } else {
      const storedForm = JSON.parse(localStorage.getItem("form"));
      if (storedForm) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setForm(storedForm);
      } else {
        setForm({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          birthday: "",
          image: "",
        });
      }
    }
  }, [form]);

  const steps = [Step1, Step2, Step3, Step4];

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handleBackStep = () => {
    setStep(step - 1);
  };

  const StepForm = steps[step];
  if (!form) return null;
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
