const initialState = {
  lessons: []
}

const lessonReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_LESSON":
      return {
        ...state,
        lessons: [
          ...state.lessons,
          action.lesson
        ]
      }
    case "FIND_LESSONS_FOR_MODULE":
      return {
        ...state,
        lessons: action.lessons
      }

    case "UPDATE_LESSON":
      return {
        lessons: state.lessons.map(m => {
          if(m._id === action.lesson._id) {
            return action.lesson
          } else {
            return m
          }
        })
      }

    case "DELETE_LESSON":
      return {
        lessons: state.lessons.filter(lesson => {
          if (lesson._id === action.lessonToDelete._id) {
            return false
          } else {
            return true
          }
        })
      }
    default:
      return state
  }
}

export default lessonReducer