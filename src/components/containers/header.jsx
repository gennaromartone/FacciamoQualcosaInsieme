import React, { Component } from 'react'
import PropTypes from 'prop-types'

import LoginModal from './login-modal-container.jsx'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showLoginModal:false,
            showRegisterModal:false
        }

        this.setShowLoginModal = this.setShowLoginModal.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    setShowLoginModal(){
        this.setState({
            showLoginModal : !this.state.showLoginModal
        })
    }

    render() {
        return (

            <header className="header">
                <div className="header-title">
                    <h1>Delivery SHOP</h1>
                </div>
                <div className="header-navbar">
                    <nav>
                        <div className="top-nav--button">
                            <a href="#home">Diventa un Rivenditore</a>
                        </div>
                        <div className="top-nav--button">
                            <a href="#news">Aiuto</a>
                        </div>
                        <div className="top-nav--button">
                            <a href="#contact">Registrati</a>
                        </div>
                        <div className="top-nav--button">
                            <button onClick={this.setShowLoginModal}>Accedi</button>
                        </div>
                    </nav>
                </div>
                <LoginModal show={this.state.showLoginModal} onClose={this.setShowLoginModal} />
            </header>
            
        )
    }
}

Header.propTypes = {

}

export default Header