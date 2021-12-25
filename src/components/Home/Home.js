import React from 'react';

import Main from "../Main/Main";
import BackgroundParticles from '../Background/BackgroundParticles';

import "./Home.css";

export default function Home() {

    return (
        <div className='home'>
            <BackgroundParticles />
            <Main />
        </div>
    );
}
