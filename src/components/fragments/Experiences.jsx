import { Fragment } from "react";
import ButtonCard from "../elements/ButtonCard";
const Experiences = (props) => {
    const { goto } = props;
    return (
        <Fragment>
            <section
                id="experiences"
                ref={goto}
                className="flex flex-col mx-auto justify-center mb-18 lg:mb-0 xl:mb-0"
            >
                <div className="flex flex-col h-full px-2 md:px-10 w-full items-start justify-center mt-26">
                    <h1 className="text-4xl font-[700] mx-auto">EXPERIENCES</h1>

                    <div className="flex flex-wrap w-11/12 sm:w-full gap-4 mt-6 mx-auto justify-center">
                        <div class="max-w-md rounded overflow-hidden shadow-lg bg-neutral-700 shadow-md hover:-translate-y-[2px] duration-300 transition ease-in-out">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                    About Web Development
                                </div>
                                <p class="text-gray-200 text-base">
                                    I prefer working on the frontend, but that doesn't mean I
                                    can't handle the backend. Therefore, I practice building
                                    websites that involve databases. I have experience using
                                    several frameworks listed below.{" "}
                                </p>
                            </div>
                            
                        </div>
                        <div class="max-w-md rounded overflow-hidden shadow-lg bg-neutral-700 shadow-md hover:-translate-y-[2px] duration-300 transition ease-in-out">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                    About Web Development
                                </div>
                                <p class="text-gray-200 text-base">
                                    I prefer working on the frontend, but that doesn't mean I
                                    can't handle the backend. Therefore, I practice building
                                    websites that involve databases. I have experience using
                                    several frameworks listed below.{" "}
                                </p>
                            </div>
                            
                        </div>
                        <div class="max-w-md rounded overflow-hidden shadow-lg bg-neutral-700 shadow-md hover:-translate-y-[2px] duration-300 transition ease-in-out">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                    About Web Development
                                </div>
                                <p class="text-gray-200 text-base">
                                    I prefer working on the frontend, but that doesn't mean I
                                    can't handle the backend. Therefore, I practice building
                                    websites that involve databases. I have experience using
                                    several frameworks listed below.{" "}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Experiences