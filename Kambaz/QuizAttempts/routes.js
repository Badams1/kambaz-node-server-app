import QuizAttemptsDao from "./dao.js";

export default function QuizAttemptsRoutes(app, db) {
  const dao = QuizAttemptsDao(db);

  const findAttemptsForUserAndQuiz = async (req, res) => {
    const { userId, quizId } = req.params;
    const attempts = await dao.findAttemptsForUserAndQuiz(userId, quizId);
    res.json(attempts);
  };

  const findLatestAttemptForUserAndQuiz = async (req, res) => {
    const { userId, quizId } = req.params;
    const attempt = await dao.findLatestAttemptForUserAndQuiz(userId, quizId);
    res.json(attempt);
  };

  const createAttempt = async (req, res) => {
    const attempt = req.body;
    const newAttempt = await dao.createAttempt(attempt);
    res.json(newAttempt);
  };

  const countAttemptsForUserAndQuiz = async (req, res) => {
    const { userId, quizId } = req.params;
    const count = await dao.countAttemptsForUserAndQuiz(userId, quizId);
    res.json({ count });
  };

  // Route declarations
  app.get("/api/users/:userId/quizzes/:quizId/attempts", findAttemptsForUserAndQuiz);
  app.get("/api/users/:userId/quizzes/:quizId/attempts/latest", findLatestAttemptForUserAndQuiz);
  app.post("/api/users/:userId/quizzes/:quizId/attempts", createAttempt);
  app.get("/api/users/:userId/quizzes/:quizId/attempts/count", countAttemptsForUserAndQuiz);
}

