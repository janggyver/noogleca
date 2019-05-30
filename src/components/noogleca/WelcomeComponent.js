import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import NooglecaService from '../../api/noogleca/NooglecaService.js'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage : ''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. {/* 라우트로 설정한 컴포넌트는, 3가지의 props 를 전달받게 됩니다: history, location, match */}
                    You can manage your Job Applications <Link to="/jobs">here</Link>.
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} 
                        className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                
            </>
        )        
    }

    retrieveWelcomeMessage() {
        // NooglecaService.executeNooglecaService()
        // .then( response => this.handleSuccessfulResponse(response) )

        NooglecaService.executeNooglecaBeanService()
        .then( response => this.handleSuccessfulResponse(response) )
        //.catch()
    }

    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
    }

}


export default WelcomeComponent