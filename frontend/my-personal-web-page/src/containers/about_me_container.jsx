import React from 'react';

import AboutMeComponent from '../components/about_me_component';
import MyTopSkillsComponent from "../components/my_top_skills_component";


class AboutMeContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {

        return(
            <div className="about_me_container">
                <AboutMeComponent />,
                <MyTopSkillsComponent />
            </div>
        );
    }
}

export default AboutMeContainer;