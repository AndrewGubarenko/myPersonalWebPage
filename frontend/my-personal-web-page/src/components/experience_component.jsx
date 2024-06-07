import CV from "../statics/icons/experience/ion_document.svg";
import Rectangle from "../statics/icons/experience/Rectangle 24.svg";

import {Link} from "react-router-dom";

function ExperienceComponent({ experience }) {
    return(
        <div className="background_block">
            <div className="row_container">
                <div className="block_container">
                    <div className="wide_column margin_column_right">
                        <div className="wide_block">
                            <div className="text_container">
                                <p className="main_header reduce_line_height">Experience</p>
                                <p className="text increase_margin">
                                    A story of growth, learning and professional development
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="narrow_column">
                        <div className="narrow_block yellow_block expand_block_to_bottom">
                            <p id="download_cv">
                                Download My CV
                            </p>
                            <img src={CV} alt="CV" className="block_icon"/>
                        </div>
                    </div>

                    <div className="narrow_column last_column">
                        <img src={Rectangle} alt="Rectangle" className="image_block "/>
                    </div>
                </div>
            </div>

            <div className="row_container">
                <div className="full_width_container">

                    <div className="timeline">
                        {experience.map((item, index) => {
                            const startYear = new Date(item.period.startDate).getFullYear();
                            const endYear = new Date(item.period.endDate).getFullYear();
                            const isLast = index === experience.length - 1;

                            return (
                                <Link to="/#" key={index} className="timeline-link">
                                    <div className="timeline-item">
                                        <div className={`timeline-content ${isLast ? 'timeline-content-last' : ''}`}>
                                            <p className="company-name">{item.company}</p>
                                            <p className="period">
                                                {startYear}{startYear !== endYear && `-${endYear}`}
                                            </p>
                                        </div>
                                        <div className={`timeline-dot ${isLast ? 'timeline-dot-last' : ''}`}></div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ExperienceComponent