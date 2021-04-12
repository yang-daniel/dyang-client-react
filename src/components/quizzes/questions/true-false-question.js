import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {

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

          <li className={`list-group-item 
                                ${!grade ? "" :
              (userAnswer === "true" && question.correct === "true") ? 'list-group-item-success':
                  (userAnswer === "true" && question.correct === "false") ? 'list-group-item-danger':""}`}>

            <div className="form-check">
              <input onClick={() => {setUserAnswer("true")}}
                     className="form-check-input"
                     type="radio"
                     name={question._id}
                     disabled={grade}/> True
              {grade &&
                <>
                  {
                    (userAnswer === "true" && question.correct === "true") &&
                    <i className="fas fa-check wbdv-green align-middle float-right"/>
                  }
                  {
                    (userAnswer === "true" && question.correct !== "true") &&
                    <i className="fas fa-times wbdv-red align-middle float-right"/>
                  }
                </>
              }
            </div>
          </li>
          <li className={`list-group-item 
                                ${!grade ? "":
              (userAnswer === "false" && question.correct === "false") ? 'list-group-item-success' :
                  (userAnswer === "false" && question.correct === "true") ? 'list-group-item-danger' : ""}`}>

            <div className="form-check">
              <input onClick={() => {setUserAnswer("false")}}
                     className="form-check-input"
                     type="radio"
                     name={question._id}
                     disabled={grade}/> False
              {
                grade &&
                <>
                  {
                    (userAnswer === "false" && question.correct === "false") &&
                    <i className="fas fa-check wbdv-green align-middle float-right"/>
                  }
                  {
                    (userAnswer === "false" && question.correct !== "false") &&
                    <i className="fas fa-times wbdv-green align-middle float-right"/>
                  }
                </>
              }
            </div>
          </li>
        </ul>
        <br/>
        <p>Your Answer: {userAnswer}</p>
        <button onClick={() => {setGrade(true)}}
                type="button"
                className="btn btn-success">Grade</button>
      </li>
  )
}

export default TrueFalseQuestion;