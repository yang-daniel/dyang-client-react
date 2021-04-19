import React from "react";

const MultipleChoiceQuestion = (
    {
      question,
      yourAnswer,
      setYourAnswer,
      updateAnswers,
      grade
    }) => {


  return (
      <li className="list-group-item">
        <h5>
          {question.question}
          {grade &&
            <div className="float-right">
              {question.correct === yourAnswer &&
                <i className="fas fa-check wbdv-green"/>
              }
              {question.correct !== yourAnswer &&
                <i className="fas fa-times wbdv-red"/>
              }
            </div>
          }
        </h5>
        <ul className="list-group">
          {question.choices.map((choice) => {
              return (
                  <li className={`list-group-item 
                                ${!grade?"":
                      (yourAnswer === choice && question.correct === choice)?'list-group-item-success':
                          (yourAnswer === choice && question.correct !== choice)?'list-group-item-danger':""}`}>
                    <div className="form-check">
                      <input onClick={() => {setYourAnswer(choice)
                        question = {...question, answer: choice}
                        updateAnswers({...question})
                      }}
                             className="form-check-input"
                             type="radio"
                             name={question._id}
                             disabled={grade}/> {choice}

                      {grade &&
                        <>
                          {(yourAnswer === choice && question.correct === choice) &&
                            <i className="fas fa-check wbdv-green align-middle float-right"/>
                          }

                          {(yourAnswer === choice && question.correct !== choice) &&
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
        <p>Your Answer: {yourAnswer}</p>
      </li>
  )
}

export default MultipleChoiceQuestion;