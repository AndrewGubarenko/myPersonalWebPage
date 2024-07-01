import { motion } from "framer-motion";
import React, { useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import ATCOTradeUnion from "../../statics/project_covers/Rectangle 25.svg";
import CodeLab from "../../statics/project_covers/Rectangle 26.svg";
import ITVDN from "../../statics/project_covers/Rectangle 27.svg";
import WithCareInHeart from "../../statics/project_covers/Rectangle 24.svg";
import Eye from "../../statics/icons/about/Group 43.svg";
import { ProjectContext } from "../../app_context/ProjectContext";

function MobileProjectsComponent() {
    const navigate = useNavigate();
    const { setProject } = useContext(ProjectContext);

    const handleImageClick = (project) => {
        setProject({
            title: project.title,
            description: project.description,
            image: project.image,
            ref: project.linkToProject
        });
        navigate(`/project/${project.id}`);
    };

    const projects = [
        {
            id: 'with-care-in-heart',
            title: 'With Care in Heart',
            description: 'Regional organization dedicated to empowering individuals to make a positive impact on healthcare in their community. Leveraging a diverse set of technologies, I seamlessly integrated HTML5, CSS3, JavaScript, AJAX, PHP, and MySQL databases.',
            image: WithCareInHeart,
            linkToProject: "https://github.com/AndrewGubarenko/WithCareInHeart"
        },
        {
            id: 'atco-trade-union',
            title: 'ATCO Trade Union',
            description: 'The primary objective was to offer accessible union announcements while providing exclusive access to essential documents. I seamlessly integrated Java, Spring, Spring MVC, Spring JPA/Hibernate, and Spring Security on the server side. On the user side, I employed ReactJS, Redux, JavaScript, HTML, and CSS to ensure an intuitive and engaging experience.',
            image: ATCOTradeUnion,
            linkToProject: "https://github.com/AndrewGubarenko/AirNavHub"
        },
        {
            id: 'itvdn',
            title: 'ITVDN',
            description: 'I managed end-to-end video production, from planning and shooting to editing and post-production. Collaborating with subject matter experts, I translated complex topics into compelling and accessible course material. Utilizing multimedia tools and staying current on industry trends, I consistently delivered high-quality courses that enhanced the learning experience for diverse audiences.',
            image: ITVDN,
            linkToProject: "https://itvdn.com/ua/search?query=%D0%90%D0%BD%D0%B4%D1%80%D1%96%D0%B9%20%D0%93%D1%83%D0%B1%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE"
        },
        {
            id: 'code-lab',
            title: 'Code Lab',
            description: 'This is your go-to console for testing and experimenting with your code. Explore new ideas, debug your scripts, and improve your skills in a user-friendly environment. Klick on a eye icon to test yourself right now!',
            image: CodeLab,
            linkToProject: ""
        }
    ];

    const animations = [
        { initial: { opacity: 0, x: -100 }, animate: { x: 0, opacity: 1 }, exit: { opacity: 0, x: -100 }, transition: { duration: 0.5 } },
        { initial: { opacity: 0, x: 150 }, animate: { x: 0, opacity: 1 }, exit: { opacity: 0, x: 150 }, transition: { duration: 0.5 } },
        { initial: { opacity: 0, x: -200 }, animate: { x: 0, opacity: 1 }, exit: { opacity: 0, x: -200 }, transition: { duration: 0.5 } },
        { initial: { opacity: 0, x: 250 }, animate: { x: 0, opacity: 1 }, exit: { opacity: 0, x: 250 }, transition: { duration: 0.5 } }
    ];

    return (
        <div className="mobile_main_container mobile_main_container_bg mobile_main_container_reduce_padding_top">
            <motion.div className="mobile_info_container"
                        initial={{opacity: 0, y: -200}}
                        animate={{y: 0, opacity: 1}}
                        exit={{opacity: 0, y: -200}}
                        transition={{duration: 0.3}}>
                <p className="mobile_main_header">Projects</p>
                <p className="text">Here you will find a selection of the work I've done as a Java developer, showcasing
                    my skills and experience in building robust, scalable, and efficient applications. My projects
                    reflect my dedication to quality code and innovative solutions.</p>
            </motion.div>

            <div className="mobile_empty_info_grid_container">
                {projects.map((project, index) => (
                    <motion.div key={project.id} className="mobile_quoter_container"
                                initial={animations[index].initial}
                                animate={animations[index].animate}
                                exit={animations[index].exit}
                                transition={animations[index].transition}>
                        <img className="mobile_cover_image" src={project.image} alt={project.title} onClick={() => handleImageClick(project)} />
                        <div className="mobile_icon_frame icon_overlays">
                            {project.linkToProject ? (
                                <a href={project.linkToProject} target="_blank" rel="noreferrer">
                                    <img src={Eye} alt="BackEnd" className="mobile_block_icon"/>
                                </a>
                            ) : (
                                <Link to={`/codelab`}>
                                    <img src={Eye} alt="BackEnd" className="mobile_block_icon"/>
                                </Link>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <a href="/contacts" id="contact_me_link">
                <motion.div id="mobile_contact_me_button"
                            initial={{opacity: 0, y: 200}}
                            animate={{y: 0, opacity: 1}}
                            exit={{opacity: 0, y: 200}}
                            transition={{duration: 0.3}}>
                    CONTACT ME
                </motion.div>
            </a>
        </div>
    );
}

export default MobileProjectsComponent;
