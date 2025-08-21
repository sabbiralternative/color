import { useEffect } from "react";
import { useState } from "react";
import GameHistory from "../../components/modules/Home/GameHistory";
import ActiveBets from "../../components/modules/Home/ActiveBets";
import MyHistory from "../../components/modules/Home/MyHistory";
import Tabs from "../../components/modules/Home/Tabs";
import NextRound from "../../components/modules/Home/NextRound";
import Suspended from "../../components/modules/Home/Suspended";
import BetSlip from "../../components/modules/Home/BetSlip";
import Odds from "../../components/modules/Home/Odds";
import TimeRemainSection from "../../components/modules/Home/TimeRemainSection";
import Header from "../../components/modules/Home/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const { token } = useSelector((state) => state.auth);
  const errorMessage = sessionStorage.getItem("errorMessage");
  const [showBetSlip, setShowBetSlip] = useState(false);
  const [tab, setTab] = useState("game-history");
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

  return token ? (
    <div
      style={{ backgroundColor: "#0a0928" }}
      className="theme-pluto flex flex-col w-full h-full"
    >
      <div className="relative flex flex-col h-[100dvh] items-center gap-3 overflow-y-auto overflow-x-hidden text-gray-100 select-none scrollbar-none">
        <div className="max-w-[450px] w-full bg-[#F7F8FE] h-auto flex flex-col gap-2 items-center relative">
          <Header timer={timer} transform={transform} />
          <TimeRemainSection timer={timer} />
          <div className="flex items-center justify-between w-full px-4">
            <div className="relative flex flex-col w-full gap-3 p-2 bg-white rounded-lg">
              {timer < 5 && <NextRound />}
              {timer < 5 && <Suspended timer={timer} />}

              <Odds setShowBetSlip={setShowBetSlip} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-2 px-4 pb-10">
            <Tabs setTab={setTab} tab={tab} />
            {tab === "game-history" && <GameHistory />}
            {tab === "active-bets" && <ActiveBets />}
            {tab === "my-history" && <MyHistory />}
          </div>
        </div>
        {showBetSlip && <BetSlip setShowBetSlip={setShowBetSlip} />}
      </div>
      {/* <audio src="https://cdn.mac1j.com/fawk/Music/BlastOff.mp3" loop />
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
      /> */}
    </div>
  ) : (
    <div className="error-container">
      <div className="alert alert-danger text-center m-0 " role="alert">
        {errorMessage ||
          "URL parameters are missing or invalid. Key: token | Value"}
      </div>
    </div>
  );
};

export default Home;
