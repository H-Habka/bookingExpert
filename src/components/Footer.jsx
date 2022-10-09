import React from "react";
import { ReactComponent as FacebookIcon } from "../icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../icons/instagram.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
const appleStoreImage = require("../images/appleStore.webp");
const googleStoreImage = require("../images/googleStore.webp");

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-one text-white dark:bg-darkbg1 lg:text-white xl:text-white border-t">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 px-4 py-4 gap-8 md:gap-0 ">
        <div className=" flex flex-col gap-2 items-center">
          <div>logoText</div>
          <div className="text-xs text-center">
            {t("The most beautiful exclusive properties and luxury apartments")}
          </div>
          <div className="text-xl font-bold">{t("Follow US")}</div>
          <div className="flex gap-2">
            <FacebookIcon fill="#14395B" width={30} height={30} />
            <div className="w-[30px] h-[30px] bg-white p-[5px] rounded-full flex items-center justify-center">
              <TwitterIcon fill="#14395B" />
            </div>
            <div className="w-[30px] h-[30px] bg-white p-[5px] rounded-full flex items-center justify-center">
              <InstagramIcon fill="#14395B" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2 items-center">
          <div className="text-lg font-bold whitespace-nowrap">
            {t("Useful Links")}
          </div>
          <div>{t("About")}</div>
          <div>{t("Partners")}</div>
          <div>{t("Contact")}</div>
        </div>

        <div className=" text-center flex flex-col gap-2 items-center whitespace-nowrap">
          <div className="text-lg font-bold">{t("For Customer")}</div>
          <div>{t("Sign Up As Customer")}</div>
          <div>{t("Find Service Providers")}</div>
          <div className="flex gap-2 justify-center">
            <div>
              <LazyLoadImage
                src={googleStoreImage}
                alt="googleStore"
                width={100}
              />
            </div>
            <div>
              <LazyLoadImage
                src={appleStoreImage}
                alt="googleStore"
                width={100}
              />
            </div>
          </div>
        </div>
        <div className=" text-center flex flex-col gap-2 items-center whitespace-nowrap">
          <div className="text-lg font-bold">{t("For Service Providers")}</div>
          <div>{t("Sign Up As Service Providers")}</div>
          <div>{t("Find your Customer")}</div>
          <div className="flex gap-2 justify-center">
            <div>
              <LazyLoadImage
                src={googleStoreImage}
                alt="googleStore"
                width={100}
              />
            </div>
            <div>
              <LazyLoadImage
                src={appleStoreImage}
                alt="googleStore"
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xs:flex-row gap-2 justify-around py-2 text-xs border-t px-4 text-center">
        <div>Copyright © 2022 JustSayWhat. All Rights Reserved.</div>
        <div>Terms & Condition | Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
