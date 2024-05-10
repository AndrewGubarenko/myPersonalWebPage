import './App.css';

import React from 'react';
import {Route, Routes, HashRouter} from 'react-router-dom';

import { Layout } from "./containers/Layout";
import AboutMeContainer from "./containers/about_me_container";

function App() {
    return (
        <div className='app'>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<AboutMeContainer/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </div>

    );
}

export default App;
