import React from "react";
import load from "../images/logo.svg";

export default function Loading() {
    return ( <
        div className = "loading" >
        <
        h4 > rooms data is loading < /h4> <img src={load} alt="loading" / >
        <
        /div>
    );
}