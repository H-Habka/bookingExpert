import { Routes, Route } from "react-router-dom";
import { Auth, ForgetPassword, Header, LandingPage, Profile, Retrieve } from "./components";
import { useStore } from "./store";
import { useRef } from "react";
import EnterCode from "./components/EnterCode";
import Footer from "./components/Footer";
import DragnDropZone from "./components/DragnDropZone";
import WebCam from "./components/WebCam";
import CompleteProfile from "./components/CompleteProfile";
import BusinessAccountPage from "./components/BusinessAccountPage";
import IndividualAccountPage from "./components/IndividualAccountPage";

// window.matchMedia("(prefers-color-scheme: dark)")

function App() {
  const headerRef = useRef()
  const isDark = useStore((state) => state.isDark);
  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="dark:bg-darkbg1 dark:text-darktext">
        <Header refprop={headerRef}/>
        {/* style={{minHeight : `calc(100vh - ${headerRef?.current?.offsetHeight}px)`}} */}
        <div className="">
          <Routes>
            <Route path="/" element={<div />} />
            <Route path="/auth/login" element={<Auth />} />
            <Route path="/auth/signup" element={<Auth />} />
            <Route path="/auth/forgetPassword" element={<ForgetPassword />} />
            <Route path="/auth/forgetPassword/enterCode" element={<EnterCode />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/CompleteProfile" element={<CompleteProfile />} />
            <Route path="/WebCam" element={<WebCam />} />
            <Route path="/Business" element={<BusinessAccountPage />} />
            <Route path="/Individual" element={<IndividualAccountPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
