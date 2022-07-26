import React from 'react';
// import abtImage from '../../assets/img/abt.jpg'


const About = () => {
    return (
        <div id="abt-section">
    {/* <div class="container">
        
        <div class="left">
            <h1 className="m-heading wht">About Us</h1>
            <h1 className='l-heading wht'>Welcome To <span className='highlight'>Food</span>World</h1>
            <p className='wht'>We don't just make food, We also make people happy.
            <br></br>We carry that beliefe into everything we do.
            <br></br>
            Serving people for five years
            </p>
        </div>
        <div class="right">
           <img src={abtImage} alt="alt"/>
        </div>
    </div> */}
    <div className='clr'></div>
    <div id="menu-section">
    <div class="container">
        <h1 class="m-heading"><span className='highlight'>Why Choose Us?</span></h1>
        <div class="card-collection">
            <div class="card">
                <h1 class="s-heading highlight">Fast Delivery</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, corrupti dicta? Sint perferendis fuga officia?</p>
            </div>
            <div class="card">
                <h1 class="s-heading highlight">A Good Auto Responder</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, corrupti dicta? Sint perferendis fuga officia?</p>
            </div>
            <div class="card">
                <h1 class="s-heading highlight">Home Delivery</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, corrupti dicta? Sint perferendis fuga officia?</p>
            </div>
        </div>
        <div className='clr'></div>
  
    </div>
</div>
</div>
    )
};

export default About;