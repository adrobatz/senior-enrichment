import axios from 'axios';


const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const CHANGE_CAMPUS = 'CHANGE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

export function getCampuses (campuses) {
  const action ={type: GET_CAMPUSES, campuses};
  return action;
}

export function getCampus (campus) {
  const action = {type: GET_CAMPUS, campus};
  return action;
}

export function changeCampus (campus){
  const action = {type: CHANGE_CAMPUS, campus};
  return action;
}

export function deleteCampus (campusId) {
  const action = {type: DELETE_CAMPUS, campusId};
  return action
}


export function fetchCampuses (){
  return function thunk(dispatch){
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses =>{
        const action = getCampuses(campuses);
        dispatch(action);
      });
  }
}


export function postCampus(campus){
  return function thunk(dispatch){
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus =>{
        const action = getCampus(newCampus);
        dispatch(action);
      })
  }
}

export function updateCampus(campus){
  return function thunk(dispatch){
    return axios.put(`/api/campuses/${campusId}`, campus)
    .then(res=>dispatch(changeCampus(res.data)))
    .catch(err => console.error(err))
  }
}

export function removeCampus(campusId){
  return function thunk(dispatch){
    dispatch(deleteCampus(campusId))
    return axios.delete(`/api/campuses/${campusId}`)
    .then(res=>res.data)
    .catch(err => console.error(err))
  }
}

export default function campusesReducer (state = [], action) {
  switch (action.type) {

      case GET_CAMPUSES:
        return action.campuses;

      case GET_CAMPUS:
        return [...state, action.campus];

      case CHANGE_CAMPUS:
        return state.map(campus =>(
          action.campus.id === campus.id ? action.campus : campus
        ))

      case DELETE_CAMPUS:
        return state.filter(campus => campus.id !== action.campusId)

    default:
      return state;
  }

}
