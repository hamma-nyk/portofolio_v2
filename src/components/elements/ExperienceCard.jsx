import { Fragment } from "react";
import ButtonCard from "./ButtonCard";

const ExperienceCard = ({title, img, position, date}) => {
    return (
        <Fragment>
            <div class="max-w-lg rounded overflow-hidden shadow-lg bg-neutral-700 shadow-md hover:-translate-y-[2px] duration-300 transition ease-in-out">
                <div class="flex flex-col sm:flex-row h-auto sm:h-full px-6 py-6 items-center">
                    <div className="w-full sm:w-1/2 mx-auto h-full rounded-md overflow-hidden">
                        <img className="w-full h-full object-cover" src={img} alt="" />
                    </div>
                    <div class="flex flex-col items-start w-full h-full font-bold text-xl mb-2 sm:w-1/2 mx-4 my-6 sm:my-0">
                        <p>{title}</p>
                        <p className="text-sm font-semibold text-neutral-400">{position}</p>
                        <p className="text-sm font-semibold text-neutral-400 mb-2">{date}</p>
                        <div className="mt-auto">

                        <a href="#" className="text-sm font-semibold text-neutral-400">Details...</a>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default ExperienceCard;