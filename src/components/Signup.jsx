import React, { useEffect, useState } from "react";
import CustomInputField from "./CustomInputField";
import LoginWithFaceBook from "./LoginWithFaceBook";
import LoginWithGoogle from "./LoginWithGoogle";
import { useForm } from "react-hook-form";
import AutoComplate1 from "./AutoComplate1";
import { validitor } from "../formValidator";
import api from "../api";
import { useTranslation } from "react-i18next";
import TextWithUnderLineEffect from "./TextWithUnderLineEffect";
import uuid from "react-uuid";
import toast from "react-hot-toast";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";
import CustomButton2 from "./CustomButton2";

const Signup = ({ role_id }) => {
  const { t } = useTranslation();
  const [emailOrPhone, setEmailOrPhone] = useState("email");
  const [loading, setLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password: "",
      phone_code: "+44",
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    reset({ email: "", phone_number: "" });
  }, [emailOrPhone]);

  const onSubmit = (data) => {
    data.fcm_token = uuid();
    data.register_type = 1;
    data.register_using = emailOrPhone === "email" ? 0 : 1;
    data.iso_code = "GB";
    console.log(data);
    setLoading(true);
    toast.promise(
      role_id === 2 ? api.customer.register(data) : api.provider.register(data),
      {
        loading: t("Loading"),
        success: (res) => {
          setLoading(false);
          console.log({ res });
          setTimeout(
            () =>
              navigate(
                `/auth/enterCode?id=${res?.data?.data?.id}&type=register`
              ),
            1500
          );
          return <p>{res?.data?.message}</p>;
        },
        error: (err) => {
          setLoading(false);
          console.log({ err });
          return <p>{err?.response?.data?.message || err?.message}</p>;
        },
      }
    );
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-10">
          <div className="flex flex-col md:flex-row gap-4 md:my-10 my-4">
            <div className="">
              <CustomInputField
                register={{
                  ...register("first_name", {
                    required: validitor.required(),
                    maxLength: validitor.maxLength(20),
                    minLength: validitor.minLength(3),
                    pattern: validitor.isName(),
                  }),
                }}
                error={errors?.first_name}
                isSubmitSuccessful={isSubmitSuccessful}
                type="text"
                label="First Name"
                className="w-[300px]"
              />
            </div>
            <div className="">
              <CustomInputField
                register={{
                  ...register("last_name", {
                    required: validitor.required(),
                    maxLength: validitor.maxLength(20),
                    minLength: validitor.minLength(3),
                    pattern: validitor.isName(),
                  }),
                }}
                error={errors?.last_name}
                isSubmitSuccessful={isSubmitSuccessful}
                type="text"
                label="Last Name"
                className="w-[300px]"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:my-10 my-4">
            <div className="z-[10]">
              <div>
                {emailOrPhone === "email" ? (
                  <div>
                    <CustomInputField
                      register={{
                        ...register("email", {
                          required: validitor.required(),
                          maxLength: validitor.maxLength(40),
                          minLength: validitor.minLength(3),
                          pattern: validitor.isEmail(),
                        }),
                      }}
                      type="text"
                      label="Email"
                      className="w-[300px]"
                      error={errors?.email}
                      isSubmitSuccessful={isSubmitSuccessful}
                    />
                  </div>
                ) : (
                  <div>
                    <div className="flex w-[300px] gap-4">
                      <AutoComplate1
                        register={register}
                        type="text"
                        label="Code"
                        className="w-[70px]"
                        error={errors?.phone_code}
                        isSubmitSuccessful={isSubmitSuccessful}
                        watch={watch}
                        reset={reset}
                      />
                      <CustomInputField
                        register={{
                          ...register("phone_number", {
                            required: validitor.required(),
                            maxLength: validitor.maxLength(20),
                            minLength: validitor.minLength(3),
                            validate: validitor.phoneValidate,
                          }),
                        }}
                        type="text"
                        label="Phone"
                        className="w-[214px]"
                        error={errors?.phone_number}
                        isSubmitSuccessful={isSubmitSuccessful}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <TextWithUnderLineEffect
                  title={
                    emailOrPhone === "email" ? "Use Mobile NO" : "Use Email"
                  }
                  onClick={() =>
                    setEmailOrPhone((prev) =>
                      prev === "email" ? "phone" : "email"
                    )
                  }
                />
              </div>
            </div>
            <div className="">
              <CustomInputField
                register={{
                  ...register("password", {
                    required: validitor.required(),
                    maxLength: validitor.maxLength(40),
                    minLength: validitor.minLength(8),
                  }),
                }}
                error={errors?.password}
                isSubmitSuccessful={isSubmitSuccessful}
                type="password"
                label="Password"
                className="w-[300px]"
              />
            </div>
          </div>
        </div>
        <div className="w-[300px] md:w-[400px] mx-auto">
          <CustomButton2 title="signup" disabled={loading} />
          <div className="mt-4">
            <div className="relative z-[1] ">
              <div className="absolute w-full h-1 bg-five top-1/2 -translate-y-1/2 z-[-1] rounded-2xl" />
              <div className="bg-white text-3xl w-fit mx-auto px-3 text-five dark:bg-darkbg1">
                {t("Or")}
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-4 h-[65px]">
              <div className="transition-all duration-100 hover:scale-105">
                <LoginWithFaceBook />
              </div>
              <div className="transition-all duration-100 hover:scale-105">
                <LoginWithGoogle />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
