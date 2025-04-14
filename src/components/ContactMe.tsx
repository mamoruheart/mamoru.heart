import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { FormEvent, useRef, useState, useEffect } from "react";
import { TbBrandTelegram, TbBrandGoogleMaps } from "react-icons/tb";
import { IoDocumentAttach } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useTheme } from "next-themes";
import Link from "next/link";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

export default function ContactMe() {
  const resumeLink = "https://drive.google.com/file/d/1oDVDtIcLEyBuJ39dJkF5e7fK9jEl1_uN/view?usp=drive_link";
  const resumeLinkJP = "https://drive.google.com/file/d/1oDVDtIcLEyBuJ39dJkF5e7fK9jEl1_uN/view?usp=drive_link";

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
  const [disable, setDisable] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("Submit");

  //-- When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const submitForm = (evt: FormEvent) => {
    evt.preventDefault();

    if (validateEmail(form.current?.from_email.value) === null) {
      setStatus("Invalid Email!");
      setTimeout(() => {
        setStatus("Submit");
      }, 3000);
      return;
    }

    setDisable(true);
    setStatus("Sending...");

    if (form.current === null) {
      return;
    }

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY).then(
      (result) => {
        // console.log(result);
        setStatus("Sent!");
      },
      (error) => {
        console.log(error);
        setStatus("Error!");
        setTimeout(() => {
          setStatus("Submit");
        }, 3000);

        setDisable(false);
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center border-t-2 border-cyan-400 bg-cyan-100 py-5 text-gray-700 dark:border-0 dark:bg-gray-800 dark:text-white sm:flex-row">
      <div className="min-w-1/2 flex flex-col justify-center sm:mr-10">
        <h2 className="pb-8 text-5xl sm:pt-0">
          {mounted && (theme === "dark" ? "Get in touch" : "コンタクト")}
          {!mounted && "Loading..."}
        </h2>
        <span className="flex items-center pb-4">
          <IoDocumentAttach className="mr-2" />
          {mounted &&
            (theme === "dark" ? (
              <Link href={resumeLink} rel="noreferrer" className="group transition duration-300" target="_blank">
                Resume
                <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
              </Link>
            ) : (
              <Link href={resumeLinkJP} rel="noreferrer" className="group transition duration-300" target="_blank">
                履歴書を見える
                <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
              </Link>
            ))}
        </span>
        <span className="flex items-center pb-4">
          <TbBrandGoogleMaps className="mr-2" />
          <Link
            href="https://www.google.com/maps/search/?api=1&query=10+Tin+King+Road%2C+Tuen+Mun%2C+New+Territories%2C+Hong+Kong"
            className="group transition duration-300"
            rel="noreferrer"
            target="_blank"
          >
            {mounted && (theme === "dark" ? "10 Tin King Road, Tuen Mun, New Territories, Hong Kong" : "中国香港 新界 屯門 田景路10号")}
            <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
          </Link>
        </span>
        <span className="flex items-center pb-4">
          <AiOutlineMail className="mr-2" />
          <Link href="mailto:mamuruheart@gmail.com" rel="noreferrer" className="group transition duration-300" target="_blank">
            mamuruheart@gmail.com
            <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
          </Link>
        </span>
        <span className="flex items-center pb-4">
          <TbBrandTelegram className="mr-2" />
          <Link href="https://t.me/mamuruheart" rel="noreferrer" className="group transition duration-300" target="_blank">
            mamuruheart
            <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
          </Link>
        </span>
        <span className="flex items-center pb-4">
          <AiOutlineWhatsApp className="mr-2" />
          <Link href="https://wa.me/33780871076" rel="noreferrer" className="group transition duration-300" target="_blank">
            +33780871076
            <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
          </Link>
        </span>
      </div>

      <form className="flex w-full flex-col px-10 py-5 pt-10 sm:w-1/2 sm:px-0 sm:pl-10" onSubmit={submitForm} ref={form}>
        <input
          type="text"
          placeholder={mounted ? (theme === "dark" ? "Your Name" : "あなたのお名前は") : ""}
          name="from_name"
          required
          className="mb-2 h-10 max-w-xl rounded-lg border-2 bg-white p-5 text-sm hover:border-cyan-500 dark:border-transparent dark:bg-gray-900 dark:hover:border-gray-700"
        />
        <input
          type="email"
          placeholder={mounted ? (theme === "dark" ? "Your Email" : "あなたのメールは") : ""}
          name="from_email"
          required
          className="mb-2 h-10 max-w-xl rounded-lg border-2 bg-white p-5 text-sm hover:border-cyan-500 dark:border-transparent dark:bg-gray-900 dark:hover:border-gray-700"
        />
        <textarea
          rows={5}
          placeholder={mounted ? (theme === "dark" ? "Your Message" : "メッセージを入力してください") : ""}
          name="message"
          minLength={10}
          required
          className="max-w-xl rounded-lg border-2 bg-white p-5 text-sm hover:border-cyan-500 dark:border-transparent dark:bg-gray-900 dark:hover:border-gray-700"
        />
        <button
          type="submit"
          disabled={disable}
          className={`btn group relative mt-5 inline-flex h-12 w-40 items-center justify-start overflow-hidden rounded-lg border-2 bg-white text-sm transition-all dark:border-0 dark:bg-gray-900`}
        >
          <span
            className={`-z-1 absolute left-0 top-0 h-0 w-0 rounded ${
              status === "Sent!" ? "bg-green-500 text-black" : "bg-cyan-600"
            } transition-all duration-500 ease-out group-hover:h-full group-hover:w-full ${status === "Sent!" ? "text-white dark:bg-green-500" : "dark:bg-cyan-700"}`}
          ></span>{" "}
          <span className="z-10 w-full text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-white">{status}</span>
        </button>
      </form>
    </div>
  );
}
