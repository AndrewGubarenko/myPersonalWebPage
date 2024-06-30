import React from 'react';
import SingleExperienceComponent from "../components/single_experience_component";
import withNavigation from '../hoc/WithNavigation';
import {isMobile} from "../handlers/RedirectHandler";
import MobileSingleExperienceComponent from "../components/mobile/mobile_single_experience_component";
import Service from "../services/service";

class SingleExperienceContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            experience: [],
            singleExperience: {}
        };
    }

    componentDidMount() {
        const { location } = this.props;
        const { state } = location;
        if (state && state.experience) {
            this.setState({
                experience: state.experience,
                singleExperience: state.singleExperience || {}
            });
        }
    }

    onClickDownloadCV = () => {
        Service.getCV().then(response => {
            if (response.ok) {
                alert("here is my CV");
            } else {
                alert("CV was not found");
            }
        });
    }

    onClickPosition = (item) => {
        this.setState({ singleExperience: item });
    };

    render() {
        return(
            <div>
                {isMobile ?
                    <MobileSingleExperienceComponent
                        singleExperience={this.state.singleExperience}
                        onClickDownloadCV={this.onClickDownloadCV}
                    />
                :
                <SingleExperienceComponent
                    experience={this.state.experience}
                    singleExperience={this.state.singleExperience}
                    onClickPosition={this.onClickPosition}
                />}
            </div>
        )
    }

}

export default withNavigation(SingleExperienceContainer);