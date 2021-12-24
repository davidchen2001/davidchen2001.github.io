import React from 'react';

import Main from "../Main/Main";
import Background from "../Background/Background";
import "./Home.css";

export default function Home() {

    return (
        <div className='home'>
            <Background />
            <Main />
        </div>
    );
}
