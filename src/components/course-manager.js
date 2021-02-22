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

  addCourse = () => {
    const newCourse = {
      title: "New Course",
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
    document.getElementsByClassName('wbdv-title-fld')[0].value = ''

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
          <Link to="/">
            <i className="fas fa-2x fa-home float-right"></i>
          </Link>
          <h1>Course Manager</h1>
          <button onClick={this.addCourse}>Add Course</button>
          <Route path="/courses/table">
            <CourseTable
                updateCourse={this.updateCourse}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}/>
          </Route>
          <Route path="/courses/grid">
            <CourseGrid
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}/>
          </Route>
          <Route path="/courses/editor"
                 render={(props) => <CourseEditor {...props}/>}>
          </Route>
        </div>
    )
  }
}

export default CourseManager