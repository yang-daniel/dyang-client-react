import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses} from "../services/course-service";

class CourseManager extends React.Component {
  state = {
    courses: []
  }

  updateCourse = (course) => {
    courseService.updateCourse(course._id, course)
    .then(status => this.setState((prevState) => ({
      ...prevState,
      courses: prevState.courses.map(
          (c) => c._id === course._id ? course : c)
    })))
  }

  componentDidMount = () =>
      findAllCourses()
      .then(courses => this.setState({courses}))

  getTitle = () => {
    let title = document.getElementsByClassName('wbdv-taskbar-name')[0].value;
    if (title == "") {title = "New Course"}
    return(title)
  }

  addCourse = () => {
    const newCourse = {
      title: this.getTitle(),
      owner: "New Owner",
      lastModified: "Never",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
      desc: "cool new course description"
    }
    courseService.createCourse(newCourse)
    .then(course => this.setState(
        (prevState) => ({
          ...prevState,
          courses: [
            ...prevState.courses,
            course
          ]
        })))

  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
    .then(status => {
      this.setState((prevState) => ({
        ...prevState,
        courses: prevState.courses.filter
        (course => course !== courseToDelete)
      }))
    })
  }


  render() {
    return(
        <div>
          <Route>
            {
              <div className="navbar" >
                <div>
                  <Link to="/">
                    <i className="fas fa-bars fa-2x"/>
                  </Link>
                </div>

                <div className="col-lg-auto d-none d-lg-block">
                  <h3>
                    Course Manager
                  </h3>
                </div>

                <div className="col-8 col-auto">
                  <input className="form-control input wbdv-taskbar-name"
                         placeholder="New Course"/>
                </div>

                <div className="col-auto float-right">
                  <i onClick={this.addCourse}
                    className="fas fa-plus-circle fa-2x wbdv-red"/>
                </div>
              </div>
            }
          </Route>
          <Route path="/courses/table" exact={true}>
            <CourseTable
                deleteCourse={this.deleteCourse}
                updateCourse={this.updateCourse}
                courses={this.state.courses}/>
          </Route>
          <Route path="/courses/grid" exact={true}>
            <CourseGrid
                deleteCourse={this.deleteCourse}
                updateCourse={this.updateCourse}
                courses={this.state.courses}/>
          </Route>
          {/*<Route path="/courses/editor"*/}
          {/*       render={(props) => <CourseEditor {...props}/>}>*/}
          {/*</Route>*/}
          <Route path={[
            "/courses/:layoutId/edit/:courseId",
            "/courses/:layoutId/edit/:courseId/modules/:moduleId",
            "/courses/:layoutId/edit/:courseId/modules/:moduleId/lessons/:lessonId",
            "/courses/:layoutId/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"]}
                 exact={true}
                 render={(props) => <CourseEditor {...props}/>}>
          </Route>

          <Route>
            {
              <i onClick={this.addCourse}
                 className="fas fa-plus-circle fa-3x wbdv-red wbdv-bottom-right"></i>
            }
          </Route>
        </div>
    )
  }
}

export default CourseManager