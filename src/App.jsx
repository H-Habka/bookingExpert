import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useStore } from "./store";
import { useEffect, useRef, lazy } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { init } from "aos";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import Spinner from "./components/Spinner";
import NotFoundpage from "./components/NotFoundpage";

const Auth = lazy(() => import("./components/Auth"));
const ForgetPassword = lazy(() => import("./components/ForgetPassword"));
const Profile = lazy(() => import("./components/Profile"));
const ResetPassword = lazy(() => import("./components/ResetPassword"));
const EnterCode = lazy(() => import("./components/EnterCode"));
const WebCam = lazy(() => import("./components/WebCam"));
const CompleteProfile = lazy(() => import("./components/CompleteProfile"));
const BusinessAccountPage = lazy(() =>
  import("./components/BusinessAccountPage")
);
const IndividualAccountPage = lazy(() =>
  import("./components/IndividualAccountPage")
);
const RatedBusinessList = lazy(() => import("./components/RatedBusinessList"));
const SelectMultiImages = lazy(() => import("./components/SelectMultiImages"));

// window.matchMedia("(prefers-color-scheme: dark)")
const TempComponent = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/profile")}
      className="flex items-center justify-center h-[340px] text-3xl"
    >
      {title} Page
    </div>
  );
};

function App() {
  const headerRef = useRef();
  const isDark = useStore((state) => state.isDark);
  const lang = useStore((state) => state.lang);
  const setLang = useStore((state) => state.setLang);
  const user = useStore((state) => state.user);

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

            {!user && (
              <>
                <Route path="/auth/login" element={<Auth />} />
                <Route path="/auth/signup" element={<Auth />} />
                <Route
                  path="/auth/forgetPassword"
                  element={<ForgetPassword />}
                />
                <Route path="/auth/enterCode" element={<EnterCode />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
              </>
            )}
            <Route path="/Footer" element={<Footer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/CompleteProfile" element={<CompleteProfile />} />
            <Route path="/WebCam" element={<WebCam />} />
            <Route path="/Business" element={<BusinessAccountPage />} />
            <Route path="/Individual" element={<IndividualAccountPage />} />

            <Route path="/" element={<TempComponent title="Home" />} />
            <Route path="/About" element={<Spinner />} />
            {/* <Route path="/About" element={<TempComponent title="about" />} /> */}
            <Route path="/Features" element={<SelectMultiImages />} />
            <Route path="/Contact" element={<RatedBusinessList />} />
            <Route path="/*" element={<NotFoundpage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
