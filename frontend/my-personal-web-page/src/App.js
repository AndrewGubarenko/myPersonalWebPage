import './App.css';

import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

import { Layout } from "./containers/Layout";
import HomePageContainer from "./containers/home_page_container";
import AboutComponent from "./components/about_component";
import TestimonialsComponent from "./components/testimonials_component";
import ProjectsComponent from "./components/projects_component";
import ContactsContainer from "./containers/contacts_container";
import TerminalContainer from "./containers/terminal_container";
import ExperienceContainer from "./containers/experience_container";
import SingleExperienceContainer from "./containers/single_experience_container";

function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePageContainer />}/>
                        <Route path="/about" element={<AboutComponent />}/>
                        <Route path="/experience" element={<ExperienceContainer />}/>
                        <Route path="/position" element={<SingleExperienceContainer />}/>
                        <Route path="/testimonials" element={<TestimonialsComponent />}/>
                        <Route path="/projects" element={<ProjectsComponent />}/>
                        <Route path="/contacts" element={<ContactsContainer />}/>
                        <Route path="/codelab" element={<TerminalContainer />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
