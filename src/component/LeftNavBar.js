import React from 'react';
import { Link } from "react-router";
class leftNavBar extends React.Component {
    render(){
      return(
        <section className="sidebar">
          <img src="http://omfmbv825.bkt.clouddn.com/2_02.png" alt="person img" className="person" />
          <h1>叶文翔的个人{this.props.title}</h1>
          <Link to="/" activeClassName="leftNav-active" onlyActiveOnIndex={true}>
            <i className="iconfont icon-zhuye" ></i>简介
          </Link>
          <Link to="/product" activeClassName="leftNav-active">
            <i className="iconfont icon-zuopinanli"></i>作品
          </Link>
        </section>
      )
    }
}

export default leftNavBar;
