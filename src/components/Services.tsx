import React, { useState, useEffect } from "react";
import { TbBrandReact, TbBrandReactNative, TbBrandAngular, TbBrandNextjs } from "react-icons/tb";
import { DiJava, DiMongodb, DiPostgresql, DiPython, DiIonic } from "react-icons/di";
import {
  SiFlask,
  SiExpress,
  SiFirebase,
  SiMysql,
  SiRedis,
  SiAmazonaws,
  SiSqlite,
  SiMicrosoftteams,
  SiSelenium,
  SiSlack,
  SiElectron,
  SiCircleci,
  SiGoogledocs,
  SiWhatsapp,
  SiTelegram,
  SiZoom,
  SiExpo,
  SiCapacitor,
  SiLaravel,
  SiJquery,
  SiFastapi,
  SiSolidity,
  SiWeb3Dotjs,
  SiNodedotjs,
  SiVercel,
  SiJira,
  SiGooglemeet
} from "react-icons/si";
import { BsGit, BsGithub } from "react-icons/bs";
import { BiLogoJavascript, BiLogoTypescript, BiLogoCPlusPlus, BiLogoPhp } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import { FaDocker } from "react-icons/fa";
import { useTheme } from "next-themes";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

interface Service {
  index: number;
  name: string;
  icon: React.ReactElement;
}

const languageSvcs: Service[] = [
  {
    index: 0,
    name: "JavaScript",
    icon: <BiLogoJavascript className={"m-4 text-6xl text-yellow-500"} />
  },
  {
    index: 1,
    name: "TypeScript",
    icon: <BiLogoTypescript className={"m-4 text-6xl text-blue-500"} />
  },
  {
    index: 2,
    name: "Python",
    icon: <DiPython className="m-4 text-6xl text-cyan-700" />
  },
  {
    index: 3,
    name: "PHP",
    icon: <BiLogoPhp className={"m-4 text-6xl text-blue-500"} />
  },
  {
    index: 4,
    name: "Java",
    icon: <DiJava className={"m-4 text-6xl text-orange-700"} />
  },
  {
    index: 5,
    name: "C++",
    icon: <BiLogoCPlusPlus className="m-4 text-6xl text-blue-600" />
  },
  {
    index: 6,
    name: "Solidity",
    icon: <SiSolidity className="m-4 text-6xl text-purple-500" />
  }
];

const frontendSvcs: Service[] = [
  {
    index: 0,
    name: "React",
    icon: <TbBrandReact className={"m-4 text-6xl text-cyan-700"} />
  },
  {
    index: 1,
    name: "Next.js",
    icon: <TbBrandNextjs className={"m-4 text-6xl text-black"} />
  },
  {
    index: 2,
    name: "Angular",
    icon: <TbBrandAngular className={"m-4 text-6xl text-pink-600"} />
  },
  {
    index: 3,
    name: "jQuery",
    icon: <SiJquery className={"m-4 text-6xl text-blue-600"} />
  },
  {
    index: 4,
    name: "Selenium",
    icon: <SiSelenium className={"m-4 text-6xl text-green-600"} />
  },
  {
    index: 5,
    name: "Web3.js",
    icon: <SiWeb3Dotjs className={"m-4 text-6xl text-gray-400"} />
  }
];

const mobileSvcs: Service[] = [
  {
    index: 0,
    name: "React Native",
    icon: <TbBrandReactNative className={"m-4 text-6xl text-cyan-600"} />
  },
  {
    index: 1,
    name: "Expo",
    icon: <SiExpo className={"m-4 text-6xl text-black"} />
  },
  {
    index: 2,
    name: "Ionic",
    icon: <DiIonic className={"m-4 text-6xl text-blue-500"} />
  },
  {
    index: 3,
    name: "Capacitor",
    icon: <SiCapacitor className={"m-4 text-6xl text-cyan-500"} />
  },
  {
    index: 4,
    name: "Electron",
    icon: <SiElectron className="m-4 text-6xl text-cyan-600" />
  }
];

const backendSvcs: Service[] = [
  {
    index: 0,
    name: "Node.js",
    icon: <SiNodedotjs className={"m-4 text-6xl text-green-700"} />
  },
  {
    index: 1,
    name: "Express",
    icon: <SiExpress className={"m-4 text-6xl text-white"} />
  },
  {
    index: 2,
    name: "Laravel",
    icon: <SiLaravel className={"m-4 text-6xl text-red-400"} />
  },
  {
    index: 3,
    name: "FastAPI",
    icon: <SiFastapi className={"m-4 text-6xl text-green-600"} />
  },
  {
    index: 4,
    name: "Flask",
    icon: <SiFlask className={"m-4 text-6xl text-black"} />
  },
  {
    index: 5,
    name: "AWS",
    icon: <SiAmazonaws className={"m-4 text-6xl text-yellow-500"} />
  },
  {
    index: 6,
    name: "Firebase",
    icon: <SiFirebase className={"m-4 text-6xl text-yellow-600"} />
  }
];

const dbmsSvcs: Service[] = [
  {
    index: 0,
    name: "MongoDB",
    icon: <DiMongodb className={"m-4 text-6xl text-green-800"} />
  },
  {
    index: 1,
    name: "MySQL",
    icon: <SiMysql className={"m-4 text-6xl text-orange-600"} />
  },
  {
    index: 2,
    name: "PostgreSQL",
    icon: <DiPostgresql className={"m-4 text-6xl text-blue-600"} />
  },
  {
    index: 3,
    name: "Redis",
    icon: <SiRedis className={"m-4 text-6xl text-red-600"} />
  },
  {
    index: 4,
    name: "SQLite",
    icon: <SiSqlite className={"m-4 text-6xl text-blue-500"} />
  }
];

