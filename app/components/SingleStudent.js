import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ContentEditable from 'react-contenteditable';
import {fetchStudents, updateStudent} from '../reducers/students';
import store from '../store';



export default class SingleStudent extends Component {

  constructor(){
    super();
    this.state = {
      student: [],
      campus: {}
    }

    this.onStudentUpdate = this.onStudentUpdate.bind(this)
 }

  componentDidMount () {
  const studentId = this.props.match.params.studentId
  axios.get(`/api/students/${studentId}`)
    .then(res => {
      return res.data})
    .then(student =>
      this.setState({ student: student[0], campus: student[0].campus })
    )
  }

render(){
const student = this.state.student;
const campus = this.state.campus

    return (
              <div key={student.id}>
              <ContentEditable onChange={event=>this.onStudentUpdate({firstName: event.target.value})} value={student.firstName} html={ student.firstName} />
              <ContentEditable onChange={event=>this.onStudentUpdate({lastName: event.target.value})} value={student.lastName} html={ student.lastName} />
              <ContentEditable onChange={event=>this.onStudentUpdate({email: event.target.value})} value={student.email} html={ student.email} />
              <Link to={`/campuses/${campus.id}`}>
              <ContentEditable html={campus.name}/>
              </Link>
            </div>
          )
}

  onStudentUpdate(studentObj) {

    const {student} = this.state;


    this.setState({
      student: Object.assign(student, studentObj)
    });
    store.dispatch(updateStudent(student.id, studentObj));
  }
}
