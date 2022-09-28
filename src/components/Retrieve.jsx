import React, { useState } from "react";
import AutoComplate1 from "./AutoComplate1";
import CustomInputField from "./CustomInputField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SuccessLogo } from "../icons/logoBlue.svg";
import { useMediaQuery } from "react-responsive";

const Retrieve = () => {
  // const [isEmailOrMessageSent, setIsEmailOrMessageSent] = useState(false)
  const [formData, setFormData] = useState({});
  const isMd = useMediaQuery({
    query: "(min-width:768px)",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {
    setFormData(data);
    console.log(data);
  };

  const navigate = useNavigate();
  let password = watch("newPassword", "");

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="py-4">
        <div className="flex flex-col justify-center items-center mt-10 ">
          <h2 className="text-2xl font-bold">Change Password</h2>
          <p className="text-lg font-semibold mt-6 px-2 text-center w-[80%] mx-auto">
            Enter Your New Password and Confirm It.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {!isMd && (
            <div className=" flex justify-center item-center">
              <SuccessLogo width={300} height={300} />
            </div>
          )}
          <div className="mt-4 md:mt-10 flex flex-col gap-10 ">
            <div className="mx-auto">
              <CustomInputField
                register={{
                  ...register("newPassword", {
                    required: true,
                    maxLength: 30,
                  }),
                }}
                type="password"
                label="New Password"
                className="w-[300px] sm:w-[400px]"
                error={!!errors?.newPassword}
                isSubmitSuccessful={isSubmitSuccessful}
              />
            </div>
            <div className="mx-auto">
              <CustomInputField
                register={{
                  ...register("confirmPassword", {
                    required: true,
                    maxLength: 30,
                    validate: (value) => value === password,
                  }),
                }}
                type="password"
                label="Confirm Password"
                className="w-[300px] sm:w-[400px]"
                error={!!errors?.confirmPassword}
                isSubmitSuccessful={isSubmitSuccessful}
              />
            </div>
            <div className="px-2">
              <button
                type="submit"
                className="sm:text-lg md:text-xl text-white bg-four border-2 border-four rounded-lg w-full py-2 hover:text-four hover:bg-white dark:hover:bg-darkbg1 transition-all duration-300"
                onClick={() => navigate("/auth/forgetPassword/retrieve")}
              >
                Reset Password
              </button>
            </div>
          </div>
          {isMd && (
            <div className="">
              <SuccessLogo width={300} height={300} />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Retrieve;
