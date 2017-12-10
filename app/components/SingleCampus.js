import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import updateCampus from '../reducers/campuses'

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
    .then(campus =>{
      return this.setState({ campus: campus[0], students: campus[0].students })
    })
  }

  render () {
    const campus = this.state.campus
    const students = this.state.students
    var filterArr = students.filter(student => student.campusId === campus.id)
    return (
     <div>
        <h3>Campus</h3>
          <div className="list-group">
            <div className="list-group-item" key={campus.id}>
            <h3 onChange={this.updateCurrentCampus}>{campus.name}</h3>
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

updateCurrentCampus(update, event){
  const updateCampus = this.props.updateCampus
  const campus = this.state.campusId
}


}
