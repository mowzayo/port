import React from 'react';
import './Home.css';
import designImg from '../assets/design.jpg'; 


function Home() {
    return (
        
        <div className='first'>
          <div className='container'>
            
            <div className="text-container">

             
            <p className="intro">Hi, welcome to my world.</p>
                <p className="tro">I'm Oyese Ayodele a software developer and a data analyst with a passion for creating innovative solutions,
                constantly looking for new challenges and opportunities to learn and grow.
             If you're looking for a reliable and skilled worker, I'm your guy!
             
             </p>
             
             
            </div>
          
            <img className="img1" src={designImg} alt="design" />
        </div>
        <div className='skills'>
             <div className='skillstext'>
            <h2 className='intro2'> Skills</h2>
                    <h3>Web development</h3>
                    <ul className='ulh'>
                    <li>
                        <p>HTML/CSS</p>
                     </li>
                        <li>
                            <p>JavaScript</p>
                     </li>
                     <li>
                        <p>Node.js</p>
                     </li>

                    </ul>
                    <h3>Data analyst</h3>
                    <ul className='ulh'>
                    <li>
                        <p>Excel/Powerpoint</p>
                     </li>
                        <li>
                            <p>SQL</p>
                     </li>
                     <li>
                        <p>Tableau</p>
                     </li>

                    </ul>
                    </div>
        </div>
       
    </div>
    


    );
}

export default Home;
