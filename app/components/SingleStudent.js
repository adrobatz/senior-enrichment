import React, {Component} from 'react';
import axios from 'axios';

export default class SingleStudent extends Component {

  constructor(){
    super();
    this.state = {
      student: [],
      campus: {}
    }
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

  render () {

    const student = this.state.student
    const campus = this.state.campus
    console.log(this.state.campus)
    return (
            <div key={student.id}>
              <h3>{ student.fullName }</h3>
              <p>{student.email}</p>
              <h3>{campus.name}</h3>

            </div>
          )
  }
}
