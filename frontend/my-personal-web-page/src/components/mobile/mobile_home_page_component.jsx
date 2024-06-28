import GitHub32 from '../../statics/icons/32/skill-icons_github-dark.svg';
import Mail32 from '../../statics/icons/32/icomoon-free_mail.svg';
import In32 from '../../statics/icons/32/mingcute_linkedin-fill.svg';
import { motion, MotionConfig  } from "framer-motion";
import Java124 from "../../statics/icons/124/Group 62.svg";
import Python124 from "../../statics/icons/124/Group 63.svg";
import JS124 from "../../statics/icons/124/Group 64.svg";
import Apache124 from "../../statics/icons/124/Group 65.svg";
import Docker124 from "../../statics/icons/124/Group 66.svg";
import Bitbucket124 from "../../statics/icons/124/Group 67.svg";

function MobileHomePageComponent() {

    return (
        <MotionConfig transition={{duration: 0.3}}>

            <div className="mobile_main_container">

                <motion.div className="mobile_info_container"
                            initial={{opacity: 0, x: 50}}
                            animate={{x: 0, opacity: 1}}
                            exit={{opacity: 0, x: 50}}>
                    <p id="mobile_intro_text">
                        Hello, I'm Andrii Hubarenko
                    </p>
                    <p id="about_me_text">
                        Dedicated and reliable Java Developer with a well-rounded expertise encompassing both Back-End
                        and
                        Front-End development.
                    </p>

                    <div id="container_link_icons">
                        <a href="https://github.com/AndrewGubarenko" target="_blank" className="icon_link"
                           rel="noreferrer">
                            <img src={GitHub32} alt="GitHub"/>
                        </a>
                        <a href="mailto:andrii.hubarenko.developer@gmail.com" target="_blank" className="icon_link"
                           rel="noreferrer">
                            <img src={Mail32} alt="MailTo"/>
                        </a>
                        <a href="https://www.linkedin.com/in/andrii-hubarenko-1a2988116/" target="_blank"
                           className="icon_link"
                           rel="noreferrer">
                            <img src={In32} alt="LinkedIn"/>
                        </a>
                    </div>
                </motion.div>

                <motion.div className="mobile_info_container"
                            initial={{opacity: 0, x: -50}}
                            animate={{x: 0, opacity: 1}}
                            exit={{opacity: 0, x: -50}}>
                    <div className="mobile_top_skills_container">
                        <img src={Java124} alt="Java" className="mobile_top_skills_icon"/>
                        <img src={Python124} alt="Python" className="mobile_top_skills_icon"/>
                        <img src={JS124} alt="Javascript" className="mobile_top_skills_icon"/>
                        <img src={Apache124} alt="Apache" className="mobile_top_skills_icon"/>
                        <img src={Docker124} alt="Docker" className="mobile_top_skills_icon"/>
                        <img src={Bitbucket124} alt="Bitbucket" className="mobile_top_skills_icon"/>
                    </div>
                </motion.div>
            </div>

        </MotionConfig>
    );
}

export default MobileHomePageComponent