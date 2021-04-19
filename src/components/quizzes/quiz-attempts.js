import React, {useEffect, useState} from "react";
import quizzesService from '../../services/quiz-service'
import {Link, Route} from "react-router-dom"

const QuizAttempts = (
    {
      courseId,
      quizId
    }) => {
  const [attempts, setAttempts] = useState([])

  useEffect(() => {
    quizzesService.findAttemptsForQuiz(quizId).then(attempts =>
        setAttempts(attempts)
    )}, [])

  return (
      <div>
        <ul className = "list-group">
          {console.log(attempts)}
          {attempts.map(attempt => {
              const attemptNum = attempts.indexOf(attempt) + 1
              return(
                  <div>
                    <li className="list-group-item">
                      <div to={`/courses/${courseId}/quizzes/${quizId}/${attempt._id}`} className="row">
                        <div className="col">
                          Attempt #{attemptNum}
                        </div>
                        <div className="col">
                          Score: {Math.round(attempt.score * 100)/100}%
                        </div>
                      </div>
                    </li>

                  </div>
              )
            })
          }
        </ul>
      </div>

  );
}

export default QuizAttempts;