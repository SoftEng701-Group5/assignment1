import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './stylesheets/index.scss';
import {TimerContextProvider} from "./components/timer-modal/TimerContextProvider";

ReactDOM.render(
    <React.StrictMode>
        <TimerContextProvider>
            <App/>
        </TimerContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
