import CustomInputField from "./CustomInputField";
import CustomButton from "./CustomButton";
import LoginWithFaceBook from "./LoginWithFaceBook";
import LoginWithGoogle from "./LoginWithGoogle";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import AutoComplate1 from "./AutoComplate1";
import { Link, useNavigate } from "react-router-dom";
import { validitor } from "../formValidator";
import api from "../api";
import { toast } from "react-hot-toast";
import { useStore } from "../store";
import { useTranslation } from "react-i18next";
import TextWithUnderLineEffect from "./TextWithUnderLineEffect";
import uuid from "react-uuid";
import CustomButton2 from "./CustomButton2";

const Login = ({ role_id }) => {
  const { t } = useTranslation();
  const [emailOrPhone, setEmailOrPhone] = useState("email");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: { phone_code: "+44" } });

  useEffect(() => {
    reset({ email: "", phone_number: "" });
  }, [emailOrPhone]);
  const onSubmit = (data) => {
    data.fcm_token = uuid();
    data.register_using = emailOrPhone === "email" ? 0 : 1;
    data.iso_code = "GB";
    data.role_id = role_id;
    console.log(data);
    setLoading(true);

    toast.promise(api.providerOrCustomer.login(data), {
      loading: t("Loading"),
      success: (res) => {
        setLoading(false);
        console.log({ res });
        if (res?.data?.statusCode === 200) {
          setUser(res?.data?.data);
          localStorage.setItem("user", JSON.stringify(res?.data?.data));
          setTimeout(() => navigate("/"), 1500);
        }
        return <p>{res?.data?.message}</p>;
      },
      error: (err) => {
        setLoading(false);
        console.log({ err });
        if (err?.response?.data?.statusCode === 301) {
          api.otp.resend({ user_id: err?.response?.data?.data?.id });
          setTimeout(
            () =>
              navigate(
                `/auth/enterCode?id=${err?.response?.data?.data?.id}&type=register`
              ),
            1500
          );
        }
        return <p>{err?.response?.data?.message || err?.message}</p>;
      },
    });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="z-[1]"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        autoCorrect="off"
      >
        <div className="my-10 z-10">
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
                  className="w-[300px] sm:w-[400px]"
                  error={errors?.email}
                  isSubmitSuccessful={isSubmitSuccessful}
                />
              </div>
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
          </div>

          <div className="flex justify-end">
            <TextWithUnderLineEffect
              title={emailOrPhone === "email" ? "Use Mobile NO" : "Use Email"}
              onClick={() =>
                setEmailOrPhone((prev) =>
                  prev === "email" ? "phone" : "email"
                )
              }
            />
          </div>
        </div>
        <div className="mb-10 z-[-1]">
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
            className="w-[300px] sm:w-[400px] "
          />
        </div>
        <div className="w-[300px] md:w-[400px] mx-auto">
          <CustomButton2 title="login" disabled={loading} />
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
      <Link to={`/auth/forgetPassword?role_id=${role_id}`} className="flex justify-end m-1 mt-6">
        <TextWithUnderLineEffect title="Forget password" />
      </Link>
    </div>
  );
};

export default Login;
