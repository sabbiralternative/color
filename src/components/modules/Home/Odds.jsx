const Odds = ({ setShowBetSlip }) => {
  const showBetSlip = () => {
    setShowBetSlip(true);
  };
  return (
    <>
      <div className="grid w-full grid-cols-3 gap-2">
        <div
          onClick={showBetSlip}
          className="bg-[#19B560] transition-all duration-300 w-full h-full py-2 px-4 text-white font-semibold text-center rounded-bl-lg rounded-tr-lg hover:scale-105"
        >
          Green
        </div>
        <div
          onClick={showBetSlip}
          className="bg-[#C86EFF] rounded-lg hover:scale-105 transition-all duration-300 w-full h-full py-2 px-4 text-white font-semibold text-center hover:scale-105"
        >
          Violet
        </div>
        <div
          onClick={showBetSlip}
          className="bg-[#FB5B5B] hover:scale-105 transition-all duration-300 w-full h-full rounded-tl-lg rounded-br-lg py-2 px-4 text-white font-semibold text-center hover:scale-105"
        >
          Red
        </div>
      </div>
      <div className="grid grid-cols-5 p-2 gap-2 w-full bg-[#F7F8FE] rounded-lg">
        <img
          onClick={showBetSlip}
          className="h-13 w-13 transition-all duration-300 hover:scale-105"
          src="/src/assets/img/n0.png"
          alt=""
        />
        <img
          onClick={showBetSlip}
          className="h-13 w-13 transition-all duration-300 hover:scale-105"
          src="/src/assets/img/n1.png"
          alt=""
        />
        <img
          onClick={showBetSlip}
          className="h-13 w-13 transition-all duration-300 hover:scale-105"
          src="/src/assets/img/n2.png"
          alt=""
        />
        <img
          onClick={showBetSlip}
          className="h-13 w-13 transition-all duration-300 hover:scale-105"
          src="/src/assets/img/n3.png"
          alt=""
        />
        <img
          onClick={showBetSlip}
          className="h-13 w-13 transition-all duration-300 hover:scale-105"
          src="/src/assets/img/n4.png"
          alt=""
        />
        <img
          onClick={showBetSlip}
          className="h-13 w-13 transition-all duration-300 hover:scale-105"
          src="/src/assets/img/n5.png"
          alt=""
        />
        <img
          onClick={showBetSlip}
          className="h-13 w-13 transition-all duration-300 hover:scale-105"
          src="/src/assets/img/n6.png"
          alt=""
        />
        <img
          onClick={showBetSlip}
          className="h-13 w-13 transition-all duration-300 hover:scale-105"
          src="/src/assets/img/n7.png"
          alt=""
        />
        <img
          onClick={showBetSlip}
          className="h-13 w-13 transition-all duration-300 hover:scale-105"
          src="/src/assets/img/n8.png"
          alt=""
        />
        <img
          onClick={showBetSlip}
          className="h-13 w-13 transition-all duration-300 hover:scale-105"
          src="/src/assets/img/n9.png"
          alt=""
        />
      </div>
      <div className="grid w-full grid-cols-8 gap-1 font-semibold">
        <div className="py-1 rounded-md flex justify-center items-center col-span-2 border border-red-500 text-red-500 px-2">
          Random
        </div>
        <div className="py-1 rounded-md flex justify-center items-center col-span-1 bg-green-500 text-white text-sm">
          X1
        </div>
        <div className="py-1 rounded-md flex justify-center items-center col-span-1 bg-[#F7F8FE] text-gray-600 text-sm">
          X5
        </div>
        <div className="py-1 rounded-md flex justify-center items-center col-span-1 bg-[#F7F8FE] text-gray-600 text-sm">
          X10
        </div>
        <div className="py-1 rounded-md flex justify-center items-center col-span-1 bg-[#F7F8FE] text-gray-600 text-sm">
          X20
        </div>
        <div className="py-1 rounded-md flex justify-center items-center col-span-1 bg-[#F7F8FE] text-gray-600 text-sm">
          X50
        </div>
        <div className="py-1 rounded-md flex justify-center items-center col-span-1 bg-[#F7F8FE] text-gray-600 text-sm">
          X100
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="grid grid-cols-2 w-[90%] mx-auto font-semibold">
          <div
            onClick={showBetSlip}
            className="bg-[#FEAA57] py-2 text-center rounded-l-full"
          >
            big
          </div>
          <div
            onClick={showBetSlip}
            className="bg-[#6EA7F4] py-2 text-center rounded-r-full"
          >
            small
          </div>
        </div>
      </div>
    </>
  );
};

export default Odds;
