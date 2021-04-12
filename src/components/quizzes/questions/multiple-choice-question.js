import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {

  const [userAnswer, setUserAnswer] = useState("")
  const [grade, setGrade] = useState(false)

  return (
      <li className="list-group-item">
        <h5>
          {question.question}
          {grade &&
            <div className="float-right">
              {question.correct === userAnswer &&
                <i className="fas fa-check wbdv-green"/>
              }
              {question.correct !== userAnswer &&
                <i className="fas fa-times wbdv-red"/>
              }
            </div>
          }
        </h5>

        <ul className="list-group">
          {question.choices.map((choice) => {

              return (
                  <li className={`list-group-item 
                                ${!grade ? "" : (userAnswer === choice && question.correct === choice) ? 'list-group-item-success':
                          (userAnswer === choice && question.correct !== choice) ? 'list-group-item-danger' : ""}`}>
                    <div className="form-check">
                      <input onClick={() => {setUserAnswer(choice)}}
                             className="form-check-input"
                             type="radio"
                             name={question._id}
                             disabled={grade}/> {choice}
                      {grade &&
                        <>
                          {(userAnswer === choice && question.correct === choice) &&
                            <i className="fas fa-check wbdv-green align-middle float-right"/>
                          }
                          {(userAnswer === choice && question.correct !== choice) &&
                            <i className="fas fa-times wbdv-red align-middle float-right"/>
                          }
                        </>
                      }
                    </div>
                  </li>
              )
            })
          }
        </ul>
        <br/>

        <p>Your Answer: {userAnswer}</p>
        <button onClick={() => {setGrade(true)}}
                type="button"
                className="btn btn-success">Grade</button>
      </li>
  )
}

export default MultipleChoiceQuestion;