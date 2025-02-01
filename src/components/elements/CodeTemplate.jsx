import { Fragment } from "react";

const CodeTemplate = () => {
    return (
        <Fragment>
            <div className="flex">
                <pre className="text-1xl pt-4 text-purple-400">{`while (`}</pre>
                <pre className="text-1xl pt-4 text-red-400">{`!`}</pre>
                <pre className="text-1xl pt-4 text-yellow-200">{`goalAchieved`}</pre>
                <pre className="text-1xl pt-4 text-blue-200">{`()`}</pre>
                <pre className="text-1xl pt-4 text-purple-400">{`) {`}</pre>
                <pre className="text-1xl pt-4 text-yellow-200">{` tryAgain`}</pre>
                <pre className="text-1xl pt-4 text-blue-200">{`()`}</pre>
                <pre className="text-1xl pt-4">{`;`}</pre>
                <pre className="text-1xl pt-4 text-purple-400">{` }`}</pre>
            </div>
        </Fragment>
    )

}
export default CodeTemplate;