import HonorCard from "./WorksCard"

import hr from "../assets/curve-hr.svg"

export default function Works(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Experience</h1>
            <p className="font-light text-gray-400">Here are some of my work experience</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Practicum Assistant – Web Programming" issued="Faculty of Computer Science, University Brawijaya" desc="September 2024 - December 2024" />
                <HonorCard name="Practicum Assistant – Object Oriented Programming" issued="Faculty of Computer Science, University Brawijaya" desc="February 2024 - June 2024" />
                <HonorCard name="Staff – Division of IT Business Ideas Competition" issued="IT FEST FILKOM 2023, University Brawijaya" desc="June 2023 - July 2023" />
            </div>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Digital Marketing & Web Developer" issued="CV. Uno Media Indonesia" desc="January 2020 - May 2020" />
                <HonorCard name="Embedded System Programmer" issued="PT. Cipta Karya Inovasi Teknologi" desc="September 2021 - December 2021" />
                <HonorCard name="Research and Development (RnD)" issued="PT. Assist Software Indonesia Pratama" desc="January 2022 - May 2022" />
            </div>

            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
