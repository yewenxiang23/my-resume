import React from 'react';
import { Link } from "react-router";
class Footer extends React.Component {
    render(){
      return(
        <footer key={Math.random()}>
          <Link to="/" activeClassName="active" onlyActiveOnIndex={true} onClick={this.props.setResponsiveNav}>
            <i className="iconfont icon-zhuye"></i>简介
          </Link>
          <Link to="/product" activeClassName="active" onClick={this.props.setResponsiveNav}>
            <i className="iconfont icon-zuopinanli"></i>作品
          </Link>
        </footer>
      )
    }
}

export default Footer;
