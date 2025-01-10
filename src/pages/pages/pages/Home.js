import React from 'react';
import './Home.css';

import pag from '../assets/pag.jpg';
/* import Skills from '../components/Skills'; */
import css from '../assets/icons/css-3.png'; 
import js from '../assets/icons/js.png'; 
import nodee from "../assets/icons/nodejs.png"
import excel from '../assets/icons/excel.png';
import tableau from '../assets/icons/tableau.png';
import sql from '../assets/icons/database.png';
import html from '../assets/icons/htmlicon.png';
import power from '../assets/icons/powerpoint.png';
import rect from '../assets/icons/react.png';
import mng from '../assets/icons/mongo.png';






function Home() {
    return (
        
        <div className='first'>
          <div className='container'>
                <p className="tro"> <h1 className='intro'> Hi, glad you're checking me out.</h1>I'm Oyese Ayodele a software developer and a data analyst with a passion for creating innovative solutions,
                constantly looking for new challenges and opportunities to learn and grow.
             If you're looking for a reliable and skilled worker, I'm your guy!
             <div> <button className='butto'> Let's collaborate ?</button> </div>
             </p>
            
          <div className='contain'> <img className="img1" src={pag} alt="design" /> </div>
        </div>

        <div className='skills'>
             <div className='skillstext'>
            <h2 className='intro2'> Skills</h2> 
                    <h3>Web development</h3>
                    <ul className='ulh'>
                    <li>
                        <p >  
                        <img className='css' src={html} alt="css" />
                           HTML 
                        </p>
                     </li>
                    <li>
                        <p >  
                        <img className='css' src={css} alt="css" />
                           CSS    
                        </p>
                     </li>
                        <li>
                            <p>
                            <img className='css' src={js} alt="css" />
                              JavaScript</p>
                     </li>

                     <li>
                            <p>
                            <img className='css' src={rect} alt="react" />
                              React</p>
                     </li>

                     <li>
                        <p>
                        <img className='css' src={nodee} alt="css" />
                           Node.js</p>
                     </li>

                     <li>
                            <p>
                            <img className='css' src={mng} alt="mongo" />
                              MongoDB</p>
                     </li>

                    </ul>
                    <h3>Data Analysis</h3>
                    <ul className='ulh'>
                    <li>
                   
                      <p>
                        <img className='css' src={excel} alt="css" />
                           Excel</p>
                     </li>

                     <li>
                    
                    <p>
                    <img className='css' src={power} alt="css" />
                       Powerpoint</p>
                 </li>

                        <li>
                       
                            <p>
                            <img className='css' src={sql} alt="css" />
                              SQL</p>
                     </li>
                     <li>
                    
                        <p>
                        <img className='css' src={tableau} alt="css" />
                           Tableau</p>
                     </li>

                  

                    </ul>
                    </div>
                    <div className='skillstext2'>
                    <h2 className='intro2'>Certifications</h2>
                    <ul className='ulh' >
                    <li >
                        <p>Google data analysis.</p>
                     </li>
                        <li >
                            <p> Udemy The web Developer Bootcamp.</p>
                     </li>
                     <li >
                        <p >  Udemy sql certification. </p> 
                     </li>
                     <li >
                        <p >  Udemy Data Analysis & Visualization: Excel | Tableau certification.  </p> 
                     </li>
                    </ul>


                  
                    </div>
        </div>
       
    </div>
    

    
  

    );
}


export default Home;
