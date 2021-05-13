import React,{Component} from "react";
import axios from "axios";
import {StudentRow} from "./27_studentrow.js";

export class StudentsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            students:[]
        }
        this.delete=this.delete.bind(this);
    }

    componentDidMount(){

}

    delete(student){
        this.props.onDelete(student);
    }

    render(){
        return <table>
        <tbody>
            {this.props.students.map((student)=><StudentRow key={student.name} onDelete={this.delete} student={student}/>)}
        </tbody>
        </table>
    }
}
