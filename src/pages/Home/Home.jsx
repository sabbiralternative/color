import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [timer, setTimer] = useState(30);
  const [transform, setTransform] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          setTransform(12);
          return 30;
        }
        return prev - 1;
      });

      setTransform((prev) => prev + 12);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ backgroundColor: "#0a0928" }}
      className="theme-pluto flex flex-col w-full h-full"
    >
      <div className="relative flex flex-col h-[100dvh] items-center gap-3 overflow-y-auto overflow-x-hidden text-gray-100 select-none scrollbar-none">
        <div className="max-w-[450px] w-full bg-[#F7F8FE] h-auto flex flex-col gap-2 items-center">
          <div className="w-full relative h-fit py-2 px-4 rounded-b-[60px] flex flex-col items-center justify-start bg-gradient-to-r pb-[70px] from-[#F95C5C] to-[#FF998D]">
            <div className="flex items-center justify-between w-full gap-2 py-2 h-fit">
              <div className="p-2 border rounded-full cursor-pointer bg-white/40 border-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-chevron-left"
                >
                  <path d="M15 6l-6 6l6 6" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-white">Color Game</div>
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center justify-center gap-2 py-2 pl-3 pr-4 font-semibold border rounded-full border-white/20 bg-gradient-to-r from-white/20 to-gray-300/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                  </svg>
                  <span>₹574.00</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 p-2 translate-y-1/2 left-1/2 -translate-x-1/2 border-2 border-white flex justify-center items-center flex-col bg-[#ff7070] w-[90%] px-6 rounded-3xl">
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto rounded-full shadow-lg animate-scaleIn bg-gradient-to-br from-rose-400 to-rose-500">
                <div className="absolute rounded-full inset-1 bg-white/90 backdrop-blur-sm" />
                <div className="absolute border-2 rounded-full inset-2 border-rose-200">
                  <div
                    className="absolute h-full w-full autoAnimate"
                    style={{ transform: `rotate(${transform}deg)` }}
                  >
                    <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-[60%] rounded-full bg-rose-500" />
                  </div>
                </div>
                <div className="relative flex flex-col items-center justify-center">
                  <span className="h-6 text-lg font-bold text-rose-500">
                    {timer}
                  </span>
                  <span className="text-[10px] text-rose-400">seconds</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[54px] relative w-full bg-cover bg-center lg:py-2 py-1 px-4 flex justify-between items-center h-[120px]">
            <img
              src="/src/assets/img/board.png"
              alt=""
              className="absolute top-0 left-0 px-4 h-[120px] object-fit"
            />
            <div className="w-[50%] z-50 flex flex-col justify-evenly items-center h-full px-4">
              <div className="flex items-center justify-center w-full gap-2 px-2 py-1 border rounded-full border-white/50">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.835 1.5H6.165C3.33 1.5 2.625 2.2575 2.625 5.28V13.725C2.625 15.72 3.72 16.1925 5.0475 14.7675L5.055 14.76C5.67 14.1075 6.6075 14.16 7.14 14.8725L7.8975 15.885C8.505 16.6875 9.4875 16.6875 10.095 15.885L10.8525 14.8725C11.3925 14.1525 12.33 14.1 12.945 14.76C14.28 16.185 15.3675 15.7125 15.3675 13.7175V5.28C15.375 2.2575 14.67 1.5 11.835 1.5ZM5.835 9C5.4225 9 5.085 8.6625 5.085 8.25C5.085 7.8375 5.4225 7.5 5.835 7.5C6.2475 7.5 6.585 7.8375 6.585 8.25C6.585 8.6625 6.2475 9 5.835 9ZM5.835 6C5.4225 6 5.085 5.6625 5.085 5.25C5.085 4.8375 5.4225 4.5 5.835 4.5C6.2475 4.5 6.585 4.8375 6.585 5.25C6.585 5.6625 6.2475 6 5.835 6ZM12.1725 8.8125H8.0475C7.74 8.8125 7.485 8.5575 7.485 8.25C7.485 7.9425 7.74 7.6875 8.0475 7.6875H12.1725C12.48 7.6875 12.735 7.9425 12.735 8.25C12.735 8.5575 12.48 8.8125 12.1725 8.8125ZM12.1725 5.8125H8.0475C7.74 5.8125 7.485 5.5575 7.485 5.25C7.485 4.9425 7.74 4.6875 8.0475 4.6875H12.1725C12.48 4.6875 12.735 4.9425 12.735 5.25C12.735 5.5575 12.48 5.8125 12.1725 5.8125Z"
                    fill="white"
                  />
                </svg>
                <span className="text-xs font-semibold whitespace-nowrap">
                  How to play
                </span>
              </div>
              <div className="text-sm text-white">Win Go 30s</div>
              <div className="flex flex-row-reverse items-center justify-between w-full gap-2 overflow-x-auto scrollbar-none">
                <img
                  className="h-6 w-6 undefined"
                  src="/src/assets/img/n8.png"
                  alt=""
                />
                <img
                  className="h-6 w-6 undefined"
                  src="/src/assets/img/n0.png"
                  alt=""
                />
                <img
                  className="h-6 w-6 undefined"
                  src="/src/assets/img/n9.png"
                  alt=""
                />
                <img
                  className="h-6 w-6 undefined"
                  src="/src/assets/img/n5.png"
                  alt=""
                />
                <img
                  className="h-6 w-6 undefined"
                  src="/src/assets/img/n9.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[50%] z-50 flex flex-col justify-between font-semibold gap-2 h-full py-2 pr-4 items-end py-2">
              <div className="flex flex-col items-end gap-1">
                <div>Time remaning</div>
                <div className="flex items-center gap-1 font-mono font-bold text-slate-900">
                  <span className="px-2 py-1 bg-white rounded-sm">0</span>
                  <span className="px-2 py-1 bg-white rounded-sm">0</span>
                  <span className="p-1 bg-white rounded-sm">:</span>
                  {timer.toString().length > 1 ? (
                    <span className="px-2 py-1 bg-white rounded-sm">
                      {timer.toString().split("")[0]}
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-white rounded-sm">0</span>
                  )}
                  {timer.toString().length > 1 ? (
                    <span className="px-2 py-1 bg-white rounded-sm">
                      {timer.toString().split("")[1]}
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-white rounded-sm">
                      {timer}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-xs font-normal">Round ID : 128398830</div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full px-4">
            <div className="relative flex flex-col w-full gap-3 p-2 bg-white rounded-lg">
              <div className="grid w-full grid-cols-3 gap-2">
                <div className="bg-[#19B560] transition-all duration-300 w-full h-full py-2 px-4 text-white font-semibold text-center rounded-bl-lg rounded-tr-lg hover:scale-105">
                  Green
                </div>
                <div className="bg-[#C86EFF] rounded-lg hover:scale-105 transition-all duration-300 w-full h-full py-2 px-4 text-white font-semibold text-center hover:scale-105">
                  Violet
                </div>
                <div className="bg-[#FB5B5B] hover:scale-105 transition-all duration-300 w-full h-full rounded-tl-lg rounded-br-lg py-2 px-4 text-white font-semibold text-center hover:scale-105">
                  Red
                </div>
              </div>
              <div className="grid grid-cols-5 p-2 gap-2 w-full bg-[#F7F8FE] rounded-lg">
                <img
                  className="h-13 w-13 transition-all duration-300 hover:scale-105"
                  src="/src/assets/img/n0.png"
                  alt=""
                />
                <img
                  className="h-13 w-13 transition-all duration-300 hover:scale-105"
                  src="/src/assets/img/n1.png"
                  alt=""
                />
                <img
                  className="h-13 w-13 transition-all duration-300 hover:scale-105"
                  src="/src/assets/img/n2.png"
                  alt=""
                />
                <img
                  className="h-13 w-13 transition-all duration-300 hover:scale-105"
                  src="/src/assets/img/n3.png"
                  alt=""
                />
                <img
                  className="h-13 w-13 transition-all duration-300 hover:scale-105"
                  src="/src/assets/img/n4.png"
                  alt=""
                />
                <img
                  className="h-13 w-13 transition-all duration-300 hover:scale-105"
                  src="/src/assets/img/n5.png"
                  alt=""
                />
                <img
                  className="h-13 w-13 transition-all duration-300 hover:scale-105"
                  src="/src/assets/img/n6.png"
                  alt=""
                />
                <img
                  className="h-13 w-13 transition-all duration-300 hover:scale-105"
                  src="/src/assets/img/n7.png"
                  alt=""
                />
                <img
                  className="h-13 w-13 transition-all duration-300 hover:scale-105"
                  src="/src/assets/img/n8.png"
                  alt=""
                />
                <img
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
                  <div className="bg-[#FEAA57] py-2 text-center rounded-l-full">
                    big
                  </div>
                  <div className="bg-[#6EA7F4] py-2 text-center rounded-r-full">
                    small
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-2 px-4 pb-10">
            <div className="grid w-full grid-cols-3 gap-2 text-sm font-semibold">
              <div className="flex w-full justify-center items-center py-2 rounded-md text-gray-600 bg-gradient-to-r from-[#F95C5C] to-[#FF998D] text-white">
                Game History
              </div>
              <div className="flex w-full justify-center items-center py-2 rounded-md text-gray-600 bg-white">
                Active Bets
              </div>
              <div className="flex w-full justify-center items-center py-2 rounded-md text-gray-600 bg-white">
                My History
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center w-full bg-[#F95859] rounded-t-lg py-4 text-sm font-bold whitespace-nowrap">
                <span className="w-[30%] text-center">Period</span>
                <span className="w-[20%] text-center">Number</span>
                <span className="w-[20%] text-center">Big/Small</span>
                <span className="w-[30%] text-center">Color</span>
              </div>
              <div className="flex items-center w-full bg-white">
                <span className="w-[30%] py-2 px-2 text-black text-center">
                  128398712
                </span>
                <span
                  className="w-[20%] text-2xl py-2 px-2 font-bold text-center"
                  style={{ color: "rgb(249, 88, 89)" }}
                >
                  8
                </span>
                <div className="w-[20%] py-2 px-2 text-center font-semibold text-[#FEAA57]">
                  big
                </div>
                <div className="w-[30%] flex gap-1 py-2 px-2 justify-center items-center">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "rgb(249, 88, 89)" }}
                  />
                </div>
              </div>
              <div className="flex items-center w-full bg-white">
                <span className="w-[30%] py-2 px-2 text-black text-center">
                  128398614
                </span>
                <span
                  className="w-[20%] text-2xl py-2 px-2 font-bold text-center half-colored-red"
                  style={{ color: "rgb(249, 88, 89)" }}
                >
                  0
                </span>
                <div className="w-[20%] py-2 px-2 text-center font-semibold text-[#6EA7F4]">
                  small
                </div>
                <div className="w-[30%] flex gap-1 py-2 px-2 justify-center items-center">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "rgb(249, 88, 89)" }}
                  />
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "rgb(200, 110, 255)" }}
                  />
                </div>
              </div>
              <div className="flex items-center w-full bg-white">
                <span className="w-[30%] py-2 px-2 text-black text-center">
                  128398517
                </span>
                <span
                  className="w-[20%] text-2xl py-2 px-2 font-bold text-center"
                  style={{ color: "rgb(25, 181, 96)" }}
                >
                  9
                </span>
                <div className="w-[20%] py-2 px-2 text-center font-semibold text-[#FEAA57]">
                  big
                </div>
                <div className="w-[30%] flex gap-1 py-2 px-2 justify-center items-center">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "rgb(25, 181, 96)" }}
                  />
                </div>
              </div>
              <div className="flex items-center w-full bg-white">
                <span className="w-[30%] py-2 px-2 text-black text-center">
                  128398426
                </span>
                <span
                  className="w-[20%] text-2xl py-2 px-2 font-bold text-center half-colored-green"
                  style={{ color: "rgb(25, 181, 96)" }}
                >
                  5
                </span>
                <div className="w-[20%] py-2 px-2 text-center font-semibold text-[#FEAA57]">
                  big
                </div>
                <div className="w-[30%] flex gap-1 py-2 px-2 justify-center items-center">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "rgb(25, 181, 96)" }}
                  />
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "rgb(200, 110, 255)" }}
                  />
                </div>
              </div>
              <div className="flex items-center w-full bg-white">
                <span className="w-[30%] py-2 px-2 text-black text-center">
                  128398338
                </span>
                <span
                  className="w-[20%] text-2xl py-2 px-2 font-bold text-center"
                  style={{ color: "rgb(25, 181, 96)" }}
                >
                  9
                </span>
                <div className="w-[20%] py-2 px-2 text-center font-semibold text-[#FEAA57]">
                  big
                </div>
                <div className="w-[30%] flex gap-1 py-2 px-2 justify-center items-center">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "rgb(25, 181, 96)" }}
                  />
                </div>
              </div>
              <div className="flex items-center w-full bg-white">
                <span className="w-[30%] py-2 px-2 text-black text-center">
                  128398246
                </span>
                <span
                  className="w-[20%] text-2xl py-2 px-2 font-bold text-center half-colored-green"
                  style={{ color: "rgb(25, 181, 96)" }}
                >
                  5
                </span>
                <div className="w-[20%] py-2 px-2 text-center font-semibold text-[#FEAA57]">
                  big
                </div>
                <div className="w-[30%] flex gap-1 py-2 px-2 justify-center items-center">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "rgb(25, 181, 96)" }}
                  />
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "rgb(200, 110, 255)" }}
                  />
                </div>
              </div>
              <div className="flex items-center w-full bg-white">
                <span className="w-[30%] py-2 px-2 text-black text-center">
                  128398116
                </span>
                <span
                  className="w-[20%] text-2xl py-2 px-2 font-bold text-center"
                  style={{ color: "rgb(25, 181, 96)" }}
                >
                  3
                </span>
                <div className="w-[20%] py-2 px-2 text-center font-semibold text-[#6EA7F4]">
                  small
                </div>
                <div className="w-[30%] flex gap-1 py-2 px-2 justify-center items-center">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "rgb(25, 181, 96)" }}
                  />
                </div>
              </div>
              <div className="flex items-center w-full bg-white">
                <span className="w-[30%] py-2 px-2 text-black text-center">
                  128398008
                </span>
                <span
                  className="w-[20%] text-2xl py-2 px-2 font-bold text-center"
                  style={{ color: "rgb(25, 181, 96)" }}
                >
                  1
                </span>
                <div className="w-[20%] py-2 px-2 text-center font-semibold text-[#6EA7F4]">
                  small
                </div>
                <div className="w-[30%] flex gap-1 py-2 px-2 justify-center items-center">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "rgb(25, 181, 96)" }}
                  />
                </div>
              </div>
              <div className="flex items-center w-full bg-white">
                <span className="w-[30%] py-2 px-2 text-black text-center">
                  128397891
                </span>
                <span
                  className="w-[20%] text-2xl py-2 px-2 font-bold text-center"
                  style={{ color: "rgb(249, 88, 89)" }}
                >
                  8
                </span>
                <div className="w-[20%] py-2 px-2 text-center font-semibold text-[#FEAA57]">
                  big
                </div>
                <div className="w-[30%] flex gap-1 py-2 px-2 justify-center items-center">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "rgb(249, 88, 89)" }}
                  />
                </div>
              </div>
              <div className="flex items-center w-full bg-white">
                <span className="w-[30%] py-2 px-2 text-black text-center">
                  128397774
                </span>
                <span
                  className="w-[20%] text-2xl py-2 px-2 font-bold text-center"
                  style={{ color: "rgb(25, 181, 96)" }}
                >
                  7
                </span>
                <div className="w-[20%] py-2 px-2 text-center font-semibold text-[#FEAA57]">
                  big
                </div>
                <div className="w-[30%] flex gap-1 py-2 px-2 justify-center items-center">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "rgb(25, 181, 96)" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 font-bold text-gray-600">
              <button disabled className="p-1 rounded bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M15 6l-6 6l6 6" />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <div>1</div>
                <div>/</div>
                <div className="text-gray-400">10</div>
              </div>
              <button className="p-1 rounded bg-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <audio src="https://cdn.mac1j.com/fawk/Music/BlastOff.mp3" loop />
      <audio src="https://cdn.mac1j.com/fawk/Music/cashout.mp3" />
      <canvas
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: "0px",
          left: "0px",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default Home;
