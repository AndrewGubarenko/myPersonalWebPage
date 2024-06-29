import './App.css';

import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import { Layout } from "./containers/Layout";
import HomePageContainer from "./containers/home_page_container";
import AboutComponent from "./components/about_component";
import TestimonialsComponent from "./components/testimonials_component";
import ProjectsComponent from "./components/projects_component";
import ContactsContainer from "./containers/contacts_container";
import TerminalContainer from "./containers/terminal_container";
import ExperienceContainer from "./containers/experience_container";
import SingleExperienceContainer from "./containers/single_experience_container";
import AnimatedRoutes from './hoc/AnimatedRoutes';
import RedirectHandler from './handlers/RedirectHandler'

import MobileHomePageContainer from "./containers/mobile/mobile_home_page_container";
import {MobileLayout} from "./containers/mobile/MobileLayout";
import MobileAboutComponent from "./components/mobile/mobile_about_component";
import MobileTestimonialsComponent from "./components/mobile/mobile_testimonials_component";
import MobileContactsContainer from "./containers/mobile/mobile_contacts_container";

function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <RedirectHandler />
                <AnimatedRoutes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePageContainer/>}/>
                        <Route path="/about" element={<AboutComponent/>}/>
                        <Route path="/experience" element={<ExperienceContainer/>}/>
                        <Route path="/position" element={<SingleExperienceContainer/>}/>
                        <Route path="/testimonials" element={<TestimonialsComponent/>}/>
                        <Route path="/projects" element={<ProjectsComponent/>}/>
                        <Route path="/contacts" element={<ContactsContainer/>}/>
                        <Route path="/codelab" element={<TerminalContainer/>}/>
                    </Route>

                    {/*Mobile pages*/}
                    <Route path="/" element={<MobileLayout/>}>
                        <Route path="/m" index element={<MobileHomePageContainer/>}/>
                        <Route path="/m/about" index element={<MobileAboutComponent/>}/>
                        <Route path="/m/testimonials" index element={<MobileTestimonialsComponent/>}/>
                        <Route path="/m/contacts" index element={<MobileContactsContainer/>}/>
                    </Route>

                </AnimatedRoutes>
            </BrowserRouter>
        </div>
    );
}

export default App;
