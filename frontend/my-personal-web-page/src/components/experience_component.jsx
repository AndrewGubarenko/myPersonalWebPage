import CV from "../statics/icons/experience/ion_document.svg";
import Rectangle from "../statics/icons/experience/Rectangle 24.svg";
import { motion, MotionConfig  } from "framer-motion";

function ExperienceComponent({ experience, onClickPosition }) {

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },},
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },},
    }

    const elem = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -200 },
    }

    return(
        <MotionConfig transition={{ duration: 0.5 }}>
            <div className="background_block">
                <div className="row_container">
                    <div className="block_container">
                        <div className="wide_column margin_column_right">
                            <motion.div className="wide_block"
                                 initial={{
                                     opacity: 0,
                                     x: 200,
                                     y: 200,}}
                                 animate={{
                                     x: 0,
                                     y: 0,
                                     opacity: 1
                                 }}>
                                <div className="text_container">
                                    <p className="main_header reduce_line_height">Experience</p>
                                    <p className="text increase_margin">
                                        A story of growth, learning and professional development
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div className="narrow_column"
                                    initial={{
                                        opacity: 0,
                                        x: -200,
                                        y: 200,}}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        opacity: 1
                                    }}>
                            <div className="narrow_block yellow_block expand_block_to_bottom">
                                <p id="download_cv">
                                    Download My CV
                                </p>
                                <img src={CV} alt="CV" className="block_icon"/>
                            </div>
                        </motion.div>

                        <motion.div className="narrow_column last_column"
                                    initial={{
                                        opacity: 0,
                                        x: -200,
                                        y: 200,
                                        scaleY:1.05
                                    }}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        opacity: 1,
                                    }}>
                            <img src={Rectangle} alt="Rectangle" className="image_block expand_block_to_bottom"/>
                        </motion.div>
                    </div>
                </div>

                <div className="row_container">
                    <motion.div className="full_width_container"
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                    scaleY: 0}}
                                animate={{
                                    opacity: 1,
                                    scaleX: 1,
                                    scaleY: 1
                                }}>

                        <motion.div className="timeline"
                             initial="hidden"
                             animate="visible"
                             variants={list}>
                            {experience.map((item, index, i) => {
                                const startYear = new Date(item.period.startDate).getFullYear();
                                const endYear = new Date(item.period.endDate).getFullYear();
                                const isLast = index === experience.length - 1;

                                return (
                                    <motion.div key={index} className="timeline-link" onClick={() => onClickPosition(item)}
                                                >
                                        <motion.div className="timeline-item"
                                                    variants={elem}>
                                            <div className={`timeline-content ${isLast ? 'timeline-content-last' : ''}`}>
                                                <p className="company-name">{item.company}</p>
                                                <p className="period">
                                                    {startYear}{startYear !== endYear && `-${endYear}`}
                                                </p>
                                            </div>
                                            <div className={`timeline-dot ${isLast ? 'timeline-dot-last' : ''}`}></div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </MotionConfig>
    );
}

export default ExperienceComponent