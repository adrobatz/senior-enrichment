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
         <div  className="campusList">
         {
          props.campuses.map(campus=>{
            return (
                    <div className="infoList" key={campus.id}>
                      <Link className="link" to={`/campuses/${campus.id}`}>
                      <img className="campusImage" src={campus.imageUrl} alt="campus"/>
                      <h2>{campus.name}</h2>
                      </Link>
                      <p>{campus.description}</p>
                      <span><button onClick={(event) => {props.removeCampusOnClick(campus.id, event)}}>Remove Campus</button></span>
                    </div>
                    )
          })
        }
        </div>
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

