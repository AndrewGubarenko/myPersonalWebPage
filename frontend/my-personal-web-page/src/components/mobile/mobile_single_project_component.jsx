import React, { useContext } from 'react';
import { motion } from "framer-motion";
import Eye from "../../statics/icons/about/Group 43.svg";
import { ProjectContext } from "../../app_context/ProjectContext";
import {Link} from "react-router-dom";
import TaskPerformed from "../../statics/icons/experience/Group 14.svg";

function MobileSingleProjectComponent() {
    const { project } = useContext(ProjectContext);

    if (!project) {
        return <div>Project data not found</div>;
    }

    const { title, description, image, ref } = project;

    return (
        <div className="mobile_main_container mobile_main_container_bg mobile_main_container_reduce_padding_top">
            <motion.div className="mobile_info_container"
                        initial={{opacity: 0, y: -200}}
                        animate={{y: 0, opacity: 1}}
                        exit={{opacity: 0, y: -200}}
                        transition={{duration: 0.3}}>
                <div className="mobile_icon_frame">
                    <Link to="/m/projects">
                        <img src={TaskPerformed} alt="Close" className="mobile_block_icon"/>
                    </Link>
                </div>
                <br/>
                <p className="mobile_main_header">{title}</p>
                <p className="text">{description}</p>
            </motion.div>

            <motion.div className="mobile_empty_info_container"
                        initial={{opacity: 0, x: 200}}
                        animate={{x: 0, opacity: 1}}
                        exit={{opacity: 0, x: 200}}
                        transition={{duration: 0.3}}>
                <img className="cover_image" src={image} alt={title} />
                <div className="mobile_icon_frame icon_overlays">
                    {ref ? (
                        <a href={ref} target="_blank" rel="noreferrer">
                            <img src={Eye} alt="BackEnd" className="mobile_block_icon"/>
                        </a>
                    ) : (
                        <Link to={`/codelab`}>
                            <img src={Eye} alt="BackEnd" className="mobile_block_icon"/>
                        </Link>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

export default MobileSingleProjectComponent;
