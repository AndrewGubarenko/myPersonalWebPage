import React, {Component} from "react";
import bgVideo from "../../statics/bg-video.mp4";
import MobileHomePageComponent from "../../components/mobile/mobile_home_page_component";

class M_HomePageContainer extends Component {
    render() {
        return (
            <div className="mobile-video-background">
                <video autoPlay muted loop>
                    <source src={bgVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <MobileHomePageComponent/>
            </div>
        );
    }
}

export default M_HomePageContainer;