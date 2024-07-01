import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import TaskPerformed from "../../statics/icons/experience/Group 14.svg";

const MobileTerminalComponent = ({ messages, description, inputRef, input, cursorRef, handleSend, setInput, updateCursor }) => {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="mobile_main_container mobile_main_container_bg mobile_main_container_reduce_padding_top">

            <motion.div className="mobile_terminal"
                        onClick={() => inputRef.current.focus()}
                        initial={{opacity: 0, y: -200}}
                        animate={{y: 0, opacity: 1}}
                        exit={{opacity: 0, y: -200}}
                        transition={{duration: 0.3}}
                        onAnimationComplete={() => {
                            updateCursor()
                        }}
                        style={{height: `${height}px`}}>
                <div className="mobile_icon_frame">
                    <Link to="/m/projects">
                        <img src={TaskPerformed} alt="Close" className="mobile_block_icon"/>
                    </Link>
                </div>
                <div className="mobile_output">
                    {
                        <div style={{marginBottom: "10px"}}>{description}</div>
                    }
                    {messages.map((msg, index) => (
                        <div key={index} style={{marginBottom: "10px"}}>>>{msg}</div>
                    ))}
                </div>
                <div className="input-line" style={{marginBottom: "10px", marginTop: "10px"}}>
                    <span className="prompt">> </span>
                    <input className="terminal-input" maxLength="20"
                           ref={inputRef}
                           type="text"
                           value={input}
                           onChange={(e) => {
                               setInput(e.target.value);
                               updateCursor()
                           }}
                           onKeyUp={(e) => {
                               if (e.key === 'Enter') {
                                   handleSend();
                               }
                           }}
                    />
                    <span className="cursor" ref={cursorRef}>█</span>
                </div>
            </motion.div>
        </div>

    );
};

export default MobileTerminalComponent;