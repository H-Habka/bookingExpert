import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import {
  Auth,
  ForgetPassword,
  Header,
  LandingPage,
  Profile,
  ResetPassword,
} from "./components";
import { useStore } from "./store";
import { useEffect, useRef } from "react";
import EnterCode from "./components/EnterCode";
import Footer from "./components/Footer";
import DragnDropZone from "./components/DragnDropZone";
import WebCam from "./components/WebCam";
import CompleteProfile from "./components/CompleteProfile";
import BusinessAccountPage from "./components/BusinessAccountPage";
import IndividualAccountPage from "./components/IndividualAccountPage";
import "aos/dist/aos.css";
import { init } from "aos";
import RatedBusinessList from "./components/RatedBusinessList";
import SelectMultiImages from "./components/SelectMultiImages";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

// window.matchMedia("(prefers-color-scheme: dark)")
const TempComponent = ({ title }) => {
  return (
    <div className="flex items-center justify-center h-[340px] text-3xl">
      {title} Page
    </div>
  );
};

function App() {
  const headerRef = useRef();
  const isDark = useStore((state) => state.isDark);
  const lang = useStore((state) => state.lang);
  const setLang = useStore((state) => state.setLang);

  const { i18n } = useTranslation();

  useEffect(() => {
    init({ duration: 1000, once: true });
    setLang(localStorage.getItem("i18nextLng"));
  }, []);

  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [lang]);
  console.log({ lang });
  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="dark:bg-darkbg1 dark:text-darktext">
        <Header refprop={headerRef} />
        {/* style={{minHeight : `calc(100vh - ${headerRef?.current?.offsetHeight}px)`}} */}
        <div className="">
          <Routes>
            {/* <Route path="/" element={<div />} /> */}
            <Route path="/auth/login" element={<Auth />} />
            <Route path="/auth/signup" element={<Auth />} />
            <Route path="/auth/forgetPassword" element={<ForgetPassword />} />
            <Route
              path="/auth/forgetPassword/enterCode"
              element={<EnterCode />}
            />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/CompleteProfile" element={<CompleteProfile />} />
            <Route path="/WebCam" element={<WebCam />} />
            <Route path="/Business" element={<BusinessAccountPage />} />
            <Route path="/Individual" element={<IndividualAccountPage />} />

            <Route path="/" element={<TempComponent title="Home" />} />
            <Route path="/About" element={<TempComponent title="about" />} />
            <Route path="/Features" element={<SelectMultiImages />} />
            <Route path="/Contact" element={<RatedBusinessList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
