import React, {useState} from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = (
    {
      question,
      answers,
      setAnswers,
      grade
    }) => {
  const [yourAnswer, setYourAnswer] = useState("")
  const updateAnswers = (updatedAnswer) => {
    const filteredAnswers = answers.filter(question => question._id != updatedAnswer._id)
    filteredAnswers.push(updatedAnswer)
    setAnswers(filteredAnswers)
  }
  return (
      <>
        {
          question.type === "TRUE_FALSE" &&
          <TrueFalseQuestion question={question}
                             yourAnswer={yourAnswer}
                             setYourAnswer={setYourAnswer}
                             updateAnswers={updateAnswers}
                             grade={grade}/>
        }
        {
          question.type === "MULTIPLE_CHOICE" &&
          <MultipleChoiceQuestion question={question}
                                  yourAnswer={yourAnswer}
                                  setYourAnswer={setYourAnswer}
                                  updateAnswers={updateAnswers}
                                  grade={grade}/>
        }
      </>
  )
}

export default Question;