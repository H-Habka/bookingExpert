import { useState } from "react";
import AutoComplate1 from "./AutoComplate1";
import CustomSelectInput from "./CustomSelectInput";
import ChosePicture from "./ChosePicture";
import { useForm } from "react-hook-form";
import CustomInputField from "./CustomInputField";
import DragnDropZone from "./DragnDropZone";

const Profile = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const watchAccountType = watch("AccountType", false);
  let imageFile = watch("image", null);
  let homeServices = watch("homeServices", false);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-blue-200 dark:bg-darkbg0 py-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-2 sm:px-6 md:px-10 bg-white dark:bg-darkbg1 border-2 border-two rounded-xl w-fit mx-auto  py-6 hover:shadow-custom shadow-two transition-all duration-500"
      >
        <h2 className="text-center text-xl font-bold">Complete Profile</h2>
        <div className="flex flex-col justify-center items-center md:gap-[20px] gap-[20px]">
          <ChosePicture
            reset={reset}
            imageFile={imageFile}
            register={{
              ...register("image"),
            }}
          />
          <div className="flex flex-col md:flex-row md:gap-[40px] gap-[20px]">
            <div>
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
            <div>
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
          <div>
            <CustomInputField
              register={{
                ...register("address", { required: true, maxLength: 30 }),
              }}
              error={!!errors?.address}
              isSubmitSuccessful={isSubmitSuccessful}
              type="text"
              label="Address"
              className="w-[300px] md:w-[640px]"
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-[40px] gap-[20px]">
            <div>
              <CustomInputField
                register={{
                  ...register("postCode", { required: true, maxLength: 30 }),
                }}
                error={!!errors?.postCode}
                isSubmitSuccessful={isSubmitSuccessful}
                type="text"
                label="postCode"
                className="w-[300px]"
              />
            </div>
            <div>
              <CustomInputField
                register={{
                  ...register("City", { required: true, maxLength: 30 }),
                }}
                error={!!errors?.City}
                isSubmitSuccessful={isSubmitSuccessful}
                type="text"
                label="City"
                className="w-[300px]"
              />
            </div>
          </div>
          <div>
            <div className="flex w-[300px] md:w-[640px] md:gap-[40px] gap-[15px] ">
              <AutoComplate1
                register={register}
                type="text"
                label="code"
                className="w-[70px] md:w-[150px]"
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
                className="w-[214px] md:w-[450px]"
                error={!!errors?.phone}
                isSubmitSuccessful={isSubmitSuccessful}
              />
            </div>
          </div>
          <div>
            <CustomInputField
              register={{
                ...register("email", { required: true, maxLength: 30 }),
              }}
              type="text"
              label="Email"
              className="w-[300px] md:w-[640px]"
              error={!!errors?.email}
              isSubmitSuccessful={isSubmitSuccessful}
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-center my-4">
              Choose Your Account Type
            </p>
            <div className="grid grid-cols-3 gap-1 md:gap-6 items-center">
              <label
                style={{
                  boxShadow:
                    watchAccountType === "Individual"
                      ? "0px 0px 4px 0px blue"
                      : errors.AccountType
                      ? "0px 0px 4px 0px red"
                      : "",
                }}
                className={`cursor-pointer hover:text-two rounded-lg border-2 hover:border-two px-4 py-2 ${
                  watchAccountType === "Individual"
                    ? "text-two border-two"
                    : errors.AccountType
                    ? "text-red-600 border-red-600"
                    : "border-gray-500 "
                } `}
              >
                <p>Individual</p>
                <input
                  value="Individual"
                  type="radio"
                  className="hidden"
                  {...register("AccountType", { required: true })}
                />
              </label>
              <div className="relative z-[1] ">
                <div className="absolute w-full h-1 bg-five top-1/2 -translate-y-1/2 z-[-1] rounded-2xl" />
                <div className="bg-white text-xl w-fit mx-auto px-1 text-five dark:bg-darkbg1">
                  Or
                </div>
              </div>
              <label
                style={{
                  boxShadow:
                    watchAccountType === "Business"
                      ? "0px 0px 4px 0px blue"
                      : errors.AccountType
                      ? "0px 0px 4px 0px red"
                      : "",
                }}
                className={`cursor-pointer hover:text-two rounded-lg border-2 hover:border-two px-4 py-2 ${
                  watchAccountType === "Business"
                    ? "text-two border-two"
                    : errors.AccountType
                    ? "text-red-600 border-red-600"
                    : "border-gray-500 "
                }`}
              >
                <p>Business</p>
                <input
                  value="Business"
                  type="radio"
                  className="hidden"
                  {...register("AccountType", { required: true })}
                />
              </label>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between flex-col md:flex-row ">
              <CustomSelectInput label="Service Category" />
              <CustomSelectInput label="Service Sub Category" />
            </div>
          </div>
          <div className="w-full">
            <p className="px-2 mb-2">Bio</p>
            <textarea
              rows={5}
              className="w-full outline-none resize-none border border-black rounded-xl text-xl p-4"
            ></textarea>
          </div>
          <div className="w-full">
            <label className="flex justify-between items-center cursor-pointer">
              <p className="text-xl font-semibold ">
                Do you want to do home service ?
              </p>
              <div
                className={`w-10 ${
                  homeServices ? "bg-green-200" : "bg-red-200"
                }  rounded-full flex border border-gray-400 transition-all duration-300 `}
              >
                <div
                  className={`h-5 rounded-full transition-all duration-300 ${
                    homeServices ? "w-5" : "w-0"
                  }`}
                />
                <div
                  style={{
                    boxShadow: homeServices
                      ? "0px 0px 4px 1px green"
                      : "0px 0px 4px 1px red",
                  }}
                  className={`w-5 h-5  rounded-full transition-all duration-300 ${
                    homeServices ? "bg-green-600" : "bg-red-600"
                  }`}
                />
                <input
                  type="checkbox"
                  value={true}
                  className="hidden"
                  {...register("homeServices")}
                />
              </div>
            </label>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 transition-all duration-500 overflow-hidden  ${homeServices ? "md:h-96 h-[750px]" : "h-0"} `}>
            <div className="flex flex-col items-center">
              <DragnDropZone />
              <div className="flex flex-col items-center">
                <p className="text-xl font-semibold">Verify YourSelf</p>
                <p className="w-[70%] text-center">
                  Please upload a copy of your ID or driver’s certificate or
                  residence card
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <DragnDropZone />
              <div className="flex flex-col items-center">
                <p className="text-xl font-semibold">Verify YourSelf</p>
                <p className="w-[70%] text-center">
                  Please upload a copy of your ID or driver’s certificate or
                  residence card
                </p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="sm:text-lg w-[300px] md:text-xl text-white bg-four border-2 border-four rounded-lg py-2 hover:text-four hover:bg-white dark:hover:bg-darkbg1 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
