import React, {useState} from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const GradedQuestion = (
    {
      question
    }) => {
  const yourAnswer = question.answer
  return (
      <>
        {
          question.type === "TRUE_FALSE" &&
          <TrueFalseQuestion question={question}
                             yourAnswer={yourAnswer}
                             grade={true}/>
        }
        {
          question.type === "MULTIPLE_CHOICE" &&
          <MultipleChoiceQuestion question={question}
                                  yourAnswer={yourAnswer}
                                  grade={true}/>
        }
      </>
  )
}

export default GradedQuestion;