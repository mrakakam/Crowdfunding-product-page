import checkimg from '../assets/images/icon-check.svg';

export const About = () => {
  return (
    <>
      <section className="max-w-2xl mx-4 md:mx-auto bg-white rounded-xl shadow-lg p-8 mt-8 space-y-8">

        {/* First Div */}
        <div className="text-left space-y-6">
          <h2 className="text-2xl font-bold text-black">
            About this project
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The Mastercraft Bamboo Monitor Riser is a sturdy platform that elevates
            your screen to a more comfortable viewing height.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Featuring artisan craftmanship, the simplicity of design creates extra desk space.
          </p>
        </div>

        {/* Second Div */}
        <div className="border border-gray-300  rounded-xl p-6 text-left space-y-4">
          
          {/* Title + Pledge */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <h2 className="font-bold text-lg">
              Bamboo Stand
            </h2>
            <p className="text-[#008b8b] font-medium">
              Pledge $25 or more
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            You get ergonomic stand made of natural bamboo.
          </p>

          {/* Number + Button */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-4">
            
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">101</h1>
              <p className="text-gray-500 text-sm">left</p>
            </div>

            <button className="bg-[#008b8b] text-white px-6 py-2 rounded-full w-full md:w-auto">
              Select Reward
            </button>

          </div>
        </div>

        {/* Third Div */}
        <div className="border border-gray-300  rounded-xl p-6 text-left space-y-4">
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <h2 className="font-bold text-lg">
              Black Edition Stand
            </h2>
            <p className="text-[#008b8b] font-medium">
              Pledge $75 or more
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            You get Black Special Edition computer stand and a personal thank you.
          </p>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-4">
            
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">64</h1>
              <p className="text-gray-500 text-sm">left</p>
            </div>

            <button className="bg-[#008b8b] text-white px-6 py-2 rounded-full w-full md:w-auto">
              Select Reward
            </button>

          </div>
        </div>

        {/* Fourth Div (Blurred) */}
        <div className="border border-gray-300 rounded-xl p-6 text-left space-y-4 opacity-50">
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <h2 className="font-bold text-lg">
              Mahogany Special Edition
            </h2>
            <p className="text-[#008b8b] font-medium">
              Pledge $200 or more
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            You get two Special Edition Mahogany stands.
          </p>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-4">
            
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">0</h1>
              <p className="text-gray-500 text-sm">left</p>
            </div>

            <button className="bg-gray-700 text-white px-6 py-2 rounded-full w-full md:w-auto">
              Out of stock
            </button>

          </div>
        </div>

      </section>
    </>
  );
};
