import {Link} from "react-router-dom";
import React from "react";
import Eye from "../statics/icons/about/Group 43.svg";
import WithCareInHeart from "../statics/project_covers/Rectangle 24.svg";
import CodeLab from "../statics/project_covers/Rectangle 26.svg";
import ATCOTradeUnion from "../statics/project_covers/Rectangle 25.svg";
import ITVDN from "../statics/project_covers/Rectangle 27.svg";
import { motion, MotionConfig  } from "framer-motion";

function ProjectsComponent() {
    return (
        <MotionConfig transition={{ duration: 0.5 }}>
            <div className="background_block">
                <div className="block_container last_block_container">
                    <div className="two_thirds_row_container">
                        <div className="block_container margin_column_right">

                            <div className="narrow_column">
                                <motion.div className="narrow_block"
                                            initial={{
                                                opacity: 0,
                                                x: -200,
                                                y: 200,}}
                                            animate={{
                                                x: 0,
                                                y: 0,
                                                opacity: 1
                                            }}>
                                    <div className="cover_image_container">
                                        <img className="cover_image" src={WithCareInHeart} alt="With Care in Heart"/>
                                    </div>
                                    <div className="icon_frame icon_overlays">
                                        <img src={Eye} alt="BackEnd" className="block_icon"/>
                                    </div>
                                    <div className="text_container">
                                        <p className="sub_header">With Care in Heart</p>
                                        <p className="text">Regional organization dedicated to empowering individuals to
                                            make a
                                            positive impact on healthcare in their community. Leveraging a diverse set of
                                            technologies, I seamlessly integrated HTML5, CSS3, JavaScript, AJAX, PHP, and
                                            MySQL
                                            databases.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="wide_column">
                                <div className="wide_block expand_block_to_bottom">
                                    <div className="cover_image_container">
                                        <img className="cover_image" src={ATCOTradeUnion} alt="With Care in Heart"/>
                                    </div>
                                    <div className="icon_frame icon_overlays">
                                        <img src={Eye} alt="BackEnd" className="block_icon"/>
                                    </div>
                                    <div className="text_container">
                                        <p className="sub_header">ATCO Trade Union</p>
                                        <p className="text">
                                            The primary objective was to offer accessible union announcements while providing exclusive access to essential documents. I seamlessly integrated Java, Spring, Spring MVC, Spring JPA/Hibernate, and Spring Security on the server side. On the user side, I employed ReactJS, Redux, JavaScript, HTML, and CSS to ensure an intuitive and engaging experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block_container">

                            <div className="wide_column margin_column_right">
                                <motion.div className="wide_block expand_block_to_bottom"
                                            initial={{
                                                opacity: 0,
                                                x: 200,
                                                y: 200,}}
                                            animate={{
                                                x: 0,
                                                y: 0,
                                                opacity: 1
                                            }}>
                                    <div className="cover_image_container">
                                        <img className="cover_image" src={ITVDN} alt="With Care in Heart"/>
                                    </div>
                                    <div className="icon_frame icon_overlays">
                                        <img src={Eye} alt="BackEnd" className="block_icon"/>
                                    </div>
                                    <div className="text_container">
                                        <p className="sub_header">ITVDN</p>
                                        <p className="text">
                                            I managed end-to-end video production, from planning and shooting to editing and post-production. Collaborating with subject matter experts, I translated complex topics into compelling and accessible course material. Utilizing multimedia tools and staying current on industry trends, I consistently delivered high-quality courses that enhanced the learning experience for diverse audiences.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="narrow_column">
                                <motion.div className="narrow_block"
                                            initial={{
                                                opacity: 0,
                                                x: -200,
                                                y: 200,}}
                                            animate={{
                                                x: 0,
                                                y: 0,
                                                opacity: 1
                                            }}>
                                    <div className="cover_image_container">
                                        <img className="cover_image" src={CodeLab} alt="With Care in Heart"/>
                                    </div>
                                    <div className="icon_frame icon_overlays">
                                        <img src={Eye} alt="BackEnd" className="block_icon"/>
                                    </div>
                                    <div className="text_container">
                                        <p className="sub_header">Code Lab</p>
                                        <p className="text">This is your go-to console for testing and experimenting with
                                            your code. Explore new ideas, debug your scripts, and improve your skills in a
                                            user-friendly environment. Click on a eye icon to test yourself right now!
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>


                    <div className="narrow_column">
                        <motion.div className="narrow_block expand_block_to_bottom"
                                    initial={{
                                        opacity: 0,
                                        x: 200}}
                                    animate={{
                                        x: 0,
                                        opacity: 1
                                    }}>

                            <div className="text_container">

                                <p className="sub_header">Projects</p>
                                <p className="text">
                                    Here you will find a selection of the work I've done as a Java developer, showcasing my
                                    skills and experience in building robust, scalable, and efficient applications. My
                                    projects reflect my dedication to quality code and innovative solutions.
                                </p>
                            </div>
                        </motion.div>
                        <Link to="/contacts" id="contact_me_link">
                            <div id="contact_me_button">CONTACT ME</div>
                        </Link>
                    </div>

                </div>
            </div>
        </MotionConfig>
    );
}

export default ProjectsComponent;