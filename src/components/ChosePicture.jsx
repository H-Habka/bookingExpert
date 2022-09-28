import React, { useCallback, useEffect, useState } from "react";
import { process_image } from "../utils/imageProcessing";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";

const ChosePicture = ({ register, imageFile, reset }) => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const handleChoseFile = useCallback(
    (imageFile) => {
      process_image(imageFile[0])
        .then((res) => {
          setImage(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setFile(imageFile[0]);
    },
    [imageFile]
  );
  useEffect(() => {
    if (imageFile) handleChoseFile(imageFile);
  }, [imageFile]);
  const handleClearImageClick = () => {
    setImage(null);
    setFile(null);
    reset({image : null})
  };
  return (
    <div className="w-[240px] h-[240px] rounded-full overflow-hidden relative group">
      <label className="cursor-pointer w-fit ">
        {image ? (
          <img
            src={image}
            alt="profile"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <img
            src="/images/profile.webp"
            alt="profile"
            className="w-full h-full rounded-full object-cover"
          />
        )}
        <input {...register} type="file" className="hidden" />
      </label>
      {image && (
        <button
          onClick={handleClearImageClick}
          className="absolute  bottom-1 left-1/2 -translate-x-1/2 hidden group-hover:block"
        >
          <DeleteIcon width={30} height={30} />
        </button>
      )}
    </div>
  );
};

export default ChosePicture;
