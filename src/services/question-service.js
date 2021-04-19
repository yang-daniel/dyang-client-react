// const QUIZZES_URL = "http://localhost:3000/api";
const QUIZZES_URL = "https://wbdv-sp21-dyang-node.herokuapp.com/api";

export const findQuestionsForQuiz= (qid) =>
    fetch(`${QUIZZES_URL}/quizzes/${qid}/questions`)
    .then(response => response.json())

export default {
  findQuestionsForQuiz
};