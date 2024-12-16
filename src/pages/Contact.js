import React from 'react';
import Navigation from '../components/Navigation.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                <div className='header'></div>
                <div className='contactBox'>
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Lévis</span>
                        </li>
                        <li>
                        <i className='fas fa-mobile-alt'></i>
                        <CopyToClipboard text="+14189327917">
                            <span className='clickInput' 
                            onClick={() => {alert('Téléphone copié !');}}>
                                +1 418 932 7917
                            </span>
                        </CopyToClipboard>
                        </li>
                        <li>
                        <i className='fas fa-regular fa-at'></i>
                        <CopyToClipboard text="halimaelrhazi@gmail.com">
                            <span className='clickInput' 
                            onClick={() => {alert('E-mail copié !');}}>
                                halimaelrhazi@mail.com
                            </span>
                        </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className='socialNetwork'>
                    <ul>
                        <a href='https://www.linkedin.com/in/amine-saddiki-125248284pro/' target='blank'
                        rel='nooppener noreferrer'>
                            <h4>LinkedIn</h4>
                            <i className='fab fa-linkedin'></i>
                        </a>
                        <a href='https://github.com/asaddiki?tab=repositories' target='blank'
                        rel='nooppener noreferrer'>
                            <h4>Github</h4>
                            <i className='fab fa-github'></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
