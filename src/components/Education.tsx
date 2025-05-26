import Image from "next/image";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { useTheme } from "next-themes";
import { Element } from "react-scroll";

interface Diploma {
  index: number;
  image: string;
  image_dark: string;
  name: string;
  nameJP: string;
  degree: string;
  degreeJP: string;
  hover_gif_dark: string;
  hover_gif_light: string;
}

export default function Education() {
  const [modalImg, setModalImg] = useState<string | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //-- When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const closeOnEscapeKey = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        setModalImg(undefined);
      }
    };
    window.addEventListener("keydown", closeOnEscapeKey);
    return () => window.removeEventListener("keydown", closeOnEscapeKey);
  }, []);

  useEffect(() => {
    if (modalImg === undefined) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }, [modalImg]);

  // const diplomas: Diploma[] = [
  //   {
  //     index: 0,
  //     image: "/project_thumbnails/light/dlut.jpg",
  //     image_dark: "/project_thumbnails/dark/dlut.jpg",
  //     name: "University of Belgrade",
  //     nameJP: "ベオグラード大学",
  //     degree: "Master of Engineering & Computer Science (MEng. CS.)",
  //     degreeJP: "コンピュータサイエンスの修士",
  //     hover_gif_dark: "/project_gifs/dark/dlut.jpg",
  //     hover_gif_light: "/project_gifs/light/dlut.jpg",
  //   },
  //   {
  //     index: 1,
  //     image: "/project_thumbnails/light/udemy.png",
  //     image_dark: "/project_thumbnails/dark/udemy.png",
  //     name: "Online Coding Bootcamp 2020",
  //     nameJP: "オンラインコーディングブートキャンプ 2020",
  //     degree: "Certificate of Completion",
  //     degreeJP: "修了証",
  //     hover_gif_dark: "/project_gifs/dark/udemy.png",
  //     hover_gif_light: "/project_gifs/light/udemy.png",
  //   },
  //   {
  //     index: 2,
  //     image: "/project_thumbnails/light/denn_phuket.jpg",
  //     image_dark: "/project_thumbnails/dark/denn_phuket.jpg",
  //     name: "Work Remote",
  //     nameJP: "在宅勤務",
  //     degree: "Mueang Phuket District, Phuket 83000, Thailand",
  //     degreeJP: "タイ、プーケット、83000",
  //     hover_gif_dark: "/project_gifs/dark/denn_phuket.png",
  //     hover_gif_light: "/project_gifs/light/denn_phuket.png",
  //   },
  // ];

  return (
    <>
      <Element name="education" className="relative" />
      <div className="mb-48 mt-20 sm:mt-0">
        <h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
          {mounted && (theme === "dark" ? "Education" : "教育")}
          {!mounted && "Loading..."}
        </h3>
        <div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
          <div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700 sm:col-span-2">
            <Fade left>
              <div>
                <p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2012. 04 - 2016. 03 </p>
                <p className="my-1 font-medium sm:text-xl">
                  {mounted && (theme === "dark" ? "Master of Engineering & Computer Science (MEng. CS.)" : "コンピュータサイエンスの修士")}
                </p>
                <p className="my-1 text-sm font-medium">{mounted && (theme === "dark" ? "Lingnan University, Hong Kong" : "嶺南大学")}</p>
                {/* <p className="text-sm">GPA: 3.8</p> */}
              </div>
              <Image
                src="/logo_lnhk.png"
                alt="Lingnan University"
                width={100}
                height={0}
                style={{ height: "auto" }}
                title="嶺南大学"
                onClick={() => {
                  window.open("https://www.ln.edu.hk/", "_blank");
                }}
                className="object-contain hover:cursor-pointer"
              />
            </Fade>
          </div>
          <div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
            <Fade left>
              <div>
                <p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2020. 03 - 2020. 04</p>
                <p className="my-1 text-xl font-medium">{mounted && (theme === "dark" ? "Certificate of Completion" : "修了証書")}</p>
                <p className="my-1 text-sm font-medium">
                  {mounted && (theme === "dark" ? "The Complete Node.js Developer Course (3rd Edition), Udemy" : "Node.js - 完全ガイド（第３版）、Udemy")}
                </p>
              </div>
              <div className="block">
                <Image
                  src="/udemy.png"
                  alt="Udemy Bootcamp Logo"
                  width={100}
                  height={0}
                  style={{ height: "auto" }}
                  title="Online Coding BootCamp"
                  onClick={() => {}}
                  className="hover:cursor-pointer"
                />
              </div>
            </Fade>
          </div>
          <div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
            <Fade left>
              <div>
                <p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2022. 07 - 2022. 08</p>
                <p className="my-1 text-xl font-medium">{mounted && (theme === "dark" ? "Certificate of Attendance" : "出席証明書")}</p>
                <p className="my-1 text-sm font-medium">
                  {mounted &&
                    (theme === "dark"
                      ? "The Complete Blockchain Academy with Solidity, Online Coding Boot Camp at Udemy"
                      : "Solidity を使用した完全な Blockchain 開発ブートキャンプ、Udemy のオンライン コーディング ブートキャンプ")}
                </p>
              </div>
              <div className="block">
                <Image
                  src="/udemy.png"
                  alt="Udemy Bootcamp Logo"
                  width={100}
                  height={0}
                  style={{ height: "auto" }}
                  title="Online Coding BootCamp"
                  onClick={() => {}}
                  className="hover:cursor-pointer"
                />
              </div>
            </Fade>
          </div>
          {/* </Slide> */}
        </div>
        {/* <Diplomas> */}
        {/* <div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-4 lg:grid-cols-3">
          {diplomas.map((diploma) => {
            return (
              <div
                key={diploma.index}
                className={`group m-6 flex flex-col items-center justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700`}
              >
                <Fade bottom>
                  <div className="relative flex h-full items-center justify-center">
                    <Image
                      src={
                        theme === "dark" ? diploma.image : diploma.image_dark
                      }
                      alt={diploma.name}
                      width={300}
                      height={0}
                      style={{ height: "auto" }}
                      title="Click to enlarge"
                      onClick={() => {
                        setModalImg(
                          theme === "dark" ? diploma.image_dark : diploma.image
                        );
                      }}
                      className={`absolute mb-4 h-auto max-h-56 w-full transform rounded-lg object-contain transition duration-500 ease-in-out hover:cursor-pointer group-hover:opacity-0`}
                    />
                    <Image
                      src={
                        theme === "dark"
                          ? diploma.hover_gif_light
                          : diploma.hover_gif_dark
                      }
                      alt={diploma.name}
                      width={300}
                      height={0}
                      style={{ height: "auto" }}
                      unoptimized={true}
                      className={`mb-4 h-auto max-h-56 w-full rounded-lg object-contain`}
                    />
                  </div>
                  <div className={`w-full`}>
                    <p className="my-1 text-xl font-medium">
                      {mounted &&
                        (theme === "dark" ? diploma.name : diploma.nameJP)}
                    </p>
                    <p className="my-1 text-sm text-orange-500">
                      {mounted &&
                        (theme === "dark" ? diploma.degree : diploma.degreeJP)}
                    </p>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div> */}
      </div>
      <div
        id="modal"
        className={`fixed left-0 top-0 z-10 h-screen w-screen items-center justify-center bg-black/70 ${showModal ? "flex" : "hidden"}
				`}
        onClick={() => {
          setModalImg(undefined);
        }}
      >
        <div className="flex items-center justify-center sm:m-10 lg:m-20">
          {/* eslint-disable @next/next/no-img-element */}
          <img id="modal-img" alt="" src={modalImg ? modalImg : ""} className="max-h-[90dvh]" />
        </div>
      </div>
    </>
  );
}
