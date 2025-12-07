import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export default function QuizAttemptsDao(db) {
  function findAttemptsForQuiz(quizId) {
    return model.find({ quiz: quizId });
  }

  function findAttemptsForUserAndQuiz(userId, quizId) {
    return model.find({ user: userId, quiz: quizId }).sort({ attemptNumber: -1 });
  }

  function findLatestAttemptForUserAndQuiz(userId, quizId) {
    return model.findOne({ user: userId, quiz: quizId }).sort({ attemptNumber: -1 });
  }

  function createAttempt(attempt) {
    const newAttempt = { ...attempt, _id: uuidv4() };
    return model.create(newAttempt);
  }

  function countAttemptsForUserAndQuiz(userId, quizId) {
    return model.countDocuments({ user: userId, quiz: quizId });
  }

  return {
    findAttemptsForQuiz,
    findAttemptsForUserAndQuiz,
    findLatestAttemptForUserAndQuiz,
    createAttempt,
    countAttemptsForUserAndQuiz,
  };
}

