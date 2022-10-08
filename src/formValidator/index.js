export const validitor = {
    required: () => ({ value: true, message: "This Field Is Required" }),
    maxLength: (value) => ({
      value,
      message: `Can't Be More Than ${value} Character`,
    }),
    minLength: (value) => ({
      value,
      message: `Can't Be Less Than ${value} Character`,
    }),
    isName: () => ({
      value: /[A-Za-z]{3,29}/,
      message: "Name Can Only Contain Letters",
    }),
    isEmail: () => ({
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "This Email Is Not Valid",
    }),
    phoneValidate: (value) => (!Number(value) ? "Invalid Phone Number" : true),
  };