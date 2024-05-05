import React from 'react';
import './About.css';
import VamsiPhoto from './me2.jpg'; // Import Vamsi's photo
import ShanmukaPhoto from './nattu.jpg'; // Import Shanmuka's photo
import SubramanyamPhoto from './subbu.jpg'; // Import Subramanyam's photo
import NaveenPhoto from './naveen.jpg'; // Import Naveen's photo

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    Our OpenCV project focuses on human pose detection, utilizing the powerful capabilities of OpenCV, a renowned computer vision library. Through this project, we aim to accurately identify and track human body poses in images or video streams. Leveraging preprocessing techniques and advanced pose estimation algorithms such as OpenPose or PoseNet, we extract key features and evaluate the system's performance using metrics like accuracy and precision. Despite challenges such as occlusions and computational constraints, our project demonstrates promising results, showcasing the potential of OpenCV in facilitating robust human pose detection across various applications.
                </p>
                <div className="developer-info">
                    <h4>About Team</h4>
                    <p className="about-content"> 
                        <img src={VamsiPhoto} alt="Vamsi" className="developer-photo" /> 
                        <span>M.H.K.VAMSI - 21B21A4265</span> <br />
                        <img src={ShanmukaPhoto} alt="Shanmuka" className="developer-photo" /> 
                        <span>K.SHANMUKA - 216Q1A4254</span> <br />
                        <img src={SubramanyamPhoto} alt="Subramanyam" className="developer-photo" /> 
                        <span>P.SUBRAMANYAM - 21B21A4243</span> <br />
                        <img src={NaveenPhoto} alt="Naveen" className="developer-photo" /> 
                        <span>K.NAVEEN - 216Q1A4276</span>
                    </p>
                    <h4>Contact</h4>
                    <a href="https://www.linkedin.com/in/vamsi-mypala-946837239/"><p className="about-content">Linkedin</p></a>
                    <a href="https://github.com/Vamsimypala"><p  className="about-content">GitHub</p></a>
                </div>
            </div>
        </div>
    );
}
