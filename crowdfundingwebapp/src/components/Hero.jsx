import mastercraftlogo from "../assets/images/logo-mastercraft.svg";
import bookmarkimg from "../assets/images/icon-bookmark.svg";

export const Hero = () => {
  return (
    <>
      <section
        className="max-w-2xl mx-auto bg-white rounded-xl
        shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        relative -mt-24 z-10 pt-16 pb-8 px-8 text-center"
      >
        
        {/* Floating Logo */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <img src={mastercraftlogo} alt="Mastercraft Logo" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl text-black font-bold">
            Mastercraft Bamboo Monitor Riser
          </h1>

          <p className="text-gray-600">
            Sturdy and stylish bamboo monitor stand for your desk.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-8 mt-8">
          
          <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition duration-300">
            Back this project
          </button>

          <button className="flex items-center gap-3 bg-gray-100 px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">
            <img src={bookmarkimg} alt="Bookmark Icon" />
            Bookmark
          </button>

        </div>
      </section>
    </>
  );
};
