import React, { useEffect, useState } from "react";
import { Plus, Trash2, X } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import { MessageCircleX } from "lucide-react";

const Main = () => {
  const [time, setTime] = useState(new Date());
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  });

  const handleAddTask = () => {
    if (task && date) {
      setTasks([...tasks, { task, date }]);
      setTask("");
      setDate("");
    }
    console.log(tasks);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-zinc-900 via-gray-900 to-zinc-800 min-h-screen pt-8 sm:pt-16 text-white px-4">
        {/* Task Section */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 sm:mt-5">
          <div className="flex flex-col gap-4 bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 shadow-2xl">
            {/* Header with Time & Date */}
            <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-md border border-white/20 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h2 className="text-sm sm:text-base font-medium">
                  {time.toLocaleTimeString()}
                </h2>
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-medium text-gray-300">
                  {time.toLocaleDateString()}
                </h2>
              </div>
            </div>

            {/* Task Input Section */}
            <div className="flex flex-col gap-3">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="What do you want to accomplish?"
                className="border border-gray-600/50 rounded-md px-4 py-3 outline-none w-full bg-white/5 backdrop-blur-md shadow-lg text-gray-200 placeholder:text-gray-500 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all"
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border border-gray-600/50 rounded-md px-4 py-3 outline-none w-full bg-white/5 backdrop-blur-md shadow-lg text-gray-300 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all"
              />

              {/* Action Buttons */}
              <div className="flex gap-3 mt-2">
                <button
                  onClick={handleAddTask}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 backdrop-blur-md shadow-lg border border-blue-400/30 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 active:scale-95 font-medium"
                >
                  <Plus size={20} />
                  <span>Add Task</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-red-600/80 to-red-500/80 hover:from-red-500 hover:to-red-400 backdrop-blur-md shadow-lg border border-red-400/30 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 font-medium cursor-pointer">
                  <Trash2 size={20} />
                  <span>Clear All</span>
                </button>
              </div>
            </div>

            {/* Stats or Additional Info */}
            <div className="flex gap-3 mt-4">
              <div className="flex-1 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/20">
                <p className="text-xs text-gray-400 mb-1">Completed</p>
                <p className="text-2xl font-bold text-green-400">0</p>
              </div>
              <div className="flex-1 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-lg p-4 border border-orange-500/20">
                <p className="text-xs text-gray-400 mb-1">Pending</p>
                <p className="text-2xl font-bold text-orange-400">0</p>
              </div>
            </div>
          </div>

          {/* Second grid item - you can style this yourself */}
          <div className="flex flex-col gap-4 bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-300">Your Tasks</h3>
            {/* Task List */}
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <ul key={index} className="grid grid-cols-3 gap-2">
                  <li className="py-2">{task.task}</li>
                  <li className="py-2">{task.date}</li>
                  <div className="flex justify-between">
                    <button className="bg-red-500/60 backdrop-blur-md border border-red-400/30 text-white flex items-center justify-center rounded-full w-10 h-10 py-1 px-1.5">
                      <Trash2 size={30} />
                    </button>
                    <button
                      onClick={() =>
                        setIsDropdownOpen(
                          isDropdownOpen === index ? null : index
                        )
                      }
                      className="bg-gray-400/10 backdrop-blur-md border border-gray-400/30 text-white flex items-center justify-center rounded-full w-10 h-10 relative"
                    >
                      {isDropdownOpen === index ? (
                        <MessageCircleX size={30} />
                      ) : (
                        <EllipsisVertical size={30} />
                      )}
                      {isDropdownOpen === index && (
                        <div className="absolute top-12 -right-6 flex flex-col bg-gray-800/90 backdrop-blur-md border border-gray-600/50 rounded-md p-2 gap-1 z-50">
                          <a
                            href=""
                            className="hover:bg-gray-700/50 px-3 py-1 rounded"
                          >
                            Complete
                          </a>
                          <a
                            href=""
                            className="hover:bg-gray-700/50 px-3 py-1 rounded"
                          >
                            Edit Task
                          </a>
                        </div>
                      )}
                    </button>
                  </div>
                </ul>
              ))
            ) : (
              <p className="text-gray-500 text-sm">
                No tasks yet. Add your first task to get started!
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
