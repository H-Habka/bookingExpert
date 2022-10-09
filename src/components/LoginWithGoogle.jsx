import GoogleLogin from "react-google-login";
import { ReactComponent as GoogleIcon } from "../icons/google.svg";

const LoginWithGoogle = () => {
  const responseGoogle = (data) => {
    console.log(data);
  };
  return (
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
        render={(renderProps) => (
          <button
            type="button"
            className="flex justify-center items-center h-full w-[55px] bg-[#191919] dark:bg-white rounded-lg cursor-pointer outline-none"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <GoogleIcon />
          </button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
        autoLoad={false}
      
      />
  );
};

export default LoginWithGoogle;
