import React, { useState, useEffect, useRef } from 'react';
import { Book, Clock, CheckCircle, XCircle, AlertCircle, Play, RefreshCw, Settings, Award, BookOpen } from 'lucide-react';
import questionBank from "./data/ges101.json"

// Sample Question Data provided by user (17 questions)
// In a real scenario with 250 questions, this array would be much larger.

export default function GST111Quiz() {
  // App States
  const [step, setStep] = useState('setup'); // setup, quiz, result
  const [config, setConfig] = useState({
    questionCount: 10,
    timeLimit: 10, // minutes
  });
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  const timerRef = useRef(null);

  // Max questions available
  const maxQuestions = questionBank.length;

  // Timer Logic
  useEffect(() => {
    if (step === 'quiz' && timeLeft > 0 && !quizEnded) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleFinishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [step, timeLeft, quizEnded]);

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Start Quiz Handler
  const handleStartQuiz = () => {
    // 1. Shuffle and slice questions
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, config.questionCount);
    
    setActiveQuestions(selected);
    setTimeLeft(config.timeLimit * 60); // Convert mins to seconds
    setStep('quiz');
    setQuizEnded(false);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
  };

  // Finish Quiz Handler
  const handleFinishQuiz = () => {
    clearInterval(timerRef.current);
    setQuizEnded(true);
    setStep('result');
  };

  // Answer Selection
  const handleOptionSelect = (optionKey) => {
    if (quizEnded) return;
    setUserAnswers(prev => ({
      ...prev,
      [activeQuestions[currentQuestionIndex].id]: optionKey
    }));
  };

  // Calculate Score
  const calculateScore = () => {
    let correct = 0;
    activeQuestions.forEach(q => {
      if (userAnswers[q.id] === q.answer) {
        correct++;
      }
    });
    return correct;
  };

  // Restart
  const handleRestart = () => {
    setStep('setup');
    setQuizEnded(false);
    setUserAnswers({});
  };

  // --- RENDER: SETUP SCREEN ---
  if (step === 'setup') {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex items-center justify-center p-4">
        <div className="bg-white max-w-md w-full rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-blue-600 p-6 text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">GST 111 Setup</h1>
            <p className="text-blue-100 text-sm">Library & Study Skills + Morphology</p>
          </div>

          <div className="p-8 space-y-6">
            {/* Question Count Input */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Number of Questions (Max: {maxQuestions})
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max={maxQuestions}
                  value={config.questionCount}
                  onChange={(e) => {
                    const val = Math.min(Math.max(1, parseInt(e.target.value) || 1), maxQuestions);
                    setConfig(prev => ({ ...prev, questionCount: val }));
                  }}
                  className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
                <Book className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            {/* Timer Input */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Timer (Minutes)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  value={config.timeLimit}
                  onChange={(e) => setConfig(prev => ({ ...prev, timeLimit: parseInt(e.target.value) || 1 }))}
                  className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
                <Clock className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <button
              onClick={handleStartQuiz}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center space-x-2 active:scale-95"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Start Exam</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER: QUIZ SCREEN ---
  if (step === 'quiz') {
    const currentQ = activeQuestions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === activeQuestions.length - 1;
    const answeredCount = Object.keys(userAnswers).length;

    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 ${timeLeft < 60 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-blue-50 text-blue-600'}`}>
              <Clock className="w-4 h-4" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
          <div className="text-sm font-medium text-slate-500">
            Question {currentQuestionIndex + 1} of {activeQuestions.length}
          </div>
        </header>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 h-1">
          <div 
            className="bg-blue-600 h-1 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
          />
        </div>

        {/* Question Area */}
        <main className="flex-1 max-w-2xl mx-auto w-full p-6 flex flex-col">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 rounded-md bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">
              {currentQ.topic}
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-relaxed mb-8">
              {currentQ.question}
            </h2>

            <div className="space-y-3">
              {Object.entries(currentQ.options).map(([key, text]) => {
                const isSelected = userAnswers[currentQ.id] === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleOptionSelect(key)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start group ${
                      isSelected 
                        ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' 
                        : 'border-slate-200 hover:border-blue-300 hover:bg-white'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mr-4 mt-0.5 ${
                      isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-300 group-hover:border-blue-400'
                    }`}>
                      {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <span className={`text-sm md:text-base ${isSelected ? 'text-blue-900 font-medium' : 'text-slate-600'}`}>
                      <span className="font-bold mr-2">{key}.</span>{text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
            <button
              onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-transparent font-medium transition-colors"
            >
              Previous
            </button>

            {isLastQuestion ? (
              <button
                onClick={handleFinishQuiz}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold shadow-md shadow-green-200 transition-all active:scale-95"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.min(activeQuestions.length - 1, prev + 1))}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-md shadow-blue-200 transition-all active:scale-95"
              >
                Next Question
              </button>
            )}
          </div>
        </main>
      </div>
    );
  }

  // --- RENDER: RESULT SCREEN ---
  if (step === 'result') {
    const score = calculateScore();
    const percentage = Math.round((score / activeQuestions.length) * 100);
    
    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Score Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-8 text-center relative">
            <div className={`h-3 w-full ${percentage >= 50 ? 'bg-green-500' : 'bg-red-500'}`} />
            <div className="p-8">
              <div className="inline-flex items-center justify-center p-4 bg-slate-50 rounded-full mb-6">
                <Award className={`w-12 h-12 ${percentage >= 50 ? 'text-green-500' : 'text-red-500'}`} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-2">{percentage}%</h2>
              <p className="text-slate-500 font-medium mb-6">You scored {score} out of {activeQuestions.length}</p>
              
              <button
                onClick={handleRestart}
                className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 font-bold transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Take Another Test
              </button>
            </div>
          </div>

          {/* Corrections */}
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
            Review Answers
          </h3>
          
          <div className="space-y-6">
            {activeQuestions.map((q, index) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns === q.answer;

              return (
                <div key={q.id} className={`bg-white rounded-xl border p-6 ${isCorrect ? 'border-green-200 shadow-sm' : 'border-red-200 shadow-sm'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-medium text-slate-900 pr-8">
                      <span className="text-slate-400 font-bold mr-2">{index + 1}.</span>
                      {q.question}
                    </h4>
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                    )}
                  </div>

                  <div className="space-y-2 mb-4">
                    {Object.entries(q.options).map(([key, text]) => {
                      let optionStyle = "border-slate-100 text-slate-500";
                      let icon = null;

                      if (key === q.answer) {
                        optionStyle = "bg-green-50 border-green-200 text-green-800 font-medium";
                        icon = <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />;
                      } else if (key === userAns) {
                        optionStyle = "bg-red-50 border-red-200 text-red-800";
                        icon = <XCircle className="w-4 h-4 text-red-600 ml-auto" />;
                      }

                      return (
                        <div key={key} className={`flex items-center p-3 rounded-lg border text-sm ${optionStyle}`}>
                          <span className="font-bold mr-3 w-4">{key}.</span>
                          <span className="flex-1">{text}</span>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="text-xs text-slate-400 font-mono mt-2">
                    Citation: {q.citation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
