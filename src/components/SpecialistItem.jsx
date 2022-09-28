import { LazyLoadImage } from "react-lazy-load-image-component";

const SpecialistItem = ({ name = "hossien habka" }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <LazyLoadImage
        src="/images/imageTest.jpg"
        alt="Specialist"
        className="max-w-[150px] w-full h-full max-h-[150px] rounded-full"
      />
      <p className="text-center">{name}</p>
      <div>
        <button className="text-white hover:text-two bg-two hover:bg-white dark:hover:bg-darkbg1 px-4 py-1 rounded-xl font-semibold border border-two transition-all duration-300">
          Follow
        </button>
      </div>
    </div>
  );
};

export default SpecialistItem;
