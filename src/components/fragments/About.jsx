import { Fragment } from "react";
import ButtonCard from "../elements/ButtonCard";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

const About = (props) => {
    const { goto } = props;
    const Frameworks = ["ReactJS", "Laravel", "CodeIgniter", "Flask"]

    return (
        <Fragment>
            <section
                id="about"
                ref={goto}
                className="flex flex-col mx-auto justify-center lg:mb-0 xl:mb-0 pt-26"
            >
                <div className="flex flex-col h-full px-2 md:px-10 w-full items-start justify-center">
                    <h1 className="text-4xl font-[700] mx-auto">ABOUT</h1>
                    <p className="w-11/12 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-auto mt-4 text-justify indent-6">
                        I am a skilled Frontend Web Developer with a strong passion for
                        creating user-friendly and visually appealing websites. I have
                        hands-on experience with technologies such as HTML, CSS,
                        JavaScript, and modern frameworks like React. In addition to my
                        development expertise, I also have substantial experience in IT
                        support. I have managed and maintained various IT infrastructure,
                        including hardware, software, networks, and databases. This
                        includes troubleshooting network issues, configuring hardware,
                        ensuring smooth database operations, and providing technical
                        support to end-users. Here is my knowledge
                    </p>
                    {/* <p className="w-2/3 mx-auto mt-2 text-justify indent-6">
              My ability to bridge the gap between web development and IT
              support allows me to offer comprehensive solutions and ensure that
              both frontend applications and underlying systems function
              seamlessly.
            </p> */}
                    <div className="flex flex-wrap w-11/12 gap-4 mt-6 mx-auto justify-center">
                        <div class="max-w-md rounded overflow-hidden shadow-lg bg-neutral-700 shadow-md hover:-translate-y-[2px] duration-300 transition ease-in-out">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                    About Network Infrastructure
                                </div>
                                <p class="text-gray-200 text-base">
                                    I can configure and use internet networking devices such as
                                    access points, switches, and others. Additionally, I am
                                    capable of connecting fiber optic cables with a splicer and
                                    have experience with various brands such as Ubiquiti,
                                    MikroTik, and Ruijie Reyee.
                                </p>
                            </div>
                            <div class="px-6 pt-2 pb-4">
                                <ButtonCard link="https://www.ui.com/introduction" icon={faCircleQuestion} text="Ubiquiti" />
                                <ButtonCard link="https://www.mikrotik.com" icon={faCircleQuestion} text="MikroTik" />
                                <ButtonCard link="https://reyee.ruijie.com" icon={faCircleQuestion} text="Ruijie Reyee" />
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
                            <div class="px-6 pt-2 pb-2 w-full">
                                {
                                    Frameworks.map((framework) => {
                                        return <span class="inline-block bg-neutral-800 rounded-sm p-2 text-sm font-semibold text-white mr-2 mb-2">
                                            {framework}
                                        </span>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default About;