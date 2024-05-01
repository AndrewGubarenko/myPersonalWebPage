import React from 'react';

class Footer extends React.Component {
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

export default Footer;