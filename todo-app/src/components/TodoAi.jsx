import React from "react";
import { Sparkles, Send, Mic } from "lucide-react";

const TodoAi = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-zinc-900 via-gray-900 to-zinc-800 min-h-screen pt-20 sm:pt-16 text-white px-4 relative">
        <div className="max-w-5xl w-full mx-auto">
          <div className="mb-4 sm:mb-6 text-center flex-shrink-0 fixed left-0 right-0 top-17 z-40 bg-gradient-to-r from-zinc-900 via-gray-900 to-zinc-900">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2 ">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Todo AI
              </h1>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Your intelligent task assistant
            </p>
          </div>

          <div className="mb-4 sm:mb-6 mt-20 md:mt-28 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-4 sm:p-5 backdrop-blur-sm flex-shrink-0">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="bg-purple-500/20 p-2 sm:p-3 rounded-lg">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-lg font-semibold text-purple-300 mb-2">
                  AI-Powered Task Assistant
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">
                  Chat with your personal AI assistant to manage tasks
                  effortlessly. Ask questions, get help, and let AI handle your
                  todo management through natural conversation.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                    💬 Natural Chat
                  </span>
                  <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full">
                    🎤 Voice Support
                  </span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                    🤖 Smart AI
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Add more sections here */}
          <div className="w-full bg-gray-800/30 min-h-[450px] border border-gray-700 rounded-lg relative">
            <div className="fixed bottom-0 left-4 right-4 flex items-center justify-between gap-2 sm:gap-3 px-2 sm:px-5 py-4 sm:py-5 border border-gray-800 placeholder:text-gray-400 text-whitess">
              <input
                type="text"
                placeholder="Type Your Querry..."
                className="bg-gray-800/30 w-full p-4 sm:p-5 rounded-lg focus:outline-none border border-gray-800 placeholder:text-gray-400 text-white"
              />
              {/* <Mic /> */}
              <Send
                size={30}
                className="w-10 h-10 rounded-full bg-gray-800/20 border border-gray-600 px-2 py2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoAi;
