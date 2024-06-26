import React from "react";
import ContactsComponent from "../components/contacts_component";
import Service from "../services/service";

const border_alert = "1px solid #FF2800";
const box_shadow_alert = "0 0 10px #FF2800";
const none = "none";

class ContactsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            alert_outline_border_name: none,
            alert_outline_boxShadow_name: none,
            alert_outline_border_email: none,
            alert_outline_boxShadow_email: none,
            alert_outline_border_message: none,
            alert_outline_boxShadow_message: none,
        };
    }

    onChangeName = (event) => {
        this.setState({
            alert_outline_border_name: none,
            alert_outline_boxShadow_name: none,
            name: event.target.value
        });
    }

    onChangeEmail = (event) => {
        this.setState({
            alert_outline_border_email: none,
            alert_outline_boxShadow_email: none,
            email: event.target.value
        });
    }

    onChangeMessage = (event) => {
        this.setState({
            alert_outline_border_message: none,
            alert_outline_boxShadow_message: none,
            message: event.target.value
        });
    }

    onClickSubmit = () => {
        if (this.state.name.trim().length === 0) {
            this.setState({
                alert_outline_border_name: border_alert,
                alert_outline_boxShadow_name: box_shadow_alert
            });
        } else if (this.state.email.trim().length === 0) {
            this.setState({
                alert_outline_border_email: border_alert,
                alert_outline_boxShadow_email: box_shadow_alert
            });
        } else if (this.state.message.trim().length === 0) {
            this.setState({
                alert_outline_border_message: border_alert,
                alert_outline_boxShadow_message: box_shadow_alert
            });
        } else {
            let email = this.state.name + " " + this.state.email + " " + this.state.message;
            Service.sendEmail(email).then((data) => {
                if (data.ok) {
                    this.clearState();
                } else {
                    alert(data.status + " " + data.statusText);
                    this.clearState();
                }
            });
        }
    }

    clearState = () => {
        this.setState({
            name: "",
            email: "",
            message: "",
            alert_outline_border_name: none,
            alert_outline_boxShadow_name: none,
            alert_outline_border_email: none,
            alert_outline_boxShadow_email: none,
            alert_outline_border_message: none,
            alert_outline_boxShadow_message: none
        });
    }

    render() {
        return(
            <ContactsComponent
                name={this.state.name}
                email={this.state.email}
                message={this.state.message}
                onChangeName={this.onChangeName}
                onChangeEmail={this.onChangeEmail}
                onChangeMessage={this.onChangeMessage}
                onClickSubmit={this.onClickSubmit}
                alert_outline_border_name={this.state.alert_outline_border_name}
                alert_outline_boxShadow_name={this.state.alert_outline_boxShadow_name}
                alert_outline_border_email={this.state.alert_outline_border_email}
                alert_outline_boxShadow_email={this.state.alert_outline_boxShadow_email}
                alert_outline_border_message={this.state.alert_outline_border_message}
                alert_outline_boxShadow_message={this.state.alert_outline_boxShadow_message}
            />
        );
    }

}

export default ContactsContainer