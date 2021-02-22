
import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return(
        <div>
          <table className="table">
            <tr>
              <th className="w-50">Title</th>
              <th className="d-none d-md-table-cell">
                Owned By
              </th>
              <th className="d-none d-lg-table-cell">
                Last Modified
              </th>
              <th>
                <div className="form-row float-right">
                  <div className="col-auto">
                    <i className="fas fa-folder"></i>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-sort-alpha-down"></i>
                  </div>
                  <Link to="/courses/grid" className="col-auto">
                    <i className="fas fa-th"></i>
                  </Link>
                </div>
              </th>
            </tr>
            <tbody>
            {
              this.props.courses.map((course, ndx) =>
                  <CourseRow
                      updateCourse={this.props.updateCourse}
                      deleteCourse={this.props.deleteCourse}
                      key={ndx}
                      course={course}
                      title={course.title}
                      owner={course.owner}
                      lastModified={course.lastModified}
                  />)
            }
            </tbody>
          </table>
        </div>
    )
  }
}