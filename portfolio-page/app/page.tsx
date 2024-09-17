import Header from "@/app/components/header";
import Image from "next/image";
import profilePic from "@/app/public/img/230912_4.jpg"

export default function Home() {
  return (
    <>
      <Header/>
      <div className="flex container mx-auto py-20 px-10 flex-col md:flex-row items-center">
        <div className="text-gray-700 md:w-1/2 mb-16 lg:pr-24 md:pr-16 text-center md:text-left flex-grow" id="home">
          <h1 className="text-3xl font-bold sm:text-6xl">
          Every people
          <br/>
          can be creative.
          </h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            <br/>
            2021-2025
            <br/>
            Faculty of Engineering, Iwate University
            <br/>
            Systems Engineering Lab.
            <br/>
            <br/>
            2025-2027
            <br/>
            Japan Advanced Institute of Science and Technology
          </p>
          <button className="text-white bg-indigo-600 py-2 px-6 border-0 rounded-full">
            Contact me
          </button>
        </div>
        <div className="md:w-1/2 lg:max-w-lg w-5/6">
          <Image
            src={profilePic}
            alt="Image"
          />
        </div>
      </div>
    </>
  );
}
