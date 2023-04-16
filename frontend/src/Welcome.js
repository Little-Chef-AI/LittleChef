import React from "react";
import './Welcome.css';

const handleSubmit = async (e) => {
    e.preventDefault()
}

const Welcome = () => {
    return(
        <div className = "welcome">
                <h2>Hello, Welcome to Little Chef. How may I help you?</h2>
                <p> List the ingredients you have in your fridge that you would like to cook with.</p>
                <p className="question"> Question</p>
                <button type="submit" className = 'GetSumbitButton' onClick={handleSubmit}>Sumbit <a href="./login"></a></button>
        </div>
    );
}

export default Welcome;