const TOPICS_URL = process.env.REACT_APP_TOPIC_URL;
const WIDGETS_URL = process.env.REACT_APP_WIDGET_URL;

export const createWidget = (topicId, widget) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
      method: "POST",
      body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`)
    .then(response => response.json())


export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
      method: "DELETE"
    })
    .then(response => response.json())


export const updateWidget = (wid, widget) =>
    fetch(`${WIDGETS_URL}/${wid}`, {
      method: "PUT",
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())


export default {
  findWidgetsForTopic, createWidgetForTopic: createWidget, deleteWidget, updateWidget
}