import React from 'react';

const Home = (props) => {

  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello, Students!</h1>
      <p className="lead">This is a simple React Auth w/o OAuth or Passport. It has some cool functionality. Certain links will only be visible when you are logged in. Others will only be able to be seen if you are an admin. Feel free To use this as a seed, copy paste parts into your own project, or just take a look around.</p>
      <hr className="my-4" />
      <p className="text-center"> This React.js Auth uses the following technologies. </p>
      <p className="text-center"> <strong>FrontEnd:</strong> React.js, Bootstrap v4, Axios, React Router. </p>
        <p className="text-center"> <strong>BackEnd:</strong> Node.js, Express, Express Sessions, Body Parser, CORS, bcrypt, Sequelize, MySql <strong>Optional:</strong> MongoDB Mongoose</p>
      <h3 className="text-center">HAPPY HACKING</h3>
    </div>
  );
};

export default Home;