const devopsSvcs = [
  {
    index: 0,
    name: "Git",
    icon: <BsGit className={"m-4 text-6xl text-red-500"} />
  },
  {
    index: 1,
    name: "GitHub",
    icon: <BsGithub className={"m-4 text-6xl text-purple-600"} />
  },
  {
    index: 2,
    name: "Linux",
    icon: <FcLinux className={"m-4 text-6xl text-white"} />
  },
  {
    index: 3,
    name: "Docker",
    icon: <FaDocker className={"m-4 text-6xl text-blue-600"} />
  },
  {
    index: 4,
    name: "CI/CD",
    icon: <SiCircleci className={"m-4 text-6xl text-black"} />
  },
  {
    index: 5,
    name: "Vercel",
    icon: <SiVercel className={"m-4 text-6xl text-gray-900"} />
  }
];

const teamworkSvcs = [
  {
    index: 0,
    name: "Slack",
    icon: <SiSlack className={"m-4 text-6xl text-gray-300"} />
  },
  {
    index: 1,
    name: "MS Teams",
    icon: <SiMicrosoftteams className={"m-4 text-6xl text-purple-600"} />
  },
  {
    index: 2,
    name: "Jira",
    icon: <SiJira className={"m-4 text-6xl text-blue-400"} />
  },
  {
    index: 3,
    name: "Google Docs",
    icon: <SiGoogledocs className={"m-4 text-6xl text-blue-600"} />
  }
];

const communicateSvcs = [
  {
    index: 0,
    name: "WhatsApp",
    icon: <SiWhatsapp className={"m-4 text-6xl text-green-500"} />
  },
  {
    index: 1,
    name: "Telegram",
    icon: <SiTelegram className={"m-4 text-6xl text-blue-400"} />
  },
  {
    index: 2,
    name: "Zoom",
    icon: <SiZoom className={"m-4 text-6xl text-blue-600"} />
  },
  {
    index: 3,
    name: "Google Meet",
    icon: <SiGooglemeet className={"m-4 text-6xl text-green-800"} />
  }
];

const columnHeaders = [
  {
    name: "Languages",
    nameJP: "PG言語",
    svcs: languageSvcs
  },
  {
    name: "Frontend",
    nameJP: "フロントエンド",
    svcs: frontendSvcs
  },
  {
    name: "Mobile App",
    nameJP: "モバイルアプリ",
    svcs: mobileSvcs
  },
  {
    name: "Backend",
    nameJP: "バックエンド",
    svcs: backendSvcs
  },
  {
    name: "DBMS",
    nameJP: "データベース",
    svcs: dbmsSvcs
  },
  {
    name: "DevOps",
    nameJP: "デブオプス",
    svcs: devopsSvcs
  },
  {
    name: "Teamwork",
    nameJP: "チームワーク",
    svcs: teamworkSvcs
  },
  {
    name: "Communications",
    nameJP: "コミュニケーション",
    svcs: communicateSvcs
  }
];

export default function Services() {
  const [svcs, setSvcs] = useState(languageSvcs);
  const [currSvc, setCurrSvc] = useState(columnHeaders[0].name);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //-- When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <>
      <Element name="services" className="relative" />
      <div className="mx-5 mb-48 overflow-hidden rounded-xl  border-2 border-cyan-300 bg-cyan-100 px-4 pb-5 pt-6 text-gray-700 dark:border-0 dark:bg-gray-800 dark:text-white md:mx-10 md:px-8 md:pb-8">
        <h3 className="text-center text-2xl font-medium md:text-3xl">
          {mounted && (theme === "dark" ? "Services" : "サービス")}
          {!mounted && "Loading..."}
        </h3>
        <div className="mt-6 flex flex-col sm:flex-row">
          <div className="mb-5 flex flex-row justify-between overflow-scroll rounded-xl bg-cyan-200 px-2 py-5 dark:bg-gray-700 sm:mb-0 sm:mr-8 sm:flex-col sm:overflow-visible md:px-5">
            {columnHeaders.map((columnHeader) => {
              return (
                <Fade bottom key={columnHeader.name}>
                  <h4
                    className={`mb-2 cursor-pointer whitespace-nowrap rounded px-4 py-2 text-center hover:bg-cyan-500 hover:text-white dark:hover:bg-gray-600 ${currSvc === columnHeader.name && "bg-cyan-500 text-white"}`}
                    onClick={() => {
                      setSvcs([...columnHeader.svcs]);
                      setCurrSvc(columnHeader.name);
                    }}
                  >
                    {mounted && (theme === "dark" ? columnHeader.name : columnHeader.nameJP)}
                  </h4>
                </Fade>
              );
            })}
          </div>
          <div className="grid w-full grid-cols-2 rounded-xl bg-cyan-200 p-5 dark:bg-gray-700 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
            {svcs.map((svc) => {
              return (
                <Fade right key={svc.index} cascade>
                  <div className="m-auto">
                    <a>
                      <motion.button
                        whileHover={{
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 2 }
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {svc.icon}
                      </motion.button>
                    </a>
                    <p className="text-center text-sm">{svc.name}</p>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
