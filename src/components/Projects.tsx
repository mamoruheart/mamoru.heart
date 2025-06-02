import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import Fade from "react-reveal/Fade";
import { useTheme } from "next-themes";
import { Element } from "react-scroll";

interface Project {
  index: number;
  image: string;
  image_dark: string;
  description: string;
  descriptionJP: string;
  name: string;
  tech: string;
  demo_link: string;
  github_link: string;
  is_github_private: boolean;
  hover_gif_dark: string;
  hover_gif_light: string;
}

export default function Projects() {
  const [modalImg, setModalImg] = useState<string | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //-- When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
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

  const projects: Project[] = [
    {
      index: 0,
      image: "/project_thumbnails/light/thinmotion.png",
      image_dark: "/project_thumbnails/dark/thinmotion.png",
      description: "React Native - iOS/Android",
      descriptionJP: "React Native / iOS・Androidアプリ",
      name: "THIN MOTION - ESP32 BLE Turntable devices managing app",
      tech: "React Native, Expo, BluetoothLE, react-native-ble-plx",
      demo_link: "#",
      github_link: "https://thinmotion.com/",
      is_github_private: false,
      hover_gif_dark: "/project_gifs/dark/thinmotion.png",
      hover_gif_light: "/project_gifs/light/thinmotion.png"
    },
    {
      index: 1,
      image: "/project_thumbnails/light/clinics.jpg",
      image_dark: "/project_thumbnails/dark/clinics.jpg",
      description: "Mobile Application - Health & Medical Care",
      descriptionJP: "Mobileアプリ / ヘルス・メディカルケア",
      name: "CLINICS（クリニクス） JP",
      tech: "Flutter, Vue, Express, Typescript, Firebase",
      demo_link: "https://5cmp.app.link/cbuMSzXxxLb?%7Etags=path%3A%2F&%7Etags=action%3Akeyvisual&%24desktop_url=https%3A%2F%2Fapps.apple.com%2Fjp%2Fapp%2Fid1106261604",
      github_link: "https://github.com/mamoruheart/clinics_jp_medical",
      is_github_private: true,
      hover_gif_dark: "/project_gifs/dark/clinics.jpg",
      hover_gif_light: "/project_gifs/light/clinics.jpg"
    },
    {
      index: 2,
      image: "/project_thumbnails/light/frogquest.png",
      image_dark: "/project_thumbnails/dark/frogquest.png",
      description: "React Native - iOS/Android",
      descriptionJP: "React Native / iOS・Androidアプリ",
      name: "FrogQuest - Best Photo Scavenger Hunts for Team Building",
      tech: "React Native, Expo, GraphQL, Camera Social App",
      demo_link: "https://itunes.apple.com/us/app/frogquest-photo-scavenger-hunt/id1399123814?mt=8",
      github_link: "https://github.com/mamoruheart/frogquest-rn-app",
      is_github_private: true,
      hover_gif_dark: "/project_gifs/dark/frogquest.png",
      hover_gif_light: "/project_gifs/light/frogquest.png"
    },
    {
      index: 3,
      image: "/project_thumbnails/light/kaguaruoo.jpg",
      image_dark: "/project_thumbnails/dark/kaguaruoo.jpg",
      description: "Web Application - Real Estate, AirBnb",
      descriptionJP: "Webアプリケーション / 不動産・AirBnb",
      name: "KagoAruoo JP",
      tech: "Ruby on Rails, Coffee Script, PostgreSQL, PHP, WordPress, Google Maps",
      demo_link: "https://kaguaruoo.com/jp",
      github_link: "https://github.com/mamoruheart/kaguaruoo-airbnb-ror",
      is_github_private: true,
      hover_gif_dark: "/project_gifs/dark/kaguaruoo.jpg",
      hover_gif_light: "/project_gifs/light/kaguaruoo.jpg"
    },
    {
      index: 4,
      image: "/project_thumbnails/light/myschoolconnect.jpg",
      image_dark: "/project_thumbnails/dark/myschoolconnect.png",
      description: "React Native - iOS/Android",
      descriptionJP: "React Native / iOS・Androidアプリ",
      name: "MY SCHOOL CONNECT AU",
      tech: "React-Native, PHP, WordPress, jQuery, Mobile App Development, Payment Gateway Integration",
      demo_link: "https://apps.apple.com/au/app/my-school-connect/id1136583371",
      github_link: "https://myschoolconnect.com.au/",
      is_github_private: false,
      hover_gif_dark: "/project_gifs/dark/myschoolconnect.png",
      hover_gif_light: "/project_gifs/light/myschoolconnect.jpg"
    },
    {
      index: 5,
      image: "/project_thumbnails/light/kindy.jpg",
      image_dark: "/project_thumbnails/dark/kindy.jpg",
      description: "Angular & Ionic Framework - Web & Mobile",
      descriptionJP: "Angular・Ionic Framework / Web・Mobileアプリ",
      name: "Kindy JP",
      tech: "Angular, Ionic Framework, React, Node.js, LoopBack, MongoDB, AWS, GitHub CI/CD, NewRelic",
      demo_link: "https://apkcombo.com/kindy/kindy.valueap.jp/",
      github_link: "https://kindy-app.jp/",
      is_github_private: false,
      hover_gif_dark: "/project_gifs/dark/kindy.jpg",
      hover_gif_light: "/project_gifs/light/kindy.jpg"
    },
    {
      index: 6,
      image: "/project_thumbnails/light/drapefit.jpg",
      image_dark: "/project_thumbnails/dark/drapefit.jpg",
      description: "Web Application - Online Styling Service",
      descriptionJP: "Webアプリケーション / オンラインスタイリングサービス",
      name: "Drape Fit Inc. US",
      tech: "React, Node.js, Express, MongoDB, Redux, AWS, CakePHP, cPanel, Angular, Java Spring",
      demo_link: "https://www.drapefit.com/",
      github_link: "https://github.com/mamoruheart/dfbox-styling-eshop",
      is_github_private: false,
      hover_gif_dark: "/project_gifs/dark/drapefit.jpg",
      hover_gif_light: "/project_gifs/light/drapefit.jpg"
    },
    {
      index: 7,
      image: "/project_thumbnails/light/420portal_app.png",
      image_dark: "/project_thumbnails/dark/420portal_app.png",
      description: "Angular & Ionic Framework - Mobile App",
      descriptionJP: "Angular・Ionic Framework / Mobileアプリ",
      name: "420Portal DE: Weed & Dispensaries",
      tech: "Ionic, Angular, Capacitor, Android, iOS, Social App",
      demo_link: "https://play.google.com/store/apps/details?id=io.portal420.app&hl=en_US",
      github_link: "https://420portal.com/",
      is_github_private: false,
      hover_gif_dark: "/project_gifs/dark/420portal_app.png",
      hover_gif_light: "/project_gifs/light/420portal_app.png"
    },
    {
      index: 8,
      image: "/project_thumbnails/light/turvy.png",
      image_dark: "/project_thumbnails/dark/turvy.png",
      description: "React Native - Uber Mobile App",
      descriptionJP: "React Native / UberタイプのMobileアプリ",
      name: "Turvy LTD - Uber in Australia",
      tech: "React Native, LeafMap, Uber, Rider, Driver, GeoLocation, iOS, Android",
      demo_link: "https://apps.apple.com/us/app/turvy-driver/id6444149465?platform=iphone",
      github_link: "https://turvy.net/",
      is_github_private: false,
      hover_gif_dark: "/project_gifs/dark/turvy.png",
      hover_gif_light: "/project_gifs/light/turvy.png"
    },
    {
      index: 9,
      image: "/project_thumbnails/light/spoken.jpg",
      image_dark: "/project_thumbnails/dark/spoken.jpg",
      description: "Web Application - eCommerce",
      descriptionJP: "Webアプリケーション / ECサイト",
      name: "Spoken.io US",
      tech: "Next.js, Express, GraphQL, PostgreSQL, Docker, Algolia",
      demo_link: "#",
      github_link: "https://www.spoken.io/",
      is_github_private: false,
      hover_gif_dark: "/project_gifs/dark/spoken.jpg",
      hover_gif_light: "/project_gifs/light/spoken.jpg"
    },
    // {
    //   index: 7,
    //   image: "/project_thumbnails/light/ape.jpg",
    //   image_dark: "/project_thumbnails/dark/ape.jpg",
    //   description: "Web3 Marketplace - NFT Wallet",
    //   descriptionJP: "Web3マーケットプレイス / NFTウォレット",
    //   name: "ApeWorld WOV Marketplace",
    //   tech: "React, Web3, Ether.js, GraphQL, MetaMask, Wallet, NFT, ABI",
    //   demo_link: "#",
    //   github_link: "https://ape-world-marketplace.vercel.app/",
    //   is_github_private: false,
    //   hover_gif_dark: "/project_gifs/dark/ape.jpg",
    //   hover_gif_light: "/project_gifs/light/ape.jpg",
    // },
    {
      index: 10,
      image: "/project_thumbnails/light/healthcare.jpg",
      image_dark: "/project_thumbnails/dark/healthcare.jpg",
      description: "Web Application - Medical Care",
      descriptionJP: "Webアプリケーション / メディカルケア",
      name: "Health Care Plus",
      tech: "Vue, Express, Node.js, Typescript, MySQL, TailwindCSS, Docker",
      demo_link: "https://health-care-plus.vercel.app/",
      github_link: "https://github.com/mamoruheart/medical-clinic-mevn",
      is_github_private: false,
      hover_gif_dark: "/project_gifs/dark/healthcare.jpg",
      hover_gif_light: "/project_gifs/light/healthcare.jpg"
    },
    {
      index: 11,
      image: "/project_thumbnails/light/pyscraping.jpg",
      image_dark: "/project_thumbnails/dark/pyscraping.jpg",
      description: "Web Scraping - Python Selenium",
      descriptionJP: "Webスクレイピング / Python・Selenium",
      name: "Amazon eCommerce Scraper",
      tech: "Python, Scrapy, Selenium, ASIN, CSV, Amazon",
      demo_link: "#",
      github_link: "https://github.com/mamoruheart/amazon-scrape-hero",
      is_github_private: false,
      hover_gif_dark: "/project_gifs/dark/pyscraping.jpg",
      hover_gif_light: "/project_gifs/light/pyscraping.jpg"
    },
    // {
    //   index: 11,
    //   image: "/project_thumbnails/light/runners.jpg",
    //   image_dark: "/project_thumbnails/dark/runners.jpg",
    //   description: "Web Application - Sports",
    //   descriptionJP: "Webアプリケーション / Sports",
    //   name: "Runners School Italia",
    //   tech: "Angular, TypeScript, WordPress, Cloudflare",
    //   demo_link: "#",
    //   github_link: "https://www.runnerschoolitalia.com/",
    //   is_github_private: false,
    //   hover_gif_dark: "/project_gifs/dark/runners.jpg",
    //   hover_gif_light: "/project_gifs/light/runners.jpg",
    // },
    {
      index: 12,
      image: "/project_thumbnails/light/stakoneau.png",
      image_dark: "/project_thumbnails/dark/stakoneau.png",
      description: "Web Application - Agile Task Management",
      descriptionJP: "Webアプリケーション / アジャイルタスク管理",
      name: "StakTask - StakOne Solutions AU",
      tech: "AngularJS, JavaScript, jQuery, Trello, RWD, PWA, Cloudflare, reCAPTCHA",
      demo_link: "#",
      github_link: "https://stakone.com.au/",
      is_github_private: false,
      hover_gif_dark: "/project_gifs/dark/stakoneau.png",
      hover_gif_light: "/project_gifs/light/stakoneau.png"
    },
    {
      index: 13,
      image: "/project_thumbnails/light/tmobile.png",
      image_dark: "/project_thumbnails/dark/tmobile.png",
      description: "Web Application - eCommerce",
      descriptionJP: "Webアプリケーション / ECサイト",
      name: "Telefony, Tablety, Laptopy, Szybki Internet - Dołącz do T-Mobile",
      tech: "React, Next.js, TailwindCSS, AWS, reCAPTCHA, Node.js, GraphQL",
      demo_link: "#",
      github_link: "https://www.t-mobile.pl/",
      is_github_private: false,
      hover_gif_dark: "/project_gifs/dark/tmobile.png",
      hover_gif_light: "/project_gifs/light/tmobile.png"
    }
  ];

  return (
    <>
      <Element name="projects" className="relative" />
      <div className="mb-48">
        <h2 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
          {mounted && (theme === "dark" ? "Projects" : "プロジェクト")}
          {!mounted && "Loading..."}
        </h2>
        <div className="mx-0 grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:mx-4 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <div
                key={project.index}
                className={`group m-6 flex flex-col items-center justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700`}
              >
                <Fade bottom>
                  <div className="relative flex h-full items-center justify-center">
                    <Image
                      src={theme === "dark" ? project.image : project.image_dark}
                      alt={project.name}
                      width={300}
                      height={0}
                      style={{ height: "auto" }}
                      title="Click to enlarge"
                      onClick={() => {
                        setModalImg(theme === "dark" ? project.image_dark : project.image);
                      }}
                      className={`absolute mb-4 h-auto max-h-56 w-full transform rounded-lg object-contain transition duration-500 ease-in-out hover:cursor-pointer group-hover:opacity-0`}
                    />
                    <Image
                      src={theme === "dark" ? project.hover_gif_light : project.hover_gif_dark}
                      alt={project.name}
                      width={300}
                      height={0}
                      style={{ height: "auto" }}
                      unoptimized={true}
                      className={`mb-4 h-auto max-h-56 w-full rounded-lg object-contain`}
                    />
                  </div>
                  <div className={`w-full`}>
                    <p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">{mounted && (theme === "dark" ? project.description : project.descriptionJP)}</p>
                    <p className="my-1 text-xl font-medium">{project.name}</p>
                    <p className="my-1 text-sm text-orange-500">{project.tech}</p>
                    <div className="flex justify-between">
                      <Link
                        className="text-sm"
                        href={project.demo_link}
                        aria-label="Visit Demo"
                        onClick={
                          project.demo_link === "#"
                            ? (e) => {
                                e.preventDefault();
                              }
                            : (e) => {
                                e.preventDefault();
                                window.open(project.demo_link, "_blank");
                              }
                        }
                      >
                        {project.demo_link === "#" ? "" : "Visit"}
                        <span className="block h-[1px] max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
                      </Link>
                      <Link
                        href={project.github_link}
                        rel="noreferrer"
                        title={project.github_link.includes("github.com") ? (project.is_github_private ? "GitHub (Private)" : "GitHub") : "Website"}
                        target="_blank"
                      >
                        {project.github_link.includes("github.com") ? (
                          project.is_github_private ? (
                            <AiFillGithub className="inline-block text-4xl text-black transition delay-75 ease-in-out hover:scale-125 dark:text-white" />
                          ) : (
                            <TbBrandGithub className="inline-block text-4xl text-black transition delay-75 ease-in-out hover:scale-125 dark:text-white" />
                          )
                        ) : (
                          <AiOutlineLink className="inline-block text-4xl text-black transition delay-75 ease-in-out hover:scale-125 dark:text-white" />
                        )}
                      </Link>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
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
