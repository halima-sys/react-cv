import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-bicycle'></i>
                    <span> Bicyclette</span>

                </li>
                <li className='hobby'>
                    <i className='fas fa-tools'></i>
                    <span> Bricolage</span>

                </li>
                <li className='hobby'>
                    <i className='fas fa-gamepad'></i>
                    <span> Jeux vidéo</span>

                </li>
                <li className='hobby'>
                    <i className='fas fa-rocket'></i>
                    <span> Espace</span>

                </li>
                <li className='hobby'>
                    <i className='fas fa-film'></i>
                    <span> Films</span>

                </li>
            </ul>
        </div>
    );
};

export default Hobbies;