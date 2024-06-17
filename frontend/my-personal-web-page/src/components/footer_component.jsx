import GitHub32 from "../statics/icons/32/skill-icons_github-dark.svg";
import Mail32 from "../statics/icons/32/icomoon-free_mail.svg";
import In32 from "../statics/icons/32/mingcute_linkedin-fill.svg";
import React from "react";

function FooterComponent() {

    return (
        <div className="footer">
            <ul>
                <li>© Designed by Alisa Hubarenko</li>
                <li>{new Date().getFullYear()} All Rights Reserved</li>
                <li>
                    <div id="footer_link_icons_container">
                        <a href="https://github.com/AndrewGubarenko" target="_blank" rel="noreferrer">
                            <img src={GitHub32} alt="GitHub" className="footer_link_icon"/>
                        </a>
                        <a href="mailto:andrii.hubarenko.developer@gmail.com" target="_blank">
                            <img src={Mail32} alt="MailTo" className="footer_link_icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/andrii-hubarenko-1a2988116/" target="_blank"
                           rel="noreferrer">
                            <img src={In32} alt="LinkedIn" className="footer_link_icon"/>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default FooterComponent;