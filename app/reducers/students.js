import axios from 'axios';


const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_CURRENT_STUDENT = 'UPDATE_CURRENT_STUDENT';

export function getStudents (students) {
  const action ={type: GET_STUDENTS, students};
  return action;
}

export function getStudent (student) {
  const action = {type: GET_STUDENT, student};
  return action;
}

export function deleteStudent (studentId) {
  const action = {type: DELETE_STUDENT, studentId};
  return action;
}

export function updateCurrentStudent (updatedStudent) {
  const action = {type: UPDATE_CURRENT_STUDENT, updatedStudent};
  return action
}


export function fetchStudents (){
  return function thunk(dispatch){
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students =>{
        const action = getStudents(students);
        dispatch(action);
      });
  }
}


export function postStudent(student){
  return function thunk(dispatch){
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent =>{
        const action = getStudent(newStudent);
        dispatch(action);
      })
  }
}

export function updateStudent (studentId, student){
  return function thunk(dispatch){
    return axios.put(`api/students/${studentId}`, student)
    .then(res => dispatch(updateCurrentStudent(res.data)))
    .catch(err => console.error(err))
  }
}

export function removeStudent(studentId){
  return function thunk(dispatch){
    dispatch(deleteStudent(studentId))
    return axios.delete(`/api/students/${studentId}`)
    .then(res=>res.data)
    .catch(err => console.error(err))
  }
}

export default function studentsReducer (state = [], action) {
  switch (action.type) {

      case GET_STUDENTS:
        return action.students;

      case GET_STUDENT:
        return [...state, action.student];

      case DELETE_STUDENT:
        return state.filter(student => student.id !== action.studentId);

      case UPDATE_CURRENT_STUDENT:
        return state.map(student => (
          action.id === student.id ? action : student
        ));


    default:
      return state;
  }

}
