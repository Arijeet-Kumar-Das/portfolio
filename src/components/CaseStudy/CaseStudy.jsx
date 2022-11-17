import React from "react";
import caseStudy from "./case-study.jpg";

const CaseStudy = () => {
  return (
    <>
      <div class="mt-28">
        <div className="heading flex justify-between">
          <h1 class="text-5xl ml-10">My Case Studies</h1>
          <button class="px-6 py-2 border-2 border-gray-400 mr-36">
            ALL CASE PROJECTS
          </button>
        </div>
        <div className="flex justify-around mt-10">
          <div className="left shadow-lg shadow-gray-500">
            <img src={caseStudy} alt="" height="450px" width="450px" />
          </div>
          <div className="right w-[50vw]">
            <h1 className="text-5xl  text-gray-200">01</h1>
            <h1 className="text-4xl font-bold">
              Travel Agency <br /> Website Redesign
            </h1>
            <br />
            <p class="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              eveniet sapiente possimus laboriosam iste optio adipisci
              recusandae magni illo, harum facere sint quasi maiores, sunt
              officia tempore molestias sed, quidem voluptatibus? Provident,
              reiciendis quia.
            </p>
            <br />
            <button class="px-6 py-2 border-2 border-gray-400">DETAILS</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
