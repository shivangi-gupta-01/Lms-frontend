import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import HomeImage from "../assets/mages/Home2.png";
const HomePage = () => {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh] bg-[#5a7fd7]">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Find Out Best
            <span className="text-yellow-500 font-bold px-2">
              Online Courses
            </span>
          </h1>
          <p className="text-xl text-gray-200">
            We have large library of courses taught by highly skilled and
            qualified facalties at a very affordable cost
          </p>

          <div className="space-x-6">
            <Link to="/courses">
              <button className=" bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Explore Course
              </button>
            </Link>
            <Link to="/contect">
              <button className=" border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Contect Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src={HomeImage} alt="learning" />
        </div>
      </div>
    </HomeLayout>
  );
};

export default HomePage;

