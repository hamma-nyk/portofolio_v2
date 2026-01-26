import { useState, useRef, useEffect } from "react";
import {
  Send,
  MessageCircle,
  X,
  Bot,
  User,
  Loader2,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "Halo! 👋 Saya Iko (versi virtual). Silakan tanya apa saja tentang pengalaman kerja, skill, atau proyek saya. Saya siap menjawab!",
    },
  ]);

  const scrollRef = useRef(null);

  // Auto-scroll ke pesan terbaru
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Fungsi Kirim Pesan ke API
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Tambahkan pesan user ke UI
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // 2. Panggil API Chatbot Anda (GANTI URL DI SINI)
      const response = await fetch("https://portofolio-ai.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": "Bearer TOKEN_JIKA_ADA"
        },
        body: JSON.stringify({ message: input }), // Sesuaikan body dengan API Anda
      });

      const data = await response.json();

      // 3. Tambahkan balasan bot ke UI
      // Sesuaikan `data.reply` dengan struktur response JSON API Anda
      const botMessage = {
        role: "system",
        content: data.response || "Maaf, saya sedang offline sebentar.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content: "Waduh, koneksi saya sedang gangguan. Coba lagi nanti ya!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end">
      {/* 🔹 Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                {/* Avatar Iko (Bisa ganti <img> foto asli Anda jika ada) */}
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center border border-white/20">
                  <User size={20} className="text-white" />
                  {/* Status Dot */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-neutral-900 rounded-full"></span>
                </div>

                <div>
                  <h3 className="text-white font-bold text-sm flex items-center gap-1">
                    Iko{" "}
                    <span className="px-1.5 py-0.5 rounded text-[8px] bg-blue-500/20 text-blue-300 font-medium border border-blue-500/30">
                      Virtual
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[8px] bg-neutral-500/20 text-neutral-300 font-medium border border-neutral-500/30">
                      Beta 1.0
                    </span>
                  </h3>
                  <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                    Online & Ready
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "user"
                        ? "bg-purple-500/20"
                        : "bg-blue-500/20"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User size={14} className="text-purple-400" />
                    ) : (
                      <Sparkles size={14} className="text-blue-400" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`p-3 rounded-2xl text-sm leading-relaxed max-w-[80%] ${
                      msg.role === "user"
                        ? "bg-purple-500/20 text-purple-100 rounded-tr-none border border-purple-500/20"
                        : "bg-blue-600/20 text-blue-50 rounded-tl-none border border-blue-500/20"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-blue-400" />
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-none bg-neutral-800 border border-neutral-700 flex items-center gap-2">
                    <Loader2 size={16} className="text-blue-400 animate-spin" />
                    <span className="text-xs text-gray-400">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSend}
              className="p-3 bg-neutral-900/50 border-t border-white/5"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about Iko..."
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-all"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔹 Toggle Button (FAB) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-purple-500/30 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}

        {/* Notification Dot (Opsional, kalau mau terlihat ada notif) */}
        {!isOpen && messages.length > 1 && (
          <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 border-2 border-neutral-900 rounded-full"></span>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
