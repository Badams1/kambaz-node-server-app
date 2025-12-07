import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export default function QuizzesDao(db) {
  function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
  }

  function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: uuidv4(), questions: quiz.questions || [] };
    return model.create(newQuiz);
  }

  function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId });
  }

  function updateQuiz(quizId, quizUpdates) {
    return model.updateOne({ _id: quizId }, { $set: quizUpdates });
  }

  function findQuizById(quizId) {
    return model.findById(quizId);
  }

  function publishQuiz(quizId) {
    return model.updateOne({ _id: quizId }, { $set: { published: true } });
  }

  function unpublishQuiz(quizId) {
    return model.updateOne({ _id: quizId }, { $set: { published: false } });
  }

  return {
    findQuizzesForCourse,
    createQuiz,
    deleteQuiz,
    updateQuiz,
    findQuizById,
    publishQuiz,
    unpublishQuiz,
  };
}

