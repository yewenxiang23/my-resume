import React from 'react';
import Footer from './Footer.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            responsiveNav: true
        }
    }
    setResponsiveNav(){
      this.setState({
          responsiveNav: !this.state.responsiveNav
      })
    }
    render() {
        return (
            <div>
                <header>
                    <img src="http://omfmbv825.bkt.clouddn.com/2_02.png" alt="person img" className="person"/>
                    <h1>叶文翔的个人{this.props.title}</h1>
                    <label className="responsive-nav" onClick={this.setResponsiveNav.bind(this)}>
                        <span style={{
                            transform: this.state.responsiveNav
                                ? "rotate(0)"
                                : "rotate(45deg)"
                        }}></span>
                        <span style={{
                            opacity: this.state.responsiveNav
                                ? "1"
                                : "0"
                        }}></span>
                        <span style={{
                            transform: this.state.responsiveNav
                                ? "rotate(0)"
                                : "rotate(-45deg)"
                        }}></span>
                    </label>
                </header>
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {this.state.responsiveNav?null:<Footer setResponsiveNav={this.setResponsiveNav.bind(this)}/>}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Header;
