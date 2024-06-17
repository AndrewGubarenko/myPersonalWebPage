import React from "react";
import Telegram from "../statics/icons/contacts/mingcute_telegram-fill.svg";
import Messenger from "../statics/icons/contacts/mage_messenger.svg";
import WhatsUp from "../statics/icons/contacts/mingcute_whatsapp-fill.svg";
import Arrow from "../statics/icons/124/Group 42.svg";


function ContactsComponent({ onChangeName, onChangeEmail, onChangeMessage, onClickSubmit }) {
    return (

        <div className="background_block up_container">
            <div className="block_container">

                <div className="half_width_contact_form_container">
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
                                <img src={Telegram} alt="Jira" className="tech_icon"/>
                                <img src={Messenger} alt="Kanban" className="tech_icon"/>
                                <img src={WhatsUp} alt="Scrum" className="tech_icon tech_icon_last"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="half_width_contact_form_container">
                    <div className="inner_contact_form_container contact_form_container contact_form_container_last">
                        <label className="contact_form_label ">Name</label>
                        <input className="contact_form_input" type="text" placeholder="Enter Your Name" onChange={onChangeName}/>

                        <label className="contact_form_label">Email</label>
                        <input className="contact_form_input" type="email" placeholder="Enter Your Email" onChange={onChangeEmail}/>

                        <label className="contact_form_label">Message</label>
                        <textarea  className="contact_form_input contact_form_input_message" placeholder="Your Message" onChange={onChangeMessage}/>
                    </div>
                    <button className="contact_form_button" onClick={onClickSubmit}>SUBMIT</button>
                </div>

            </div>
        </div>
    );
}

export default ContactsComponent;