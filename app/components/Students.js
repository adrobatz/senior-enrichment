import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../store';
import {fetchStudents, removeStudent, postStudent} from '../reducers/students';
import {Link} from 'react-router-dom';
import NewStudent from './NewStudent'



function Students (props) {

  return (
          <div>
          <NewStudent />
          <div>
          {
            props.students.map(student => {
              return (
                      <div className="infoList studentList" key={student.id}>
                        <h2>{student.fullName}</h2>
                        <p>{student.email}</p>
                        <p>{student.gpa}</p>
                        <Link to={`/students/${student.id}`}>
                          <button>View Student Profile</button>
                        </Link>
                        <span><button onClick={(event) => {props.removeStudentOnClick(student.id, event)}}>Remove Student Profile</button></span>
                      </div>
                      )
                    })
           }
          </div>
          </div>
         )
}


const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
  };
}


const mapDispatchtoProps = (dispatch) => {
  return {

    removeStudentOnClick (studentId, event) {
      dispatch(removeStudent(studentId))
    },
    submitNewStudent (event) {
      event.preventDefault();
      const student = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        gpa: event.target.gpa.value,
        campusId: event.target.value
      };
      dispatch(postStudent(student))
    }
  }
}


const studentsProps = connect(mapStateToProps, mapDispatchtoProps)(Students)
export default studentsProps;

