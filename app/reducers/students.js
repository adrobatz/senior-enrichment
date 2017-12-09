import axios from 'axios';


const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const WRITE_NEW_STUDENT = 'WRITE_NEW_STUDENT';

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

export function writeNewStudent (newStudent) {
  const action = {type: WRITE_NEW_STUDENT, newStudent};
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
        return state.filter(student => student.id !== action.studentId)

        case WRITE_NEW_STUDENT:
          return action.newStudent;

    default:
      return state;
  }

}
