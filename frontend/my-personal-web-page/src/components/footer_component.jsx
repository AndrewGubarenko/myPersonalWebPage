import React from 'react';

class FooterComponent extends React.Component {
    render() {
        return(
            <div className="footer">
                <ul>
                    <li>© Designed by Alisa Hubarenko</li>
                    <li>{new Date().getFullYear()} All Rights Reserved</li>
                </ul>
            </div>
        );
    }
}

export default FooterComponent;