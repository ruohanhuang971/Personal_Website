import { Carousel } from 'react-bootstrap';
import { FaHtml5 } from 'react-icons/fa';
import { SiCsswizardry } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoNodejs } from 'react-icons/io5';
import { SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { SiPostman } from 'react-icons/si';
import { RxFigmaLogo } from 'react-icons/rx';
import { SiAdobephotoshop } from 'react-icons/si';

const Skills = () => {
    return (
        <section id="skills" className="scroll-mt-20 my-20!">
            <h1 className="text-center text-2xl mt-20!">Skills</h1>
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Frontend</h3>
                        <p className="text-[#B8B8B8]">
                            Build responsive and interactive interfaces using
                            modern frontend technologies
                        </p>
                    </Carousel.Caption>
                    <div className="w-full h-[450px] text-center">
                        <div className="px-5 mt-5 flex flex-wrap justify-center">
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                HTML
                                <FaHtml5 className="mt-2 size-19 " />
                            </div>
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                CSS <SiCsswizardry className="mt-2 size-17" />
                            </div>
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                JS/TS
                                <IoLogoJavascript className="mt-2 size-20" />
                            </div>
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                React <FaReact className="mt-2 size-20" />
                            </div>
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                TailwindCSS
                                <RiTailwindCssFill className="mt-2 size-20" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Backend</h3>
                        <p className="text-[#B8B8B8]">
                            Design server-side solutions and APIs
                        </p>
                    </Carousel.Caption>
                    <div className="w-full h-[450px] text-center">
                        <div className="px-5 mt-5 flex flex-wrap justify-center">
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                Node.js
                                <IoLogoNodejs className="mt-2 size-19 " />
                            </div>
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                Express.js
                                <p className="mt-3 text-6xl font-bold">EX</p>
                            </div>
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                MongoDB
                                <SiMongodb className="mt-2 size-19 " />
                            </div>
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                MySQL
                                <GrMysql className="mt-2 size-19 " />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Tool</h3>
                        <p className="text-[#B8B8B8]">
                            use for development or to create visually appealing
                            and user-friendly interfaces
                        </p>
                    </Carousel.Caption>
                    <div className="w-full h-[450px] text-center">
                        <div className="px-5 mt-5 flex flex-wrap justify-center">
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                Git/Github
                                <FaGithub className="mt-2 size-19 " />
                            </div>
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                VSCode
                                <VscVscode className="mt-2 size-19 " />
                            </div>
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                Postman
                                <SiPostman className="mt-2 size-19 " />
                            </div>
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                Figma
                                <RxFigmaLogo className="mt-2 size-19 " />
                            </div>
                            <div className="w-1/3 flex flex-col items-center text-lg md:text-2xl mb-5">
                                Photoshop
                                <SiAdobephotoshop className="mt-2 size-19 " />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Skills;
