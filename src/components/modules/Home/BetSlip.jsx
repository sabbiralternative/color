const BetSlip = ({ setShowBetSlip }) => {
  const closeBetSlip = () => {
    setShowBetSlip(false);
  };
  return (
    <div
      className="w-full max-w-[450px]  h-[100dvh] fixed  top-0   bg-gray-500/30 "
      style={{ zIndex: 100 }}
    >
      <div className="relative flex items-end justify-center w-full h-full slide-up">
        <div className="relative w-full overflow-hidden bg-white h-fit rounded-t-2xl">
          <div className="flex flex-col items-center justify-between w-full h-full">
            <div
              className="flex flex-col items-center w-full gap-2 py-6 "
              style={{ backgroundColor: "rgb(251, 91, 91)" }}
            >
              <div className="pt-2 text-lg font-bold text-center text-white">
                Win Go 30s
              </div>
              <div className="bg-white rounded-md w-[80%] py-1 text-black text-center font-semibold">
                0
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 p-4">
              <div className="flex items-center justify-between w-full font-semibold text-black">
                <span>Amount</span>
                <div className="grid grid-cols-4 gap-1 ">
                  <div
                    className=" rounded-md px-2 py-1 p-1  text-center
                bg-green-500 text-white
                "
                  >
                    1
                  </div>
                  <div
                    className=" rounded-md px-2 py-1 p-1  text-center
                text-gray-600 bg-[#F7F8FE] 
                "
                  >
                    10
                  </div>
                  <div
                    className=" rounded-md px-2 py-1 p-1  text-center
                text-gray-600 bg-[#F7F8FE] 
                "
                  >
                    100
                  </div>
                  <div
                    className=" rounded-md px-2 py-1 p-1  text-center
                text-gray-600 bg-[#F7F8FE] 
                "
                  >
                    1000
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full font-semibold text-black">
                <span>Quantity</span>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-green-500 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white "
                    >
                      <path d="M12 5l0 14" />
                      <path d="M5 12l14 0" />
                    </svg>
                  </div>
                  <input
                    className="bg-[#F7F8FE] px-2 py-1 rounded-md w-40 text-center"
                    type="text"
                    defaultValue={1}
                  />
                  <div className="px-2 py-1 bg-red-500 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white "
                    >
                      <path d="M5 12l14 0" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="grid w-full grid-cols-6 gap-1">
                <div
                  className="  py-1 rounded-md flex justify-center items-center font-semibold
            col-span-1 bg-green-500 text-white text-sm
          "
                >
                  X1
                </div>
                <div
                  className="  py-1 rounded-md flex justify-center items-center font-semibold
            col-span-1 bg-[#F7F8FE] text-gray-600 text-sm 
          "
                >
                  X5
                </div>
                <div
                  className="  py-1 rounded-md flex justify-center items-center font-semibold
            col-span-1 bg-[#F7F8FE] text-gray-600 text-sm 
          "
                >
                  X10
                </div>
                <div
                  className="  py-1 rounded-md flex justify-center items-center font-semibold
            col-span-1 bg-[#F7F8FE] text-gray-600 text-sm 
          "
                >
                  X20
                </div>
                <div
                  className="  py-1 rounded-md flex justify-center items-center font-semibold
            col-span-1 bg-[#F7F8FE] text-gray-600 text-sm 
          "
                >
                  X50
                </div>
                <div
                  className="  py-1 rounded-md flex justify-center items-center font-semibold
            col-span-1 bg-[#F7F8FE] text-gray-600 text-sm 
          "
                >
                  X100
                </div>
              </div>
              <div className="flex items-center justify-between w-full gap-4 font-semibold text-white">
                <div
                  onClick={closeBetSlip}
                  className="px-4 py-2 bg-red-500 rounded-md"
                >
                  Cancel
                </div>
                <div className="bg-green-500 px-4 py-2 w-min-[100px] w-full rounded-md h-full flex justify-center items-center">
                  <span className="flex items-center gap-2">
                    Place Bet <span>₹1.00</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
