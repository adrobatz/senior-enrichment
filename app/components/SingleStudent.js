import React, {Component} from 'react';
import axios from 'axios';

export default class SingleStudent extends Component {

  constructor(){
    super();
    this.state = {
      student: {},
    }
  }

  componentDidMount(){
    const studentId = this.props.match.params.studentId
    axios.get(`/api/students/${studentId}`)
      .then(res => {
        console.log(res.data)
        return res.data
      })
      .then(student => {
        console.log("student", student)
        return this.setState({
        student: student,
      })
      });
  }

//figure out single campus
  render () {

    const student = this.state.student

    return (
            <div key={student.id}>
              <h3>{ student.fullName }</h3>
              <p>{student.email}</p>
            </div>
          )
  }
}
