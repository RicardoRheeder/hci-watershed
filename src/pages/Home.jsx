import React, { Component } from 'react';
//  Image url handling is convoluted in scss , much easier to set inline and get images from root
// let backgroundStyle = { backgroundImage: 'url(assets/img/gwf.jpg)' };

class Home extends Component {

  render() {

    return (
      <div>
        <div className="home-header" >{/*  style={backgroundStyle} */}
          <div className="container">
            <div className='col-lg-12 text-lg-left text-md-center text-sm-center text-xs-center'>
              <h1>GWF-HCI</h1>
              <p>Global Water Futures, User Centric Decision Support Systems</p>
            </div>
          </div>
        </div>

        <div className="container home-body">
          <h1> What is this ?</h1>
          <p>
            asdf
          </p>
         
        </div>
      </div>

    )
  }
};

export default Home;


