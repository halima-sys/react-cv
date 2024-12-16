import React from 'react';
import Navigation from '../components/Navigation.js';
const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className='homeContent'>
                <div className='content'>
                    <h1>Halima El Rhazi</h1>
                    <h2>Développeuse Web et Mobile</h2>
                    <div className='pdf'>
                        <a href='./media/AmineSaddikiCV.pdf' target='blank'>Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
