import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Spin from 'antd/lib/spin';
import 'antd/lib/spin/style/index.css';
import { productData } from '../blogData/data'
class Product extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    componentDidMount() {
        console.log(productData)
        // axios.get("https://raw.githubusercontent.com/yewenxiang23/my-resume/master/src/blogData/product.json")
        // .then(res => this.setState({productDate: res.data}));
    }
    isLink(value) {
        if (!value) return false
        return value.indexOf('http') !== -1
    }
    render() {
        return (
            <div className="production">
                <section className="work">
                    {productData.length == 0
                        ? <div className="spinPosition">
                            <Spin size="large" tip="Loading..." />
                        </div>
                        : productData.map((item) => (
                            <figure className="product" key={Math.random()}>
                                <h4>{item.title}</h4>
                                <img src={this.isLink(item.imgName) ? item.imgName : `http://omfmbv825.bkt.clouddn.com/${item.imgName}.png`} alt={item.imgName} />
                                <div className="product-title">
                                    {
                                        item.demoAddress === null
                                            ? null
                                            : <a href={this.isLink(item.demoAddress)
                                                ? item.demoAddress : `https://yewenxiang23.github.io/${item.demoAddress}`}>演示demo</a>
                                    }
                                    {
                                        item.codeAddress && <a href={`https://github.com/yewenxiang23/${item.codeAddress}`}>源码地址</a>
                                    }
                                </div>
                                <figcaption>{item.desc}</figcaption>
                            </figure>
                        ))
                    }
                </section>
            </div>
        )
    }
}

export default Product;
