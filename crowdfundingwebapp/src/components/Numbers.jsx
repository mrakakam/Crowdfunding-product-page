export const Numbers = () => {
  return (
    <>
      <section className="max-w-2xl mx-4 md:mx-auto bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-8 mt-8">

        {/* Stats */}
        <div className="flex flex-col md:flex-row text-center md:text-left">

          {/* First Stat */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              $89,914
            </h2>
            <p className="text-gray-500 mt-1">
              of $100,000 backed
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 mx-6"></div>

          {/* Second Stat */}
          <div className="flex-1 mt-6 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              5,007
            </h2>
            <p className="text-gray-500 mt-1">
              total backers
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 mx-6"></div>

          {/* Third Stat */}
          <div className="flex-1 mt-6 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              56
            </h2>
            <p className="text-gray-500 mt-1">
              days left
            </p>
          </div>

        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          {/* Background line */}
          <div className="w-full h-4 bg-gray-200 rounded-full">
            
            {/* Dark green progress (80%) */}
            <div className="h-4 bg-[#00cec8] rounded-full w-[80%]"></div>

          </div>
        </div>

      </section>
    </>
  );
};
