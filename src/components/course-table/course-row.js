import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
      deleteCourse,
      updateCourse,
      course,
      lastModified,
      title,
      owner
    }) => {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const [newOwner, setNewOwner] = useState(owner)

  // using hooks for title
  const saveTitle = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: newTitle,
      owner: newOwner
    }
    updateCourse(newCourse)
  }

  return (
      <tr>
        <td>
          {!editing &&
            <Link to={`/courses/table/edit/${course._id}`} className="form-row">
              <div className="col-auto">
                <i className="fas fa-file wbdv-blue"/>
              </div>
              <div className="col-auto">
                {title}
              </div>
            </Link>}

          {editing &&
            <input
                onChange={(event) => setNewTitle(event.target.value)}
                value={newTitle}
                className="form-control"/>}

        </td>
        <td className="d-none d-md-table-cell">
          {!editing &&
            <div className="col-auto">
              {owner}
            </div>}

          {editing &&
            <input
                onChange={(event) => setNewOwner(event.target.value)}
                value={newOwner}
                className="form-control"/>}

        </td>
        <td className="d-none d-lg-table-cell">
          {lastModified}
        </td>
        <td>
          <div className="form-row float-right">
            <div className="col-auto">
              {editing &&
              <i onClick={() =>
                saveTitle()}
                className="fas fa-check wbdv-green"/>}
            </div>
            <div className="col-auto">
              {editing &&
              <i onClick={() =>
                (deleteCourse(course),
                    setEditing(false))}
                className="fas fa-trash wbdv-red"/>}
            </div>
            <div className="col-auto">
              {!editing &&
              <i onClick={() =>
                setEditing(true)}
                className="fas fa-edit wbdv-blue"/>}
            </div>
          </div>
        </td>
      </tr>
  )
}
export default CourseRow