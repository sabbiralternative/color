const Tabs = ({ setTab, tab }) => {
  return (
    <div className="grid w-full grid-cols-3 gap-2 text-sm font-semibold">
      <div
        onClick={() => setTab("game-history")}
        className={`flex w-full justify-center items-center py-2 rounded-md cursor-pointer   ${
          tab === "game-history"
            ? "bg-gradient-to-r from-[#F95C5C] to-[#FF998D] text-white"
            : "text-gray-600"
        }`}
      >
        Game History
      </div>
      <div
        onClick={() => setTab("active-bets")}
        className={`flex w-full justify-center items-center py-2 rounded-md  cursor-pointer  ${
          tab === "active-bets"
            ? "bg-gradient-to-r from-[#F95C5C] to-[#FF998D] text-white"
            : "text-gray-600"
        }`}
      >
        Active Bets
      </div>
      <div
        onClick={() => setTab("my-history")}
        className={`flex w-full justify-center items-center py-2 rounded-md cursor-pointer   ${
          tab === "my-history"
            ? "bg-gradient-to-r from-[#F95C5C] to-[#FF998D] text-white"
            : "text-gray-600"
        }`}
      >
        My History
      </div>
    </div>
  );
};

export default Tabs;
