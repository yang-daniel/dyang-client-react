const initialState = {
  widgets: []
}

const widgetReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_WIDGET":
      return {
        ...state,
        widgets: [
          ...state.widgets,
          action.widget
        ]
      }
    case "FIND_WIDGETS":
      return {
        ...state,
        widgets: action.widgets
      }

    case "DELETE_WIDGET":
      return {
        widgets: state.widgets.filter(widget => {
          return widget.id !== action.widgetToDelete.id;
        })
      }
    case "UPDATE_WIDGET":
      return {
        widgets: state.widgets.map(m => {
          if(m.id === action.widget.id) {
            return action.widget
          } else {
            return m
          }
        })
      }
    case "RESET_WIDGET":
      const newState2 = {
        ...state,
        widgets: []
      }
      return newState2

    default:
      return state
  }
}

export default widgetReducer