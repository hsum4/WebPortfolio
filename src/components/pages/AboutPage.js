import React from "react";
import Layout from '../Layout';
import './AboutPage.scss'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaSass, FaJsSquare } from 'react-icons/fa';
import { SiCsharp, SiUnity, SiMysql } from "react-icons/si";

const skills = [
    { icon: <FaReact />, name: 'React'},
    { icon: <FaNodeJs />, name: 'Node.js'},
    { icon: <FaHtml5 />, name: 'HTML5'},
    { icon: <FaCss3Alt />, name: 'CSS3'},
    { icon: <FaPython />, name: 'Python'},
    { icon: <FaSass />, name: 'Sass'},
    { icon: <FaJsSquare />, name: 'JavaScript'},
    { icon: <SiCsharp />, name: 'C#'},
    { icon: <SiUnity />, name: 'Unity'},
    { icon: <SiMysql />, name: 'MySQL'}
];

const AboutPage = () => {
    return (
        <Layout title="ABOUT">
            <div className="aboutpage">
                <div className="content-box">
                    <h1>About Me</h1>
                    <p>I'm Lance Lavador, a Computer Science student at Mapua Malayan Colleges Laguna. I'm passionate about web development, with a keen interest in both front-end and back-end technologies. When I'm not coding, you can find me creating music, particularly instrumentals.</p>
                    <div className="skills">
                        <h2>Skills</h2>
                        <div className="skills-list">
                            {skills.map((skill, index) => (
                                <div className="skill-item" key={index}>
                                    <span className="skill-icon">{skill.icon}</span>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutPage;