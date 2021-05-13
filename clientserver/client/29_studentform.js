import React,{Component} from "react";
import axios from "axios";

export class StudentForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            mark:0
        }
        this.uploadName=this.uploadName.bind(this);
        this.uploadMark=this.uploadMark.bind(this);
        this.insert=this.insert.bind(this);
    }

    //events released from input text
    uploadName(e){
        this.setState({name:e.target.value});
        }

    uploadMark(e){
        this.setState({mark:e.target.value});
        }

    insert(){
        this.props.onInsert(this.state);
        }

    render(){
     return <form>
            <p>
            Name:<input type="text" name="name" value={this.state.name} onChange={this.uploadName}/>
            </p><p>
            Mark:<input type="text" name="mark" value={this.state.mark} onChange={this.uploadMark}/>
            </p><p>
            <input type="button" value="insert" onClick={this.insert}/>
            </p>                        
        </form>
    }
}
