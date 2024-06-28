import Burger from "../../statics/mobile/menu/Burger menu.svg";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import Close from "../../statics/mobile/menu/Group 14.svg";
import { Link } from "react-router-dom";

function MobileHeaderComponent({burgerDisplay,
                               burgerZIndex,
                               closeMenuDisplay,
                               closeZIndex,
                               onClickBurger,
                               onClickClose}) {
    return (
        <MotionConfig transition={{duration: 0.3}}>
            <AnimatePresence>
                {burgerDisplay === "block" && (
                    <motion.div
                        className="mobile_burger_icon_frame"
                        style={{ zIndex: burgerZIndex }}
                        onClick={onClickBurger}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <img src={Burger} alt="BackEnd" className="mobile_burger_block_icon" />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {closeMenuDisplay === "flex" && (
                    <motion.div
                        className="mobile_header_content_container"
                        style={{ zIndex: closeZIndex }}
                        onClick={onClickClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="icon_frame">
                            <img src={Close} alt="BackEnd" className="block_icon" />
                        </div>
                        <div className="mobile_header">
                            <ul>
                                <li><Link to="/" className="mobile_header_link">Home</Link></li>
                                <li><Link to="/about" className="mobile_header_link">About</Link></li>
                                <li><Link to="/experience" className="mobile_header_link">Experience</Link></li>
                                <li><Link to="/testimonials" className="mobile_header_link">Testimonials</Link></li>
                                <li><Link to="/projects" className="mobile_header_link">Projects</Link></li>
                                <li><Link to="/contacts" className="mobile_header_link">Contacts</Link></li>
                                <li><Link to="/codelab" className="mobile_header_link">CodeLab</Link></li>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </MotionConfig>
    );
}

export default MobileHeaderComponent;
