import React, { Component } from 'react';

import GitHub32 from '../statics/icons/32/skill-icons_github-dark.svg';
import Mail32 from '../statics/icons/32/icomoon-free_mail.svg';
import In32 from '../statics/icons/32/mingcute_linkedin-fill.svg';


class MyInvitationComponent extends Component {

    componentDidMount() {
        const footerElement = document.querySelector('.footer');
        const footerLinksIcons = document.querySelector('#footer_link_icons_container');
        if (footerElement) {
            footerElement.style.position = 'fixed';
            footerLinksIcons.style.display = 'none';
        } else {
            console.error('Footer element not found');
        }
    }

    componentWillUnmount() {
        const footerElement = document.querySelector('.footer');
        const footerLinksIcons = document.querySelector('#footer_link_icons_container');
        if (footerElement) {
            footerElement.style.position = 'absolute';
            footerLinksIcons.style.display = 'block';
        } else {
            console.error('Footer element not found');
        }
    }


    render() {
        return (
            <div className="intro_container">
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
                    <a href="mailto:andrii.hubarenko.developer@gmail.com" target="_blank" className="icon_link">
                        <img src={Mail32} alt="MailTo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/andrii-hubarenko-1a2988116/" target="_blank" className="icon_link"
                       rel="noreferrer">
                        <img src={In32} alt="LinkedIn"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default MyInvitationComponent;