import React from "react";
import {motion, MotionConfig} from "framer-motion";

export default function MobileExperienceComponent({ experience, onClickPosition, onClickDownloadCV }) {
    return(
        <div className="mobile_main_container mobile_main_container_bg mobile_main_container_reduce_padding_top">
            <MotionConfig transition={{ duration: 0.3 }}>
                <motion.div className="mobile_info_container"
                            initial={{opacity: 0, x: 50}}
                            animate={{x: 0, opacity: 1}}
                            exit={{opacity: 0, x: -50}}>
                    <p className="mobile_main_header">Experience</p>
                    <p className="text">
                        A story of growth, learning and professional development
                    </p>

                    <div className="mobile_timeline">
                        {experience.map((item, index) => {
                            const startYear = new Date(item.period.startDate).getFullYear();
                            const endYear = new Date(item.period.endDate).getFullYear();

                            return (
                                <div key={index} className="mobile_timeline_link" onClick={() => onClickPosition(item)}>
                                    <div className="mobile_timeline_item">
                                        <div className={`mobile_timeline_dot`}></div>
                                        <div className={`mobile_timeline_content`}>
                                            <p className="mobile_company_name">{item.company} | {startYear}{startYear !== endYear && `-${endYear}`}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div id="mobile_contact_me_button" style={{marginTop: "0"}} onClick={onClickDownloadCV}
                            initial={{opacity: 0, y: 200}}
                            animate={{y: 0, opacity: 1}}
                            exit={{opacity: 0, y: 200}}>
                    DOWNLOAD CV
                </motion.div>
            </MotionConfig>
        </div>
    );
}