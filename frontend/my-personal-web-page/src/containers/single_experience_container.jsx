import React from 'react';
import SingleExperienceComponent from "../components/single_experience_component";
import withNavigation from '../hoc/withNavigation';

class SingleExperienceContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            experience: [],
            singleExperience: {}
        };
    }

    componentDidMount() {
        const { state } = this.props.location;
        console.log(state);
        if (state && state.experience) {
            this.setState(prevState => ({
                experience: state.experience,
                singleExperience: state.singleExperience || prevState.singleExperience
            }));
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