import React from "react";
import { useForm } from "react-hook-form";
import AddServicesCard from "./AddServicesCard";
import CustomInputField from "./CustomInputField";
import TimeItem from "./TimeItem";
const CompleteProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  let time = watch("time", "0");
  let price = watch("price", "0");
  let serviceCategory = watch("serviceCategory");
  let serviceName = watch("serviceName");

  let watchFields = watch(["time", "price", "serviceName", "serviceCategory"]);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-blue-200 dark:bg-darkbg0 py-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-2 sm:px-6 md:px-10 bg-white dark:bg-darkbg1 border-2 border-two rounded-xl w-fit mx-auto  py-6 hover:shadow-custom shadow-two transition-all duration-500"
      >
        <h2 className="text-center text-2xl font-bold">
          Complete Your Profile
        </h2>
        <h2 className="text-center text-xl font-bold">Get Paid</h2>
        <div>
          <div className="flex flex-col gap-[20px] mt-[20px] items-center">
            <div>
              <CustomInputField
                register={{
                  ...register("AccountHolderName", {
                    required: true,
                    maxLength: 30,
                  }),
                }}
                error={!!errors?.AccountHolderName}
                isSubmitSuccessful={isSubmitSuccessful}
                type="text"
                label="Account Holder Name"
                className="w-[300px] md:w-[640px]"
              />
            </div>
            <div>
              <CustomInputField
                register={{
                  ...register("sortCode ", { required: true, maxLength: 30 }),
                }}
                error={!!errors?.sortCode}
                isSubmitSuccessful={isSubmitSuccessful}
                type="text"
                label="sort Code"
                className="w-[300px] md:w-[640px]"
              />
            </div>
            <div>
              <CustomInputField
                register={{
                  ...register("AccountNumber", {
                    required: true,
                    maxLength: 30,
                  }),
                }}
                error={!!errors?.AccountNumber}
                isSubmitSuccessful={isSubmitSuccessful}
                type="text"
                label="Account number"
                className="w-[300px] md:w-[640px]"
              />
            </div>
          </div>
          <div>
            <h2 className="text-center text-xl font-bold my-[40px]">
              Add Your Services
            </h2>
            <div className="flex flex-col gap-[20px] items-center">
              <AddServicesCard />
              <AddServicesCard />
              <AddServicesCard />
            </div>
          </div>
          <div className="flex flex-col mt-[40px] gap-[20px] items-center">
            <div>
              <CustomInputField
                register={{
                  ...register("serviceCategory", {
                    required: true,
                    maxLength: 30,
                  }),
                }}
                error={!!errors?.serviceCategory}
                isSubmitSuccessful={isSubmitSuccessful}
                type="text"
                label="Select Service Category"
                className="w-[300px] md:w-[640px]"
              />
            </div>
            <div>
              <CustomInputField
                register={{
                  ...register("serviceName", {
                    required: true,
                    maxLength: 30,
                  }),
                }}
                error={!!errors?.serviceName}
                isSubmitSuccessful={isSubmitSuccessful}
                type="text"
                label="Enter Service Name"
                className="w-[300px] md:w-[640px]"
              />
            </div>
            <div>
              <CustomInputField
                register={{
                  ...register("price", {
                    required: true,
                    maxLength: 30,
                  }),
                }}
                error={!!errors?.price}
                isSubmitSuccessful={isSubmitSuccessful}
                type="text"
                label="Price"
                className="w-[300px]"
              />
            </div>
            <div>
              <p className="text-center my-[10px]">Time</p>
              <div data-aos="flip-up" className="flex justify-between gap-1">
                <TimeItem
                  error={errors.time}
                  amount={15}
                  time={time}
                  register={{ ...register("time", { required: true }) }}
                />
                <TimeItem
                  error={errors.time}
                  amount={30}
                  time={time}
                  register={{ ...register("time", { required: true }) }}
                />
                <TimeItem
                  error={errors.time}
                  amount={45}
                  time={time}
                  register={{ ...register("time", { required: true }) }}
                />
                <TimeItem
                  error={errors.time}
                  amount={60}
                  time={time}
                  register={{ ...register("time", { required: true }) }}
                />
              </div>
              <div>
                <div className="relative z-[1] my-[10px]">
                  <div className="absolute w-full h-1 bg-five top-1/2 -translate-y-1/2 z-[-1] rounded-2xl" />
                  <div className="bg-white text-xl w-fit mx-auto px-1 text-five dark:bg-darkbg1">
                    Or
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="">
                  <CustomInputField
                    register={{
                      ...register("customTime", {
                        required: true,
                        maxLength: 30,
                      }),
                    }}
                    error={!!errors?.customTime}
                    isSubmitSuccessful={isSubmitSuccessful}
                    type="text"
                    label="Enter Your Custom Time"
                    className="w-[300px] md:w-[640px]"
                  />
                </div>
              </div>
            </div>
            <div>
              <AddServicesCard
                price={price}
                time={time}
                serviceCategory={serviceCategory}
                serviceName={serviceName}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompleteProfile;
