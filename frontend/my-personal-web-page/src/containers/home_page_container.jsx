import React from 'react';

import MyInvitationComponent from '../components/my_invitation_component';
import MyTopSkillsComponent from "../components/my_top_skills_component";
import bgVideo from "../statics/bg-video.mp4";


function HomePageContainer() {

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

export default HomePageContainer;