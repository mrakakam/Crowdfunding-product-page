import mastercraftlogo from "../assets/images/logo-mastercraft.svg";
import bookmarkimg from "../assets/images/icon-bookmark.svg";

export const Hero = () => {
  return (
    <>
      <section
        className="
        max-w-2xl mx-4 md:mx-auto
        bg-white rounded-xl
        shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        relative -mt-20 md:-mt-28
        pt-14 md:pt-16
        pb-8 px-6 md:px-8
        text-center
        z-10
        "
      >
        {/* Floating Logo */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <img src={mastercraftlogo} alt="Mastercraft Logo" />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-xl md:text-3xl font-bold text-black">
            Mastercraft Bamboo Monitor Riser
          </h1>

          <p className="text-gray-500 text-sm md:text-base">
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row justify-between items-center gap-4 mt-8">
          
          {/* Back Project Button */}
          <button className=" bg-[#008b8b] text-white py-3 px-7 rounded-full hover:bg-[#008b8b] cursor-pointer transition duration-300">
            Back this project
          </button>
          {/* Bookmark Button */}
          <button className="flex items-center justify-center px-7 bg-gray-100 p-3 rounded-full hover:bg-gray-200  cursor-pointer transition duration-300">
            <img src={bookmarkimg} alt="Bookmark Icon" className="h-7" />
            
            {/* Hidden on mobile, visible on desktop */}
            <span className="hidden md:inline ml-3 font-medium">
              Bookmark
            </span>
          </button>

        </div>
      </section>
    </>
  );
};
