import ArrowLeft from "../../statics/mobile/carousel/mdi_arrow-left-bold.svg";
import ArrowRight from "../../statics/mobile/carousel/mdi_arrow-right-bold.svg";
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

function MobileTestimonialsComponent() {
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
                        <p className="mobile_main_header">Testimonials From Different Voices</p>

                        <p className="testimonials_name_header">Marianna S.| CBT Psychologist</p>
                        <p className="text">
                            A great hard-working, highly talented person with constructive approach to work. If you need
                            a good team player, he's the best choice.
                        </p>

                        <p className="testimonials_name_header">Olena M.| Frontend Developer</p>
                        <p className="text">
                            I had the pleasure of working closely with Andrii on a recent project, where I handled
                            frontend responsibilities while he managed backend tasks. He stands out for his exceptional
                            communication skills, making collaboration a delightful experience.
                        </p>
                        <p className="text">
                            In addition to being a great communicator, Andrii possesses strong
                        </p>

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
                            initial={{opacity: 0, y: -50}}
                            animate={{y: 0, opacity: 1}}
                            exit={{opacity: 0, y: -50}}
                            transition={{duration: 0.3}}>
                    <div className="mobile_info_container" style={{minHeight: maxHeight}}>

                        <p className="text">
                            technical and analytical skills.
                        </p>
                        <p className="text">
                            He consistently demonstrated a remarkable ability to swiftly and effectively address
                            challenges I encountered on the frontend.
                        </p>
                        <p className="text">
                            Furthermore, he proactively proposed business solutions to our leadership, showcasing a keen
                            understanding of the project's broader objectives. I highly recommend Andrii for any team or
                            project requiring a talented professional who not only excels technically but also fosters a
                            positive and collaborative working environment.
                        </p>

                        <p className="mobile_testimonials_name_header">Alisa H.| UI/UX Designer</p>
                        <p className="text">
                            Collaborating with Andrii has been an absolute pleasure. His deep technical expertise and
                            innovative problem-
                        </p>

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

                        <p className="text">
                            solving elevate every project we work on.
                        </p>
                        <p className="text">
                            He consistently brings my designs to life with meticulous attention to detail, while also
                            suggesting creative solutions that enhance the final product. A true professional and a
                            valued team member
                        </p>

                        <p className="mobile_testimonials_name_header">Alex G.| Project Manager</p>
                        <p className="text">
                            Andrii consistently exceeds expectations with his exceptional coding skills and problem-solving abilities.
                        </p>
                        <p className="text">
                            His proactive approach to tackling challenges ensures projects are delivered on time and within scope.
                        </p>
                        <p className="text">
                            His clear communication and collaborative spirit make him an invaluable asset to any team.
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

export default MobileTestimonialsComponent;