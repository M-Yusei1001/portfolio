import Header from "@/app/components/header";
import Image from "next/image";
import profilePic from "@/app/public/img/230912_4.jpg";
import Content from "@/app/components/content";


export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="container flex mx-auto py-20 px-10 flex-col md:flex-row items-center">
          <div
            className="text-gray-700 md:w-1/2 mb-16 lg:pr-24 md:pr-16 text-center md:text-left flex-grow"
            id="home"
          >
            <h1 className="text-3xl font-bold mb-4 sm:text-6xl">
              誰もが
            </h1>
            <h1 className="text-3xl font-bold mb-16 sm:text-6xl">
              創造性を秘めている。
            </h1>
            <p className="text-gray-500 mb-8 leading-relaxed">
              <h3 className="text-2xl font-semibold">経歴</h3>
              <br />
              2021-2025
              <br />
              岩手大学 理工学部 システム創成工学科 機械科学コース
              <br />
              システム設計研究室
              <br />
              <br />
              2025-2027
              <br />
              岩手大学大学院 理工学研究科 機械・航空宇宙コース or
              <br />
              北陸先端科学技術大学院大学 先端科学技術研究科 先端科学技術専攻
            </p>
            <button className="text-white bg-indigo-600 py-2 px-6 border-0 rounded-full">
              Contact me
            </button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <Image src={profilePic} alt="Image" />
          </div>
        </div>
      </section>

      <section>
        <Content />
      </section>

    </>
  );
}
