import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../store';
import {fetchCampuses, removeCampus, postCampus} from '../reducers/campuses';
import {Link} from 'react-router-dom';
import NewCampus from './NewCampus'

function Campuses (props){

    return(
          <div>
          <NewCampus />
           {
            props.campuses.map(campus=>{
              return (
                      <div key={campus.id}>
                      <Link to={`/campuses/${campus.id}`}>
                        <p>{campus.name}</p>
                        <img src={campus.imageUrl} alt="campus"/>
                      </Link>
                      <span><button onClick={(event) => {props.removeCampusOnClick(campus.id, event)}}>&times;</button></span>
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
    students: state.students
  };
}

const mapDispatchtoProps = (dispatch) => {
  return {
    removeCampusOnClick (campusId, event) {
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

