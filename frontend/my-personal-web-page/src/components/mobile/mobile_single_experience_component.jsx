import React from "react";
import {Link} from "react-router-dom";
import TaskPerformed from "../../statics/icons/experience/Group 14.svg";
import { motion } from "framer-motion";

export default function MobileSingleExperienceComponent({ singleExperience, onClickDownloadCV }) {
    return(
        <div className="mobile_main_container mobile_main_container_bg mobile_main_container_reduce_padding_top">
            <motion.div className="mobile_info_container"
                        initial={{opacity: 0, x: -50}}
                        animate={{x: 0, opacity: 1}}
                        exit={{opacity: 0, x: 50}}
                        transition={{duration: 0.3}}>
                <div className="icon_frame">
                    <Link to="/experience">
                        <img src={TaskPerformed} alt="Close" className="block_icon"/>
                    </Link>
                </div>
                <p className="mobile_main_header">{singleExperience.company}</p>
                <p className="text">{singleExperience.position}</p>
                <p className="accent_subheader">Task performed</p>
                {singleExperience.tasks && (
                    <div>
                        {singleExperience.tasks.description && (
                            <p className="text">{singleExperience.tasks.description}</p>
                        )}
                        <ul className="ul_experience_tasks">
                            {singleExperience.tasks.points && singleExperience.tasks.points.map((point, index) => (
                                <li key={index} className="list">{point}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </motion.div>

            <motion.div id="mobile_contact_me_button" style={{marginTop: "0"}} onClick={onClickDownloadCV}
                        initial={{opacity: 0, y: 200}}
                        animate={{y: 0, opacity: 1}}
                        exit={{opacity: 0, y: 200}}
                        transition={{duration: 0.3}}>
                DOWNLOAD CV
            </motion.div>

        </div>
    );
}