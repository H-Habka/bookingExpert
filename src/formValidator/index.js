export const validitor = {
    required: () => ({ value: true, message: "This Field Is Required" }),
    maxLength: (value) => ({
      value,
      message: `More Than Validation(${value})`,
    }),
    minLength: (value) => ({
      value,
      message: `Less Than Validation(${value})`,
    }),
    isName: () => ({
      value: /[A-Za-z]{3,29}/,
      message: "Name Can Only Contain Letters",
    }),
    isEmail: () => ({
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "Invalid Email Address",
    }),
    phoneValidate: (value) => (!Number(value) ? "Invalid Phone Number" : true),
  };