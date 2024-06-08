import './App.css';

import React from 'react';
import {Route, Routes, HashRouter} from 'react-router-dom';

import { Layout } from "./containers/Layout";
import HomePageContainer from "./containers/home_page_container";
import AboutComponent from "./components/about_component";
import ExperienceContainer from "./containers/experience_container";
import SingleExperienceContainer from "./containers/single_experience_container"

function App() {
    return (
        <div className='app'>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePageContainer/>}/>
                        <Route path="/about" element={<AboutComponent/>}/>
                        <Route path="/experience" element={<ExperienceContainer/>}/>
                        <Route path="/position" element={<SingleExperienceContainer/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </div>

    );
}

export default App;
