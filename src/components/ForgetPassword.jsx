import React, { useState, useEffect } from "react";
import AutoComplate1 from "./AutoComplate1";
import CustomInputField from "./CustomInputField";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { validitor } from "../formValidator";
import api from "../api";
import { toast } from "react-hot-toast";

import { useTranslation } from "react-i18next";
import TextWithUnderLineEffect from "./TextWithUnderLineEffect";
import CustomButton2 from "./CustomButton2";
const ForgetPassword = () => {
  const { t } = useTranslation();
  const [emailOrPhone, setEmailOrPhone] = useState("email");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { role_id } = Object.fromEntries([...searchParams]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    reset({ email: "", phone_number: "", phone_code: "" });
  }, [emailOrPhone]);

  const onSubmit = (data) => {
    data.register_using = emailOrPhone === "email" ? 0 : 1;
    data.role_id = role_id;
    setLoading(true);
    toast.promise(api.password.forget(data), {
      loading: t("Loading"),
      success: (res) => {
        setLoading(false);
        console.log({ res });
        setTimeout(
          () =>
            navigate(`/auth/entercode?id=${res?.data?.data?.id}&type=password`),
          1500
        );
        return <p>{res?.data?.message}</p>;
      },
      error: (err) => {
        setLoading(false);
        console.log({ err });
        return <p>{err?.response?.data?.message || err?.message}</p>;
      },
    });
    console.log(data);
  };

  const SubTitle = ({ title }) => {
    return (
      <p data-aos="zoom-out" className="text-lg font-semibold mt-6">
        {t(title)}
      </p>
    );
  };

  return (
    <div className="flex justify-center items-center py-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center mt-10 ">
          <h2 className="text-2xl font-bold">{t("Forget password")}</h2>
          {emailOrPhone === "email" ? (
            <SubTitle title="Enter Your Email below" />
          ) : (
            <SubTitle title="Enter Your Phone Number below" />
          )}
        </div>
        <div className="my-10">
          {emailOrPhone === "email" ? (
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
              className="w-[300px] sm:w-[400px]"
              error={errors?.email}
              isSubmitSuccessful={isSubmitSuccessful}
            />
          ) : (
            <div className="flex w-[300px] sm:w-[400px] gap-4">
              <AutoComplate1
                register={register}
                type="text"
                label="Code"
                className="w-[70px] sm:w-[94px]"
                error={!!errors?.phone_code}
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
                className="w-[214px] sm:w-[290px]"
                error={errors?.phone_number}
                isSubmitSuccessful={isSubmitSuccessful}
              />
            </div>
          )}
          <TextWithUnderLineEffect
            title={emailOrPhone === "email" ? "Use Mobile NO" : "Use Email"}
            onClick={() =>
              setEmailOrPhone((prev) => (prev === "email" ? "phone" : "email"))
            }
          />
        </div>
        <div>
          <CustomButton2 title="submit" disabled={loading} />
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
