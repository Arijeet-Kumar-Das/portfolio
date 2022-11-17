import React from "react";
import profileImg from "./profile-img.jpg";

const Navbar = () => {
  return (
    <>
      <div className="flex">
        <h1 class="bg-black text-white px-5 py-5">C.Smith</h1>
        <div class="flex mx-5 my-5 space-x-5">
          <ul class="flex space-x-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact me</li>
          </ul>
        </div>
      </div>

      <div class="flex justify-around mt-10">
        <div className="left space-y-5 max-w-[50vw]">
          <div className="heading text-5xl">
            <h1>Hello</h1>
            <p>
              <i>I'm</i>&nbsp; Chad Smith
            </p>
          </div>
          <p class="font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            error quibusdam magni.
            <p className="font-bold">Lorem ipsum dolor sit amet consectetur.</p>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            itaque reiciendis non! Cupiditate quasi itaque assumenda, omnis
            maxime officia dolores temporibus ipsam corrupti suscipit, alias
            expedita dolorem! Praesentium voluptatem reprehenderit harum
            blanditiis sit fuga?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            impedit dicta accusamus.
          </p>
          <button class="flex">
            <ion-icon name="ellipse" class="text-gray-200 text-3xl"></ion-icon>
            &nbsp; EXPLORE ME
          </button>
        </div>

        <div className="right shadow-lg shadow-gray-500 -mt-10">
          <img src={profileImg} alt="" class="h-[500px] w-[400px]" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
