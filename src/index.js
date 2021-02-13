import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main"
import "./styles/common.css"

const destination = document.querySelector("#wrap");

ReactDOM.render(
    <div id="wrap">
        <Main />
    </div>,
    destination
)