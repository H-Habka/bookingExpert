import { useState, createRef, useEffect } from "react";
import AutoComplate1 from "./AutoComplate1";
import CustomInputField from "./CustomInputField";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../api";

const length = 4;

const EnterCode = () => {
  const [currentActive, setCurrentActive] = useState(0);
  const [refsArray, setRefsArray] = useState([]);
  const [code, setCode] = useState("");
  const [searchParams] = useSearchParams();

  const { id } = Object.fromEntries([...searchParams]);
  console.log(id);

  const navigate = useNavigate();
  useEffect(() => {
    const refs = Array(length || 0)
      .fill()
      .map((_, idx) => (refsArray[idx] ? refsArray[idx] : createRef()));
    setRefsArray(refs);
  }, []);

  const handleRetryClick = () => {
    setTimeout(() => {
      refsArray[0]?.current?.focus();
    }, 10);
    setCurrentActive(0);
    setCode("");
  };

  const handleSubmitClick = () => {
    if (code.length !== length) return;

    toast.promise(api.otp.verifyResetPassword({ user_id: id, otp: code }), {
      loading: "Loading...",
      success: (res) => {
        console.log({ res });
        navigate(`/resetPassword?id=${id}`);
        return <p>{res?.data?.message}</p>;
      },
      error: (err) => {
        console.log({ err });
        return <p>{err?.response?.data?.message || err?.message}</p>;
      },
    });
  };
  console.log(code);
  return (
    <div className="flex justify-center items-center py-10">
      <div>
        <div className="flex flex-col justify-center items-center mt-10 ">
          <h2 className="text-3xl font-bold">Enter The Code</h2>
        </div>
        <div>
          <div className="flex  p-2 sm:p-4 mt-10 mb-2 w-fit ">
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
          <div data-aos="fade-up" className="my-5 flex justify-center">
            <button
              onClick={handleRetryClick}
              type="button"
              className="text-xl  relative after:absolute after:w-0 after:h-[1px] after:bg-four  hover:after:w-full after:transition-all after:duration-300 after:bottom-0 after:left-0  text-four"
            >
              Retry
            </button>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="sm:text-lg md:text-xl text-white bg-four border-2 border-four rounded-lg w-full py-2 hover:text-four hover:bg-white dark:hover:bg-darkbg1 transition-all duration-300"
            onClick={handleSubmitClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterCode;
