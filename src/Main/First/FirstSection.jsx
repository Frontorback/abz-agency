import React from "react";
import "./First.scss"

const FirstSection = () =>{
    return(
        <div className="First-section">
            <div className="Background">
                <h1>Test assignment for front-end developers</h1>
                <p>Front-end developers make sure the user sees and 
                    interacts with all the necessary elements to ensure conversion.
                    <span className="odd-text">Therefore, responsive design, programming languages and
                    specific frameworks are the must-have skillsets to look for 
                    when assessing your front-end developers.</span>
                    </p>
                <div className="btn">
                        <a className="in-btn" href="#register">Sign up</a>
                </div>
                
                
            </div>
        
        </div>
    )

}
export default FirstSection