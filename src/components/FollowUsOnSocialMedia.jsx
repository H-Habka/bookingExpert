import { ReactComponent as FacebookIcon } from "../icons/facebookOutline.svg";
import { ReactComponent as TwitterIcon } from "../icons/twitter.svg";
import { ReactComponent as SnapChatIcon } from "../icons/snapChat.svg";
import { ReactComponent as WebSiteIcon } from "../icons/webSite.svg";
import { ReactComponent as InstagramIcon } from "../icons/instagramOutline.svg";

const FollowUsOnSocialMedia = () => {
  return (
    <div className="p-2 text-center flex flex-col gap-2 items-center w-fit mx-auto">
      <p className="text-lg font-semibold">Follow Us On Social Media</p>
      <div className="flex gap-2 ">
        <FacebookIcon className="cursor-pointer hover:animate-bounce w-[32px] h-[32px]" />
        <InstagramIcon className="cursor-pointer hover:animate-bounce w-[32px] h-[32px]" />
        <TwitterIcon className="cursor-pointer hover:animate-bounce w-[32px] h-[32px]" fill="#61c8f1" />
        <SnapChatIcon className="cursor-pointer hover:animate-bounce w-[32px] h-[32px]" />
        <WebSiteIcon className="cursor-pointer hover:animate-bounce w-[32px] h-[32px]" />
      </div>
    </div>
  );
};

export default FollowUsOnSocialMedia;
