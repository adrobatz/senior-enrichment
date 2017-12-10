import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import {updateCampus} from '../reducers/campuses';
import ContentEditable from 'react-contenteditable';
import store from '../store';
import {updateStudent} from '../reducers/students'

export default class SingleCampus extends Component {
    constructor(){
    super();
    this.state = {
      campus: {},
      students: []
    }

    this.onCampusUpdate = this.onCampusUpdate.bind(this)
    this.StudentCampusUpdate = this.StudentCampusUpdate.bind(this);
  }


componentDidMount () {
  const campusId = this.props.match.params.campusId
  axios.get(`/api/campuses/${campusId}`)
    .then(res => {
      return res.data})
    .then(campus =>{
      return this.setState({ campus: campus[0], students: campus[0].students })
    })

  }


  onCampusUpdate(campusObj) {
    const {campus} = this.state;
    this.setState({
      campus: Object.assign({}, campus, campusObj)
    });
    store.dispatch(updateCampus(campus.id, campusObj));
  }

  StudentCampusUpdate(campusId, student) {
    const {students} = this.state
    this.setState({
      students: [...students, campusId]
    })
    return store.dispatch(updateStudent(student.id, campusId))

  }

  render () {
    const campus = this.state.campus
    const students = this.state.students
    var filterArr = students.filter(student => student.campusId === campus.id)
    return (
     <div>
        <h3>Campus</h3>
          <div>
            <div key={campus.id}>
            <ContentEditable onChange={event=>this.onCampusUpdate({name: event.target.value})} value={campus.name} html={ campus.name} />
            {
              filterArr.map(student =>{

                return(
              <div key={student.id}>
              <Link to={`/students/${student.id}`}>
              <h3>{student.fullName}</h3>
              </Link>
              <span><button onClick={(event) => {this.StudentCampusUpdate({campusId: null}, student)}}>&times;</button></span>
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

