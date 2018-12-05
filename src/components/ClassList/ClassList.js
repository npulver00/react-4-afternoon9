import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


export default class ClassList extends Component {
  constructor() {
    super();
    this.state={
      students: []
    }
    
  }

  componentDidMount(){
      axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res=>{
        // console.log("props", this.props)
        // console.log("props", this.props.match)
          this.setState({
             students:res.data
          })
      })
  }
  //match query url string class is like /:id just named different. this.props.match.params comes from react router dom
  // need to match the name which has to be the same
  render() {
    const{students} = this.state
      const theStudents = students.map((e, i)=>(
        <Link to={`/student/${e.id}`} key={i}>
        <h3> {e.first_name} {e.last_name} {e.email}</h3>
        </Link>
      ));

    return (

    
      <div className="box">
     
     
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
     {theStudents}
      </div>
    )
  }
}