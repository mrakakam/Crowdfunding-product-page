import { useState } from "react";
import closeimg from "../assets/images/icon-close-menu.svg";

export const Modal = ({ onClose }) => {
  const [selected, setSelected] = useState("");

  return (
    <section className="bg-white max-w-2xl mx-auto p-8 rounded-xl relative flex flex-col items-start gap-8">

      {/* Close Button (slightly above header text) */}
      <img
        src={closeimg}
        alt="Close"
        onClick={onClose}
        className="absolute right-8 top-8 cursor-pointer"
      />

      {/* Header */}
      <div className="flex flex-col items-start gap-3 w-full">
        <h2 className="text-2xl font-bold">
          Back to this project
        </h2>
        <p className="text-gray-500">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out
          in the world?
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col items-start gap-6 w-full">

        {/* ================= PLEDGE WITH NO REWARD ================= */}
        <label className="w-full border border-gray-300 rounded-xl p-6 flex flex-col gap-4 cursor-pointer hover:border-[#008b8b] transition">

          {/* Radio + Title Row */}
          <div className="flex items-center gap-4">
            <input
              type="radio"
              name="pledge"
              onChange={() => setSelected("none")}
            />
            <h3 className="font-bold">
              Pledge with no reward
            </h3>
          </div>

          {/* Description under both */}
          <p className="text-gray-500 ml-8">
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </p>
        </label>

        {/* ================= BAMBOO STAND ================= */}
        <label className="w-full border border-gray-300 rounded-xl p-6 flex flex-col gap-4 cursor-pointer hover:border-[#008b8b] transition">

          {/* Top Row */}
          <div className="flex items-start justify-between w-full">

            {/* Left side */}
            <div className="flex items-start gap-4">
              <input
                type="radio"
                name="pledge"
                onChange={() => setSelected("bamboo")}
              />

              <div className="flex flex-col">
                <div className="flex items-center gap-4">
                  <h3 className="font-bold">Bamboo Stand</h3>
                  <p className="text-[#008b8b] text-sm">
                    Pledge $25 or more
                  </p>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg">101</h3>
              <p className="text-gray-500 text-sm">left</p>
            </div>
          </div>

          {/* Description under row */}
          <p className="text-gray-500 ml-8">
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you'll be added to a special
            Backer member list.
          </p>

          {/* Bottom Section with Border */}
          <div className="border-t border-gray-300 pt-4 flex items-center justify-between ml-8">

            <p className="text-gray-500">
              Enter your pledge
            </p>

            <div className="flex items-center gap-3">
              <input
                type="number"
                placeholder="$25"
                className="border border-gray-300 rounded-full px-4 py-2 w-24"
              />
              <button className="bg-[#008b8b] text-white px-6 py-2 rounded-full hover:opacity-90">
                Continue
              </button>
            </div>

          </div>
        </label>

        {/* ================= BLACK EDITION ================= */}
        <label className="w-full border border-gray-300 rounded-xl p-6 flex flex-col gap-4 cursor-pointer hover:border-[#008b8b] transition">

          <div className="flex items-start justify-between w-full">

            <div className="flex items-start gap-4">
              <input
                type="radio"
                name="pledge"
                onChange={() => setSelected("black")}
              />

              <div className="flex flex-col">
                <div className="flex items-center gap-4">
                  <h3 className="font-bold">Black Edition Stand</h3>
                  <p className="text-[#008b8b] text-sm">
                    Pledge $75 or more
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg">64</h3>
              <p className="text-gray-500 text-sm">left</p>
            </div>
          </div>

          <p className="text-gray-500 ml-8">
            You get a Black Special Edition computer stand and a personal thank
            you. You'll be added to our Backer member list. Shipping is
            included.
          </p>

          <div className="border-t border-gray-300 pt-4 flex items-center justify-between ml-8">

            <p className="text-gray-500">
              Enter your pledge
            </p>

            <div className="flex items-center gap-3">
              <input
                type="number"
                placeholder="$75"
                className="border border-gray-300 rounded-full px-4 py-2 w-24"
              />
              <button className="bg-[#008b8b] text-white px-6 py-2 rounded-full hover:opacity-90">
                Continue
              </button>
            </div>

          </div>
        </label>

        {/* ================= MAHOGANY (BLURRED) ================= */}
        <label className="w-full border border-gray-300 rounded-xl p-6 flex flex-col gap-4 opacity-70 pointer-events-none">
  <div className="flex items-start justify-between w-full">
    <div className="flex items-start gap-4">
      <input type="radio" disabled />

      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <h3 className="font-bold">
            Mahogany Special Edition
          </h3>
          <p className="text-[#008b8b] text-sm">
            Pledge $200 or more
          </p>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-2">
      <h3 className="font-bold text-lg">0</h3>
      <p className="text-gray-500 text-sm">left</p>
    </div>
  </div>

  <p className="text-gray-500 ml-8">
    You get two Special Edition Mahogany stands, a Backer T-shirt and a
    personal thank you.
  </p>
</label>

      </div>
    </section>
  );
};