import {Component} from "react";
import MobileHeaderComponent from "../../components/mobile/mobile_header_component";

class MobileHeaderContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            burgerDisplay: "block",
            burgerZIndex: "3",
            closeMenuDisplay: "none",
            closeZIndex: "0"
        };
    }

    onClickBurger = () => {
        console.log("burger clicked");
        this.setState({
            burgerDisplay: "none",
            burgerZIndex: "0",
            closeMenuDisplay: "flex",
            closeZIndex: "3"
        });
    }

    onClickClose = () => {
        console.log("close clicked");
        this.setState({
            burgerDisplay: "block",
            burgerZIndex: "3",
            closeMenuDisplay: "none",
            closeZIndex: "0"
        });
    }

    render() {
        return (
            <MobileHeaderComponent
                onClickBurger={this.onClickBurger}
                onClickClose={this.onClickClose}
                burgerDisplay={this.state.burgerDisplay}
                burgerZIndex={this.state.burgerZIndex}
                closeMenuDisplay={this.state.closeMenuDisplay}
                closeZIndex={this.state.closeZIndex}
            />
        );
    }
}

export default MobileHeaderContainer;
