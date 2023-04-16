import React from "react";
import './Home.css';

const handleSubmit = async (e) => {
    e.preventDefault()
}
const Home = () => {
    return(
        <div className = "home">
                <h1>Welcome to Little Chef</h1>
                <button type="submit"className = 'GetStartedButton' onClick={handleSubmit}>Get Started <a href="./welcome"></a></button>
        </div>
    );
}

export default Home;