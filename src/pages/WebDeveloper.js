import React from "react";
import designImg from '../assets/design.jpg'; 
import "./webDeveloper.css";


function WebDeveloper(){
    return (
        <>
    <div className="contain"> 
         <h1 className="titles"> WEB JOBS I'VE HANDLED </h1> 

       

            <div className="front"> 
            <p className="para">
            <h2 className="title"> Frontend Development </h2>
                 I have worked on several frontend projects using HTML, CSS, and JavaScript. I
                have also used frameworks like React and Angular to build complex user interfaces.
                </p>
                <img className="imgg" src={designImg} alt="design" />

                <p className="para">
            <h2 className="title"> Frontend Development </h2>
                 I have worked on several frontend projects using HTML, CSS, and JavaScript. I
                have also used frameworks like React and Angular to build complex user interfaces.
                </p>
                <img className="imgg" src={designImg} alt="design" />
                </div>

                 <div className="front"> 
                <h2 className="title"> Backend Development </h2>
                <p className="para"> I have experience with backend development using languages like Python, Java, and
                    PHP. I have also used frameworks like Django and Flask to build RESTful APIs.
                    </p>
                    <img className="imgg" src={designImg} alt="design" />
                    </div>

                    <div> 
                    <h2 className="title"> Fullstack Development </h2>
                    <p className="para"> I have worked on several fullstack projects where I was responsible for both
                        frontend and backend development. I have used technologies like Node.js, Express,
                        and MongoDB to build scalable and efficient applications.
                        </p>
                        <img className="imgg" src={designImg} alt="design" />
                        </div>
                    

    
    
    </div>
  
 </>
    );
}

export default WebDeveloper;