  import React, {Component} from 'react';
  import axios from 'axios';
  import { connect } from 'react-redux';
  import store from '../store';
  import {fetchStudents, removeStudent, postStudent} from '../reducers/students';
  import {Link} from 'react-router-dom';




  function Students (props) {
    return (

      <div>
      <form onSubmit = {props.submitNewStudent}>
            <input value={props.student} name="firstName" type="text" placeholder="first name"/>
            <input value={props.student} name="lastName" type="text" placeholder="last name"/>
            <input value={props.student} name="email" type="text" placeholder="email"/>
            <input value={props.student} name="gpa" type="text" placeholder="gpa"/>
            <select>
            {
               props.campuses.map(campus =>{
                return (
                  <option value={campus.id} key={campus.id}>{campus.name}</option>
               )
               })
            }
           </select>
           <button type="submit"></button>
      </form>
           <div>
           {
            props.students.map(student => {
              return (
                      <div key={student.id}>
                      <Link to={`/students/${student.id}`}>
                      <p >{student.fullName}</p>
                      </Link>
                      <span><button onClick={(event) => {props.removeStudentOnClick(student.id, event)}}>&times;</button></span>
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

