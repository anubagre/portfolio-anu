import React from 'react'
import '../Styles/hero.css'

export default function HERO() {
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
            <div className='hero-about-me'>I am a passionate Python Programmer... <a>Read more</a></div>
        </div>
    )
}
