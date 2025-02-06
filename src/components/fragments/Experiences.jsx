import { Fragment } from "react";
import ExperienceCard from "../elements/ExperienceCard";
const Experiences = (props) => {
    const { goto } = props;
    return (
        <Fragment>
            <section
                id="experiences"
                ref={goto}
                className="flex flex-col mx-auto justify-center lg:mb-0 xl:mb-0"
            >
                <div className="flex flex-col h-full px-2 md:px-10 w-full items-start justify-center mt-26">
                    <h1 className="text-4xl font-[700] mx-auto">EXPERIENCES</h1>
                    <div className="flex flex-wrap w-11/12 sm:w-full gap-4 mt-6 mx-auto justify-center">
                        <ExperienceCard img="/assets/image/nbi.png" title={"PT Nusantara Building Industries"} position={'IT Support Staff'} date={'2024 - Present'}/>
                        <ExperienceCard img="/assets/image/udinus.png" title={"Universitas Dian Nuswantoro"} position={'IT Lab Assistant'} date={'2022 - 2024'}/>
                        <ExperienceCard img="/assets/image/bangkit.png" title={"Bangkit Academy"} position={'Machine Learning Student'} date={'2023 (6 Months)'}/>
                        <ExperienceCard img="/assets/image/fga.png" title={"Digital Talent Scholarship"} position={'ORACLE - Database Design and Programming with SQL'} date={'2022 (2 Months)'}/>
                        <ExperienceCard img="/assets/image/sadasa.png" title={"Sadasa Academy"} position={'KMMI - Student of Social Network in R'} date={'2021 (3 Months)'}/>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Experiences