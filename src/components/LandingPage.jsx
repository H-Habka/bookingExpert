import React from "react";
import FacebookLogin from "react-facebook-login";
import { ReactComponent as FacebookIcon } from "../icons/facebook.svg";
import AutoComplete from "./AutoComplete";
import LightDarkToggle from "./LightDarkToggle";

const LandingPage = () => {
  return (
    <div className="">
      <FacebookLogin
        appId="1118915829022806"
        autoLoad={false}
        fields="name,email,picture"
        callback={(data) =>{
            console.log(data)
            alert("test")
        }}
        cssClass="p-2 bg-green-900"
        textButton=""   
        icon={<FacebookIcon />}
        
        
      />
      <AutoComplete />
      <LightDarkToggle />
    </div>
  );
};

export default LandingPage;
