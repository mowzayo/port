import React, { useState}  from "react";
import designImgg from '../assets/design.jpg'; 
import "./webDeveloper.css";


function WebDeveloper(){

    const [expanded, setExpanded] = useState([false]);

    // Toggle function for individual content blocks
    const toggleContent = (index) => {
        setExpanded(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index]; // Toggle the state for the clicked button's content
            return newState;
        });
    };

    return (


        
    <div className="contain"> 
         <h1 className="titles"> WEB JOBS I'VE HANDLED </h1> 

       

            <div className="front"> 
            <div className="view"> <img src={designImgg} alt="design" className="imgg"/> </div>
              <div className="views"> 
              <p className="vie">
              <h2 className="ht"> FrontEnd Job </h2> 
            {expanded[0] ? (
              // Expanded content
              <>
               I used SQL to design and implement the database.
                 I created healthy life hospital database to store patient information and
                  medical records.  
                 It includes patient demographics, medical history, treatment plans etc. 
                 The database is designed to be scalable and secure, i also performed 
                 validation checks to ensure data integrity and consistency.  
              </>
            ) : (
              // Collapsed content
              <>
                 I used SQL to design and implement the database.
                {/* You can keep this shortened description as a preview */}
              </>
            )}
          </p>
          <button className="but" onClick={() => toggleContent(0)}>
            {expanded[0] ? "Show Less" : "Show More"}
          </button>
        </div>
              </div>

              <div className="front1"> 
              <div className="view"> <img src={designImgg} alt="design" className="imgg"/> </div>
              <div className="views"> 
              <p className="vie">
              <h2 className="ht"> FrontEnd Job </h2> 
            {expanded[1] ? (
              // Expanded content
              <>
               I used SQL to design and implement the database.
                 I created healthy life hospital database to store patient information and
                  medical records.  
                 It includes patient demographics, medical history, treatment plans etc. 
                 The database is designed to be scalable and secure, i also performed 
                 validation checks to ensure data integrity and consistency.  
              </>
            ) : (
              // Collapsed content
              <>
                 I used SQL to design and implement the database.
                {/* You can keep this shortened description as a preview */}
              </>
            )}
          </p>
          <button className="but" onClick={() => toggleContent(1)}>
            {expanded[1] ? "Show Less" : "Show More"}
          </button>
        </div>
        
              </div>

              <div className="front2">
              <div className="view"> <img src={designImgg} alt="design" className="imgg"/> </div>
              <div className="views"> 
              <p className="vie">
              <h2 className="ht"> FrontEnd Job </h2> 
            {expanded[2] ? (
              // Expanded content
              <>
               I used SQL to design and implement the database.
                 I created healthy life hospital database to store patient information and
                  medical records.  
                 It includes patient demographics, medical history, treatment plans etc. 
                 The database is designed to be scalable and secure, i also performed 
                 validation checks to ensure data integrity and consistency.  
              </>
            ) : (
              // Collapsed content
              <>
                 I used SQL to design and implement the database.
                {/* You can keep this shortened description as a preview */}
              </>
            )}
          </p>
          <button className="but" onClick={() => toggleContent(2)}>
            {expanded[2] ? "Show Less" : "Show More"}
          </button>
        </div>
              </div>



              <div className="front3">
              <div className="view"> <img src={designImgg} alt="design" className="imgg"/> </div>
              <div className="views"> 
              <p className="vie">
              <h2 className="ht"> FrontEnd Job </h2> 
            {expanded[3] ? (
              // Expanded content
              <>
               I used SQL to design and implement the database.
                 I created healthy life hospital database to store patient information and
                  medical records.  
                 It includes patient demographics, medical history, treatment plans etc. 
                 The database is designed to be scalable and secure,  
                 I used SQL to design and implement the database.
                 I created healthy life hospital database to store patient information and
                  medical records.  
              
              </>
            ) : (
              // Collapsed content
              <>
                 I used SQL to design and implement the database.
                {/* You can keep this shortened description as a preview */}
              </>
            )}
          </p>
          <button className="but" onClick={() => toggleContent(3)}>
            {expanded[3] ? "Show Less" : "Show More"}
          </button>
        </div>
              
                </div> 


    
    
    </div>
  
 
    );
}

export default WebDeveloper;