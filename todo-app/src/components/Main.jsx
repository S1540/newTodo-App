import React, { useEffect, useState } from "react";

const Main = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <section className="bg-gradient-to-r from-zinc-800 to-gray-900 min-h-screen pt-16 text-white">
        {/* <marquee className="bg-red-500 text-white py-0.5 text-xs">
          Set Your Daily Task Here 👇 | And Follow Your Rutine And Makr
          Decipline 👦 Your Life 🧬{" "}
        </marquee> */}
        {/* Task Section */}
        <div className="max-w-full w-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-between px-4 bg-white/10 backdrop-blur-sm py-1  shadow-xs shadow-white/30 text-gray-300 ">
            <div>
              <h2>Time : {time.toLocaleTimeString()}</h2>
            </div>
            <div>
              <h2>Date : {time.toLocaleDateString()}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
