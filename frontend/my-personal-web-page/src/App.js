import './App.css';

import BackgroundVideo from "./components/background_video_component";
import HeaderComponent from "./components/header_component";
import FooterComponent from "./components/footer_component";
import AboutMeContainer from "./containers/about_me_container";

function App() {
    return (
        <div className="app">
            <BackgroundVideo/>
            <HeaderComponent/>

            <AboutMeContainer/>

            <FooterComponent/>
        </div>
    );
}

export default App;
