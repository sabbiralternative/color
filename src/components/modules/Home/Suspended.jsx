const Suspended = ({ timer }) => {
  return (
    <div className="flex absolute top-0 left-0 font-extrabold fade-in justify-center gap-6 text-[120px] text-[#F95C5C] items-center h-full w-full bg-black/50 rounded-lg __web-inspector-hide-shortcut__">
      {timer.toString().length > 1 ? (
        <div className="bg-white  px-6 rounded-lg w-[130px] text-center">
          {timer.toString().split("")[0]}
        </div>
      ) : (
        <div className="bg-white  px-6 rounded-lg w-[130px] text-center">0</div>
      )}

      {timer.toString().length > 1 ? (
        <div className="bg-white  px-6 rounded-lg w-[130px] text-center">
          {timer.toString().split("")[1]}
        </div>
      ) : (
        <div className="bg-white  px-6 rounded-lg w-[130px] text-center">
          {timer}
        </div>
      )}
    </div>
  );
};

export default Suspended;
