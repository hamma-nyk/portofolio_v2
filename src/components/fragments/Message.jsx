import { Fragment } from "react";
const Message = (props) => {
  const { goto } = props;
  const sendMessage = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const euname = e.target.euname.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const text =
      "💌  Hello Dev! there's a new message! %0A%0A🙋‍♂️  Name: " +
      name +
      "%0A" +
      "📥  E/TG: " +
      euname +
      "%0A" +
      "📄  Subject: " +
      subject +
      "%0A%0AMessages: " +
      message +
      "%0A";
    const url =
      "https://api.telegram.org/bot6601751803:AAGABxX-ZcTvwHw3_hVV8kt-ZQx6iJzSYGc/sendMessage?chat_id=782491852&text=" +
      text;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    alert("Your message has been sent!");
    e.target.reset();
  };
  return (
    <Fragment>
      <section
        id="messages"
        ref={goto}
        className="flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto justify-center mb-18 lg:mb-0 xl:mb-0"
      >
        <div className="flex flex-col w-full h-full px-2 md:px-10 items-start justify-center mt-26">
          <h1 className="text-3xl sm:text-4xl font-[700] mx-auto">CONTACT</h1>
          <div className="flex flex-wrap w-11/12 sm:w-full gap-4 mt-6 mx-auto justify-center">
            <form
              className="transition-colors duration-300 px-4 pt-2 w-full"
              onSubmit={sendMessage}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label
                    className="transition-colors duration-300 text-accent_red-500 block text-sm font-bold mb-2 dark:text-white"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    required
                    className="transition-colors duration-300 py-2 px-4 text-sm border border border-transparent text-white focus:ring-accent_red-500 focus:border-purple-400 focus:outline-none rounded-lg placeholder-dark-100 bg-neutral-700 w-full"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div className="w-full">
                  <label
                    className="transition-colors duration-300 text-accent_red-500 block text-sm font-bold mb-2 dark:text-white"
                    htmlFor="name"
                  >
                    Email or telegram username
                  </label>
                  <input
                    required
                    className="transition-colors duration-300 py-2 px-4 text-sm border border border-transparent text-white focus:ring-accent_red-500 focus:border-blue-400 focus:outline-none rounded-lg placeholder-dark-100 bg-neutral-700 w-full"
                    id="euname"
                    name="euname"
                    type="text"
                    placeholder="Don't forget to input '@'"
                  />
                </div>
              </div>
              <div>
                <label
                  className="mt-4 transition-colors duration-300 text-accent_red-500 block text-sm font-bold mb-2 dark:text-white"
                  htmlFor="name"
                >
                  Subject
                </label>
                <input
                  className="transition-colors duration-300 py-2 px-4 text-sm border border border-transparent text-white focus:ring-accent_red-500 focus:border-pink-400 focus:outline-none rounded-lg placeholder-dark-100 bg-neutral-700 w-full"
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  className="transition-colors duration-300 text-accent_red-500 pt-4 block text-sm font-bold mb-2 dark:text-white"
                  htmlFor="name"
                >
                  Message
                </label>
                <textarea
                  className="transition-colors duration-300 py-2 px-4 text-sm border border border-transparent text-white focus:ring-accent_red-500 focus:border-cyan-400 focus:outline-none rounded-lg placeholder-dark-100 bg-neutral-700 w-full h-[163px]"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="For further discussion about feedback, skills or projects, send a message from here or via the contact listed."
                ></textarea>
              </div>
              <button
                type="submit"
                className="transition-colors duration-300 mt-2 flex px-4 text-sm font-bold text-accent_red-500 dark:text-white items-center h-10 bg-accent_red-200 dark:bg-dark_grey-200 rounded-lg"
              >
                <p className="pl-2">Send</p>
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <div
        id="message"
        ref={goto}
        className="animate-fadein transition-colors duration-300 mt-4 bg-white shadow-sm dark:bg-dark_grey-300 rounded-xl col-span-6 md:col-span-4"
      >
        <div className="grid grid-cols-1 pb-4">
          <p className="transition-colors duration-300 pt-4 pb-2 pl-4 text-2xl font-bold dark:text-white text-accent_red-500">
            Send a message
          </p>
          <form
            className="transition-colors duration-300 px-4 pt-2 w-full"
            onSubmit={sendMessage}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label
                  className="transition-colors duration-300 text-accent_red-500 block text-sm font-bold mb-2 dark:text-white"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  required
                  className="transition-colors duration-300 text-sm border dark:border border-transparent dark:border-transparent bg-accent_red-100 dark:bg-dark_grey-200 text-accent_red-500 dark:text-white focus:ring-accent_red-500 dark:focus:ring-blue-500 focus:border-accent_red-500 dark:focus:border-red-400 focus:outline-none rounded-lg py-2 px-4 placeholder-accent_red-300 dark:placeholder-dark-100 w-full"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  className="transition-colors duration-300 text-accent_red-500 block text-sm font-bold mb-2 dark:text-white"
                  htmlFor="name"
                >
                  Email or telegram username
                </label>
                <input
                  required
                  className="transition-colors duration-300 text-sm border dark:border border-transparent dark:border-transparent bg-accent_red-100 dark:bg-dark_grey-200 text-accent_red-500 dark:text-white focus:ring-accent_red-500 dark:focus:ring-red-500 focus:border-accent_red-500 dark:focus:border-red-400 focus:outline-none rounded-lg py-2 px-4 placeholder-accent_red-300 dark:placeholder-dark-100 w-full"
                  id="euname"
                  name="euname"
                  type="text"
                  placeholder="Don't forget to input '@'"
                />
              </div>
              <div>
                <label
                  className="transition-colors duration-300 text-accent_red-500 block text-sm font-bold mb-2 dark:text-white"
                  htmlFor="name"
                >
                  Subject
                </label>
                <input
                  className="transition-colors duration-300 text-sm  border dark:border border-transparent dark:border-transparent bg-accent_red-100 dark:bg-dark_grey-200 text-accent_red-500 dark:text-white focus:ring-accent_red-500 dark:focus:ring-blue-500 focus:border-accent_red-500 dark:focus:border-red-400 focus:outline-none rounded-lg py-2 px-4 placeholder-accent_red-300 dark:placeholder-dark-100 w-full"
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div>
              <label
                className="transition-colors duration-300 text-accent_red-500 pt-4 block text-sm font-bold mb-2 dark:text-white"
                htmlFor="name"
              >
                Message
              </label>
              <textarea
                className="transition-colors duration-300 text-sm border dark:border border-transparent dark:border-transparent bg-accent_red-100 dark:bg-dark_grey-200 text-accent_red-500 dark:text-white focus:ring-accent_red-500 dark:focus:ring-blue-500 focus:border-accent_red-500 dark:focus:border-red-400 focus:outline-none rounded-lg w-full h-[163px] py-2 p-4 placeholder-accent_red-300 dark:placeholder-dark-100 "
                id="message"
                name="message"
                rows="4"
                placeholder="For further discussion about feedback, skills or projects, send a message from here or via the contact listed."
              ></textarea>
            </div>
            <button
              type="submit"
              className="transition-colors duration-300 mt-2 flex px-4 text-sm font-bold text-accent_red-500 dark:text-white items-center h-10 bg-accent_red-200 dark:bg-dark_grey-200 rounded-lg"
            >
              <p className="pl-2">Send</p>
            </button>
          </form>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Message;
