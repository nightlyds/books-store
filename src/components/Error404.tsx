import React from "react";
import Footer from "./Footer";

const Error404 = (): JSX.Element => {
    return (
        <div className="error-404">
            <div className="error-404-content">
                <h2 className="error-404-title">404</h2>
                <span className="error-404-text">Page not found!</span>
            </div>
            <Footer />
        </div>
    );
};

export default Error404;
