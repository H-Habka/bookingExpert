import axios from "axios";

export const bookingExpert = axios.create({
  baseURL:
    "http://ec2-34-207-182-73.compute-1.amazonaws.com/api/justwhatsee-api/public/index.php",
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    // "X-CSRF-TOKEN": document
    //   .querySelector('meta[name="csrf-token"]')
    //   .getAttribute("content"),
    // "X-CSRF-TOKEN":
    //   "eyJpdiI6Ik1sWDQ4U3l3T3duajJkdGtJRWVWN3c9PSIsInZhbHVlIjoicWhPc243d216Q3JTUE9WQlJYa1F0N0VuOGg4Z1hsa2NjOFAxV2lSNlIwWGF2RnFVczY5OENhK21lSGlaTkhKVGIxNTdlU2VUcXFsRTM0L2Nhbkw2ekd4U3VZMittUGJraHB3UkM1RDdVL21wb25DNnhvMXp4NG9GQUJva2dMUWoiLCJtYWMiOiIxN2NjZGE5ZDE0ZjJmYTU5OWRlYzQyOWI0YTcxNWJkOTA4ZTkzYzI4Y2M1OWZlNTRiY2Q0OTVjNzlmY2RmZGYzIiwidGFnIjoiIn0%3D",
  },
});

export default {
  customer: {
    register: (data) => {
      return bookingExpert.post("/api/v1/user/customerRegister", data);
    },
  },
  provider: {
    register: (data) => {
      return bookingExpert.post("/api/v1/user/providerRegister", data);
    },
  },
  providerOrCustomer: {
    login: (data) => {
      return bookingExpert.post("/api/v1/user/login", data);
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
