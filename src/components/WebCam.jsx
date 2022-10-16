import { useRecordWebcam, CAMERA_STATUS } from "react-record-webcam";
import CounterDown from "./CounterDown";
import Spinner from "./Spinner";
import { ReactComponent as VideoCamIcon } from "../icons/videoCam.svg";
import { ReactComponent as CloseIcon } from "../icons/delete.svg";
import { ReactComponent as UploadIcon } from "../icons/upload.svg";
import TextWithUnderLineEffect from "./TextWithUnderLineEffect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";

const recordFaceImage = require("../images/recordFace.png");

const WebCam = () => {
  const { t } = useTranslation();
  const recordWebcam = useRecordWebcam();
  console.log({ recordWebcam });

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
    console.log({ blob });
  };

  const OPEN = recordWebcam.status === CAMERA_STATUS.OPEN;
  const CLOSED = recordWebcam.status === CAMERA_STATUS.CLOSED;
  const PREVIEW = recordWebcam.status === CAMERA_STATUS.PREVIEW;
  const ERROR = recordWebcam.status === CAMERA_STATUS.ERROR;
  const RECORDING = recordWebcam.status === CAMERA_STATUS.RECORDING;
  const INIT = recordWebcam.status === CAMERA_STATUS.INIT;

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="mb-4 border-2 border-two rounded-xl border-dashed z-[1] relative flex flex-col justify-center items-center w-[300px] h-[225px] overflow-hidden">
        {!INIT && !CLOSED && (
          <abbr
            title={t("Close Camera")}
            className="absolute top-2 right-2 z-[50]"
          >
            <CloseIcon
              className="cursor-pointer"
              onClick={recordWebcam.close}
            />
          </abbr>
        )}
        <video
          ref={recordWebcam.webcamRef}
          autoPlay
          muted
          className={`w-[300px] h-[225px] ${
            OPEN || RECORDING
              ? "static opacity-100 z-[1]"
              : "absolute opacity-0 z-[-1]"
          }`}
        />
        <video
          ref={recordWebcam.previewRef}
          autoPlay
          loop
          muted={!PREVIEW}
          className={`w-[300px] h-[225px] ${
            PREVIEW ? "static opacity-100 z-[1]" : "absolute opacity-0 z-[-1]"
          }`}
        />
        {INIT && <Spinner size={100} thickness={120} />}

        {CLOSED && (
          <abbr title={t("Click To Open Camera")}>
            <LazyLoadImage
              onClick={recordWebcam.open}
              src={recordFaceImage}
              alt="recordFace"
              className="cursor-pointer"
            />
          </abbr>
        )}
        {ERROR && (
          <div className="text-center text-lg font-semibold text-red-700">
            Something Went Wrong
          </div>
        )}
      </div>
      {PREVIEW && (
        <TextWithUnderLineEffect
          className="text-xl md:text-lg"
          onClick={recordWebcam.retake}
          title="Retry"
        />
      )}
      {RECORDING ? (
        <CounterDown amount={12} triggerFunction={recordWebcam.stop} />
      ) : OPEN ? (
        <button
          onClick={recordWebcam.start}
          type="button"
          disabled={!OPEN}
          className={`mt-4 border-2 border-two bg-one text-white flex gap-4 justify-center items-center p-2 rounded-xl  transition-custom duration-300  ${
            OPEN ? "hover:text-two group active:shadow-custom" : "brightness-75"
          }`}
        >
          <p>{t("Start Recording")}</p>
          <VideoCamIcon className="w-6 h-6 group-hover:opacity-70 transition-all duration-300" />
        </button>
      ) : PREVIEW ? (
        <button
          onClick={saveFile}
          type="button"
          disabled={!PREVIEW}
          className={`mt-4 border-2 border-two bg-one text-white flex gap-4 justify-center items-center p-2 rounded-xl  transition-custom duration-300  ${
            PREVIEW
              ? "hover:text-two group active:shadow-custom"
              : "brightness-75"
          }`}
        >
          <p>{t("submit")}</p>
          <UploadIcon className="w-6 h-6 group-hover:animate-bounce transition-all duration-300 text-two" />
        </button>
      ) : null}
      {CLOSED && (
        <p className="px-4 text-center max-w-[300px] mt-4">
          {t(
            "Self face record for 10 seconds say full name that has been provided on ID, and say i’m ready to work for JUST SAY WHAT"
          )}
        </p>
      )}
    </div>
  );
};

export default WebCam;
