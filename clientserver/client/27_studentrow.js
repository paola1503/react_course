import React,{Component} from "react";

export class StudentRow extends React.Component{
    constructor(props){
        super(props);
        this.delete=this.delete.bind(this);
        }

        delete(){
         console.log("from row"+this.props.student);
         this.props.onDelete(this.props.student);
        }
        
    render(){
    return <tr>
            <td>{this.props.student.name}</td>
            <td>{this.props.student.mark}</td>
            <td><input type="button" value="delete" onClick={this.delete}/></td>
            </tr>
}
}
