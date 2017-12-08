import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../store';
import {fetchCampuses, removeCampus, postCampus} from '../reducers/campuses';
import {Link} from 'react-router-dom';


function Campuses (props){

    return(
           <div>
          <form onSubmit = {props.submitNewCampus}>
            <input value={props.campus} name="name" type="text" placeholder="campus name"/>
            <input value={props.campus} name="description" type="text" placeholder="description"/>
           <button type="submit"></button>
      </form>
           {
            props.campuses.map(campus=>{
              return (
                      <div key={campus.id}>
                      <Link to={`/campuses/${campus.id}`}>
                        <p>{campus.name}</p>
                        <img src={campus.imageUrl} alt="campus"/>
                      </Link>
                      <span><button onClick={(event) => {props.removeStudentOnClick(campus.id, event)}}>&times;</button></span>
                      </div>
                      )
            })
          }
          </div>
          )


}


const mapStateToProps = state =>{
  return {
    campuses: state.campuses,
    // students: fetchCampuses(state.students)
  };
}

const mapDispatchtoProps = (dispatch) => {
  return {
    removeStudentOnClick (campusId, event) {
      dispatch(removeCampus(campusId))
    },
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



const campusesProps = connect(mapStateToProps, mapDispatchtoProps)(Campuses);
export default campusesProps;

