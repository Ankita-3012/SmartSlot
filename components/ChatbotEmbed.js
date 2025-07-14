export default function ChatbotEmbed() {
  return (
    <div className="relative w-full max-w-xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 text-white">
        <h2 className="text-2xl font-bold tracking-wide">💬 SmartSlot AI Chatbot</h2>
        <p className="text-sm opacity-90">AI-powered assistant for smart warehouse management</p>
      </div>

      <div className="p-6 flex flex-col items-center justify-center text-center space-y-4">
        <p className="text-gray-700 text-base">
          Click below to launch the chatbot.
        </p>

        <a
          href="https://smartslot-35hidsve6poumoki4nmiwb.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300"
        >
          🚀 Open SmartSlot Chatbot
        </a>
      </div>
    </div>
  );
}
