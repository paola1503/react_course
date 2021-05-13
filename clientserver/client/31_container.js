import React,{Component} from "react";
import axios from "axios";
import {StudentForm} from "./29_studentform.js";
import {StudentsList} from "./28_studentslist.js";

export class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={
            students:[]
        }
        
        this.delete=this.delete.bind(this);
        this.insert=this.insert.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:3000/students").then((data)=>{
            console.log(data);
            this.setState({
                students:data.data
            });
    });
}

    delete(student){
        axios.delete(`http://localhost:3000/students/${student.name}`).then((a)=>{
            //once we've deleted, I want to reload the list
            return axios.get("http://localhost:3000/students");
        }).then((data)=>{
            this.setState({
            students:data.data
            })
        })
    }

    insert(student){
        axios.post("http://localhost:3000/students",student).then(()=>{
            return axios.get("http://localhost:3000/students");
        }).then((students)=>{
            this.setState({
                students:students.data
            })
        })
    }

    render(){
        return <div>
            <StudentsList students={this.state.students} onDelete={this.delete}/>
            <StudentForm onInsert={this.insert}/>
        </div>
    }
}
