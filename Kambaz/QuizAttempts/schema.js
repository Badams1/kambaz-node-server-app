import mongoose from "mongoose";

const questionAnswerSchema = new mongoose.Schema({
  questionId: String,
  answer: mongoose.Schema.Types.Mixed, // can be string, boolean, or number
  isCorrect: Boolean,
}, { _id: false });

const quizAttemptSchema = new mongoose.Schema(
  {
    _id: String,
    quiz: { type: String, ref: "QuizModel" },
    user: { type: String, ref: "UserModel" },
    answers: [questionAnswerSchema],
    score: Number,
    totalPoints: Number,
    submittedAt: { type: Date, default: Date.now },
    attemptNumber: Number,
  },
  { collection: "quizAttempts" }
);

export default quizAttemptSchema;

