import { Fragment } from "react";

const ExperiencesCard = ({title, img}) => {
    return (
        <Fragment>
            <div class="max-w-lg rounded overflow-hidden shadow-lg bg-neutral-700 shadow-md hover:-translate-y-[2px] duration-300 transition ease-in-out">
                <div class="flex flex-col sm:flex-row px-6 py-6">
                    <div className="sm:w-1/2 mx-auto rounded-md overflow-hidden">
                        <img className="w-full h-full object-cover" src={img} alt="" />
                    </div>
                    <div class="font-bold text-xl mb-2 sm:w-1/2 mx-4 my-6 sm:my-0">
                        {title}
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default ExperiencesCard;