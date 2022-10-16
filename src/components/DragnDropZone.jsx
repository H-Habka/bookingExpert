import { useDropzone } from "react-dropzone";
import { ReactComponent as UploadIcon } from "../icons/upload.svg";
import { useTranslation } from "react-i18next";

const DragnDropZone = () => {
  const { t } = useTranslation();
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
    fileRejections,
  } = useDropzone({ multiple: false, noClick: true });

  const getFileName = (file) => {
    const temp = file.path.split(".");
    return temp[0].slice(0, 20) + "." + temp[1];
  };

  return (
    <div className=" mx-auto">
      <abbr title={t("Click To Upload File")}>
        <div
          {...getRootProps({ className: "dropzone" })}
          className={`w-[300px] bg-gray-200 dark:bg-darkbg0 cursor-pointer border-2 border-gray-700 border-dashed rounded-xl h-[225px] transition-all duration-300 ${
            isDragActive && "opacity-90 brightness-75"
          }`}
        >
          <label className="w-full h-full cursor-pointer">
            <div className="w-full h-full flex justify-center items-center">
              {acceptedFiles.length ? (
                <div className="text-center">
                  <div
                    style={{ boxShadow: "0px 0px 4px 2px green" }}
                    className="rounded-lg p-1 text-center text-green-500 mb-2"
                  >
                    {t("File Uploaded Successfully")}
                  </div>
                  <div>{getFileName(acceptedFiles[0])}</div>
                </div>
              ) : fileRejections.length ? (
                <div className="text-center">
                  <div className="mb-2 text-xl font-semibold">Sorry</div>
                  <div
                    style={{ boxShadow: "0px 0px 4px 2px red" }}
                    className="rounded-lg p-1 text-center text-red-500"
                  >
                    {t("Only One File is Accepted")}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <UploadIcon
                    width={40}
                    height={40}
                    className={`${isDragActive && "animate-bounce"}`}
                  />
                  <p className="sm:text-lg mt-2 font-semibold text-center">
                    {t("Drag & Upload Your Id")}
                  </p>
                </div>
              )}
              <input type="file" {...getInputProps()} multiple={false} />
            </div>
          </label>
        </div>
      </abbr>
    </div>
  );
};

export default DragnDropZone;
