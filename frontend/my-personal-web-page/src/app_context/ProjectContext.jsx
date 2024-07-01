import React, { createContext, useState, useMemo } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [project, setProject] = useState(null);

    const value = useMemo(() => ({ project, setProject }), [project]);

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    );
};