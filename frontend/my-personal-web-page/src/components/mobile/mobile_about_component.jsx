import React, {useState, useEffect} from "react";
import BackEnd from "../../statics/icons/about/Group 5.svg";
import FrontEnd from "../../statics/icons/about/Group 3.svg";
import ProjectManagement from "../../statics/icons/about/Group 9.svg";
import Java from "../../statics/icons/about/ri_java-line.svg";
import Python from "../../statics/icons/about/teenyicons_python-solid.svg";
import JS from "../../statics/icons/about/tabler_brand-javascript.svg";
import HTML from "../../statics/icons/about/flowbite_html-solid.svg";
import CSS from "../../statics/icons/about/flowbite_css-solid.svg";
import Jira from "../../statics/icons/about/mdi_jira.svg";
import Kanban from "../../statics/icons/about/ph_kanban-fill.svg";
import Scrum from "../../statics/icons/about/Rectangle 33.svg";
import Rectangle from "../../statics/icons/experience/Rectangle 24.svg";
import {Link} from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowLeft from '../../statics/mobile/carousel/mdi_arrow-left-bold.svg';
import ArrowRight from '../../statics/mobile/carousel/mdi_arrow-right-bold.svg';
import {motion} from "framer-motion";

function MobileAboutComponent() {
    const CustomPrevArrow = () => (
        <div className="custom-prev">
            <img src={ArrowLeft} alt="Prev"/>
        </div>
    );

    const CustomNextArrow = () => (
        <div className="custom-next">
            <img src={ArrowRight} alt="Next"/>
        </div>
    );

    const [maxHeight, setMaxHeight] = useState(0);

    useEffect(() => {
        const updateSlideHeights = () => {
            setTimeout(() => {
                const slides = document.querySelectorAll(".mobile_info_container");
                let maxSlideHeight = 0;

                slides.forEach((slide) => {
                    const slideHeight = slide.getBoundingClientRect().height;
                    if (slideHeight > maxSlideHeight) {
                        maxSlideHeight = slideHeight;
                    }
                });

                setMaxHeight(maxSlideHeight);
            }, 0);
        };

        updateSlideHeights();

        // Update slide heights on window resize
        window.addEventListener("resize", updateSlideHeights);

        return () => {
            window.removeEventListener("resize", updateSlideHeights);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rows: 1,
        slidesPerRow: 1,
    };

    return (
        <div className="mobile_main_container mobile_main_container_bg mobile_main_container_reduce_padding_top"
                    style={{paddingRight: "0", paddingLeft: "0"}}>
            <Slider {...settings}>

                <motion.div className="carousel_container"
                            initial={{opacity: 0, y: 50}}
                            animate={{y: 0, opacity: 1}}
                            exit={{opacity: 0, y: 50}}
                            transition={{duration: 0.3}}>
                    <div className="mobile_info_container" style={{minHeight: maxHeight}}>
                        <p className="mobile_main_header">About Me</p>
                        <p className="text">
                            Dedicated and reliable Java Developer with a well-rounded expertise encompassing both
                            Back-End and Front-End development. My skills extend to crafting robust architectures
                            utilizing Java, Spring Framework, and associated technologies. From designing RESTful
                            APIs to ensuring secure database interactions, my commitment to continuous learning and
                            adaptability ensures a versatile approach.
                        </p>
                        <img src={Rectangle} alt="Rectangle" className="mobile_image_block"/>

                        <CustomNextArrow/>
                        <span className="carousel_span">Swipe</span>
                    </div>
                    <Link to="/contacts" id="contact_me_link">
                        <div id="mobile_contact_me_button" style={{marginTop: "0"}}>
                            CONTACT ME
                        </div>
                    </Link>
                </motion.div>

                <motion.div className="carousel_container"
                            initial={{opacity: 0, y: 50}}
                            animate={{y: 0, opacity: 1}}
                            exit={{opacity: 0, y: 50}}
                            transition={{duration: 0.3}}>
                    <div className="mobile_info_container" style={{minHeight: maxHeight}}>
                        <div className="icon_frame">
                            <img src={BackEnd} alt="BackEnd" className="block_icon"/>
                        </div>

                        <p className="sub_header">Back-End</p>
                        <p className="text">Develop business logic and back-end system to support the product,
                            create API.</p>

                        <p className="accent_subheader">Languages:</p>
                        <div className="tech_icon_container">
                            <img src={Java} alt="java_icon" className="tech_icon"/>
                            <img src={Python} alt="python_icon" className="tech_icon tech_icon_last"/>
                        </div>

                        <p className="accent_subheader">Technologies:</p>
                        <p className="text">
                            Spring Framework, Spring Boot, Apache Tomcat, Apache Maven, Apache Kafka, ActiveMQ,
                            Gradle,
                            JDBS, Hibernate, JPA, MySQL, PostgreSQL, Oracle DB Docker, Lombok.
                        </p>

                        <p className="accent_subheader">Tools:</p>
                        <p className="text">Github, Bitbucket, Postman, JHipster, Eclipse IDE, IntellJ IDEA.</p>

                        <CustomPrevArrow/>
                        <CustomNextArrow/>

                        <span className="carousel_span">Swipe</span>
                    </div>
                    <Link to="/contacts" id="contact_me_link">
                        <div id="mobile_contact_me_button" style={{marginTop: "0"}}>
                            CONTACT ME
                        </div>
                    </Link>
                </motion.div>

                <motion.div className="carousel_container"
                     initial={{opacity: 0, y: 50}}
                     animate={{y: 0, opacity: 1}}
                     exit={{opacity: 0, y: 50}}
                     transition={{duration: 0.3}}>
                    <div className="mobile_info_container" style={{minHeight: maxHeight}}>
                        <div className="icon_frame">
                            <img src={FrontEnd} alt="BackEnd" className="block_icon"/>
                        </div>

                        <p className="sub_header">Front-End</p>
                        <p className="text">Develop business logic and back-end system to support the product,
                            create API.</p>

                        <p className="accent_subheader">Languages:</p>
                        <div className="tech_icon_container">
                            <img src={JS} alt="js_icon" className="tech_icon"/>
                            <img src={HTML} alt="html_icon" className="tech_icon"/>
                            <img src={CSS} alt="css_icon" className="tech_icon tech_icon_last"/>
                        </div>

                        <p className="accent_subheader">Technologies:</p>
                        <p className="text">
                            React, Angular, Vue.js, Webpack, Babel, Sass, LESS, Bootstrap, Material UI.
                        </p>

                        <p className="accent_subheader">Tools:</p>
                        <p className="text">VS Code, WebStorm, Chrome DevTools, Firefox Developer Tools.</p>

                        <CustomPrevArrow/>
                        <CustomNextArrow/>

                        <span className="carousel_span">Swipe</span>
                    </div>
                    <Link to="/contacts" id="contact_me_link">
                        <div id="mobile_contact_me_button" style={{marginTop: "0"}}>
                            CONTACT ME
                        </div>
                    </Link>
                </motion.div>

                <motion.div className="carousel_container"
                            initial={{opacity: 0, y: 50}}
                            animate={{y: 0, opacity: 1}}
                            exit={{opacity: 0, y: 50}}
                            transition={{duration: 0.3}}>
                    <div className="mobile_info_container" style={{minHeight: maxHeight}}>
                        <div className="icon_frame">
                            <img src={ProjectManagement} alt="ProjectManagement" className="block_icon"/>
                        </div>

                        <p className="sub_header">Architecture</p>
                        <p className="text">Design patterns, Architectural patterns, SOLID patterns, OOP, REST,
                            Microservices</p>

                        <p className="sub_header">Project Management</p>
                        <div className="tech_icon_container">
                            <img src={Jira} alt="Jira" className="tech_icon"/>
                            <img src={Kanban} alt="Kanban" className="tech_icon"/>
                            <img src={Scrum} alt="Scrum" className="tech_icon tech_icon_last"/>
                        </div>

                        <p className="text">
                            Agile methodologies, Scrum, Kanban boards, Project planning, Team collaboration.
                        </p>

                        <CustomPrevArrow/>
                        <span className="carousel_span">Swipe</span>
                    </div>
                    <Link to="/contacts" id="contact_me_link">
                        <div id="mobile_contact_me_button" style={{marginTop: "0"}}>
                            CONTACT ME
                        </div>
                    </Link>
                </motion.div>
            </Slider>
        </div>
    );
}

export default MobileAboutComponent;