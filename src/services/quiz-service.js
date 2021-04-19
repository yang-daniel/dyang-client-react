// const QUIZZES_URL = "http://localhost:3000/api";
const QUIZZES_URL = "https://wbdv-sp21-dyang-node.herokuapp.com/api";

export const findAllQuizzes = () =>
    fetch(`${QUIZZES_URL}/quizzes`)
    .then(response => response.json())

export const findQuizById = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}`)
    .then(response => response.json())

export const submitQuiz = (quizId, questions) =>
    fetch(`${QUIZZES_URL}/quizzes/${quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
    .then(result => console.log(result))

export const findAttemptsForQuiz = (quizId) =>
    fetch(`${QUIZZES_URL}/quizzes/${quizId}/attempts`)
    .then(response => response.json())

export const findAttemptById = (quizId, attemptId) =>
    fetch(`${QUIZZES_URL}/quizzes/${quizId}/attempts/${attemptId}`)
    .then(response => response.json())

const api = {
  findAllQuizzes,
  findQuizById,
  submitQuiz,
  findAttemptsForQuiz,
  findAttemptById
};

export default api;