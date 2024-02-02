import React from "react";
import { FaDownload } from "react-icons/fa";
import html2pdf from "html2pdf.js";
import {
    educationDetails,
    experienceDetails,
    interests,
    projectDetails,
    resumeSkills,
    socialConnections,
} from "../../Data/AllData";

import { ReactComponent as WorkExp } from "./../../assets/SVG/workExp.svg";
import { ReactComponent as Skills } from "./../../assets/SVG/skills.svg";
import { ReactComponent as Project } from "./../../assets/SVG/project.svg";
import { ReactComponent as Education } from "./../../assets/SVG/education.svg";
import { ReactComponent as Achievement } from "./../../assets/SVG/achievement.svg";
// import { ReactComponent as Interest } from "./../../assets/SVG/interest.svg";

export default function ResumePage() {
    const downloadResume = () => {
        const resume = document.getElementById("resume");
        html2pdf(resume, {
            filename: "Abhishek-Kumar-Resume.pdf",
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        });
    };

    return (
        <>
            <div className="py-8 px-4 flex justify-center items-center flex-col">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex mb-4"
                    onClick={downloadResume}
                >
                    <FaDownload className="mr-2" />
                    Download
                </button>

                <div
                    id="resume"
                    className="rounded-2xl inputColor max-w-[1100px]"
                >
                    <div className="px-4 md:px-14 pt-6 lg:pt-14 space-y-2 transition-none">
                        <h2 className="text-4xl font-semibold transition-none">
                            Abhishek Kumar
                        </h2>
                        <p className="transition-none">
                            To work with an organization that provides a
                            motivating work environment, where I can utilize my
                            software, analytical and problem solving skills for
                            successful career, which will ultimately benefit the
                            organization and society.
                        </p>
                    </div>

                    <div className="flex min-h-8 my-2 px-2 bg-slate-400 justify-start md:justify-center gap-x-6 transition-none flex-wrap overflow-hidden">
                        {socialConnections.map((socialConnection) => (
                            <a
                                key={socialConnection.href}
                                href={socialConnection.href}
                                className="flex justify-center text-black items-center gap-2 transition-none text-xs"
                            >
                                <span className="text-2xl transition-none size-6 ">
                                    {socialConnection.icon}
                                </span>
                                <span className="whitespace-normal transition-none whitespace-wrap w-full ">
                                    {socialConnection.value}
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="ml-6 mr-8 my-6 transition-none">
                        {resumeSectionComponentsShorthand.map(
                            (resumeSectionComponents) => (
                                <div className="flex gap-4 mt-6 transition-none flex-col md:flex-row">
                                    {resumeSectionComponents?.values?.map(
                                        (values) => (
                                            <div className="w-full md:w-1/2 flex flex-wrap justify-center items-start transition-none">
                                                <div className="space-y-2 w-full transition-none flex flex-col gap-2">
                                                    <div className="w-full flex space-x-3 transition-none">
                                                        <span className="">
                                                            {values.svg}
                                                        </span>

                                                        <span className="text-xl font-semibold transition-none">
                                                            {values.section}
                                                        </span>
                                                    </div>
                                                    <div className="w-full  ml-3 flex flex-wrap transition-none gap-4">
                                                        {values.component}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

const resumeSectionComponentsShorthand = [
    {
        values: [
            {
                svg: <WorkExp />,
                section: "Work Experience",
                component: (
                    <>
                        {experienceDetails.map((experienceDetail) => (
                            <div className="w-full rounded-lg p-3 flex justify-between resumeSmallContainer transition-none">
                                <div className="transition-none">
                                    <p className="text-lg flex justify-between font-bold transition-none">
                                        <span className="transition-none">
                                            {experienceDetail.designation}
                                        </span>
                                        <span className="text-gray-400 text-sm transition-none text-nowrap">
                                            {experienceDetail.session}
                                        </span>
                                    </p>
                                    <p className="text-gray-400 transition-none">
                                        {experienceDetail.organization}
                                    </p>
                                    <p className="text-sm font-normal transition-none">
                                        Roles:
                                    </p>
                                    <ul className="transition-none ml-10 list-disc">
                                        {experienceDetail?.roles?.map(
                                            (role) => (
                                                <li
                                                    className="text-gray-400 transition-none"
                                                    key={role}
                                                >
                                                    {role}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </>
                ),
            },

            {
                svg: <Skills />,
                section: "Skills",
                component: (
                    <>
                        {resumeSkills.map((resumeSkill) => (
                            <div
                                key={resumeSkill.section}
                                className="w-full rounded-lg p-3 space-y-1 resumeSmallContainer transition-none"
                            >
                                <p className="w-full text-lg font-semibold mb-2 transition-none">
                                    {resumeSkill.section}
                                </p>
                                <div className="w-full flex ml-3 flex-wrap gap-2 transition-none">
                                    {resumeSkill?.skills?.map((skill) => (
                                        <span
                                            key={skill}
                                            className="skillBgColor p-2 rounded-md text-sm font-semibold transition-none"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </>
                ),
            },
        ],
    },
    {
        values: [
            {
                svg: <Project />,
                section: "Projects",
                component: (
                    <>
                        {projectDetails.map((projectDetail) => (
                            <div className="w-full rounded-lg p-3 flex justify-between resumeSmallContainer transition-none">
                                <div className="transition-none">
                                    <p className="text-lg flex justify-between font-bold transition-none">
                                        <span className="transition-none">
                                            {projectDetail.name}
                                        </span>
                                        <span className="text-gray-400 text-sm transition-none text-nowrap">
                                            {projectDetail.session}
                                        </span>
                                    </p>

                                    <p className="text-sm font-normal transition-none">
                                        Achievements:
                                    </p>
                                    <ul className="transition-none ml-10 list-disc">
                                        {projectDetail?.achievements?.map(
                                            (achievement) => (
                                                <li
                                                    className="text-gray-400 transition-none"
                                                    key={achievement}
                                                >
                                                    {achievement}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </>
                ),
            },

            {
                svg: <Education />,
                section: "Education",
                component: (
                    <>
                        {educationDetails.map((educationDetail) => (
                            <div className="w-full rounded-lg p-3 flex justify-between resumeSmallContainer transition-none">
                                <div>
                                    <p className="text-lg font-normal transition-none">
                                        {educationDetail.degree}
                                    </p>
                                    <p className="text-gray-400 transition-none">
                                        {educationDetail.university}
                                    </p>
                                </div>
                                <div>
                                    <p className=" transition-none">
                                        {educationDetail.percentage}
                                    </p>
                                    <p className="text-gray-400 transition-none">
                                        {educationDetail.session}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </>
                ),
            },
        ],
    },
    {
        values: [
            {
                svg: <Achievement />,
                section: "Achievements",
                component: (
                    <>
                        {experienceDetails.map((experienceDetail) => (
                            <div className="w-full rounded-lg p-3 flex justify-between resumeSmallContainer transition-none">
                                <div className="transition-none">
                                    <p className="text-sm flex justify-between font-bold transition-none">
                                        {experienceDetail.designation}
                                    </p>
                                    <p className="text-gray-400 transition-none">
                                        {experienceDetail.organization}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </>
                ),
            },

            {
                svg: <Education />,
                section: "Interests",
                component: (
                    <div className="w-full rounded-lg p-3 space-y-1 resumeSmallContainer transition-none">
                        <div className="w-full flex ml-3 flex-wrap gap-2 transition-none">
                            {interests.map((interest) => (
                                <span
                                    key={interest}
                                    className="skillBgColor p-2 rounded-md text-sm font-semibold transition-none"
                                >
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                ),
            },
        ],
    },
];
