import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Testimonials</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul>
            </div>
        );
    }
}

export default Header;