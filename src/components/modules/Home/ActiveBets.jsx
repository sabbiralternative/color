const ActiveBets = () => {
  return (
    <div className="w-full flex flex-col gap-2 bg-white rounded-lg min-h-[200px]">
      <div className="flex justify-between px-4 text-sm items-center text-white font-semibold bg-[#F95859] rounded-t-lg py-2">
        <div className="p-1 whitespace-nowrap rounded-full h-10 aspect-square flex justify-center items-center font-semibold">
          Placed On
        </div>
        <div className="flex flex-col 1">Round Details</div>
        <div>Amount</div>
        <div className="font-bold">Status</div>
      </div>
      <div className="flex items-center justify-between p-2 font-semibold text-black">
        <div className="flex items-center gap-2">
          <div className="p-1 capitalize rounded-lg w-10 h-10 aspect-square text-white flex justify-center items-center text-sm font-semibold bg-[#FEAA57]">
            big
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-semibold">128435379</div>
            <div className="text-xs font-normal text-gray-600">
              67f3ce904ea602e4a052ff39
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-xs border-[0.5px] rounded px-1 text-yellow-500 border-yellow-500">
            Pending
          </div>
          <span className="text-sm font-semibold text-yellow-500">
            <span>₹1.00</span>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 font-semibold text-black">
        <div className="flex items-center gap-2">
          <div className="p-1 capitalize rounded-lg w-10 h-10 aspect-square text-white flex justify-center items-center text-sm font-semibold bg-[#19b560]">
            Green
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-semibold">128435379</div>
            <div className="text-xs font-normal text-gray-600">
              67f3ce904ea602e4a052ff39
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-xs border-[0.5px] rounded px-1 text-yellow-500 border-yellow-500">
            Pending
          </div>
          <span className="text-sm font-semibold text-yellow-500">
            <span>₹1.00</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActiveBets;
