import {MotionConfig} from "framer-motion";
import React from "react";

function MobileContactsComponent({ name, email, message, onChangeName, onChangeEmail, onChangeMessage, onClickSubmit,
                                     alert_outline_border_name, alert_outline_boxShadow_name,
                                     alert_outline_border_email, alert_outline_boxShadow_email,
                                     alert_outline_border_message, alert_outline_boxShadow_message}) {

    return(
        <div className="mobile_main_container mobile_main_container_bg mobile_main_container_reduce_padding_top">
            <MotionConfig transition={{duration: 0.3}}>
                <div className="mobile_info_container"
                     initial={{opacity: 0, y: 50}}
                     animate={{x: 0, opacity: 1}}
                     exit={{opacity: 0, y: 50}}>
                    <p className="mobile_main_header">Contacts</p>
                    <p className="text">
                        Fill out the form below to discuss your project.
                    </p>

                    <label className="contact_form_label">Name</label>
                    <input className="contact_form_input mobile_image_block" type="text" placeholder="Enter Your Name" value={name}
                           onChange={onChangeName}
                           style={{border: alert_outline_border_name, boxShadow: alert_outline_boxShadow_name}}/>

                    <label className="contact_form_label">Email</label>
                    <input className="contact_form_input mobile_image_block" type="email" placeholder="Enter Your Email" value={email}
                           onChange={onChangeEmail}
                           style={{border: alert_outline_border_email, boxShadow: alert_outline_boxShadow_email}}/>

                    <label className="contact_form_label">Message</label>
                    <textarea className="contact_form_input contact_form_input_message mobile_image_block" placeholder="Your Message"
                              value={message} onChange={onChangeMessage} style={{
                        border: alert_outline_border_message,
                        boxShadow: alert_outline_boxShadow_message,
                        height: "16.5em",
                        marginBottom: "-1.5em"
                    }}/>

                </div>
                <button className="contact_form_button" style={{marginTop: "0"}} onClick={onClickSubmit}>SUBMIT</button>

            </MotionConfig>
        </div>
    );

}

export default MobileContactsComponent;