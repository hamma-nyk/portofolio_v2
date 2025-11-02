import { Fragment, useState, useRef } from "react";
import { Mail, User, MessageSquare, Send, AtSign } from "lucide-react";
import emailjs from "emailjs-com";

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
        "mLA7c5q0L6d7eOUP_"
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
        }
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
    <Fragment>
      <section
        id="messages"
        ref={goto}
        className="flex flex-col w-full  justify-center my-16"
      >
        <h1 className="text-3xl sm:text-4xl font-[700] text-center text-white">
          CONTACT
        </h1>
        <p className="w-11/12 sm:w-2/3 sm:pr-0 pr-5 mx-auto mt-4 text-center leading-relaxed text-gray-200 mb-5">
          Let's connect! Feel free to reach out for{" "}
          <span className="text-blue-400 font-semibold">collaboration</span>,{" "}
          <span className="text-purple-400 font-semibold">feedback</span>, or
          just to say hi 👋
        </p>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8 relative">
          <div className="relative flex bg-neutral-800/70 rounded-full p-1 border border-neutral-700 overflow-hidden">
            {/* Sliding Background */}
            <div
              className={`absolute top-1 bottom-1 w-29 rounded-full transition-all duration-300 ease-in-out ${
                activeTab === "email"
                  ? "translate-x-0 bg-blue-500"
                  : "translate-x-full bg-purple-500"
              }`}
            ></div>

            {/* Email Button */}
            <button
              onClick={() => {
                setActiveTab("email");
                setSent(false);
              }}
              className={`relative z-10 w-29 text-center font-medium py-2 rounded-full transition-all duration-300 ${
                activeTab === "email"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              📧 Email
            </button>

            {/* Telegram Button */}
            <button
              onClick={() => {
                setActiveTab("telegram");
                setSent(false);
              }}
              className={`relative z-10 w-29 text-center font-medium py-2 rounded-full transition-all duration-300 ${
                activeTab === "telegram"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              💬 Telegram
            </button>
          </div>
        </div>
        {/* Form Container */}
        <div className="w-full flex justify-center relative">
          <div className="w-full sm:w-2/3 xl:w-1/3 transition-all duration-500 mx-5">
            {/* Email Form */}
            {activeTab === "email" && (
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4 mx-auto bg-neutral-700/60 backdrop-blur border border-neutral-700 rounded-2xl shadow-xl p-6 sm:p-8 hover:border-blue-400/20 transition-all duration-300 min-h-[400px]"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name / Instance"
                  required
                  className="placeholder:text-gray-400 text-sm bg-neutral-700 text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="placeholder:text-gray-400 text-sm bg-neutral-700 text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="6"
                  className="placeholder:text-gray-400 text-sm bg-neutral-700 text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                ></textarea>

                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />

                <div className="mt-auto">
                  <button
                    type="submit"
                    disabled={sending}
                    className={`text-sm w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-md transition-all duration-300 ${
                      sending
                        ? "bg-neutral-600 cursor-not-allowed text-gray-400"
                        : "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                    }`}
                  >
                    {sending ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : sent ? (
                      <span>✅ Sent!</span>
                    ) : (
                      <>
                        <Mail size={18} /> Send Email
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Telegram Form */}
            {activeTab === "telegram" && (
              <form
                onSubmit={sendMessage}
                className="flex flex-col justify-between mx-auto bg-neutral-700/60 backdrop-blur border border-neutral-700 rounded-2xl shadow-xl p-6 sm:p-8 hover:border-purple-400/20 transition-all duration-300 min-h-[400px]"
              >
                {/* Name + Username */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
                  <div className="flex items-center gap-3 flex-1 mb-4 sm:mb-0">
                    <User className="text-white" size={18} />
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Your name / instance..."
                      className="placeholder:text-gray-400 flex-1 bg-transparent border-b border-neutral-600 focus:border-purple-400 focus:outline-none text-white py-2 px-1 text-sm"
                    />
                  </div>

                  <div className="flex items-center gap-3 flex-1">
                    <AtSign className="text-white" size={18} />
                    <input
                      required
                      type="text"
                      name="euname"
                      placeholder="Your email / telegram username..."
                      className="placeholder:text-gray-400 flex-1 bg-transparent border-b border-neutral-600 focus:border-purple-400 focus:outline-none text-white py-2 px-1 text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="text-white" size={18} />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject..."
                    className="placeholder:text-gray-400 flex-1 bg-transparent border-b border-neutral-600 focus:border-purple-400 focus:outline-none text-white py-2 px-1 text-sm"
                  />
                </div>

                {/* Message */}
                <div className="flex items-start gap-3 mb-6">
                  <MessageSquare className="text-white mt-2" size={18} />
                  <textarea
                    required
                    name="message"
                    placeholder="Type your message..."
                    rows="6"
                    className="placeholder:text-gray-400 flex-1 bg-transparent border-b border-neutral-600 focus:border-purple-400 focus:outline-none text-white py-2 px-1 text-sm resize-none"
                  ></textarea>
                </div>

                <div className="mt-auto">
                  <button
                    type="submit"
                    disabled={sending}
                    className={`text-sm w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-md transition-all duration-300 ${
                      sending
                        ? "bg-neutral-600 cursor-not-allowed text-gray-400"
                        : "bg-purple-500 hover:bg-purple-600 text-white shadow-md"
                    }`}
                  >
                    {sending ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : sent ? (
                      <span>✅ Sent!</span>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Message;
