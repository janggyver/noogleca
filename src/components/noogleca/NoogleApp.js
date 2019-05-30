import React , {Component} from 'react';
// import PropTypes from 'prop-types';
// import './Counter.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService';
import AuthenticationRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import ListJobsComponent from './ListJobsComponent'
import ErrorComponent from './ErrorComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import WelcomeComponent from './WelcomeComponent'

class NoogleApp extends Component{
    render(){
        return(
            <div className="NoogleApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticationRoute path="/welcome/:name" component={WelcomeComponent} /> 
                            <AuthenticationRoute path="/jobs" component ={ListJobsComponent} />
                            <AuthenticationRoute path="/logout" component = {LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
            </div>
        )
    }
}

export default NoogleApp