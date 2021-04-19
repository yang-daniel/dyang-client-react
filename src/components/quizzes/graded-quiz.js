import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import GradedQuestion from "./questions/graded-question";
import quizzesService from '../../services/quiz-service'

const GradedQuiz = () => {
  const {quizId, courseId, attemptId} = useParams()
  const [attempt, setAttempt] = useState({})
  const [questions, setQuestions]= useState([])
  useEffect(() => {
    quizzesService.findAttemptById(quizId, attemptId)
    .then((response) => {
      setAttempt(response)
      setQuestions(response.answers)
    })
  }, [])
  return(
      <div>
        <h3>
          <Link className="fas fa-times mr-2"
                to={`/courses/${courseId}/quizzes`} exact={true}>
          </Link>
          Quiz {quizId} - Attempt Score {attempt.score}
        </h3>
        <ul className="list-group">
          {
            questions.map((question) => {
              return(
                  <GradedQuestion question={question}/>
              )
            })
          }
        </ul>
      </div>
  )
}

export default GradedQuiz;