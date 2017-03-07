import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import LeftNavBar from './component/LeftNavBar';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            leftNavBar: false,
            title:"简介"
        }
    }
    setLeftNavBar() {
        this.setState({
            leftNavBar: window.innerWidth > 750
                ? true
                : false
        });
    }
    setTitle(){
      this.setState({
        title:this.props.router.isActive("/",true)
              ? "简介"
              : this.props.router.isActive("/product")
              ? "作品"
              : "简历"
      })
    }
    componentWillMount() {
        this.setLeftNavBar();
        this.setTitle();
    }
    componentWillReceiveProps() {
        this.setTitle();
    }
    componentDidMount() {
        window.onresize = this.setLeftNavBar.bind(this);
    }
    render() {
        return (
            <div className="container">
               {
                 this.state.leftNavBar?<LeftNavBar title={this.state.title}/>:<Header title={this.state.title}/>
               }
              {this.props.children}
            </div>
        )
    }
}

export default App;
