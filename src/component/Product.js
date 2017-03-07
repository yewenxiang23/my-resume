import React from 'react';
import axios from 'axios';
class Product extends React.Component {
    constructor(){
      super();
      this.state={
        productDate:[]
      }
    }
    componentDidMount(){
      axios.get("")
    }
    render() {
        return (
            <div className="production">
                <section className="work">
                  {
                    this.state.productDate.map()
                  }
                    <figure className="product">
                        <h4>云美丽首页</h4>
                        <img src="http://omfmbv825.bkt.clouddn.com/yunmeili.png" alt="yunmeili-demo"/>
                        <div className="product-title">
                            <a href="https://yewenxiang23.github.io/yunmeili/">演示demo</a>
                            <a href="https://github.com/yewenxiang23/yunmeili">源码地址</a>
                        </div>
                        <figcaption>一个电商网站项目，总共包含六个子页面，含首页、列表页、详情页、支付页、注册页、登录页。并且包含基本的逻辑功能，购物车、轮播、标签页等等都是使用原生JS来开发的。</figcaption>
                    </figure>
                    {/* <figure className="product">
                        <h4>云美丽列表页</h4>
                        <img src="http://omfmbv825.bkt.clouddn.com/liebiao.png" alt="yunmeili-demo"/>
                        <div className="product-title">
                            <a href="https://yewenxiang23.github.io/yunmeili/pages/listPage.html">演示demo</a>
                            <a href="https://github.com/yewenxiang23/yunmeili">源码地址</a>
                        </div>
                        <figcaption>列表页包含商品类别的切换，点击排序、价格、颜色类别时，给点击的按钮添颜色。点击喜欢数量加一的小功能。</figcaption>
                    </figure>
                    <figure className="product">
                        <h4>云美丽详情页</h4>
                        <img src="http://omfmbv825.bkt.clouddn.com/xiangqing.png" alt="yunmeili-demo"/>
                        <div className="product-title">
                            <a href="https://yewenxiang23.github.io/yunmeili/pages/detailPage.html">演示demo</a>
                            <a href="https://github.com/yewenxiang23/yunmeili">源码地址</a>
                        </div>
                        <figcaption>详情页包含标签页切换的功能，自动倒计时为0时自动更换商品，评论切换，添加关注功能。</figcaption>
                    </figure>
                    <figure className="product">
                        <h4>云美丽支付页</h4>
                        <img src="http://omfmbv825.bkt.clouddn.com/zhifu.png" alt="yunmeili-demo"/>
                        <div className="product-title">
                            <a href="https://yewenxiang23.github.io/yunmeili/pages/zhifu.html">演示demo</a>
                            <a href="https://github.com/yewenxiang23/yunmeili">源码地址</a>
                        </div>
                        <figcaption>支付页使用原生的JS来实现地址切换功能，点击地址可以实现切换。购物车功能，可以实现加减商品数量，选择不同的快递运送价格也不同，选择不同的折扣，取消某一个商品等功能。</figcaption>
                    </figure>
                    <figure className="product">
                        <h4>云美丽登录页</h4>
                        <img src="http://omfmbv825.bkt.clouddn.com/denglu.png" alt="yunmeili-demo"/>
                        <div className="product-title">
                            <a href="https://yewenxiang23.github.io/yunmeili/pages/denglu.html">演示demo</a>
                            <a href="https://github.com/yewenxiang23/yunmeili">源码地址</a>
                        </div>
                        <figcaption>登录页没有做过多的功能，提交时账户密码不能为空。</figcaption>
                    </figure>
                    <figure className="product">
                        <h4>云美丽注册页</h4>
                        <img src="http://omfmbv825.bkt.clouddn.com/zuce.png" alt="yunmeili-demo"/>
                        <div className="product-title">
                            <a href="https://yewenxiang23.github.io/yunmeili/pages/zuce.html">演示demo</a>
                            <a href="https://github.com/yewenxiang23/yunmeili">源码地址</a>
                        </div>
                        <figcaption>注册页使用了JQ来完成包含邮箱的正则验证、昵称正则验证、密码的正则验证、二次密码确认、只有全部正确，并且点击了复选框才能提交成功。</figcaption>
                    </figure>
                    <figure className="product">
                        <h4>demo</h4>
                        <img src="http://omfmbv825.bkt.clouddn.com/demo2.png" alt="demo2"/>
                        <div className="product-title">
                            <a href="https://yewenxiang23.github.io/demo2">演示demo</a>
                            <a href="https://github.com/yewenxiang23/demo2">源码地址</a>
                        </div>
                        <figcaption>使用div+css布局快速搭建的一个页面。</figcaption>
                    </figure>
                    <figure className="product">
                        <h4>demo</h4>
                        <img src="http://omfmbv825.bkt.clouddn.com/demo3.png" alt="demo3"/>
                        <div className="product-title">
                            <a href="https://yewenxiang23.github.io/demo3">演示demo</a>
                            <a href="https://github.com/yewenxiang23/demo3">源码地址</a>
                        </div>
                        <figcaption>使用div+css布局快速搭建的一个页面。</figcaption>
                    </figure>
                    <figure className="product">
                        <h4>一个英文站点demo</h4>
                        <img src="images/demo6.png" alt="demo4"/>
                        <div className="product-title">
                            <a href="https://yewenxiang23.github.io/demo/demo4/">演示demo</a>
                            <a href="https://github.com/yewenxiang23/demo/tree/master/demo4">源码地址</a>
                        </div>
                        <figcaption>使用div+css布局,总共包含六个子页面，CSS公共部分的样式全部提取了出来，可以通过导航条点击来切换六个不同的页面。</figcaption>
                    </figure>
                    <figure className="product">
                        <h4>Bootstrap搭建的一个网站</h4>
                        <img src="images/demo7.png" alt="demo5"/>
                        <div className="product-title">
                            <a href="https://yewenxiang23.github.io/demo/demo1/demo.html">演示demo</a>
                            <a href="https://github.com/yewenxiang23/demo/tree/master/demo1">源码地址</a>
                        </div>
                        <figcaption>使用Bootstrap快速搭建的一个响应式的站点，包括响应式的导航条，下拉菜单，轮播图，标签页切换，点击关于弹出窗口等功能。</figcaption>
                    </figure>
                    <figure className="product">
                        <h4>某灯具企业首页</h4>
                        <img src="images/demo5.png" alt="demo6"/>
                        <div className="product-title">
                            <a href="https://yewenxiang23.github.io/demo/demo3/">演示demo</a>
                            <a href="https://github.com/yewenxiang23/demo/tree/master/demo3">源码地址</a>
                        </div>
                        <figcaption>使用DIV+CSS布局，常见的标签切换和自动轮播功能。</figcaption>
                    </figure>
                    <figure className="product">
                        <h4>小金人首页</h4>
                        <img src="images/demo8.png" alt="demo6"/>
                        <div className="product-title">
                            <a href="https://yewenxiang23.github.io/demo/demo2/">演示demo</a>
                            <a href="https://github.com/yewenxiang23/demo/tree/master/demo2">源码地址</a>
                        </div>
                        <figcaption>使用div+css布局快速搭建的一个页面。</figcaption>
                    </figure>
                    <figure className="product">
                        <h4>手机端页面</h4>
                        <img src="images/demo4.png" alt="demo6"/>
                        <div className="product-title">
                            <a href="https://yewenxiang23.github.io/demo/demo5/ggcy.html">演示demo</a>
                            <a href="https://github.com/yewenxiang23/demo/tree/master/demo5">源码地址</a>
                        </div>
                        <figcaption>使用rem来设置页面中所有的宽度，并用JS来计算出相应的像素，一个手机端的页面。</figcaption>
                    </figure> */}
                </section>
            </div>
        )
    }
}

export default Product;
