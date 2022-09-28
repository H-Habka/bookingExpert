import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReactComponent as ChatIcon } from "../icons/chat.svg";

const Details = ({
  name = "hossien habka",
  category = "Barber says it all.",
  Reviews = "120",
  Followers = "75",
  Following = "150",
}) => {
  return (
    <div className="flex gap-4 items-center p-2 border border-gray-500 rounded-xl w-fit">
      <div>
        <LazyLoadImage
          src="/images/imageTest.jpg"
          alt="Specialist"
          className="max-w-[120px] w-full h-full max-h-[120px] rounded-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 flex-col xs:flex-row">
          <div className="text-center xs:text-start">
            <div className="text-gray-800 dark:text-darktext font-bold text-xl">
              {name}
            </div>
            <div className="text-gray-700 dark:text-darktext">{category}</div>
          </div>
          <div className="flex gap-2">
            <div className="text-center">
              <div className="text-xl font-bold text-two">{Reviews}</div>
              <div className="text-gray-500 text-sm">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-two">{Followers}</div>
              <div className="text-gray-500 text-sm">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-two">{Following}</div>
              <div className="text-gray-500 text-sm">Following</div>
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <div>
            <button className="text-white hover:text-two bg-two hover:bg-white dark:hover:bg-darkbg1 px-4 py-1 rounded-xl font-semibold border border-two transition-all duration-300">
              Follow
            </button>
          </div>
          <div>
            <button className="text-two hover:text-white bg-white dark:bg-darkbg1 hover:bg-two dark:hover:bg-two px-4 py-1 rounded-xl font-semibold border border-two transition-all duration-300 flex gap-2 items-center">
              <div>
                <ChatIcon className="w-[20px] h-[20px]" />
              </div>
              <p>Chat</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
