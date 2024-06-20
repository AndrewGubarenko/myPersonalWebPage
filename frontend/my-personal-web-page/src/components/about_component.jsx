import BackEnd from "../statics/icons/about/Group 5.svg";
import FrontEnd from "../statics/icons/about/Group 3.svg";
import ProjectManagement from "../statics/icons/about/Group 9.svg";
import Java from "../statics/icons/about/ri_java-line.svg";
import Python from "../statics/icons/about/teenyicons_python-solid.svg";
import JS from "../statics/icons/about/tabler_brand-javascript.svg";
import HTML from "../statics/icons/about/flowbite_html-solid.svg";
import CSS from "../statics/icons/about/flowbite_css-solid.svg";
import Jira from "../statics/icons/about/mdi_jira.svg";
import Kanban from "../statics/icons/about/ph_kanban-fill.svg";
import Scrum from "../statics/icons/about/Rectangle 33.svg";
import {Link} from "react-router-dom";
import { motion, MotionConfig  } from "framer-motion";

function AboutComponent() {
    return (
        <MotionConfig transition={{ duration: 0.5 }}>
            <div className="background_block">
                <div className="block_container last_block_container">

                    <div className="narrow_column">
                        <motion.div className="narrow_block expand_block_to_bottom"
                                    initial={{
                                        opacity: 0,
                                        x: -200,
                                        y: 200,}}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        opacity: 1
                                    }}>
                            <div className="icon_frame">
                                <img src={BackEnd} alt="BackEnd" className="block_icon"/>
                            </div>
                            <div className="text_container">
                                <p className="sub_header">Back-End</p>
                                <p className="text">Develop business logic and back-end system to support the product,
                                    create
                                    API.</p>

                                <p className="accent_subheader">Languages:</p>
                                <div className="tech_icon_container">
                                    <img src={Java} alt="java_icon" className="tech_icon"/>
                                    <img src={Python} alt="python_icon" className="tech_icon tech_icon_last"/>
                                </div>

                                <p className="accent_subheader">Technologies:</p>
                                <p className="text">Spring Framework, Spring Boot, Apache Tomcat, Apache Maven, Apache
                                    Kafka,
                                    ActiveMQ, Gradle, JDBS, Hibernate, JPA, MySQL, PostgreSQL, Oracle DB Docker, Lombok.</p>

                                <p className="accent_subheader">Tools:</p>
                                <p className="text">Github, Bitbucket, Postman, JHipster, Eclipse IDE, IntellJ IDEA.</p>
                            </div>
                        </motion.div>
                        <Link to="/contacts" id="contact_me_link">
                            <div id="contact_me_button">CONTACT ME</div>
                        </Link>
                    </div>

                    <div className="narrow_column">
                        <motion.div className="narrow_block"
                                    initial={{
                                        opacity: 0,
                                        x: 200,
                                        y: -200,}}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        opacity: 1
                                    }}>
                            <div className="icon_frame">
                                <img src={FrontEnd} alt="BackEnd" className="block_icon"/>
                            </div>
                            <div className="text_container">
                                <p className="sub_header">Front-End</p>
                                <p className="text">Gracefully bring the ideas to life from scratch and to the browser.</p>

                                <p className="accent_subheader">Languages:</p>
                                <div className="tech_icon_container">
                                    <img src={JS} alt="js_icon" className="tech_icon"/>
                                    <img src={HTML} alt="html_icon" className="tech_icon"/>
                                    <img src={CSS} alt="css_icon" className="tech_icon tech_icon_last"/>
                                </div>

                                <p className="accent_subheader">Technologies:</p>
                                <p className="text">Bootstrap, ReactJS, Redux.</p>

                                <p className="accent_subheader">Tools:</p>
                                <p className="text">WebStorm, Atom.</p>
                            </div>
                        </motion.div>

                        <motion.div className="narrow_block expand_block_to_bottom"
                                    initial={{
                                        opacity: 0,
                                        x: 0,
                                        y: 200,}}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        opacity: 1
                                    }}>
                            <div className="icon_frame">
                                <img src={ProjectManagement} alt="ProjectManagement" className="block_icon"/>
                            </div>
                            <div className="text_container">
                                <p className="sub_header">Project Management</p>
                                <div className="tech_icon_container">
                                    <img src={Jira} alt="Jira" className="tech_icon"/>
                                    <img src={Kanban} alt="Kanban" className="tech_icon"/>
                                    <img src={Scrum} alt="Scrum" className="tech_icon tech_icon_last"/>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="wide_column">
                        <div className="wide_block">
                            <div className="icon_frame">
                                <img src={BackEnd} alt="BackEnd" className="block_icon"/>
                            </div>
                            <div className="text_container">
                                <p className="sub_header">Architecture</p>
                                <p className="text">Design patterns, Architectural patterns, SOLID patterns, OOP, REST, Microservices</p>
                            </div>
                        </div>

                        <motion.div className="wide_block expand_block_to_bottom"
                                    initial={{
                                        opacity: 0,
                                        x: -200,
                                        y: -200,}}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        opacity: 1
                                    }}>
                            <div className="text_container">
                                <p className="main_header">About Me</p>
                                <p className="text">
                                    Dedicated and reliable Java Developer with a well-rounded expertise encompassing both
                                    Back-End and Front-End development. My I skills extend to crafting robust architectures
                                    utilizing Java, Spring Framework, and associated technologies. From designing RESTful
                                    APIs to ensuring secure database interactions, my commitment to continuous learning and
                                    adaptability ensures a versatile approach.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </MotionConfig>
    );
}

export default AboutComponent;