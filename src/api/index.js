import axios from "axios";

export const bookingExpert = axios.create({
  baseURL:
    "http://ec2-34-207-182-73.compute-1.amazonaws.com/justsaywhat-laravel/public/index.php",
  timeout: 20000,
});

export default {
  customer: {
    register: (data) => {
      return bookingExpert.post("/api/v1/user/customerRegister", {
        ...data,
        device_type: 0,
      });
    },
  },
  provider: {
    register: () => {
      return bookingExpert.post("/api/v1/user/providerRegister", "body");
    },
  },
  providerOrCustomer: {
    login: (data) => {
      return bookingExpert.post("/api/v1/user/login", {
        ...data,
        device_type: 0,
      });
    },
    logout: () => {
      return bookingExpert.get("/api/v1/user/logout");
    },
  },
  otp: {
    resend: (data) => {
      return bookingExpert.post("/api/v1/user/resendOtp", data);
    },
    verify: (data) => {
      return bookingExpert.post("/api/v1/user/verifyOtp", data);
    },
    verifyResetPassword: (data) => {
      return bookingExpert.post("/api/v1/user/verifyResetPasswordOtp", data);
    },
  },
  password: {
    forget: (data) => {
      return bookingExpert.post("/api/v1/user/forgotPassword", data);
    },
    reset: (data) => {
      return bookingExpert.post("/api/v1/user/resetPassword", data);
    },
  },
};
