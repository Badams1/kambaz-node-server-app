import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db) {
  function enrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    // Check if enrollment already exists
    const existingEnrollment = enrollments.find(
      (enrollment) => enrollment.user === userId && enrollment.course === courseId
    );
    if (existingEnrollment) {
      return existingEnrollment;
    }
    const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
    enrollments.push(newEnrollment);
    return newEnrollment;
  }

  function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = db;
    db.enrollments = enrollments.filter(
      (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
    );
  }

  function findEnrollmentsForCourse(courseId) {
    const { enrollments } = db;
    return enrollments.filter((enrollment) => enrollment.course === courseId);
  }

  function findEnrollmentsForUser(userId) {
    const { enrollments } = db;
    return enrollments.filter((enrollment) => enrollment.user === userId);
  }

  return { 
    enrollUserInCourse, 
    unenrollUserFromCourse,
    findEnrollmentsForCourse,
    findEnrollmentsForUser,
  };
}

