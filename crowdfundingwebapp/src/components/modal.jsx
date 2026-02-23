import { useState } from "react";
import closeimg from "../assets/images/icon-close-menu.svg";
import checkerimg from "../assets/images/icon-check.svg";

export const Modal = ({ onClose }) => {

  const [selected, setSelected] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);


  /* ================= SUCCESS SCREEN ================= */

  if (showSuccess) {

    return (

      <div className="bg-white max-w-md mx-auto p-10 rounded-xl flex flex-col items-center text-center gap-6">

        <img
          src={checkerimg}
          alt="success"
          className="w-16"
        />


        <h3 className="text-xl font-bold">
          Thanks for your support!
        </h3>


        <p className="text-gray-500">

          Your pledge brings us one step closer to <br/>
          sharing Mastercraft Bamboo Monitor Riser <br/>
          worldwide. You will get an email once our campaign is completed

        </p>


        <button
          onClick={onClose}
          className="bg-[#008b8b] text-white px-6 py-3 rounded-full hover:opacity-90"
        >
          Got it
        </button>


      </div>

    );
  }


  /* ================= MODAL ================= */

  return (

    <section className="bg-white max-w-2xl mx-auto p-8 rounded-xl flex flex-col items-start gap-8">


      {/* Header */}

      <div className="flex justify-between items-start w-full">


        <div className="flex flex-col gap-3">

          <h2 className="text-2xl font-bold">
            Back to this project
          </h2>


          <p className="text-gray-500">

            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?

          </p>

        </div>



        <img
          src={closeimg}
          alt="Close"
          onClick={onClose}
          className="cursor-pointer brightness-0 opacity-60 hover:opacity-100"
        />


      </div>



      {/* Cards */}

      <div className="flex flex-col gap-6 w-full">


        {/* NO REWARD */}

        <label className="w-full border border-gray-300 rounded-xl p-6 flex flex-col gap-4 cursor-pointer hover:border-[#008b8b] transition">

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


          <p className="text-gray-500 ml-8">

            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.

          </p>

        </label>



        {/* BAMBOO */}

        <label className="w-full border border-gray-300 rounded-xl p-6 flex flex-col gap-4 hover:border-[#008b8b] transition">


          <div className="flex justify-between">


            <div className="flex gap-4">

              <input
                type="radio"
                name="pledge"
                onChange={() => setSelected("bamboo")}
              />


              <div>

                <h3 className="font-bold">
                  Bamboo Stand
                </h3>


                <p className="text-[#008b8b] text-sm">
                  Pledge $25 or more
                </p>

              </div>

            </div>



            <div className="flex gap-2">

              <h3 className="font-bold">
                101
              </h3>

              <p className="text-gray-500">
                left
              </p>

            </div>

          </div>



          <p className="text-gray-500 ml-8">

            You get an ergonomic stand made of natural bamboo.

          </p>



          <div className="border-t pt-4 flex justify-between ml-8">


            <p className="text-gray-500">

              Enter your pledge

            </p>



            <div className="flex gap-3">


              <input
                type="number"
                placeholder="$25"
                className="border rounded-full px-4 py-2 w-24"
              />


              <button
                onClick={() => setShowSuccess(true)}
                className="bg-[#008b8b] text-white px-6 py-2 rounded-full hover:opacity-90"
              >

                Continue

              </button>


            </div>


          </div>

        </label>



        {/* BLACK */}

        <label className="w-full border border-gray-300 rounded-xl p-6 flex flex-col gap-4 hover:border-[#008b8b] transition">


          <div className="flex justify-between">


            <div className="flex gap-4">

              <input
                type="radio"
                name="pledge"
                onChange={() => setSelected("black")}
              />


              <div>

                <h3 className="font-bold">
                  Black Edition Stand
                </h3>


                <p className="text-[#008b8b] text-sm">
                  Pledge $75 or more
                </p>

              </div>

            </div>



            <div className="flex gap-2">

              <h3 className="font-bold">
                64
              </h3>

              <p className="text-gray-500">
                left
              </p>

            </div>

          </div>



          <p className="text-gray-500 ml-8">

            You get a Black Special Edition stand.

          </p>



          <div className="border-t pt-4 flex justify-between ml-8">


            <p className="text-gray-500">

              Enter your pledge

            </p>



            <div className="flex gap-3">


              <input
                type="number"
                placeholder="$75"
                className="border rounded-full px-4 py-2 w-24"
              />


              <button
                onClick={() => setShowSuccess(true)}
                className="bg-[#008b8b] text-white px-6 py-2 rounded-full hover:opacity-90"
              >

                Continue

              </button>


            </div>


          </div>

        </label>



        {/* MAHOGANY */}

        <label className="w-full border border-gray-300 rounded-xl p-6 flex flex-col gap-4 opacity-70 pointer-events-none">


          <div className="flex justify-between">


            <div className="flex gap-4">

              <input disabled type="radio" />


              <div>

                <h3 className="font-bold">
                  Mahogany Special Edition
                </h3>


                <p className="text-[#008b8b] text-sm">
                  Pledge $200 or more
                </p>

              </div>

            </div>



            <div className="flex gap-2">

              <h3 className="font-bold">
                0
              </h3>

              <p className="text-gray-500">
                left
              </p>

            </div>

          </div>



          <p className="text-gray-500 ml-8">

            Out of stock

          </p>

        </label>


      </div>


    </section>

  );

};