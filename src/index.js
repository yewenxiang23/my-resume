import React from 'react';
import {render} from 'react-dom';
import './style/main.css';
import './font/iconfont.eot';
import './font/iconfont.svg';
import './font/iconfont.ttf';
import './font/iconfont.woff';
import Routers from './Routes';

render(<Routers />,document.getElementById('root'));
