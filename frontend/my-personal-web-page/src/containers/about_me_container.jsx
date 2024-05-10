import React from 'react';

import AboutMeComponent from '../components/about_me_component';
import MyTopSkillsComponent from "../components/my_top_skills_component";
import bgVideo from "../statics/bg-video.mp4";


function AboutMeContainer() {

    return (
        <div className="main-container">
            <div className="video-background">
                <video autoPlay muted loop>
                    <source src={bgVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="about_me_container">
                    <AboutMeComponent/>,
                    <MyTopSkillsComponent/>
                </div>
            </div>
        </div>

    );
}

export default AboutMeContainer;