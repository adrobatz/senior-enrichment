import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Students from './Students';
import Root from './Root';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import store from '../store';
import {fetchCampuses} from '../reducers/campuses'
import {fetchStudents} from '../reducers/students'

export default class Main extends Component {

 componentDidMount () {
  const campusesThunk = fetchCampuses();
  const studentsThunk = fetchStudents();
  store.dispatch(campusesThunk);
  store.dispatch(studentsThunk);
}

render() {
  return (
          <HashRouter>
            <div>
              <Navbar />
              <Route exact path="/" component={Root} />
              <Route exact path="/students" component={Students} />
              <Route exact path="/campuses" component={Campuses} />
              <Route exact path="/campuses/:campusId" component={SingleCampus} />
              <Route exact path="/students/:studentId" component={SingleStudent} />
            </div>
          </HashRouter>
          )
        }
      }

