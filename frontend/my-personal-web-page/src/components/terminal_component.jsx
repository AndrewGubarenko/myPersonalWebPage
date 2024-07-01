import React from 'react';
import { motion, MotionConfig } from "framer-motion";

const TerminalComponent = ({ messages, description, inputRef, input, cursorRef, handleSend, setInput, updateCursor }) => {
    const paragraphs = description.split('\n\n');
    console.log(paragraphs);
    return (
        <MotionConfig transition={{ duration: 0.3 }}>
            <div className="background_block up_container">
                <div className="block_container">
                    <div className="two_thirds_column_container">
                        <motion.div className="two_third_width_container" style={{padding: "30px 20px 30px 20px"}}
                                    initial={{
                                        opacity: 0,
                                        y: -200,
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    exit={{
                                        y: -200,
                                        opacity: 0,
                                    }}
                                    onAnimationComplete={() => {updateCursor()}}>
                            <div className="terminal" onClick={() => inputRef.current.focus()}>
                                <div className="output">
                                    {messages.map((msg, index) => (
                                        <div key={index}>{msg}</div>
                                    ))}
                                </div>
                                <div className="input-line">
                                    <span className="prompt">> </span>
                                    <input className="terminal-input" maxLength="20"
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => {setInput(e.target.value); updateCursor()}}
                                           onKeyUp={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSend();
                                            }
                                        }}
                                    />
                                    <span className="cursor" ref={cursorRef}>█</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="narrow_column">
                        <motion.div className="narrow_block expand_block_to_bottom"
                                    initial={{
                                        opacity: 0,
                                        y: 200,
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    exit={{
                                        y: 200,
                                        opacity: 0,
                                    }}>
                            <div className="text_container">
                                <p className="sub_header">Welcome to Code Lab!</p>
                                {paragraphs.map((para, index) => (
                                    <p key={index} className="text">{para}</p>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </MotionConfig>
    );
};

export default TerminalComponent;
