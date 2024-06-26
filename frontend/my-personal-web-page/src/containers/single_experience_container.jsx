import React from 'react';
import SingleExperienceComponent from "../components/single_experience_component";
import withNavigation from '../hoc/WithNavigation';

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

    onClickPosition = (item) => {
        this.setState({ singleExperience: item });
    };

    render() {
        return(
            <SingleExperienceComponent
                experience={this.state.experience}
                singleExperience={this.state.singleExperience}
                onClickPosition={this.onClickPosition}
            />
        )
    }

}

export default withNavigation(SingleExperienceContainer);