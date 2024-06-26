import React from 'react';
import ExperienceComponent from '../components/experience_component';
import withNavigation from '../hoc/WithNavigation';
import Service from "../services/service";

const experience = [
    {
        "id": 1,
        "company": "ETIYA",
        "period": {
            "startDate": 1652389200000,
            "endDate": 1704492000000
        },
        "position": "Java Developer",
        "tasks": {
            "description": "Development of extensive web resources dedicated to personal account management and customer service administration.",
            "points": [
                "Design and Develop Robust REST API",
                "Facilitate External System Integration",
                "Scripting and Database Management",
                "Effective communication with Stakeholders",
                "Collaboration with Front-End Team",
                "Quality Assurance and Testing Support",
                "Security Implementation",
                "Continuous Improvement and Innovation"
            ]
        }
    },
    {
        "id": 2,
        "company": "ITVDN",
        "period": {
            "startDate": 1682888400000,
            "endDate": 1690837200000
        },
        "position": "Java education content creator",
        "tasks": {
            "description": "Conceptualized, scripted, and produced engaging educational content.",
            "points": [
                "Developed comprehensive educational programs tailored for Java developers.",
                "Produced engaging and informative educational content, including presentations, exams, and software programs",
                "Designed and produced instructional video",
                "Designed and implemented effective educational applications, ensuring a thorough understanding of Java, Spring and JPA/Hibernate concepts"
            ]
        }
    },
    {
        "id": 3,
        "company": "ATCO Trade Union",
        "period": {
            "startDate": 1619816400000,
            "endDate": 1651352400000
        },
        "position": "Fullstack Developer",
        "tasks": {
            "description": "To offer accessible union announcements while providing exclusive access to essential documents reserved solely for union members.",
            "points": [
                "Server-Side Development",
                "Frontend Development",
                "Comprehensive Database Modeling",
                "API Integration and Communication",
                "Security Considerations.",
                "DevOps and Deployment",
                "User Interface/Experience Optimization",
                "Version Control and Collaboration",
                "Testing Strategies",
                "Continuous Learning and Exploration"
            ]
        }
    },
    {
        "id": 4,
        "company": "With Care in Heart",
        "period": {
            "startDate": 1456783200000,
            "endDate": 1467320400000
        },
        "position": "Web Developer",
        "tasks": {
            "description": "Leveraging a diverse set of technologies, I seamlessly integrated HTML5, CSS3, JavaScript, AJAX, PHP, and MySQL databases.",
            "points": ["Server-side scripting using PHP",
                "Frontend Development",
                "Comprehensive Database Modeling",
                "DevOps and Deployment",
                "User Interface/Experience Optimization"]
        }
    },
    {
        "id": 5,
        "company": "UkSatSe",
        "period": {
            "startDate": 1652389200000,
            "endDate": 1704492000000
        },
        "position": "Air Traffic Controller",
        "tasks": {
            "description": "Air traffic control entails multitasking within a dynamic and constantly evolving environment. Success hinges on individual dedication as well as seamless teamwork. Leveraging radar systems and various radio equipment, my colleagues and I diligently strive to uphold flight safety. Effective English communication among pilots and adjacent sector controllers plays a pivotal role in this intricate process, facilitating clear and efficient exchanges crucial for maintaining airspace integrity and ensuring the well-being of all passengers and crew.",
            "points": []
        }
    }
];

class ExperienceContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            experience: experience
        };
    }

    onClickPosition = (item) => {
        const { navigate } = this.props;
        navigate('/position', {
            state: {
                experience: this.state.experience,
                singleExperience: item
            }
        });
    };

    onClickDownloadCV = () => {
        Service.getCV().then(response => {
            if (response.ok) {
                alert("here is my CV");
            } else {
                alert("CV was not found");
            }
        });
    }

    render() {
        return (
            <ExperienceComponent
                experience={this.state.experience}
                onClickPosition={this.onClickPosition}
                onClickDownloadCV={this.onClickDownloadCV}
            />
        );
    }
}

export default withNavigation(ExperienceContainer);
