import React from 'react';

const Experience = () => {
    return (
        <div className='experience'>
            <h3>Expérience</h3>
            <div className='exp-1'>
                <h4>Développeur Freelance</h4>
                <h5>Depuis 04/2023</h5>
                <p>- Création d'applications web java avec le Framework SPRINGBOOT.<br></br>
                   - Création de BDD SQL et MySQL.<br></br>
                   - Création d'applications Mobile avec FLUTTER (DART).<br></br> 
                   - Création de divers sites web avec Wordpress<br></br>
                   - Création de sites web avec React<br></br>
                   - Travail en équipe sur "GITHUB".</p>
            </div>

            <div className='exp-2'>
                <h4>Agent Développement Administratif</h4>
                <h5>2021-2023</h5>
                <p>Gestion présence de 600 employés</p>
            </div>
                
            <div className='exp-3'>
                <h4>Analyste facturation, recouvrement et taxation douanière</h4>
                <h5>2009-2021</h5>
                <p>Gestion et analyse de la facturation, le recouvrement de créances et la déclaration douanières des produits pétroliers</p>
            </div>

            <div className='exp-4'>
                <h4>Technicien laboratoire à VALEO/LEONI</h4>
                <h5>2006-2009</h5>
                <p>Effectuer des essais pour le contrôle qualité</p>
            </div>

        </div>
    );
};

export default Experience;