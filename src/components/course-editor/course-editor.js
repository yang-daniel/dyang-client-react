import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import courseService from "../../services/course-service";

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
  const {layoutId, courseId, moduleId} = useParams();
  const [courseName, setCourseName] = useState(" ")
  courseService.findCourseById(courseId)
  .then(status => setCourseName(status.title))
  return(
      <Provider store={store}>
        <div>
          <h1>
            {/*<Link to="/courses/table">*/}
            {/*  <i className="fas fa-arrow-left"></i>*/}
            {/*</Link>*/}
            {/*Course Editor {courseId} {moduleId}*/}
            {/*<i className="fas fa-times float-right"*/}
            {/*   onClick={() => history.goBack()}></i>*/}
            <Link to={`/courses/${layoutId}`}>
              <i className="fas fa-times float-left mt-1 mr-4"></i>
            </Link>
            <span className="add-padding-left">
                      {courseName}
                  </span>
          </h1>
          <div className="row">
            <div className="col-3">
              <ModuleList/>
            </div>
            <div className="col-9">
              <div className="row">
                <LessonTabs/>
              </div>
              <div className="row">
                <TopicPills/>
              </div>
            </div>
          </div>
        </div>

      </Provider>)
}

export default CourseEditor