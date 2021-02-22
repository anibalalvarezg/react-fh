import React from 'react';
import ReactDOM from 'react-dom';
import FristApp from './FirstApp';

import './index.css'; 

const divRoot = document.querySelector('#root');

ReactDOM.render(<FristApp greetings="Hello world!"/>, divRoot);
