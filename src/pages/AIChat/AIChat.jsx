import { useEffect, useRef, useState } from "react";
import axios from "axios";

function AIChat() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);

  const bottomRef = useRef(null);
const token = localStorage.getItem("token");
  const loadChats = async () => {
    try {
      const res = await axios.get(
  "http://nexus-ai-backend-qde1.onrender.com/api/ai/history",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
      setChats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadChats();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chats]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const currentMessage = message;

    setChats((prev) => [
      ...prev,
      {
        _id: Date.now(),
        userMessage: currentMessage,
        aiReply: "Thinking...",
      },
    ]);

    setMessage("");

    try {
      setLoading(true);

      await axios.post(
  "http://nexus-ai-backend-qde1.onrender.com/api/ai/chat",
  {
    message: currentMessage,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      loadChats();
    } catch (error) {
      console.log(error);
      alert("AI Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">

      {/* Header */}

      <div className="bg-slate-900 p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-cyan-400">
          Nexus AI Chat
        </h1>
      </div>

      {/* Chat Area */}

      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {chats.map((chat) => (
          <div key={chat._id}>

            {/* User Message */}

            <div className="flex justify-end mb-4">
              <div className="bg-cyan-500 text-white p-4 rounded-2xl max-w-2xl whitespace-pre-wrap">
                {chat.userMessage}
              </div>
            </div>

            {/* AI Reply */}

            <div className="flex justify-start items-start gap-3">

              <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
                AI
              </div>

              <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl max-w-2xl whitespace-pre-wrap">
                {chat.aiReply === "Thinking..."
                  ? "🤖 Thinking..."
                  : chat.aiReply}
              </div>

            </div>

          </div>
        ))}

        <div ref={bottomRef}></div>

      </div>

      {/* Input */}

      <div className="border-t border-slate-800 p-6 flex gap-4">

        <textarea
          rows="2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything..."

          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}

          className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none resize-none"
        />

        <button
          disabled={loading}
          onClick={sendMessage}
          className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-500 px-8 rounded-xl font-bold"
        >
          {loading ? "Thinking..." : "Send"}
        </button>

      </div>

    </div>
  );
}

export default AIChat;