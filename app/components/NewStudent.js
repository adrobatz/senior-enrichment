  import React, {Component} from 'react';
  import axios from 'axios';
  import { connect } from 'react-redux';
  import store from '../store';
  import {fetchStudents, removeStudent, postStudent} from '../reducers/students';
  import {Link} from 'react-router-dom';

function NewStudent (props){

  return(
  <div>
      <form onSubmit = {props.submitNewStudent}>
            <input value={props.student} name="firstName" type="text" placeholder="first name" />
            <input value={props.student} name="lastName" type="text" placeholder="last name" />
            <input value={props.student} name="email" type="text" placeholder="email" />
            <input value={props.student} name="gpa" type="text" placeholder="gpa" />
            <select name="campusId" onChange={props.handleChange} >
            {
               props.campuses.map(campus =>{
                return (
                  <option value={campus.id} key={campus.id}>{campus.name}</option>
               )
               })
            }
           </select>
           <button type="submit" />
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
