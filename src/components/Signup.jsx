import React, { useEffect, useState } from "react";
import CustomInputField from "./CustomInputField";
import LoginWithFaceBook from "./LoginWithFaceBook";
import LoginWithGoogle from "./LoginWithGoogle";
import { useForm } from "react-hook-form";
import AutoComplate1 from "./AutoComplate1";

const Signup = () => {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [emailOrPhone, setEmailOrPhone] = useState("email");

  console.log({ reset });

  useEffect(() => {
    reset({ email: "", phone: "", code: "" });
  }, [emailOrPhone]);
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-10">
          <div className="flex flex-col md:flex-row gap-4 md:my-10 my-4">
            <div className="">
              <CustomInputField
                register={{
                  ...register("firstName", { required: true, maxLength: 30 }),
                }}
                error={!!errors?.firstName}
                isSubmitSuccessful={isSubmitSuccessful}
                type="text"
                label="First Name"
                className="w-[300px]"
              />
            </div>
            <div className="">
              <CustomInputField
                register={{
                  ...register("lastName", { required: true, maxLength: 30 }),
                }}
                error={!!errors?.lastName}
                isSubmitSuccessful={isSubmitSuccessful}
                type="text"
                label="Last Name"
                className="w-[300px]"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:my-10 my-4">
            <div className="">
              <div>
                {emailOrPhone === "email" ? (
                  <div>
                    <CustomInputField
                      register={{
                        ...register("email", { required: true, maxLength: 30 }),
                      }}
                      type="text"
                      label="Email"
                      className="w-[300px]"
                      error={!!errors?.email}
                      isSubmitSuccessful={isSubmitSuccessful}
                    />
                  </div>
                ) : (
                  <div>
                    <div className="flex w-[300px] gap-4">
                      <AutoComplate1
                        register={register}
                        type="text"
                        label="code"
                        className="w-[70px]"
                        error={!!errors?.code}
                        isSubmitSuccessful={isSubmitSuccessful}
                        watch={watch}
                        reset={reset}
                      />
                      <CustomInputField
                        register={{
                          ...register("phone", { required: true, maxLength: 30 }),
                        }}
                        type="text"
                        label="phone"
                        className="w-[214px]"
                        error={!!errors?.phone}
                        isSubmitSuccessful={isSubmitSuccessful}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div data-aos="fade-up" className="flex justify-end m-1">
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
            <div  className="">
              <CustomInputField
                register={{
                  ...register("password", { required: true, maxLength: 30 }),
                }}
                error={!!errors?.password}
                isSubmitSuccessful={isSubmitSuccessful}
                type="password"
                label="Password"
                className="w-[300px]"
              />
            </div>
          </div>
        </div>
        <div className="w-[300px] md:w-[400px] mx-auto">
          <button
            type="submit"
            className="sm:text-lg md:text-xl text-white bg-four border-2 border-four rounded-lg w-full py-2 hover:text-four hover:bg-white dark:hover:bg-darkbg1 transition-all duration-300"
          >
            SignUp
          </button>
          <div className="mt-4">
            <div className="relative z-[1] ">
              <div className="absolute w-full h-1 bg-five top-1/2 -translate-y-1/2 z-[-1] rounded-2xl" />
              <div className="bg-white text-3xl w-fit mx-auto px-3 text-five dark:bg-darkbg1">
                Or
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-4 h-[65px]">
              <div>
                <LoginWithFaceBook />
              </div>
              <div>
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
