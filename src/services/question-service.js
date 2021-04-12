const QUIZZES_URL = "http://localhost:3000/api";


export const findQuestionsForQuiz= (qid) =>
    fetch(`${QUIZZES_URL}/quizzes/${qid}/questions`)
    .then(response => response.json())

export default {
  findQuestionsForQuiz
};