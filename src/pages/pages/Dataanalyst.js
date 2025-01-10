import React, { useState } from "react";
import "./data.css"


function DataAnalyst() {

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

<div> 

    <h1 className="header"> DATA ANALYSIS PROJECTS </h1>

   <div className="projects-container">
   <div className="projects"> 
    <div className="pro">
    <h1 className="head"> US Regional Sales</h1>
    <p>
            {expanded[0] ? (
              // Expanded content
              <>
               I used tableau to create a dashboard that visualizes the data and helps the company make informed decisions.
                Analyzing U.S. sales data offers a comprehensive view of how different factors impact revenue and customer satisfaction.
                Key metrics in sales data analysis often include total revenue, sales growth rates, average order value,
                and customer lifetime value. Seasonal trends and regional preferences can also emerge,
                helping companies better plan for demand fluctuations and tailor product offerings to meet specific market needs.
               
              </>
            ) : (
              // Collapsed content
              <>
                 I used tableau to create a dashboard that visualizes the data and helps the company make informed decisions.
                {/* You can keep this shortened description as a preview */}
              </>
            )}
          </p>
          <button className="butt" onClick={() => toggleContent(0)}>
            {expanded[0] ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
   <div className="project"> 
   </div>
   </div>




   <div className="projects-container1">
   <div className="project1"> 
   </div>
   <div className="projects1"> 
   <div className="pro">
    <h1 className="head"> SPLENDOR INSURANCE</h1>
    <p>
            {expanded[1] ? (
              // Expanded content
              <>
              I used Excel to clean and manipulate the data, and also  to perform  analysis and create visualizations.
                This report delves into analysing data collected by splendor insurance on all vehicles insured by the company. 
         It aims to identify patterns in claim frequency and amounts, to understand the demographics and characteristics of high risk
          and low risk policy holders also to optimizing premium price models based on risk factors
           and to develop targeted marketing strategies to attract and retain customers.
            </>
            ) : (
              // Collapsed content
              <>
                I used Excel to clean and manipulate the data, and also  to perform  analysis and create visualizations.
                {/* You can keep this shortened description as a preview */}
              </>
            )}
          </p>
          <button className="butt" onClick={() => toggleContent(1)}>
            {expanded[1] ? "Show Less" : "Show More"}
          </button>
        </div>
       </div>
       </div>
 
   

       <div className="projects-container2">
   <div className="projects2"> 
    <div className="pro">
    <h1 className="head"> Hospital Database</h1>
    <p>
            {expanded[2] ? (
              // Expanded content
              <>
               I used SQL to design and implement the database.
                 I created healthy life hospital database to store patient information and medical records.  
                 It includes patient demographics, medical history, treatment plans etc. 
                 The database is designed to be scalable and secure, i also performed validation checks to ensure data integrity and consistency.
                 This database ensures that patient information is accurate and up-to-date, and that medical records are easily accessible to healthcare professionals.
                  
              </>
            ) : (
              // Collapsed content
              <>
                 I used SQL to design and implement the database.
                {/* You can keep this shortened description as a preview */}
              </>
            )}
          </p>
          <button className="butt" onClick={() => toggleContent(2)}>
            {expanded[2] ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
   <div className="project2"> 
   </div>
   </div>



   <div className="projects-container3">
   <div className="project3"> 
   </div>
   <div className="projects3"> 
   <div className="pro">
    <h1 className="head"> Restaurant DataBase</h1>
    <p>
            {expanded[3] ? (
              // Expanded content
              <>
               I used SQL to design and implement the database.
              This report shows how data was imported and the T-SQL analysis for four related tables, which I applied FK_constraints to link together. 
              These tables are Restaurant, Consumer, Ratings and Restaurant_Cuisine. 
              The database is designed to be scalable and secure, i also performed validation checks to ensure data integrity.
              This database ensures that restaurant information is accurate and up-to-date, and that consumer ratings are easily
              accessible to restaurant owners and consumers.
             
              </>
            ) : (
              // Collapsed content
              <>
                  I used SQL to design and implement the database.
                {/* You can keep this shortened description as a preview */}
              </>
            )}
          </p>
          <button className="butt" onClick={() => toggleContent(3)}>
            {expanded[3] ? "Show Less" : "Show More"}
          </button>
        </div>
       </div>
       </div>


        </div>

    )
}



export default DataAnalyst;