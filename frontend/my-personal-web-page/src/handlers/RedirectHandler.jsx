import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const userAgent = navigator.userAgent.toLowerCase();
const isMobile = /mobile|android|iphone|ipad/.test(userAgent);

const RedirectHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isMobile && !window.location.pathname.startsWith('/m')) {
            navigate('/m' + window.location.pathname, { replace: true });
        } else if (!isMobile && window.location.pathname.startsWith('/m')) {
            navigate(window.location.pathname.substring(2), { replace: true });
        }
    }, [navigate]);

    return null;
};

export { isMobile };

export default RedirectHandler;
