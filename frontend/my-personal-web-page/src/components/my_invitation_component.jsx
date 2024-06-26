import GitHub32 from '../statics/icons/32/skill-icons_github-dark.svg';
import Mail32 from '../statics/icons/32/icomoon-free_mail.svg';
import In32 from '../statics/icons/32/mingcute_linkedin-fill.svg';
import { motion, MotionConfig  } from "framer-motion";

function MyInvitationComponent() {

    return (
        <MotionConfig transition={{ duration: 0.3 }}>
            <motion.div className="intro_container"
                        initial={{
                            opacity: 0,
                            x: -200,
                            y: -200,}}
                        animate={{
                            x: 0,
                            y: 0,
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0,
                            x: -200,
                            y: -200,}}>
                <p id="intro_text">
                    Hello, I'm Andrii Hubarenko
                </p>
                <p id="about_me_text">
                    Dedicated and reliable Java Developer with a well-rounded expertise encompassing both Back-End and
                    Front-End development.
                </p>

                <div id="container_link_icons">
                    <a href="https://github.com/AndrewGubarenko" target="_blank" className="icon_link" rel="noreferrer">
                        <img src={GitHub32} alt="GitHub"/>
                    </a>
                    <a href="mailto:andrii.hubarenko.developer@gmail.com" target="_blank" className="icon_link" rel="noreferrer">
                        <img src={Mail32} alt="MailTo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/andrii-hubarenko-1a2988116/" target="_blank" className="icon_link"
                       rel="noreferrer">
                        <img src={In32} alt="LinkedIn"/>
                    </a>
                </div>
            </motion.div>
        </MotionConfig>
    );
}

export default MyInvitationComponent;