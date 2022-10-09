import React, { useState } from "react";
import AutoComplate1 from "./AutoComplate1";
import CustomInputField from "./CustomInputField";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ReactComponent as SuccessLogo } from "../icons/logoBlue.svg";
import { useMediaQuery } from "react-responsive";
import { validitor } from "../formValidator";
import api from "../api";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  // const [isEmailOrMessageSent, setIsEmailOrMessageSent] = useState(false)
  const { t } = useTranslation();
  const isMd = useMediaQuery({
    query: "(min-width:768px)",
  });
  const [searchParams] = useSearchParams();
  const { id } = Object.fromEntries([...searchParams]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {
    data.user_id = id;

    toast.promise(api.password.reset(data), {
      loading: t("Loading"),
      success: (res) => {
        console.log({ res });
        navigate(`/auth/login`);
        return <p>{res?.data?.message}</p>;
      },
      error: (err) => {
        console.log({ err });
        return <p>{err?.response?.data?.message || err?.message}</p>;
      },
    });
    console.log(data);
  };

  let new_password = watch("new_password");

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="py-4">
        <div className="flex flex-col justify-center items-center mt-10 ">
          <h2 className="text-2xl font-bold">{t("Reset Password")}</h2>
          <p className="text-lg font-semibold mt-6 px-2 text-center w-[80%] mx-auto">
            {t("Enter Your New Password and Confirm It")}.
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
                  ...register("new_password", {
                    required: validitor.required(),
                    maxLength: validitor.maxLength(30),
                    minLength: validitor.minLength(8),
                  }),
                }}
                type="password"
                label="New Password"
                className="w-[300px] sm:w-[400px]"
                error={errors?.new_password}
                isSubmitSuccessful={isSubmitSuccessful}
              />
            </div>
            <div className="mx-auto">
              <CustomInputField
                register={{
                  ...register("confirm_new_password", {
                    required: validitor.required(),
                    maxLength: validitor.maxLength(30),
                    minLength: validitor.minLength(8),
                    validate: (value) =>
                      value === new_password ? true : "Password Don't match",
                  }),
                }}
                type="password"
                label="Confirm Password"
                className="w-[300px] sm:w-[400px]"
                error={errors?.confirm_new_password}
                isSubmitSuccessful={isSubmitSuccessful}
              />
            </div>
            <div className="px-2">
              <button
                type="submit"
                className="sm:text-lg md:text-xl text-white bg-four border-2 border-four rounded-lg w-full py-2 hover:text-four hover:bg-white dark:hover:bg-darkbg1 transition-all duration-300"
              >
                {t("Reset Password")}
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

export default ResetPassword;
