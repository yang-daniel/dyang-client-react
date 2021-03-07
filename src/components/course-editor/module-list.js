import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"

const ModuleList = (
    {
      myModules=[],
      createModule,
      deleteModule,
      updateModule,
      findModulesForCourse
    }) => {
  const {layoutId, courseId, moduleId} = useParams();
  useEffect(() => {
    // alert(courseId)
    findModulesForCourse(courseId)
  }, [])
  return(
      <div>
        <h2>Modules</h2>
        <ul className="list-group">
          {
            myModules.map(module =>
                <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                  <EditableItem
                      to={`/courses/${layoutId}/edit/${courseId}/modules/${module._id}`}
                      updateItem={updateModule}
                      deleteItem={deleteModule}
                      active={true}
                      item={module}/>
                </li>
            )
          }
          <li className="list-group-item">
            <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
          </li>
        </ul>
      </div>)}

const stpm = (state) => {
  return {
    myModules: state.moduleReducer.modules
  }
}
const dtpm = (dispatch) => {
  return {
    createModule: (courseId) => {
      moduleService.createModuleForCourse(courseId, {title: "New Module"})
      .then(module => dispatch({
        type: "CREATE_MODULE",
        module: module
      }))
    },
    deleteModule: (moduleToDelete) =>
        moduleService.deleteModule(moduleToDelete._id)
        .then(status => dispatch({
          type: "DELETE_MODULE",
          moduleToDelete: moduleToDelete
        })),
    updateModule: (moduleToUpdate) =>
        moduleService.updateModule(moduleToUpdate._id, module)
        .then(status => dispatch({
          type: "UPDATE_MODULE",
          moduleToUpdate
        })),
    findModulesForCourse: (courseId) => {
      moduleService.findModulesForCourse(courseId)
      .then(modules => dispatch({
        type: "FIND_MODULES_FOR_COURSE",
        modules: modules
      }))
    }
  }
}

export default connect(stpm, dtpm)
(ModuleList)