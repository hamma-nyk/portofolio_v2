import { Fragment } from "react";

const CodeTemplate = () => {
  return (
    <Fragment>
      <div className="flex px-10">
        <pre className="text-1xl pt-4 text-purple-400">{`while (`}</pre>
        <pre className="text-1xl pt-4 text-red-400">{`!`}</pre>
        <pre className="text-1xl pt-4 text-yellow-200">{`goalAchieved`}</pre>
        <pre className="text-1xl pt-4 text-blue-200">{`()`}</pre>
        <pre className="text-1xl pt-4 text-purple-400">{`)`}</pre>

        <pre className="hidden sm:block text-1xl pt-4 text-purple-400">{` {`}</pre>
        <pre className="hidden sm:block text-1xl pt-4 text-yellow-200">{` tryAgain`}</pre>
        <pre className="hidden sm:block text-1xl pt-4 text-blue-200">{`()`}</pre>
        <pre className="hidden sm:block text-1xl pt-4">{`;`}</pre>
        <pre className="hidden sm:block text-1xl pt-4 text-purple-400">{` }`}</pre>
      </div>
      <div className="sm:hidden flex -mt-2 px-10">
        <pre className="text-1xl pt-3 text-yellow-200">{`    tryAgain`}</pre>
        <pre className="text-1xl pt-3 text-blue-200">{`()`}</pre>
        <pre className="text-1xl pt-3">{`;`}</pre>
      </div>
      <div className="sm:hidden flex -mt-2 px-10">
        <pre className="text-1xl pt-3 text-purple-400">{`}`}</pre>
      </div>
    </Fragment>
  );
};
export default CodeTemplate;
