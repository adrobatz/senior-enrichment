  import React, {Component} from 'react';
  import axios from 'axios';
  import { connect } from 'react-redux';
  import store from '../store';
  import {fetchCampuses, removeCampus, postCampus} from '../reducers/campuses';
  import {Link} from 'react-router-dom';


function NewCampus (props){
    return (
            <div className="newContainer">
              <form onSubmit = {props.submitNewCampus}>
              <h2>Add A New Campus:</h2>
                <p>Campus Name: </p><input value={props.campus} name="name" type="text" placeholder="campus name"/>
                <p>Campus Description: </p><textarea value={props.campus} name="description" type="text" placeholder="description"/>
                <button type="submit">Add New Campus</button>
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
    submitNewCampus (event) {
      event.preventDefault();
      const campus = {
        name: event.target.name.value,
        description: event.target.description.value,
      };
      dispatch(postCampus(campus))
    }
  }
}

const NewCampusProps = connect(mapStateToProps, mapDispatchtoProps)(NewCampus)
 export default NewCampusProps;
