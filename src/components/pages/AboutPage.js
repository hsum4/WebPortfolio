import React from "react";
import Layout from '../Layout';
import './AboutPage.scss'

const AboutPage = () => {
    return (
        <Layout title="ABOUT">
            <div className="aboutpage">
                <h1>About Me</h1>
                <p>This is the about page.</p>
            </div>
        </Layout>
    );
};

export default AboutPage;