import React from 'react';
import { Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = ({ children }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {children}
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
