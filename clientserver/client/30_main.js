import React,{Component} from "/node_modules/react/index.js";
import ReactDOM from "/node_modules/react-dom/index.js";
import {StudentsList} from "./28_studentslist.js";
import {StudentForm} from "./29_studentform.js";
import {Container} from "./31_container.js";

window.onload=function(){
let container=<Container/>
ReactDOM.render(container,document.getElementById("area"));
}
