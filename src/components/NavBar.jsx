/*global $*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //fix for mobile browsers , navbar doesnt automatically collapse and needs to be toggled manually
        $('.navbar-collapse').on('click', function (e) {
            var toggle = $(".navbar-toggle").is(":visible");
            if ($(e.target).is('a') && toggle) {
                $(this).collapse('hide');
            }
        });
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        {/* <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button> */}
                        {/* <Link data-toggle="collapse" data-target="#navbar" className="navbar-brand navbar-brand-emphasized" to='/'>
                            <span className="icon icon-home navbar-brand-icon"></span> Home
                            </Link> */}
                    </div>
                    <div id="navbar" className="navbar-collapse collapse ">

                        {/* <ul className='nav navbar-nav'>
                            <li>
                                <Link to={'/Dashboard'}>
                                    <span className="icon icon-line-graph"></span> Dashboard
                                </Link>
                            </li>
                            <li>
                            <Link to={'/Parser'}>
                                    <span className="icon icon-classic-computer"></span> MODSIM Parser
                                </Link>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        );
    }
}