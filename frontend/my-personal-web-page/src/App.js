import './App.css';

import React from 'react';
import {Route, Routes, HashRouter} from 'react-router-dom';

import { Layout } from "./containers/Layout";
import HomePageContainer from "./containers/home_page_container";
import AboutComponent from "./components/about_component";

function App() {
    return (
        <div className='app'>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePageContainer/>}/>
                        <Route path="/about" element={<AboutComponent/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </div>

    );
}

export default App;
