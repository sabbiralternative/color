const TimeRemainSection = ({ timer }) => {
  return (
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
              <span className="px-2 py-1 bg-white rounded-sm">{timer}</span>
            )}
          </div>
        </div>
        <div className="text-xs font-normal">Round ID : 128398830</div>
      </div>
    </div>
  );
};

export default TimeRemainSection;
