import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobile = /mobile|android|iphone|ipad/.test(userAgent);

        if (isMobile && !window.location.pathname.startsWith('/m')) {
            navigate('/m' + window.location.pathname);
        } else if (!isMobile && window.location.pathname.startsWith('/m')) {
            navigate(window.location.pathname.substring(2));
        }
    }, [navigate]);

    return null;
};

export default RedirectHandler;
