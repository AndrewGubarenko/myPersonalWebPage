import {Link} from "react-router-dom";
import { motion, MotionConfig  } from "framer-motion";

function TestimonialsComponent() {
    return (
        <MotionConfig transition={{ duration: 0.3 }}>
            <div className="background_block">
                <div className="block_container last_block_container">

                    <motion.div className="wide_block expand_block_to_bottom margin_column_right"
                                initial={{
                                    opacity: 0,
                                    y: -200,}}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -200,}}>
                        <div className="text_container">
                            <p className="sub_header">Testimonials From Different Voices</p>

                            <p className="testimonials_name_header">Marianna S.| CBT Psychologist</p>
                            <p className="text">
                                A great hard-working, highly talented person with constructive approach to work. If you need
                                a good team player, he's the best choice.
                            </p>

                            <p className="testimonials_name_header">Olena M.| Frontend Developer</p>
                            <p className="text">
                                I had the pleasure of working closely with Andrii on a recent project, where I handled frontend responsibilities while he managed backend tasks. He stands out for his exceptional communication skills, making collaboration a delightful experience.
                            </p>
                            <p className="text">
                                In addition to being a great communicator, Andrii possesses strong technical and analytical skills. He consistently demonstrated a remarkable ability to swiftly and effectively address challenges I encountered on the frontend.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div className="narrow_column"
                                initial={{
                                    opacity: 0,
                                    y: 200,}}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 200
                                }}>
                        <div className="narrow_block expand_block_to_bottom">

                            <div className="text_container">
                                <p className="text">
                                    Furthermore, he proactively proposed business solutions to our leadership, showcasing a keen understanding of the project's broader objectives.
                                </p>
                                <p className="text">
                                    I highly recommend Andrii for any team or project requiring a talented professional who not only excels technically but also fosters a positive and collaborative working environment.
                                </p>

                                <p className="testimonials_name_header">Alisa H.| UI/UX Designer</p>
                                <p className="text">
                                    Collaborating with Andrii has been an absolute pleasure. His deep technical expertise and innovative problem-solving elevate every project we work on.
                                </p>
                                <p className="text">
                                    He consistently brings my designs to life with meticulous attention to detail, while also suggesting creative solutions that enhance the final product.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="narrow_column"
                                initial={{
                                    opacity: 0,
                                    y: -200,}}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -200,
                                }}>
                        <div className="narrow_block expand_block_to_bottom">

                            <div className="text_container">
                                <p className="text">
                                    A true professional and a valued team member
                                </p>
                                <p className="testimonials_name_header">Alex G.| Project Manager</p>
                                <p className="text">
                                    Andrii consistently exceeds expectations with his exceptional coding skills and
                                    problem-solving abilities.
                                </p>
                                <p className="text">
                                His proactive approach to tackling challenges ensures projects are delivered on time
                                    and within scope.
                                </p>
                                <p className="text">
                                    His clear communication and collaborative spirit make him an invaluable asset to any
                                    team.
                                </p>
                            </div>
                        </div>
                        <Link to="/contacts" id="contact_me_link">
                            <div id="contact_me_button">CONTACT ME</div>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </MotionConfig>
    );
}

export default TestimonialsComponent;