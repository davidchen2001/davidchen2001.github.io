import React from 'react';

import WallPaper from '../../assets/YourNameWallpaper.mp4';
import AboutMe from '../../components/AboutMe/AboutMe';
import "./Home.css"

export default function Home() {
    return (
        <div>
            <video className='showcase-video' autoPlay loop muted>
                <source src={WallPaper} type='video/mp4' />
            </video>
            <AboutMe />
        </div>
    );
}
