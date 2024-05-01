import bgVideo from '../statics/bg-video.mp4';

function BackgroundVideo() {
    return(
        <div className="main-container">
            <div className="video-background">
                <video autoPlay muted loop >
                    <source src={bgVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default BackgroundVideo;