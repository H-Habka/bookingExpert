import React, { useState, useEffect } from "react";
import AutoComplate1 from "./AutoComplate1";
import CustomInputField from "./CustomInputField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { validitor } from "../formValidator";
import api from "../api";
import { toast } from "react-hot-toast";

const ForgetPassword = () => {
  // const [isEmailOrMessageSent, setIsEmailOrMessageSent] = useState(false)
  const [emailOrPhone, setEmailOrPhone] = useState("email");

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
    data.role_id = 2;
    toast.promise(api.password.forget(data), {
      loading: "Loading...",
      success: (res) => {
        console.log({ res });
        navigate(`/auth/forgetPassword/entercode?id=${res?.data?.data?.id}`)
        return <p>{res?.data?.message}</p>;
      },
      error: (err) => {
        console.log({ err });
        return <p>{err?.response?.data?.message || err?.message}</p>;
      },
    });
    console.log(data);
  };

  const navigate = useNavigate();
  const SubTitle = ({ title }) => {
    return (
      <p data-aos="zoom-out" className="text-lg font-semibold mt-6">
        {title}
      </p>
    );
  };

  return (
    <div className="flex justify-center items-center py-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center mt-10 ">
          <h2 className="text-2xl font-bold">Forget Your Password?</h2>
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
                label="code"
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
                label="phone"
                className="w-[214px] sm:w-[290px]"
                error={errors?.phone_number}
                isSubmitSuccessful={isSubmitSuccessful}
              />
            </div>
          )}

          <div className="flex justify-end m-1">
            <button
              type="button"
              onClick={() =>
                setEmailOrPhone((prev) =>
                  prev === "email" ? "phone" : "email"
                )
              }
              className="relative after:absolute after:w-0 after:h-[1px] after:bg-four  hover:after:w-full after:transition-all after:duration-300 after:bottom-0 after:left-0  text-four"
            >
              {emailOrPhone === "email" ? "Use Mobile NO." : "Use Email"}
            </button>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="sm:text-lg md:text-xl text-white bg-four border-2 border-four rounded-lg w-full py-2 hover:text-four hover:bg-white dark:hover:bg-darkbg1 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
