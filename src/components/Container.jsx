import React, { Component } from 'react';
import { NavBar } from './';

export default class Container extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='app-container'>
                {/* navbar content , common for entire application */}
                <NavBar />
                <div id='container-body'>{this.props.children} </div>
                <footer className="footer w-full m-t hidden-xs">
                    <div className="container-fluid">
                        <div className='footer-inner bottom-left'>
                            <div className="left text-xs-left">
                                {/* <a className="footer-link right" href="https://water.usask.ca/"> <img src="assets/img/usask_GIWS_Logo-Standard.png" height="60" width="80" style={{ 'margin': '5px 0px' }} /></a>
                                <a className="footer-link right" href="https://gwf.usask.ca/"> <img src="assets/img/IMPC_Horizontal_FC.png" height="40" width="135" style={{ 'margin': '5px 0px' }} /></a>
                                <a className="footer-link right" href="http://hci.usask.ca/" > <img src="assets/img/interaction_lab.gif" height="40" width="150" style={{ 'margin': '5px 0px' }} /></a> */}
                            </div>
                        </div>
                        <div className='footer-inner text-right bottom-right'>
                            <a className="footer-link"
                                href="mailto:venkat.bandi@usask.ca?subject=GWF HCI&amp;body=Please%20Fill%20">
                                Contact Us </a>
                            <span className='pole-holder'>|</span>
                            <a href="https://www.usask.ca/">University of Saskatchewan</a>
                            <span className='pole-holder'>|</span>
                            <a href="https://www.usask.ca/disclaimer.php">Disclaimer</a>
                            <span className='pole-holder'>|</span>
                            <a href="https://www.usask.ca/privacy.php">Privacy</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}