import React from "react";
import Telegram from "../statics/icons/contacts/mingcute_telegram-fill.svg";
import Messenger from "../statics/icons/contacts/mage_messenger.svg";
import WhatsUp from "../statics/icons/contacts/mingcute_whatsapp-fill.svg";
import Arrow from "../statics/icons/124/Group 42.svg";
import { motion, MotionConfig  } from "framer-motion";

function ContactsComponent({ name, email, message, onChangeName, onChangeEmail, onChangeMessage, onClickSubmit,
                               alert_outline_border_name, alert_outline_boxShadow_name,
                               alert_outline_border_email, alert_outline_boxShadow_email,
                               alert_outline_border_message, alert_outline_boxShadow_message}) {

    return (
        <MotionConfig transition={{ duration: 0.5 }}>
            <div className="background_block up_container">
                <div className="block_container">

                    <motion.div className="half_width_contact_form_container"
                                initial={{
                                    opacity: 0,
                                    x: -200,
                                    y: 200,}}
                                animate={{
                                    x: 0,
                                    y: 0,
                                    opacity: 1
                                }}>
                        <div className="inner_contact_form_container expand_block_to_bottom">
                            <div className="icon_frame">
                                <img src={Arrow} alt="BackEnd" className="block_icon"/>
                            </div>
                            <div className="text_container">
                                <p className="main_header up_header">Let`s discuss on Something Cool Together!</p>
                                <p className="text">
                                    Fill out the form on the right to discuss your project, or reach me through the
                                    messengers below.
                                </p>
                                <br/>
                                <div className="tech_icon_container">
                                    <a href="https://t.me/+UyRRL17jgakyZmFi" target="_blank" rel="noreferrer">
                                        <img src={Telegram} alt="Jira" className="tech_icon"/>
                                    </a>

                                    <img src={Messenger} alt="Kanban" className="tech_icon"/>

                                    <a href="https://chat.whatsapp.com/C4Ek2rvFNysI3nolvOfMUx" target="_blank" rel="noreferrer">
                                        <img src={WhatsUp} alt="Scrum" className="tech_icon tech_icon_last"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="half_width_contact_form_container"
                                initial={{
                                    opacity: 0,
                                    x: 200,
                                    y: -200,}}
                                animate={{
                                    x: 0,
                                    y: 0,
                                    opacity: 1
                                }}>
                        <div className="inner_contact_form_container contact_form_container contact_form_container_last">
                            <label className="contact_form_label ">Name</label>
                            <input className="contact_form_input" type="text" placeholder="Enter Your Name" value={name} onChange={onChangeName} style={{border: alert_outline_border_name, boxShadow: alert_outline_boxShadow_name}}/>

                            <label className="contact_form_label">Email</label>
                            <input className="contact_form_input" type="email" placeholder="Enter Your Email" value={email} onChange={onChangeEmail} style={{border: alert_outline_border_email, boxShadow: alert_outline_boxShadow_email}}/>

                            <label className="contact_form_label">Message</label>
                            <textarea  className="contact_form_input contact_form_input_message" placeholder="Your Message" value={message} onChange={onChangeMessage} style={{border: alert_outline_border_message, boxShadow: alert_outline_boxShadow_message}}/>
                        </div>
                        <button className="contact_form_button" onClick={onClickSubmit}>SUBMIT</button>
                    </motion.div>

                </div>
            </div>
        </MotionConfig>
    );
}

export default ContactsComponent;