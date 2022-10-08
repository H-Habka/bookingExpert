import { useEffect } from "react";
import { useState } from "react";
import { ReactComponent as PlusIcon } from "../icons/Plus.svg";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";
import { process_image } from "../utils/imageProcessing";
import SliderComponent from "./SliderComponent";

const SelectMultiImages = () => {
  const acceptedNumberOfImages = 10;
  const [selectedImages, setSelectedImages] = useState([]);
  const acceptedFileType = [
    "image/svg+xml",
    "image/webp",
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];

  useEffect(() => {
    console.log(selectedImages);
    if (selectedImages.length > acceptedNumberOfImages) {
      setSelectedImages((prev) => prev.slice(0, acceptedNumberOfImages));
    }
  }, [selectedImages]);

  const ConvertAllImages = (imagesList) => {
    imagesList.forEach(async (item) => {
      if (selectedImages.find((image) => image.name === item.name)) return;
      const base64Image = await process_image(item);
      setSelectedImages((prev) => [...prev, { name: item.name, base64Image }]);
    });
  };

  const handleOnChange = async (e) => {
    // console.log(e.target.files);
    let images = [...e.target.files].filter((item) =>
      acceptedFileType.find((type) => type === item.type)
    );
    console.log(images);
    await ConvertAllImages(images);
  };

  const handleDeleteClick = (name) => {
    setSelectedImages((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <div className="py-10 px-5">
      <div className="p-10 flex items-center bg-gray-700 dark:bg-darkbg1 rounded-xl">
        <div className="max-w-[60vw]  md:max-w-[80vw] flex justify-center items-center mx-auto">
          <SliderComponent
            className={`max-w-[60vw] md:max-w-[80vw]  min-h-[200px] py-[25px] w-[${
              selectedImages.length * 150
            }]px`}
          >
            {Array(acceptedNumberOfImages)
              .fill()
              .map((_, idx) => (
                <>
                  {idx === selectedImages.length ? (
                    <label className="group cursor-pointer flex items-center justify-center text-center border-two border border-dotted min-h-[150px] w-fit px-8 mx-auto rounded-xl hover:border-green-700 transition-all duration-500">
                      <div className="flex flex-col gap-4 items-center">
                        <PlusIcon className="w-[75px] h-[75px]" />
                        <p className=" text-two font-semibold">Add Image</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        multiple={true}
                        onChange={handleOnChange}
                      />
                    </label>
                  ) : (
                    <div className="relative flex justify-center items-center">
                      {selectedImages.length > idx ? (
                        <img
                          src={selectedImages[idx]?.base64Image}
                          alt="userImage"
                          className="w-[150px] h-[150px] "
                        />
                      ) : (
                        <div className="w-[150px] h-[150px] rounded-xl border border-dotted bg-gray-400 border-two"></div>
                      )}
                      {selectedImages.length > idx && (
                        <div className="absolute top-0 right-0">
                          <div className="group py-2">
                            <div
                              className="cursor-pointer group-hover:animate-bounce rounded-full p-2 bg-white dark:bg-darkbg0"
                              style={{ boxShadow: "1px 1px 4px 0px black" }}
                              onClick={() =>
                                handleDeleteClick(selectedImages[idx]?.name)
                              }
                            >
                              <DeleteIcon width={14} height={14} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </>
              ))}
          </SliderComponent>
        </div>
      </div>
    </div>
  );
};

export default SelectMultiImages;
