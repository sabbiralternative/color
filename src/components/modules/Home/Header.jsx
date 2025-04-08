const Header = ({ timer, transform }) => {
  return (
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
            <span className="h-6 text-lg font-bold text-rose-500">{timer}</span>
            <span className="text-[10px] text-rose-400">seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
