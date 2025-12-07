import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./PageTransition.css";

const PageTransition = ({ children }) => {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Key on pathname forces re-render and re-animation
    return (
        <div className="page-transition" key={pathname}>
            {children}
        </div>
    );
};

export default PageTransition;
