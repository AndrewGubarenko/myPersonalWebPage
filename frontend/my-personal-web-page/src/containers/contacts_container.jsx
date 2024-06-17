import React from "react";
import ContactsComponent from "../components/contacts_component";

class ContactsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value});
    }

    onChangeEmail = (event) => {
        this.setState({email: event.target.value});
    }

    onChangeMessage = (event) => {
        this.setState({message: event.target.value});
    }

    onClickSubmit = () => {
        alert(this.state.name + " " + this.state.email + " " + this.state.message)
        this.clearState();
    }

    clearState = () => {
        this.setState({name: "", email: "", message: ""});
    }

    render() {
        return(
            <ContactsComponent
                onChangeName={this.onChangeName}
                onChangeEmail={this.onChangeEmail}
                onChangeMessage={this.onChangeMessage}
                onClickSubmit={this.onClickSubmit}
            />
        );
    }

}

export default ContactsContainer