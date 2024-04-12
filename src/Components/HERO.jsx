import React, { useState } from 'react'
import '../Styles/hero.css'

export default function HERO() {
    let text1 = 'I am a passionate Python Programmer...';
    let text2 = `<p>I am a passionate <b>Python Programmer</b> and a <b>Data Science</b> enthusiast who loves to explore new challenges and learn new skills. I have experience in applying <b>Machine Learning</b> techniques to solve real-world problems, such as predicting prices and demand of goods, sentiment analysis, image classification, and recommendation systems. I am proficient in using various python libraries and frameworks, such as tensorflow, pandas, numpy, scikit-learn, tkinter, network, ntlk, selenium and turtle. I am also familiar with <b>SQL</b> databases, such as MySQL.</p>    <p>Besides my technical skills, I also have a flair for <b>Content Writing</b>, and effective communication. I enjoy writing engaging and informative articles, blogs, poetries and reports on various topics. In addition, I have a knack for <b>Event Management</b> and organizing. I have been involved in planning and executing various events and workshops at college and school levels. I am always eager to learn new things and expand my horizons.</p>`;
    
    const [profileText, setProfileText] = useState(text1);
    const [buttonText, setButtonText] = useState('Read more');

    const toggleText = () => {
        if(buttonText=='Read more'){
            document.getElementById('profile-content').innerHTML = text2;
            setButtonText('Read less');
        }
        else{
            document.getElementById('profile-content').innerHTML = text1;
            setButtonText('Read more');
        }
    }

    return (
        <div className='hero-main-div'>
            <div className='hero-main'>
                <div className='hero-profile-img'>
                    <img src="./Images/anu.jpg" alt="" />
                </div>
                <div className='hero-profile-name'>
                    <h1>Anu Bagre</h1>
                    <h2>Machine Learning Enthusiast</h2>
                    <div>from Vidisha, M.P.</div>
                </div>
                <div className='hero-social-links'>
                    <a href="https://www.linkedin.com/in/anu-bagre" target='_blank'><img src="./Images/linkedin.png" alt="linkedin" /></a>
                    <a href="https://github.com/anubagre" target='_blank'><img src="./Images/github.png" alt="github" /></a>
                    <a href="https://leetcode.com/anubagre/" target='_blank'><img src="./Images/leetcode.png" alt="leetcode" /></a>
                    <a href="" target='_blank'><img src="./Images/gmail.png" alt="email" /></a>
                </div>
            </div>
            <span className='hero-about-me' id='profile-content'>{profileText} </span><a className='read-more-button' onClick={toggleText}>{buttonText}</a>
        </div>
    )
}
