import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

export default class SingleCampus extends Component {
    constructor(){
    super();
    this.state = {
      campus: {},
      students: []
    }
  }

//ask about array??
  componentDidMount () {
  const campusId = this.props.match.params.campusId
  axios.get(`/api/campuses/${campusId}`)
    .then(res => {
      return res.data})
    .then(campus => {
      this.setState({ campus: campus[0] })
    })
  axios.get(`/api/students`)
    .then(res => {
      return res.data})
    .then(students => {
      this.setState({ students })
    })
  }

  render () {
    console.log(this.state)
    const campus = this.state.campus
    const students = this.state.students
    var filterArr = students.filter(student => student.campusId === campus.id)
    return (
     <div>
        <h3>Campus</h3>
          <div className="list-group">
            <div className="list-group-item" key={campus.id}>
            <h3>{campus.name}</h3>
            {
              filterArr.map(student =>{
                return(
              <div key={student.id}>
              <Link to={`/students/${student.id}`}>
              <h3>{student.fullName}</h3>
              </Link>
              </div>
                )
              })
              }
          </div>
        </div>
      </div>
    );
  }

}
