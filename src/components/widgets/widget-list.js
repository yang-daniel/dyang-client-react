import React, {useEffect, useState} from 'react';
import widgetService from '../../services/widget-service';
import {connect} from 'react-redux';
import HeadingWidget from './heading-widget';
import ParagraphWidget from './paragraph-widget';
import {useParams} from 'react-router-dom';
import ImageWidget from './image-widget';
import ListWidget from './list-widget';

const WidgetList = (
    {
      widgets,
      createWidgetForTopic,
      deleteWidget,
      updateWidget,
      findWidgetsForTopic
    }
) => {
  const {topicId} = useParams();

  const [editing, setEditing] = useState([]);

  useEffect(() => {
    if (topicId !== 'undefined' && typeof topicId !== 'undefined') {
      findWidgetsForTopic(topicId);
    }
  }, [findWidgetsForTopic, topicId]);

  const onClickEdit = (widget) => {
    setEditing([...editing, widget])
  }

  const onClickSave = (widget) => {
    setEditing(editing.filter(w => w.id !== widget.id))
    updateWidget(widget.id, widget);
  }

  const onClickTrash = (widget) => {
    setEditing(editing.filter(w => w.id !== widget.id));
    deleteWidget(widget);
  }
  const onChangeType = (widget, type) => {
    const withoutCurrWidget = editing.filter(w => w.id !== widget.id);
    widget.type = type;
    if (!widget.size) {
      widget.size = 1;
    }
    setEditing([...withoutCurrWidget, widget])
  }

  return (
      (topicId !== "undefined" && typeof topicId !== "undefined") &&
      <div>
        <i className='fas fa-plus fa-2x float-right'
           onClick={() => createWidgetForTopic(topicId)}
        />
        <h5>Widgets</h5>
        <ul className='list-group'>
          {
            widgets.map(widget =>
                <li className='list-group-item' key={widget.id}>
                  {
                    !editing.includes(widget) &&
                    <i className='fas fa-cog float-right' onClick={() => onClickEdit(widget)}/>
                  }
                  {
                    editing.includes(widget) &&
                    <div>
                      <i className='fas fa-trash float-right'
                         onClick={() => onClickTrash(widget)}/>
                      <i className='fas fa-check float-right mr-2'
                         onClick={() => onClickSave(widget)}/>
                    </div>
                  }
                  {
                    editing.includes(widget) &&
                    <select className='form-control mb-2'
                            value={widget.type}
                            onChange={(e) =>
                                onChangeType(widget, e.target.value)}>
                      <option value='HEADING'>Heading</option>
                      <option value='PARAGRAPH'>Paragraph</option>
                      <option value='LIST'>List</option>
                      <option value='IMAGE'>Image</option>
                    </select>
                  }
                  {
                    widget.type === 'HEADING' &&
                    <HeadingWidget widget={widget}
                                   editing={editing}
                                   setEditing={setEditing}/>
                  }
                  {
                    widget.type === 'PARAGRAPH' &&
                    <ParagraphWidget widget={widget}
                                     editing={editing}
                                     setEditing={setEditing}/>
                  }
                  {
                    widget.type === 'IMAGE' &&
                    <ImageWidget widget={widget}
                                 editing={editing}
                                 setEditing={setEditing}/>
                  }
                  {
                    widget.type === 'LIST' &&
                    <ListWidget widget={widget}
                                editing={editing}
                                setEditing={setEditing}/>
                  }
                </li>
            )
          }
        </ul>
      </div>
  );
}

const stpm = (state) => {
  return {
    widgets: state.widgetReducer.widgets
  }
}

const dtpm = (dispatch) => ({

  findWidgetsForTopic: (topicId) => {
    widgetService.findWidgetsForTopic(topicId)
    .then(widgets => dispatch({
      type: "FIND_WIDGETS",
      widgets
    }))
  },

  createWidgetForTopic: (topicId) => {
    //console.log("CREATE TOPIC FOR LESSON: " + lessonId)
    widgetService
    .createWidgetForTopic(topicId, {
      type: 'HEADING',
      size: 4,
      text: 'New Widget',
      url: '',
      value: 'UNORDERED'})
    .then(widget => dispatch({
      type: "CREATE_WIDGET",
      widget
    }))
  },

  updateWidget: (wid, widget) =>
      widgetService.updateWidget(wid, widget)
      .then(status => dispatch({
        type: "UPDATE_WIDGET",
        widget
      })),

  deleteWidget: (widget) => {
    widgetService.deleteWidget(widget.id)
    .then(status => dispatch({
      type: "DELETE_WIDGET",
      widgetToDelete:widget
    }))
  },
})

export default connect(stpm, dtpm)(WidgetList);