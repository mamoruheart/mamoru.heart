import Image from "next/image";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { useTheme } from "next-themes";
import { Element } from "react-scroll";

export default function CareerTimeline() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //-- When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <>
      <Element name="timeline" className="relative" />
      <div className="mb-48 mt-20 sm:mt-0">
        <h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
          {mounted && (theme === "dark" ? "Career Timeline" : "タイムライン")}
          {!mounted && "Loading..."}
        </h3>
        <div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
          <div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700 sm:col-span-2 lg:col-start-1 lg:col-end-3">
            <Fade left>
              <div>
                <p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2022. 07 - {mounted && (theme === "dark" ? "Current" : "現在")}</p>
                <p className="my-1 font-medium sm:text-xl">{mounted && (theme === "dark" ? "Technical Sponsor" : "技術スポンサー")}</p>
                <p className="my-1 text-sm font-medium">{mounted && (theme === "dark" ? "Optlynx Co.Ltd." : "株式会社オプトリンクス")}</p>
                <p className="text-sm font-thin">
                  {mounted &&
                    (theme === "dark"
                      ? "Minamide has a personal close relationship with Takaya Fujikawa, CEO at Optlynx, and provides on-demand technical sponsorship in the area of web3 service development using Laravel and MERN stacks."
                      : "南出さんは、Optlynxの代表取締役 藤川 隆也様と親密な関係を築いており、LaravelとMERNを使用したWeb3サービス開発の分野でオンデマンドの技術支援を提供しています。")}
                </p>
              </div>
              <Image
                src="/logo_optlynx.png"
                alt="Optlynx"
                width={400}
                height={0}
                style={{ height: "auto" }}
                title="Optlynx"
                onClick={() => {
                  window.open("http://www.optlynx.com/", "_blank");
                }}
                className="mt-2 object-contain hover:cursor-pointer"
              />
            </Fade>
          </div>
        </div>
        <div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
          <div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700 sm:col-span-2 lg:col-start-3 lg:col-end-5">
            <Fade right>
              <div>
                <p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2021. 11 - 2022.06</p>
                <p className="my-1 font-medium sm:text-xl">{mounted && (theme === "dark" ? "Freelance Mobile Engineer" : "フリーランスのモバイルエンジニア")}</p>
                <p className="my-1 text-sm font-medium">Guru.com</p>
                <p className="text-sm font-thin">https://www.guru.com/</p>
                <p className="my-1 text-sm font-medium">{mounted && (theme === "dark" ? "Lancers JP" : "ランサーズ")}</p>
                <p className="text-sm font-thin">https://www.lancers.jp/</p>
              </div>
              <Image
                src="/logo_lancersjp.jpg"
                alt="ランサーズ | 日本最大級のクラウドソーシング・仕事依頼サイト"
                width={300}
                height={0}
                style={{ height: "auto" }}
                title="ランサーズ"
                onClick={() => {
                  window.open("https://lancers.jp/", "_blank");
                }}
                className="mt-2 object-contain hover:cursor-pointer"
              />
            </Fade>
          </div>
        </div>
        <div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
          <div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700 sm:col-span-2 lg:col-start-1 lg:col-end-3">
            <Fade left>
              <div>
                <p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2020. 02 - 2021. 10</p>
                <p className="my-1 font-medium sm:text-xl">{mounted && (theme === "dark" ? "Full-Stack Web Developer" : "フルスタックWeb開発者")}</p>
                <p className="my-1 text-sm font-medium">Drape Fit Inc. US</p>
                <p className="text-sm font-thin">
                  {mounted &&
                    (theme === "dark"
                      ? "Drape Fit is a personal styling service that curates high-quality clothing subscription boxes at affordable prices in the US. Minamide was a lead developer of the Drape Fit v2 project using MERN and DevOps stacks to renovate the v1 built with CakePHP."
                      : "Drape Fitは、米国で手頃な価格で高品質の衣料品サブスクリプションボックスをキュレートするパーソナルスタイリングサービスです。南出さんは、CakePHPで構築されたv1を改良するためにMERNとDevOpsスタックを使用したDrape Fit v2プロジェクトの主任開発者でした。")}
                </p>
              </div>
              <Image
                src="/logo_dfbox.jpg"
                alt="Drape Fit Box"
                width={400}
                height={0}
                style={{ height: "auto" }}
                title="Drape Fit"
                onClick={() => {
                  window.open("https://www.drapefit.com/", "_blank");
                }}
                className="mt-2 object-contain hover:cursor-pointer"
              />
            </Fade>
          </div>
        </div>
        <div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
          <div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700 sm:col-span-2 lg:col-start-3 lg:col-end-5">
            <Fade right>
              <div>
                <p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2018. 03 - 2020. 01</p>
                <p className="my-1 font-medium sm:text-xl">{mounted && (theme === "dark" ? "Web & Mobile Developer" : "ウェブ・モバイル開発者")}</p>
                <p className="my-1 text-sm font-medium">{mounted && (theme === "dark" ? "VALUE APPLICATIONS JP" : "株式会社バリューアプリケーションズ")}</p>
                <p className="text-sm font-thin">
                  {mounted &&
                    (theme === "dark"
                      ? "Minamide was involved in developing and launching the production versions of Kindy web & mobile applications using MEAN and Ionic Framework to support connecting nurseries and parents in childcare management fields across Tokyo and Japan."
                      : "南出さんは、東京と日本各地の保育管理分野で保育園と保護者をつなぐサポートをするために、MEANとIonic Frameworkを使用してKindy Webおよびモバイルアプリの製品版の開発とリリースに携わりました。")}
                </p>
              </div>
              <Image
                src="/logo_kindy_app.webp"
                alt="Kindy JP"
                width={300}
                height={0}
                style={{ height: "auto" }}
                title="「Kindy」アプリ"
                onClick={() => {
                  window.open("https://kindy-app.jp/", "_blank");
                }}
                className="mt-2 object-contain hover:cursor-pointer"
              />
            </Fade>
          </div>
        </div>
        <div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
          <div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700 sm:col-span-2 lg:col-start-1 lg:col-end-3">
            <Fade left>
              <div>
                <p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2015. 11 - 2018. 01</p>
                <p className="my-1 font-medium sm:text-xl">{mounted && (theme === "dark" ? "Junior Front-end Developer" : "ジュニアフロントエンド開発者")}</p>
                <p className="my-1 text-sm font-medium">StakOne Pty Ltd. AU</p>
                <p className="text-sm font-thin">
                  {mounted &&
                    (theme === "dark"
                      ? "Minamide took a part in StakTask app development which is a Trello-type TODOs list managing system using Angular.js and several jQuery libraries such as slick.js and draggable.js."
                      : "南出さんは、Angular.jsと、slick.js、draggable.jsなどのいくつかのjQueryライブラリを使用したTrelloタイプのTODOリスト管理システムであるStakTaskアプリの開発に参加しました。")}
                </p>
              </div>
              <Image
                src="/logo_stakone.png"
                alt="StakOne AU"
                width={300}
                height={0}
                style={{ height: "auto" }}
                title="StakTask"
                onClick={() => {
                  window.open("https://stakone.com.au/", "_blank");
                }}
                className="mt-2 object-contain hover:cursor-pointer"
              />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
