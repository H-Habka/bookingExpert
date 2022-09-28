import FacebookLogin from "react-facebook-login";
import { ReactComponent as FacebookIcon } from "../icons/facebook.svg";

const LoginWithFaceBook = () => {
  return (
    <FacebookLogin
      appId="1118915829022806"
      autoLoad={false}
      fields="name,email,picture"
      callback={(data) => {
        console.log(data);
        alert("test");
      }}
      cssClass="h-full w-[55px] flex justify-center items-center bg-four rounded-lg"
      textButton=""
      icon={<FacebookIcon fill="#1877f2" />}
    />
  );
};

export default LoginWithFaceBook;
