import { Fragment, useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Mail, Send, User, MessageSquare, AtSign, Hash } from "lucide-react"; // Pastikan import icon ini

const Message = ({ goto }) => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useRef();
  const [activeTab, setActiveTab] = useState("email"); // "email" | "telegram"

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    const currentTime = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_8t8tz35",
        "template_t4grhe3",
        e.target,
        "mLA7c5q0L6d7eOUP_",
      )
      .then(
        () => {
          setSent(true);
          setSending(false);
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
          setSending(false);
        },
      );
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setSending(true);

    const name = e.target.name.value;
    const euname = e.target.euname.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const text =
      `💌  Hello Dev! there's a new message! %0A%0A` +
      `🙋‍♂️  Name: ${name}%0A` +
      `📥  E/TG: ${euname}%0A` +
      `📄  Subject: ${subject}%0A%0A` +
      `🗒  Messages: ${message}%0A`;

    const url = `https://api.telegram.org/bot6601751803:AAGABxX-ZcTvwHw3_hVV8kt-ZQx6iJzSYGc/sendMessage?chat_id=782491852&text=${text}`;

    try {
      await fetch(url);
      setSent(true);
      e.target.reset();
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      alert("Failed to send message. Please try again!");
    } finally {
      setSending(false);
    }
  };
  return (
    // ... (kode import lainnya)

    <Fragment>
      <section
        id="messages"
        ref={goto}
        className="flex flex-col w-full justify-center py-24 min-h-screen relative overflow-hidden"
      >
        {/* Background Glow Effect (Opsional, untuk estetika) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-6 tracking-tight">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Touch
            </span>
          </h1>

          <p className="w-11/12 sm:w-1/2 mx-auto text-center text-gray-400 mb-12 leading-relaxed text-sm sm:text-base">
            Have a project in mind or just want to chat? Choose your preferred
            platform below.
          </p>

          {/* --- Tab Switcher Modern --- */}
          <div className="flex justify-center mb-10">
            <div className="relative flex bg-neutral-800/80 p-1.5 rounded-full border border-neutral-700 shadow-lg w-72">
              {/* Sliding Background */}
              <div
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) shadow-md ${
                  activeTab === "email"
                    ? "translate-x-0 bg-gradient-to-r from-blue-600 to-blue-500"
                    : "translate-x-full left-1.5 bg-gradient-to-r from-purple-600 to-purple-500"
                }`}
              ></div>

              {/* Email Button */}
              <button
                onClick={() => {
                  setActiveTab("email");
                  setSent(false);
                }}
                className={`relative z-10 w-1/2 text-center font-medium py-2.5 rounded-full transition-colors duration-300 text-sm flex items-center justify-center gap-2 ${
                  activeTab === "email"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Mail size={16} /> Email
              </button>

              {/* Telegram Button */}
              <button
                onClick={() => {
                  setActiveTab("telegram");
                  setSent(false);
                }}
                className={`relative z-10 w-1/2 text-center font-medium py-2.5 rounded-full transition-colors duration-300 text-sm flex items-center justify-center gap-2 ${
                  activeTab === "telegram"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Send size={16} /> Telegram
              </button>
            </div>
          </div>

          {/* --- Unified Form Container --- */}
          <div className="w-full flex justify-center px-4">
            <div className="w-full max-w-lg transition-all duration-500">
              <div
                // className={`relative bg-neutral-800/50 backdrop-blur-md border rounded-3xl p-8 shadow-lg transition-all duration-500 ${
                className={`relative bg-neutral-800/50 border rounded-3xl p-8 shadow-lg transition-all duration-500 ${
                  activeTab === "email"
                    ? // ? "border-blue-500/20 shadow-blue-500/5"
                      // : "border-purple-500/20 shadow-purple-500/5"
                      "border-neutral-700 shadow-blue-500/5"
                    : "border-neutral-700 shadow-purple-500/5"
                }`}
              >
                {/* EMAIL FORM */}
                {activeTab === "email" && (
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-5"
                  >
                    <div className="relative group">
                      <User
                        className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-blue-400 transition-colors"
                        size={20}
                      />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>

                    <div className="relative group">
                      <Mail
                        className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-blue-400 transition-colors"
                        size={20}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        required
                        className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>

                    <div className="relative group">
                      <MessageSquare
                        className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-blue-400 transition-colors"
                        size={20}
                      />
                      <textarea
                        name="message"
                        placeholder="What's on your mind?"
                        required
                        rows="5"
                        className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    <input
                      type="hidden"
                      name="time"
                      value={new Date().toLocaleString()}
                    />

                    <button
                      type="submit"
                      disabled={sending}
                      className="mt-2 w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {sending ? (
                        <span className="animate-pulse">Sending...</span>
                      ) : sent ? (
                        "Message Sent!"
                      ) : (
                        <>
                          <Send size={18} /> Send via Email
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* TELEGRAM FORM */}
                {activeTab === "telegram" && (
                  <form onSubmit={sendMessage} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="relative group">
                        <User
                          className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-purple-400 transition-colors"
                          size={20}
                        />
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                          className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition-all"
                        />
                      </div>
                      <div className="relative group">
                        <AtSign
                          className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-purple-400 transition-colors"
                          size={20}
                        />
                        <input
                          type="text"
                          name="euname"
                          placeholder="Username / Email"
                          required
                          className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <Hash
                        className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-purple-400 transition-colors"
                        size={20}
                      />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject (Optional)"
                        className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition-all"
                      />
                    </div>

                    <div className="relative group">
                      <MessageSquare
                        className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-purple-400 transition-colors"
                        size={20}
                      />
                      <textarea
                        name="message"
                        placeholder="Write your telegram message..."
                        required
                        rows="5"
                        className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="mt-2 w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-purple-500/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {sending ? (
                        <span className="animate-pulse">Sending...</span>
                      ) : sent ? (
                        "Message Sent!"
                      ) : (
                        <>
                          <Send size={18} /> Send via Telegram
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Message;
