import React from 'react';

import './Home.css';

import Ash from '../../assets/home.png';

const Home = (props) => {
    return(
        <a href="/" className="homeButton"><img src={Ash} alt="home button"/></a>
    );
}

export default Home;