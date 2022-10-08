import { ReactComponent as LoginAsUser } from "../icons/loginAsUser.svg";
import { ReactComponent as LoginAsProvider } from "../icons/loginAsProvider.svg";
import NavList from "./NavList";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useTranslation } from "react-i18next";

const navData = [
  { idx: 0, title: "login", to: "/auth/login" },
  { idx: 1, title: "signup", to: "/auth/signup" },
];

const Auth = () => {
  const {t} = useTranslation()
  const [loginOrSignUp, setLoginOrSignUp] = useState("login");
  const [activeOne, setActiveOne] = useState(-1);
  const [customerOrProvider, setCustomerOrProvider] = useState(null);
  const location = useLocation();
  useEffect(() => {
    let activeItem = navData.filter((item) => item.to === location.pathname)[0];
    setActiveOne(activeItem ? activeItem.idx : -1);
    setLoginOrSignUp(activeItem ? activeItem.title : "");
  }, [location]);
  return (
    <div className="flex justify-center items-center md:pt-12 pt-6 pb-10">
      <div
        className={`${
          customerOrProvider ? "px-2 " : "md:px-20 sm:px-10 px-2"
        }  sm:py-6 py-2 sm:border-2 rounded-xl min-w-[300px] w-[80%] max-w-[800px]`}
      >
        <div data-aos="fade-down" className="w-72 mx-auto">
          <NavList
            navData={navData}
            truck={true}
            activeOne={activeOne}
            setActiveOne={setActiveOne}
          />
        </div>
        {customerOrProvider && loginOrSignUp === "login" && <Login />}
        {customerOrProvider && loginOrSignUp === "signup" && <Signup />}
        {!customerOrProvider && (
          <div
            className="grid gap-2 md:gap-10 mt-10"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <button
              data-aos="fade-up-right"
              onClick={() => setCustomerOrProvider("customer")}
              className="border-2 border-blue-400 hover:shadow-custom shadow-two transition-all duration-100 rounded-xl flex flex-col justify-center items-center p-4 gap-2"
            >
              <div>
                <LoginAsUser width={100} height={100} />
              </div>
              <p>{t("As Customer")}</p>
            </button>
            <button
              data-aos="fade-up-left"
              onClick={() => setCustomerOrProvider("provider")}
              className="border-2 border-blue-400 hover:shadow-custom shadow-two transition-all duration-100 rounded-xl flex flex-col justify-center items-center p-4 gap-2"
            >
              <div>
                <LoginAsProvider width={100} height={100} />
              </div>
              <p>{t("As Service Provider")}</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
