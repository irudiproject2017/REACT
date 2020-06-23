import React, { Component } from 'react'
import logo from '../components/NoRecordFound.png'

// Class compnenet which extends react component
class ErrorComponent extends Component {
    render() { // have to implement render() method in class componenet which will return some HTML or null
        return (
            <React.Fragment>
                <img alt="" src={logo} />
            </React.Fragment>
        )
    }

}

export default ErrorComponent






