import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  _id: String,
  title: String,
  type: String, // "Multiple Choice" | "True/False" | "Fill in the Blank"
  points: Number,
  question: String, // WYSIWYG content
  quiz: { type: String, ref: "QuizModel" },
  // Multiple Choice specific
  choices: [String],
  correctChoice: Number, // index of correct choice
  // True/False specific
  correctAnswer: Boolean,
  // Fill in the Blank specific
  correctAnswers: [String], // array of possible correct answers
}, { _id: false });

const quizSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    quizType: { type: String, default: "Graded Quiz" },
    points: { type: Number, default: 0 },
    assignmentGroup: { type: String, default: "Quizzes" },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: Number, // in minutes
    multipleAttempts: { type: Boolean, default: false },
    attemptsAllowed: { type: Number, default: 1 },
    showCorrectAnswers: String,
    accessCode: String,
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: String,
    availableFrom: String,
    availableUntil: String,
    course: { type: String, ref: "CourseModel" },
    published: { type: Boolean, default: false },
    questions: [questionSchema],
  },
  { collection: "quizzes" }
);

export default quizSchema;

