import React, {useState} from 'react'
import {Link} from "react-router-dom";

// course-card is derivative of course-row
const CourseCard = (
    {
      course,
      deleteCourse,
      updateCourse
    }) => {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(course.title)
  const [newImage, setNewImage] = useState(course.image)
  const [newDesc, setNewDesc] = useState(course.desc)

  const saveTitle = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: newTitle,
      image: newImage,
      desc: newDesc
    }
    updateCourse(newCourse)
  }

  return (
      <div className="card-deck card-columns col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="card">

          <div className="embed-responsive embed-responsive-16by9">
          <img src={course.image} className="card-img-top embed-responsive-item"/>
            {editing &&
            <div className="wbdv-bottom">
              <input
                  onChange={(event) => setNewImage(event.target.value)}
                  value={newImage}
                  className="form-control"/>
            </div>
            }
          </div>

          <div className="card-body d-flex flex-column flex-row">
            <div className="form-row row">
              {editing &&
                <div className="col-form-label col">
                  <input
                      onChange={(event) => setNewTitle(event.target.value)}
                      value={newTitle}
                      className="form-control"/>
                  <input
                      onChange={(event) => setNewDesc(event.target.value)}
                      value={newDesc}
                      placeholder={course.desc}
                      className="form-control" width="100"/>

                </div>
              }
              {!editing &&
                <div>
                  <h5 className="card-title">{course.title}</h5>
                  <Link to={`/courses/${course._id}/quizzes`}>
                    Quizzes
                  </Link>
                  <p className="card-text"> <small>{course.desc}</small></p>
                </div>
              }
            </div>

            <div className="form-row mt-2">
              <div className="col-12 float-left">
                <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
                  {course.title}
                </Link>
              </div>
              <div className="col float-right mt-2">
                {!editing &&
                  <div className="float-right">
                    <i onClick={() =>
                        setEditing(true)}
                       className="fas fa-edit wbdv-blue"></i>
                  </div>
                }

                {editing &&
                <div>
                  <div className="row float-right">
                    <div className="col">
                      <i onClick={() =>
                          saveTitle()}
                         className="fas fa-check  wbdv-green"></i>
                    </div>
                    <div className="col">
                      <i onClick={() =>
                          (deleteCourse(course), setEditing(false))}
                         className="fas fa-trash  wbdv-red"></i>
                    </div>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CourseCard