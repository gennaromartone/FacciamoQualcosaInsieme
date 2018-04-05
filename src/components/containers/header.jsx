import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import LoginModal from './user/LoginModalContainer.jsx'
import RegisterModal from './user/RegisterModalContainer.jsx'

import {Link} from 'react-router-dom'

import SurveysPayments from './surveys/SurveysPayments'


class Header extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            showLoginModal:false,
            showRegisterModal:false,
            showSurveysHeader:false
        }

        this.setShowLoginModal = this.setShowLoginModal.bind(this);
        this.setShowRegisterModal = this.setShowRegisterModal.bind(this);
        this.setShowSurveysHeader = this.setShowSurveysHeader.bind(this);
    }

    static fetchData({ store }) {
        return new Promise(resolve => resolve());//default
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    setShowLoginModal(e){
        e.preventDefault()
        this.setState({
            showLoginModal : !this.state.showLoginModal
        })
    }

    setShowRegisterModal(e){
        e.preventDefault()
        this.setState({
            showRegisterModal : !this.state.showRegisterModal
        })
    }

    setShowSurveysHeader(e){
      e.preventDefault();
      this.setState({
        showSurveysHeader : !this.state.showSurveysHeader
        })
    }

    renderContent(){
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return(
                
                    <ul className=" header--ul" role="navigation">
                    <li className="header--logo">
                       <Link 
                        to={this.props.auth? '/' : '/'}
                        className="fa fa-home"
                      >
                        FAIR SHOP
                      </Link>
                    </li>
                    <li>
                    <a  href="#" onClick={this.setShowLoginModal}>Be a Seller</a>
                  </li>
                  <li>
                    <a  href="#" onClick={this.setShowRegisterModal}>Sign Up</a>
                  </li>
                  <li>
                    <a  href="#" onClick={this.setShowLoginModal}>Login</a>
                  </li>
                </ul>
                
               
                )
            default:
            let showPayments = this.state.showSurveysHeader;
            return(
               
                  <ul className=" header--ul" role="navigation">
                    <li className="header--logo">
                      <Link 
                        to={this.props.auth? '/' : '/'}
                        className="fa fa-home"
                      >
                        FAIR SHOP
                      </Link>
                    </li>
                  <li >
                    <div >
                      <a  className="header--li--subList" href="#" onClick={this.setShowSurveysHeader}>Surveys</a>
                      {showPayments&&<SurveysHeader credits={this.props.auth.credits} show={this.state.showSurveysHeader}/>}
                    </div>
                  </li>  
                  <li>
                    <a  href="#" onClick={this.setShowLoginModal}>Be a Seller</a>
                  </li>
                  <li>
                    <a  href="#" onClick={this.setShowRegisterModal}>Your Order</a>
                  </li>
                  <li>
                    <a  href="#" onClick={this.setShowRegisterModal}>Messages</a>
                  </li>
                  <li>
                    <a  href="#" onClick={this.setShowRegisterModal}>Profile</a>
                  </li>
                  <li>
                    <a  href="/auth/google/logout" >Logout</a>
                  </li>
                </ul>
                
                
                )
        }
    }
    /*

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
                  <button onClick={this.setShowRegisterModal}>
                    Registrati
                  </button>
                </div>
                <div className="top-nav--button">
                  <button onClick={this.setShowLoginModal}>
                    Accedi
                  </button>
                </div>
              </nav>
            </div>
    <nav className="nav-extended">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                  Delivery SHOP
                </a>
                <a href="#" data-activates="mobile-demo" className="button-collapse">
                  <i className="material-icons">menu</i>
                </a>
                {this.renderContent()}
              </div>
              <div className="nav-content">
                <ul className="tabs tabs-transparent">
                  <li className="tab">
                    <a href="#test1">Test 1</a>
                  </li>
                  <li className="tab">
                    <a className="active" href="#test2">
                      Test 2
                    </a>
                  </li>
                  <li className="tab disabled">
                    <a href="#test3">Disabled Tab</a>
                  </li>
                  <li className="tab">
                    <a href="#test4">Test 4</a>
                  </li>
                </ul>
              </div>
            </nav>

    */

    render() {
      
        return(
          <div className="main-header" >
        <header className="header">
          
            
            {this.renderContent()}
            
          

            {true && <LoginModal show={this.state.showLoginModal} onClose={this.setShowLoginModal} />}
            <RegisterModal show={this.state.showRegisterModal} onClose={this.setShowRegisterModal} />
          </header>
          </div>
          );
    }
}

Header.propTypes = {

}

const mapStateToProps = ({auth}) => { 
    console.log(auth)
    return {auth} 
}

export default connect(mapStateToProps)(Header)

var SurveysHeader = ({show,credits}) => {

  if (!show) {
      return null;
  } 
  return(
      <div>
        <ul>
          <SurveysPayments/>
          <li>Your credits:{credits}</li>
        </ul>
      </div>
  )

}

