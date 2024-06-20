import React, {Component} from 'react';

import MyInvitationComponent from '../components/my_invitation_component';
import MyTopSkillsComponent from "../components/my_top_skills_component";
import bgVideo from "../statics/bg-video.mp4";


class HomePageContainer extends Component {

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
            <div className="main-container">
                <div className="video-background">
                    <video autoPlay muted loop>
                        <source src={bgVideo} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div className="about_me_container">
                        <MyInvitationComponent/>,
                        <MyTopSkillsComponent/>
                    </div>
                </div>
            </div>

        );
    }
}

export default HomePageContainer;