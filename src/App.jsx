import React, { useState, useEffect, useCallback } from 'react';
import "./globals.css"

import allQuestionsData from "./data/ges101.json"

const TOTAL_QUESTIONS = 40;
const QUIZ_TIME_SECONDS = 20 * 60; // 20 minutes

/**
 * Helper function to format time from seconds to MM:SS
 */
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

/**
 * Main App Component
 */
export default function App() {
  const [quizState, setQuizState] = useState('start'); // 'start', 'quiz', 'results'
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { questionId: 'selectedOptionKey' }
  const [timer, setTimer] = useState(QUIZ_TIME_SECONDS);
  const [score, setScore] = useState(0);

  // --- 1. Logic to handle quiz submission and scoring ---
  const handleSubmitQuiz = useCallback(() => {
    if (quizState !== 'quiz') return; // Prevent multiple submissions

    let correctAnswers = 0;
    questions.forEach((question) => {
      if (userAnswers[question.question_id] === question.correct_answer) {
        correctAnswers++;
      }
    });

    setScore(correctAnswers);
    setQuizState('results');
    setTimer(0);
  }, [questions, userAnswers, quizState]);

  // --- 2. Logic to start the quiz ---
  const startQuiz = useCallback(() => {
    // i & ii: Generate 40 random, unique indices and filter questions
    const indices = new Set();
    const totalAvailable = allQuestionsData.length;
    
    // Ensure we don't try to get more questions than available
    const questionsToSelect = Math.min(TOTAL_QUESTIONS, totalAvailable);

    while (indices.size < questionsToSelect) {
      const index = Math.floor(Math.random() * totalAvailable);
      indices.add(index);
    }

    const selectedQuestions = [...indices].map(index => allQuestionsData[index]);

    setQuestions(selectedQuestions);
    setUserAnswers({});
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimer(QUIZ_TIME_SECONDS);
    setQuizState('quiz'); // iii: Start the 20-min quiz
  }, []); // No dependencies, as allQuestionsData is now a local constant

  // --- 3. Timer effect ---
  // This effect handles the countdown
  useEffect(() => {
    if (quizState !== 'quiz' || timer <= 0) {
      return;
    }

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [quizState, timer]);

  // This effect handles what happens when the timer hits 0
  useEffect(() => {
    if (timer === 0 && quizState === 'quiz') {
      handleSubmitQuiz();
    }
  }, [timer, quizState, handleSubmitQuiz]);

  // --- 4. Answer and Navigation Handlers ---
  const handleAnswerSelect = (questionId, optionKey) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionKey,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  // --- 5. Rendering Logic ---

  // Helper component for the Start Screen
  const renderStartScreen = () => (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Welcome to the GES 101 Quiz</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        You will have <span className="font-bold">{formatTime(QUIZ_TIME_SECONDS)}</span> minutes to answer{' '}
        <span className="font-bold">{TOTAL_QUESTIONS}</span> randomly selected questions.
      </p>
      <button
        onClick={startQuiz}
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
      >
        Start Quiz
      </button>
    </div>
  );

  // Helper component for the Quiz Screen
  const renderQuizScreen = () => {
    if (questions.length === 0) {
      return <div className="dark:text-white">Loading questions...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = userAnswers[currentQuestion.question_id];

    return (
      <div className="p-4 md:p-8">
        {/* Header: Question Number and Timer */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="text-2xl font-bold text-red-600 px-4 py-2 bg-red-100 dark:text-red-300 dark:bg-red-900/50 rounded-lg">
            {formatTime(timer)}
          </span>
        </div>

        {/* Question Stem */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow mb-6">
          <p className="text-xl text-gray-800 dark:text-gray-100 leading-relaxed">{currentQuestion.question_stem}</p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {Object.entries(currentQuestion.options).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleAnswerSelect(currentQuestion.question_id, key)}
              className={`
                block w-full text-left p-4 rounded-lg border-2 dark:text-gray-100
                transition duration-150
                ${
                  selectedAnswer === key
                    ? 'bg-blue-100 border-blue-500 ring-2 ring-blue-300 dark:bg-blue-900/50 dark:border-blue-500'
                    : 'bg-white border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600'
                }
              `}
            >
              <span className="font-bold mr-2">{key}.</span> {value}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-500"
          >
            Previous
          </button>
          
          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmitQuiz}
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  };

  // Helper component for the Results Screen (iv. Show corrections)
  const renderResultsScreen = () => (
    <div className="p-4 md:p-8">
      <div className="text-center mb-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Quiz Complete!</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300">
          Your Final Score:
        </p>
        <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 my-4">
          {score} / {questions.length}
        </p>
        <button
          onClick={startQuiz}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
        >
          Restart Quiz
        </button>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Review Your Answers</h2>
      <div className="space-y-4">
        {questions.map((question, index) => {
          const userAnswer = userAnswers[question.question_id];
          const correctAnswer = question.correct_answer;
          const isCorrect = userAnswer === correctAnswer;

          return (
            <div
              key={question.question_id}
              className={`p-5 rounded-lg shadow border-l-4 ${
                isCorrect ? 'bg-green-50 border-green-500 dark:bg-green-900/40 dark:border-green-600' : 'bg-red-50 border-red-500 dark:bg-red-900/40 dark:border-red-600'
              }`}
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                {index + 1}. {question.question_stem}
              </h4>
              <ul className="space-y-2">
                {Object.entries(question.options).map(([key, value]) => {
                  const isCorrectAnswer = key === correctAnswer;
                  const isUserAnswer = key === userAnswer;

                  let className = 'text-gray-700 dark:text-gray-300';
                  if (isCorrectAnswer) {
                    className = 'text-green-700 dark:text-green-400 font-bold'; // This is the correct answer
                  } else if (isUserAnswer && !isCorrect) {
                    className = 'text-red-700 dark:text-red-400 font-bold line-through'; // This is the user's wrong answer
                  }

                  return (
                    <li key={key} className={className}>
                      <span className="font-mono mr-2">{key}.</span> {value}
                      {isCorrectAnswer && ' (Correct Answer)'}
                      {isUserAnswer && !isCorrectAnswer && ' (Your Answer)'}
                    </li>
                  );
                })}
              </ul>
              {!userAnswer && (
                <p className="mt-3 text-sm font-semibold text-red-700 dark:text-red-400">You did not answer this question.</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* This <style> block provides the base styling. Tailwind CSS is assumed. */}
      {/* If you are not using Tailwind, you would need to add full CSS here. */}
      {/* This app is built "Tailwind-first" as it's common in modern React. */}
      <style>{`
        body{
          background-color: #1a202c; /* A dark gray background for dark mode */
        }
      `}</style>
      
      <main className="max-w-4xl mx-auto my-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
        {quizState === 'start' && renderStartScreen()}
        {quizState === 'quiz' && renderQuizScreen()}
        {quizState === 'results' && renderResultsScreen()}
      </main>
    </>
  );
}