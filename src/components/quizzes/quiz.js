import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from "../../services/question-service";
import quizzesService from '../../services/quiz-service'
import {connect} from "react-redux";

const Quiz = (
    {
      questions,
      findQuestionsForQuiz
    }
) => {
  const {quizId, courseId} = useParams()
  const [answers, setAnswers] = useState()
  const [grade, setGrade] = useState(false)
  useEffect(() => {
    findQuestionsForQuiz(quizId)
    .then((questions) => setAnswers(questions.questions))
  }, [])
  return(
      <div>
        <h3>
          <Link className="fas fa-times mr-2"
                to={`/courses/${courseId}/quizzes`} exact={true}>
          </Link>
          Quiz {quizId}
        </h3>
        <ul className="list-group">
          {
            questions.map((question) => {
              return(
                  <Question question={question}
                            answers={answers}
                            setAnswers={setAnswers}
                            grade={grade}/>
              )
            })
          }
        </ul>
        <br/>
        <button
            onClick={() => {
              setGrade(true)
              quizzesService.submitQuiz(quizId, answers)}}
            type="button"
            className="btn btn-primary float-right">Submit</button>
      </div>
  )
}

const stpm = (state) => ({
  questions: state.questionReducer.questions
})

const dtpm = (dispatch) => {
  return {
    findQuestionsForQuiz: (qid) =>
        questionService.findQuestionsForQuiz(qid)
        .then(questions => dispatch({
          type: 'FIND_QUESTIONS_FOR_QUIZ',
          questions
        }))
  }
}
export default connect(stpm, dtpm)(Quiz);