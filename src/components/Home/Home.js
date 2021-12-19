import React from 'react';

import WallPaper from '../../assets/YourNameWallpaper.mp4';
import Main from "../Main/Main";
import "./Home.css"

export default function Home() {
    return (
        <div className='home'>
            <video className='showcase-video' autoPlay loop muted>
                <source src={WallPaper} type='video/mp4' />
            </video>
            <Main />
        </div>
    );
}
