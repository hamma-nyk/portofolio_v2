import { Fragment } from "react";

const ProjectCard = ({title, img, link}) => {
    return (
        <Fragment>
            <div class="max-w-lg rounded overflow-hidden shadow-lg bg-neutral-700 shadow-md hover:-translate-y-[2px] duration-300 transition ease-in-out">
                <div class="flex flex-col sm:flex-row px-6 py-6">
                    <div className="sm:w-1/2 mx-auto rounded-md overflow-hidden">
                        <img className={`w-full h-full object-cover bg-white`} src={img ? img : `./assets/image/img_not_found.png`} alt="" />
                    </div>
                    <div class="font-bold text-xl mb-2 sm:w-1/2 mx-4 my-6 sm:my-0">
                        <a href={link} target="_blank">{title}</a>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default ProjectCard;