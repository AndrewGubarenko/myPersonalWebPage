import React from 'react';
import TaskPerformed from "../statics/icons/experience/Group 14.svg";

function SingleExperienceComponent({ experience, singleExperience, onClickPosition }) {
    return (
        <div className="background_block">
            <div className="block_container">
                <div className="two_thirds_column_container">
                    <div className="two_thirds_row_container">
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
                                <div className="narrow_block yellow_block yellow_block_experience expand_block_to_bottom">
                                    <p className="company-yellow-block">{singleExperience.company}</p>
                                    <p className="position-yellow-block">{singleExperience.position}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="two_thirds_row_container">
                        <div className="two_third_width_container margin_column_right last_block_container">
                            <div className="timeline">
                                {experience.map((item, index) => {
                                    const startDate = new Date(item.period.startDate);
                                    const endDate = new Date(item.period.endDate);
                                    const startYear = startDate.getFullYear();
                                    const startMonth = startDate.getMonth() + 1;
                                    const endYear = endDate.getFullYear();
                                    const endMonth = endDate.getMonth() + 1;
                                    const isSelected = item.id === singleExperience.id;

                                    const periodText = startYear === endYear && startMonth === endMonth
                                        ? `${startMonth}.${startYear}`
                                        : `${startMonth}.${startYear}-${endMonth}.${endYear}`;

                                    return (
                                        <div
                                            key={index}
                                            className="timeline-link"
                                            onClick={() => !isSelected && onClickPosition(item)}
                                            style={{ cursor: isSelected ? 'default' : 'pointer' }}
                                        >
                                            {isSelected ? (
                                                <div className="timeline-item timeline-item-selected">
                                                    <div className="timeline-content timeline-content-selected">
                                                        <p className="period_selected">
                                                            {periodText}
                                                        </p>
                                                    </div>
                                                    <div className="timeline-dot-selected"></div>
                                                </div>
                                            ) : (
                                                <div className="timeline-item timeline-item-underline">
                                                    <div className="timeline-content-last">
                                                        <p className="company-name">{item.company}</p>
                                                        <p className="period">
                                                            {startYear}{startYear !== endYear && `-${endYear}`}
                                                        </p>
                                                    </div>
                                                    <div className="timeline-dot timeline-dot-underline"></div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="narrow_column last_column">
                    <div className="narrow_block last_block_container expand_block_to_bottom">
                        <div className="icon_frame">
                            <img src={TaskPerformed} alt="BackEnd" className="block_icon" />
                        </div>
                        <div className="text_container">
                            <p className="sub_header">Task <br /> performed</p>
                            {singleExperience.tasks && (
                                <React.Fragment>
                                    {singleExperience.tasks.description && (
                                        <p className="text">{singleExperience.tasks.description}</p>
                                    )}
                                    <ul className="ul_experience_tasks">
                                        {singleExperience.tasks.points && singleExperience.tasks.points.map((point, index) => (
                                            <li key={index} className="list">{point}</li>
                                        ))}
                                    </ul>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleExperienceComponent;
