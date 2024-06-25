import {Link} from "react-router-dom";

function HeaderComponent() {

    return (
        <div className="header">
            <ul>
                <li><Link to="/" className="header_link">Home</Link></li>
                <li><Link to="/about" className="header_link">About</Link></li>
                <li><Link to="/experience" className="header_link">Experience</Link></li>
                <li><Link to="/testimonials" className="header_link">Testimonials</Link></li>
                <li><Link to="/projects" className="header_link">Projects</Link></li>
                <li><Link to="/contacts" className="header_link">Contacts</Link></li>
                <li><Link to="/codelab" className="header_link">CodeLab</Link></li>
            </ul>
        </div>
    );
}

export default HeaderComponent;