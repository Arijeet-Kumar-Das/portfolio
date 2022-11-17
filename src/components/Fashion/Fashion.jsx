import React from "react";
import fashion from "./fashion.jpg";
const Fashion = () => {
  return (
    <div>
      <div class="mt-28">
        <div className="flex justify-around mt-10">
          <div className="right w-[50vw]">
            <h1 className="text-5xl  text-gray-200">02</h1>
            <h1 className="text-4xl font-bold">
              Fashion & <br /> Blog Website Design
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
          <div className="left shadow-lg shadow-gray-500">
            <img src={fashion} alt="" height="450px" width="450px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
