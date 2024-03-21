import React from "react";
import ReactDOM from "react-dom";
import {Counter} from './Counter'

import "./index.css";

const App = () => (
    <Counter></Counter>
);
ReactDOM.render(<App />, document.getElementById("app"));
