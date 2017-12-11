import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../store';
import {fetchStudents, removeStudent, postStudent} from '../reducers/students';
import {Link} from 'react-router-dom';

function NewStudent (props){

  return(
         <div className="newContainer">
           <form className="studentForm" onSubmit = {props.submitNewStudent}>
             <h2>Add a New Student here:</h2>
             <p>First Name: </p><input value={props.student} name="firstName" type="text" placeholder="first name" />
             <p>Last Name: </p><input value={props.student} name="lastName" type="text" placeholder="last name" />
             <p>Email: </p><input value={props.student} name="email" type="text" placeholder="email" />
             <p>GPA: </p><input value={props.student} name="gpa" type="text" placeholder="gpa" />
             <p>Campus: </p><select name="campusId" onChange={props.handleChange} >
             {
               props.campuses.map(campus =>{
                return (
                <option value={campus.id} key={campus.id}>{campus.name}</option>
                )
              })
            }
            </select>
            <button type="submit">Add Student</button>
          </form>
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
    handleChange (event){
      console.log(event.target.value)
    },
    submitNewStudent (event) {
      var campusId = Number(event.target.campusId.value)
      event.preventDefault();
      const student = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        gpa: event.target.gpa.value,
        campusId: campusId
      };
      dispatch(postStudent(student))
    }
  }
}


const NewStudentProps = connect(mapStateToProps, mapDispatchtoProps)(NewStudent)
export default NewStudentProps;
