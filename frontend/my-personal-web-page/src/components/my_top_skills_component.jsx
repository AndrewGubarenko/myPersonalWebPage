import Java124 from "../statics/icons/124/Group 62.svg";
import Python124 from "../statics/icons/124/Group 63.svg";
import JS124 from "../statics/icons/124/Group 64.svg";
import Apache124 from "../statics/icons/124/Group 65.svg";
import Docker124 from "../statics/icons/124/Group 66.svg";
import Bitbucket124 from "../statics/icons/124/Group 67.svg";
import { motion, MotionConfig  } from "framer-motion";

function MyTopSkillsComponent() {
    return (
        <MotionConfig transition={{ duration: 0.3 }}>
            <motion.div className="intro_container"
                        initial={{
                            opacity: 0,
                            x: -200,
                            y: 200,}}
                        animate={{
                            x: 0,
                            y: 0,
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0,
                            x: -200,
                            y: 200,}}>
                <div className="top_skills_container">
                    <img src={Java124} alt="Java" className="top_skills_icon"/>
                    <img src={Python124} alt="Python" className="top_skills_icon"/>
                    <img src={JS124} alt="Javascript" className="top_skills_icon"/>
                </div>
                <div className="top_skills_container">
                    <img src={Apache124} alt="Apache" className="top_skills_icon"/>
                    <img src={Docker124} alt="Docker" className="top_skills_icon"/>
                    <img src={Bitbucket124} alt="Bitbucket" className="top_skills_icon"/>
                </div>
            </motion.div>
        </MotionConfig>
    );
}

export default MyTopSkillsComponent;