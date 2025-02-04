import { Fragment } from "react";
import ExperiencesCard from "../elements/ExperiencesCard";
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
                        <ExperiencesCard img="/assets/image/nbi.png" title={"PT Nusantara Building Industries"} />
                        <ExperiencesCard img="/assets/image/udinus.png" title={"Universitas Dian Nuswantoro"} />
                        <ExperiencesCard img="/assets/image/bangkit.png" title={"Bangkit Academy"} />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Experiences