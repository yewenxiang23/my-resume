import React from 'react';
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <section className="index">
                    <ul>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>基本信息
                                </dt>
                                <dd>
                                    <span>个人信息:</span>叶文翔 / 男 / 24岁
                                </dd>
                                <dd>
                                    <span>毕业院校:</span>湖北工业大学
                                </dd>
                                <dd>
                                    <span>个人专业:</span>数控编程
                                </dd>
                                <dd>
                                    <span>应聘岗位:</span>前端工程师
                                </dd>
                                <dd>
                                    <span>现居住地:</span>河北秦皇岛
                                </dd>
                                <dd>
                                    <span>目前情况:</span>可随时到岗
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>联系方式
                                </dt>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-phone"></i>
                                        联系电话:
                                    </span>
                                    17000210556
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-weixin"></i>
                                        联系微信:
                                    </span>
                                    ye435379424
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-QQ"></i>
                                        联系QQ:
                                    </span>
                                    435379424
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-gmail"></i>
                                        联系邮箱:
                                    </span>
                                    yewenxiang23@gmail.com
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-wodeboke"></i>
                                        blog:
                                    </span>
                                    <a href="http://www.cnblogs.com/yewenxiang/">http://www.cnblogs.com/yewenxiang/</a>
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-github"></i>
                                        github:
                                    </span>
                                    <a href="https://github.com/yewenxiang23">https://github.com/yewenxiang23</a>
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-markdown"></i>
                                        Markdown笔记:
                                    </span>
                                    <a href="https://yewenxiang23.github.io/">https://yewenxiang23.github.io/</a>
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-icon"></i>
                                        简历源码:
                                    </span>
                                    <a href="https://github.com/yewenxiang23/my-resume">https://github.com/yewenxiang23/my-resume</a>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>主要技能
                                </dt>
                                <dd className="skill">
                                    <ul>
                                        <li className="primary">HTML5</li>
                                        <li className="primary">CSS3</li>
                                        <li className="primary">Javascript</li>
                                        <li className="primary">jQuery</li>
                                        <li className="secondary">Bootstrap</li>
                                        <li className="secondary">git</li>
                                        <li className="secondary">sass</li>
                                        <li className="secondary">React</li>
                                        <li className="secondary">Redux</li>
                                        <li className="secondary">Ajax</li>
                                        <li className="secondary">pug</li>
                                        <li className="secondary">JSON</li>
                                        <li className="secondary">ES6</li>
                                        <li className="secondary">HTTP</li>
                                        <li className="know">node.js</li>
                                        <li className="know">MongoDB</li>
                                        <li className="know">express</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>技能详解
                                </dt>
                                <dd className="detail-skill">
                                    <ul>
                                        <li>
                                            <div className="round"></div>
                                            <h4>HTML5 / CSS3 / SCSS</h4>
                                            <p>能够编写语义化的HTML，熟练运用div+css 浮动布局，flexbox 弹性布局。</p>
                                            <p>熟悉SCSS书写，gulp，webpack自动化工具的运用，进行模块化开发。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>Javascript</h4>
                                            <p>熟悉原生的Javascript，对原型，原型链，对象，闭包等都有一定的了解。能脱离jQuery等库编写一些常见的功能，如轮播图，计算器，购物车等等。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>jQuery</h4>
                                            <p>熟悉jQ的用法，能使用jQuery快速完成常见功能的开发。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>Bootstrap</h4>
                                            <p>熟悉Bootstrap框架，使用栅格系统，媒体查询，Bootstrap组件，来完成响应式的页面开发。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>git</h4>
                                            <p>有自己的github账号，能使用git实现代码的上传、分支合并、克隆、版本回滚、等常用的一些操作。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>React /  Ajax / JSON  / ES6 / Redux / React-Redux / Redux-thunk /</h4>
                                            <p>掌握npm包管理工具的使用，能使用ES6语法和React库进行模块化的开发，能实现基本的页面布局和常见的功能，轮播，TODOMVC等。掌握了 React-router实现页面的无刷新体验 、axios或者fetch 来实现Ajax请求数据实现页面的局部刷新,完成一个SPA页面的开发工作。</p>
                                            <p>
                                              对于比较复杂的单页面应用，使用 Redux 来进行 state数据的统一管理，使用 Redux-thunk 来实现发送 action 的异步操作。
                                            </p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>HTTP / MongoDB / express / pug</h4>
                                            <p>
                                              了解前后端分离和前后端不分离的架构，对于前后端不分离的架构，能使用pug模板引擎来进行服务器端页面的渲染。
                                            </p>
                                            <p>了解HTTP的基础知识，对请求和响应数据数据的一些基本的操作。对于数据库能使用命令行或者express图形化界面进行数据库的建立，增删改查的操作，使用express来制作后台的一些较简单的API。</p>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>自我评价
                                </dt>
                                <dd>
                                    <p>个人对于计算机方面是非常有兴趣的，特别享受一边敲代码一边听音乐的乐趣，有自己的个人博客，其中一篇博客目前为止超过 2000 的阅读量。精通于MAC上进行开发。</p>
                                    <p>平时我就是一个很细心的人，对于代码方面更是如此，尽最大的努力精确到1px，不能接受标签胡乱嵌套，命名不规范，无用或重复的代码，等等问题，追求完美。</p>
                                    <p>对待问题首先自己折腾解决，享受解决问题之后的快感，有种肾上腺素飙升的感觉。</p>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Home;
