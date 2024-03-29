import logo from "./logo.svg";
import igIcon from "./instagram-logo.svg";
import devineIcon from "./images/Devine-logo.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [notifiaction, showNotification] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onChange(value) {
    setSubmitDisabled(false);
  }

  const onSubmit = async (data, e) => {
    e.preventDefault();

    await emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          from_name: `${data.firstName} ${data.lastName} `,
          message: `${data.message}`,
          reply_to: `${data.email}`,
        },
        process.env.REACT_APP_PUBLIC_ID
      )
      .catch((error) => console.log(error))
      .then(() => showNotification(true))
      .finally(() => {
        setTimeout(() => {
          showNotification(false);
        }, 3000);
      });
  };

  return (
    <div className="bg-[#fdf0eb] h-screen">
      <header className="h-16 bg-[#fdf0eb] items-center flex flex-row">
        <div className="w-1/4 flex justify-start">
          <a
            href="/"
            className="hover:text hover:border-b-2 border-black mx-2 text-sm"
          >
            HOME
          </a>
          <a
            href="/"
            className="hover:text hover:border-b-2 border-black mx-2 text-sm"
          >
            PORTFOLIO
          </a>
          <a
            href="/contact"
            className="hover:text hover:border-b-2 border-black mx-2 text-sm"
          >
            CONTACT
          </a>
        </div>

        <div className="w-1/2 flex justify-center">
          <img alt="" className="" src={devineIcon} />
        </div>

        <div className="w-1/4 flex items-center justify-center">
          <a href="https://www.instagram.com/devinedecor__" className="mx-2">
            <img alt="" src={igIcon} />
          </a>
          <a href="/" className="mx-2">
            <img img alt="" src={logo} />
          </a>
        </div>
      </header>

      <div className="w-full">
        <h1 className="my-8 mx-5 text-3xl">Inquire</h1>
        <p className="mx-5">
          Let us know what's on your mind! Wether its help budgeting or planning
          our team is here to help you!
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-2 mb-6 my-11 justify-center">
            <div className="w-full md:w-[100%] px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Jane"
                type="text"
                {...register("firstName", {
                  required: "Please enter your first name",
                })}
              />
              <span className="text-red-600 italic text-sm">
                {errors.firstName?.message}
              </span>
            </div>
            <div className="w-full md:w-[100%] px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                {...register("lastName", {
                  required: "Please enter your last name",
                })}
                type="text"
                placeholder="Doe"
              />
              <span className="text-red-600 italic text-sm">
                {errors.lastName?.message}
              </span>
            </div>
          </div>
          <div className="w-full md:w-[100%] px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Message
            </label>
            <textarea
              className="appearance-none block w-full h-[300px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              placeholder="Type message here ..."
              {...register("message", {
                required: "Please enter your message",
              })}
            ></textarea>
            <span className="text-red-600 italic text-sm">
              {errors.message?.message}
            </span>
          </div>
          <div className="flex flex-row">
            <div>
              <button
                disabled={submitDisabled}
                type="submit"
                className="m-5 p-2 border-2 border-solid bg-green-400 rounded-md"
              >
                Submit
              </button>
            </div>

            <ReCAPTCHA
              className="m-5"
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </div>
          <div
            className={`  ${
              notifiaction
                ? "bg-green-400 w-[25%] text-center flex justify-center p-5 fixed inset-x-0 mx-auto transition transform -translate-y-8 ease-in-out duration-300"
                : "bg-green-400 w-[25%] text-center flex justify-center p-5 fixed inset-x-0 bottom-0  mx-auto hidden"
            }`}
          >
            <p>Message sent and received!</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
