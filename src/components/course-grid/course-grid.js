import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = (
    {
      courses,
      deleteCourse,
      updateCourse}) =>
    <div className="container-fluid">
        <div className="navbar">

          <h5 className="nav-item w-50 d-none d-md-block">
            Recent Documents
          </h5>

          <h5 className="nav-item w-25	d-none d-md-block">
            <div>
            Owned by me <i className="fas fa-arrow-down ml-1"/>
            </div>
          </h5>

          <div>
            <div className="row float-right">
              <div className="col-auto">
                <i className="fas fa-folder"></i>
              </div>
              <div className="col-auto">
                <i className="fas fa-sort-alpha-down"></i>
              </div>
              <Link to="/courses/table" className="col-auto">
                <i className="fas fa-list"></i>
              </Link>
            </div>

          </div>
        </div>

      <div className="row">
        {courses.map(course =>
              <CourseCard
                  course={course}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
              />)}
      </div>
    </div>

export default CourseGrid