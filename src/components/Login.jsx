import CustomInputField from "./CustomInputField";
import CustomButton from "./CustomButton";
import LoginWithFaceBook from "./LoginWithFaceBook";
import LoginWithGoogle from "./LoginWithGoogle";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AutoComplate1 from "./AutoComplate1";
import {Link} from 'react-router-dom'

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [emailOrPhone, setEmailOrPhone] = useState("email");
  console.log(errors);
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-10">
          {emailOrPhone === "email" ? (
            <CustomInputField
              register={{
                ...register("email", { required: true, maxLength: 30 }),
              }}
              type="text"
              label="Email"
              className="w-[300px] sm:w-[400px]"
              error={!!errors?.email}
              isSubmitSuccessful={isSubmitSuccessful}
            />
          ) : (
            <div className="flex w-[300px] sm:w-[400px] gap-4">
              <AutoComplate1
                register={register}
                type="text"
                label="code"
                className="w-[70px] sm:w-[94px]"
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
                className="w-[214px] sm:w-[290px]"
                error={!!errors?.phone}
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
        <div className="mb-10">
          <CustomInputField
            register={{
              ...register("password", { required: true, maxLength: 30 }),
            }}
            type="password"
            label="Password"
            className="w-[300px] sm:w-[400px]"
            error={!!errors?.password}
            isSubmitSuccessful={isSubmitSuccessful}
          />
        </div>
        <div className="w-[300px] md:w-[400px] mx-auto">
          <button
            type="submit"
            className="sm:text-lg md:text-xl text-white bg-four border-2 border-four rounded-lg w-full py-2 hover:text-four hover:bg-white dark:hover:bg-darkbg1 transition-all duration-300"
          >
            Login
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
      <Link to="/auth/forgetPassword" className="flex justify-end m-1 mt-6">
        <button
          type="button"
          className="relative after:absolute after:w-0 after:h-[1px] after:bg-four  hover:after:w-full after:transition-all after:duration-300 after:bottom-0 after:left-0  text-four"
        >
          Forget password?
        </button>
      </Link>
    </div>
  );
};

export default Login;
