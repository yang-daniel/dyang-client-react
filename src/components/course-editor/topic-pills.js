import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service";


const TopicPills = (
    {
      topics=[],
      findTopicsForLesson,
      createTopicForLesson,
      deleteTopic,
      updateTopic
    }) => {
  const {layoutId, courseId, moduleId, lessonId, topicId} = useParams();
  useEffect(() => {
    console.log("LOAD TOPICS FOR LESSON: " + lessonId)
    if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
      findTopicsForLesson(lessonId)
    }
  }, [lessonId])



  return(
      (lessonId !== "undefined" && typeof lessonId !== "undefined") &&
      <div>
        {/*<h2>Topics</h2>*/}
        <ul className="nav nav-pills">
          {
            topics.map(topic =>
                <li key={topic._id} className="nav-item">
                  <EditableItem
                      active={topic._id === topicId}
                      to={`/courses/${layoutId}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                      updateItem={updateTopic}
                      deleteItem={deleteTopic}
                      item={topic}/>
                </li>
            )
          }
          {
            (lessonId !== "undefined" && typeof lessonId !== "undefined") &&
            <li>
              <i onClick={() => createTopicForLesson(lessonId)}
                 className="fas fa-plus"></i>
            </li>
          }
        </ul>
      </div>)}

const stpm = (state) => ({
  topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
  findTopicsForLesson: (lessonId) => {
    topicService.findTopicsForLesson(lessonId)
    .then(topics => dispatch({
      type: "FIND_TOPICS_FOR_LESSON",
      topics
    }))
  },
  createTopicForLesson: (lessonId) => {
    topicService
    .createTopicForLesson(lessonId, {title: "New Topic"})
    .then(topic => dispatch({
      type: "CREATE_TOPIC",
      topic
    }))
  },
  updateTopic: (topic) => {
    topicService.updateTopic(topic._id,topic)
    .then(status => dispatch({
      type: "UPDATE_TOPIC",
      topic
    }))
  },
  deleteTopic: (topic) => {
    topicService.deleteTopic(topic._id)
    .then(status => dispatch({
      type: "DELETE_TOPIC",
      topicToDelete:topic
    }))
  },
})

export default connect(stpm, dtpm)(TopicPills)