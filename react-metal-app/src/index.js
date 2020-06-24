import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import { GenreProvider } from './provider/genres'
import { genres } from './data'

ReactDOM.render(
    <App genres={genres}/>
    ,document.getElementById('root')
);
