import { useState, createRef, useEffect, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../api";
import { useTranslation } from "react-i18next";
import TextWithUnderLineEffect from "./TextWithUnderLineEffect";
import CustomButton2 from "./CustomButton2";
import { useStore } from "../store";

const length = 4;

const EnterCode = () => {
  const { t } = useTranslation();
  const [currentActive, setCurrentActive] = useState(0);
  const [refsArray, setRefsArray] = useState([]);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const setUser = useStore((state) => state.setUser);

  const { id, type } = Object.fromEntries([...searchParams]);
  const navigate = useNavigate();

  useEffect(() => {
    const refs = Array(length || 0)
      .fill()
      .map((_, idx) => (refsArray[idx] ? refsArray[idx] : createRef()));
    setRefsArray(refs);
  }, []);

  const handleRetryClick = useCallback(() => {
    setTimeout(() => {
      refsArray[0]?.current?.focus();
    }, 10);
    setCurrentActive(0);
    setCode("");
  }, [refsArray]);

  const resendOtpHandler = () => {
    setLoading(true);
    toast.promise(api.otp.resend({ user_id: id }), {
      loading: t("Loading"),
      success: (res) => {
        setLoading(false);
        console.log({ res });
        return <p>{res?.data?.message}</p>;
      },
      error: (err) => {
        setLoading(false);
        console.log({ err });
        return <p>{err?.response?.data?.message || err?.message}</p>;
      },
    });
  };

  const handleSubmitClick = () => {
    if (code.length !== length || !type) return;
    setLoading(true);
    toast.promise(
      type === "password"
        ? api.otp.verifyResetPassword({ user_id: id, otp: code })
        : api.otp.verify({ user_id: id, otp: code }),
      {
        loading: t("Loading"),
        success: (res) => {
          setLoading(false);
          console.log({ res });
          if (type === "password") {
            setTimeout(() => navigate(`/resetPassword?id=${id}`), 1500);
          } else {
            setUser(res?.data?.data);
            localStorage.setItem("user", JSON.stringify(res?.data?.data));
            setTimeout(() => navigate(`/`), 1500);
          }

          return <p>{res?.data?.message}</p>;
        },
        error: (err) => {
          setLoading(false);
          console.log({ err });
          return <p>{err?.response?.data?.message || err?.message}</p>;
        },
      }
    );
  };
  console.log(code);
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div>
        <div className="flex flex-col justify-center items-center mt-10 ">
          <h2 className="text-3xl font-bold">{t("Enter The Code")}</h2>
        </div>
        <div>
          <div
            style={{ direction: "ltr" }}
            className="flex  p-2 sm:p-4 mt-10 mb-2 w-fit "
          >
            {Array(length || 0)
              .fill()
              .map((_, idx) => {
                return (
                  <div
                    data-aos="zoom-out"
                    key={idx}
                    className="sm:w-12 sm:h-20 w-10 h-20  border border-black rounded-lg mx-1 xs:mx-2 sm:mx-4"
                  >
                    <input
                      ref={refsArray[idx]}
                      type="text"
                      value={code[idx] || ""}
                      className="disabled:bg-gray-200 w-full h-full outline-none rounded-lg text-3xl text-center dark:disabled:bg-gray-700 dark:bg-darkbg0"
                      maxLength={1}
                      disabled={
                        currentActive !== idx || code.length === length
                          ? true
                          : false
                      }
                      onChange={(e) => {
                        if (e.target.value && idx < length - 1) {
                          setCurrentActive(idx + 1);
                          setTimeout(() => {
                            refsArray[idx + 1]?.current?.focus();
                          }, 20);
                        } else if (!e.target.value && idx > 0) {
                          setCurrentActive(idx - 1);
                          setTimeout(() => {
                            refsArray[idx - 1]?.current?.focus();
                          }, 20);
                        }
                        setCode((prev) =>
                          e.target.value
                            ? prev + e.target.value
                            : prev.slice(0, prev.length - 1)
                        );
                      }}
                    />
                  </div>
                );
              })}
          </div>
          <div className="flex items-center justify-center my-2">
            <TextWithUnderLineEffect
              className="text-xl"
              title="Retry"
              onClick={handleRetryClick}
            />
          </div>
        </div>
        <div>
          <CustomButton2
            title="submit"
            onClick={handleSubmitClick}
            type="button"
            disabled={loading}
          />
        </div>
      </div>
      <div className="mt-2 flex gap-2 items-center text-lg">
        <p>{t("Didn't Receive Code")}</p>

        <TextWithUnderLineEffect
          disabled={loading ? true : false}
          title="Resend it"
          onClick={resendOtpHandler}
        />
      </div>
    </div>
  );
};

export default EnterCode;
