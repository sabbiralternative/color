const MyHistory = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center gap-2 bg-white rounded-lg min-h-[600px] p-2">
      <div className="flex flex-col items-center justify-start w-full h-full gap-2 font-semibold text-gray-600 ">
        <div className="flex items-center justify-between w-full text-black ">
          <div className="flex items-center gap-2">
            <div
              className=" p-1 capitalize  rounded-lg w-10 h-10 aspect-square flex text-white justify-center items-center text-xs font-semibold
  bg-[#19B560]
  
        "
            >
              green
            </div>
            <div className="flex flex-col ">
              <div className="text-sm font-semibold">128425392</div>
              <div className="text-xs font-normal text-gray-600">
                07/04/2025, 05:56 pm
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end ">
            <div className="text-xs  border-[0.5px] rounded px-1 text-red-500 border-red-500">
              Failed
            </div>
            <span className="text-sm font-semibold  text-red-500">
              <span>₹1.00</span>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full text-black ">
          <div className="flex items-center gap-2">
            <div
              className=" p-1 capitalize  rounded-lg w-10 h-10 aspect-square flex text-white justify-center items-center text-xs font-semibold
  bg-[#6EA7F4]
  
        "
            >
              small
            </div>
            <div className="flex flex-col ">
              <div className="text-sm font-semibold">127980220</div>
              <div className="text-xs font-normal text-gray-600">
                06/04/2025, 02:23 am
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end ">
            <div className="text-xs  border-[0.5px] rounded px-1  text-green-500 border-green-500">
              Successed
            </div>
            <span className="text-sm font-semibold text-green-500">
              <span>₹0.98</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 font-bold text-gray-600">
        <button
          disabled
          className="p-1 rounded  bg-gray-200 pointer-events-none"
        >
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
        <span className="px-3 py-1 mx-1">Page 1</span>
        <button
          disabled
          className="p-1 rounded  bg-gray-200 pointer-events-none"
        >
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
  );
};

export default MyHistory;
