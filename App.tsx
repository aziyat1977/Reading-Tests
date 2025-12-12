import React, { useState, useEffect, useRef } from 'react';
import { TESTS } from './constants';
import { QuestionGroup, Question, QuestionType, UserAnswers, TableData } from './types';

const TOTAL_TIME_SECONDS = 60 * 60; // 60 minutes

interface QuestionGroupViewProps {
  group: QuestionGroup;
  answers: UserAnswers;
  onAnswerChange: (id: number, val: string) => void;
  onFocus: (id: number) => void;
  activeQuestionId: number | null;
}

export default function App() {
  // Start with no test selected (Empty Landing Page)
  const [currentTestId, setCurrentTestId] = useState<string | null>(null);
  const [activePassageId, setActivePassageId] = useState<number>(1);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [reviewStatus, setReviewStatus] = useState<{[key: number]: boolean}>({});
  const [focusedQuestionId, setFocusedQuestionId] = useState<number | null>(null);
  
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME_SECONDS);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTestStarted, setIsTestStarted] = useState(false);
  
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'xlarge'>('standard');
  const [showHelp, setShowHelp] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Derived state
  const currentTest = TESTS.find(t => t.id === currentTestId) || null;
  const passages = currentTest ? currentTest.passages : [];

  // Reset state when test changes
  useEffect(() => {
    if (currentTest) {
      setActivePassageId(currentTest.passages[0].id);
      setAnswers({});
      setReviewStatus({});
      setFocusedQuestionId(null);
      setIsTestStarted(false);
      setIsTimerRunning(false);
      setTimeLeft(TOTAL_TIME_SECONDS);
    }
  }, [currentTestId]); // Only trigger when the ID changes

  // Timer logic
  useEffect(() => {
    let timer: number;
    if (isTimerRunning && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // Safe access to active passage
  const activePassage = passages.find((p) => p.id === activePassageId) || passages[0];
  const activePassageIndex = passages.findIndex((p) => p.id === activePassageId);

  // Navigation Handlers
  const handleNext = () => {
    if (activePassageIndex < passages.length - 1) {
      setActivePassageId(passages[activePassageIndex + 1].id);
      setFocusedQuestionId(null);
    }
  };

  const handleBack = () => {
    if (activePassageIndex > 0) {
      setActivePassageId(passages[activePassageIndex - 1].id);
      setFocusedQuestionId(null);
    }
  };

  // Helper to scroll to question
  const scrollToQuestion = (qId: number) => {
    const element = document.getElementById(`question-${qId}`);
    const target = element || document.getElementById(`input-q-${qId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (target.tagName === 'INPUT' || target.tagName === 'SELECT') {
          (target as HTMLElement).focus();
      }
    }
  };

  // Font size classes
  const getTextSizeClass = () => {
    switch (fontSize) {
      case 'large': return 'text-lg';
      case 'xlarge': return 'text-xl';
      default: return 'text-base';
    }
  };

  const toggleReview = () => {
    if (focusedQuestionId !== null) {
        setReviewStatus(prev => ({
            ...prev,
            [focusedQuestionId]: !prev[focusedQuestionId]
        }));
    }
  };

  const startTest = () => {
      setIsTestStarted(true);
      setIsTimerRunning(true);
  };

  const toggleTimer = () => {
    setIsTimerRunning(prev => !prev);
  };

  const restartTimer = () => {
    setIsTimerRunning(false);
    setTimeLeft(TOTAL_TIME_SECONDS);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-900 font-sans overflow-hidden">
      {/* Top Bar (Always Visible) */}
      <header className="h-16 bg-[#1a1a1a] text-white flex items-center justify-between px-6 shadow-md z-20 shrink-0 relative">
        <div className="flex items-center space-x-4">
          {/* Menu Button */}
          <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white transition-colors border border-transparent hover:border-gray-600 rounded"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="text-sm font-bold uppercase tracking-wider">Menu</span>
              </button>
              
              {isMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded shadow-xl py-2 text-gray-900 z-50 border border-gray-200 animate-in fade-in slide-in-from-top-2 duration-150">
                       {currentTest && (
                         <>
                           <div className="px-4 py-2 text-sm font-bold text-gray-500 uppercase tracking-wider border-b bg-gray-50">
                               Current: {currentTest.title}
                           </div>
                           <div className="py-2">
                               {currentTest.passages.map((p, idx) => (
                                   <button
                                       key={p.id}
                                       onClick={() => {
                                           setActivePassageId(p.id);
                                           setIsMenuOpen(false);
                                       }}
                                       className={`w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center ${activePassageId === p.id ? 'text-blue-700 font-bold bg-blue-50' : 'text-gray-700'}`}
                                   >
                                       <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 text-xs flex items-center justify-center mr-3 font-bold">{idx + 1}</span>
                                       Passage {idx + 1}
                                   </button>
                               ))}
                           </div>
                           <div className="border-t border-gray-100 my-1"></div>
                         </>
                       )}
                       
                       <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase">Available Tests</div>
                       {TESTS.map(t => (
                           <button 
                             key={t.id}
                             onClick={() => {
                                 setCurrentTestId(t.id);
                                 setIsMenuOpen(false);
                             }}
                             className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-100 transition-colors border-l-4 ${currentTestId === t.id ? 'border-blue-600 bg-blue-50 text-blue-800 font-semibold' : 'border-transparent text-gray-700'}`}
                           >
                               {t.title}
                           </button>
                       ))}
                  </div>
              )}
          </div>
          
          <div>
              <h1 className="text-xl font-bold tracking-wide">IELTS Academic Reading</h1>
              <div className="text-xs text-gray-400 mt-0.5">{currentTest ? currentTest.title : "No Test Selected"}</div>
          </div>
        </div>
        
        {currentTest && (
        <div className="flex items-center space-x-6">
          <div className="text-sm text-gray-300 hidden md:block">Candidate: <span className="text-white font-semibold">John Doe</span></div>
          
          <div className="flex items-center space-x-3">
              {/* Timer Controls */}
              <div className="flex items-center space-x-1">
                  <button 
                    onClick={restartTimer}
                    title="Restart Timer"
                    className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  <button 
                    onClick={toggleTimer}
                    title={isTimerRunning ? "Pause Timer" : "Resume Timer"}
                    className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
                  >
                     {isTimerRunning ? (
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                     ) : (
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                     )}
                  </button>
              </div>

              {/* Timer Display */}
              <div className="flex items-center space-x-2 text-yellow-400 bg-gray-800 px-3 py-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xl font-mono font-bold">{formatTime(timeLeft)}</span>
              </div>
          </div>

          <div className="flex space-x-2">
            <button 
                onClick={() => setShowHelp(!showHelp)}
                className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded text-sm font-medium transition-colors border border-gray-600"
            >
                Help
            </button>
            <button className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded text-sm font-medium transition-colors border border-gray-600">
                Hide
            </button>
          </div>
        </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative bg-[#f0f2f5]">
        
        {/* Empty State / Initial Landing */}
        {!currentTest && (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h2 className="text-xl font-semibold mb-2">No Test Selected</h2>
                <p className="max-w-md text-center">Please select a test from the <strong className="text-gray-700">Menu</strong> in the top-left corner to begin your simulation.</p>
            </div>
        )}

        {/* Start Screen Overlay (Instruction Page) */}
        {currentTest && !isTestStarted && (
            <div className="absolute inset-0 z-30 bg-gray-100/95 flex items-center justify-center p-4 backdrop-blur-sm">
                 <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full text-center border border-gray-200">
                  <h1 className="text-3xl font-bold mb-2 text-blue-900">IELTS Academic Reading Simulation</h1>
                  <h2 className="text-xl text-gray-600 mb-6">{currentTest.title}</h2>
                  
                  <div className="bg-blue-50 p-6 rounded-md mb-8 text-left border border-blue-100">
                      <h2 className="font-bold text-blue-800 mb-3">Instructions:</h2>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>The test duration is <strong>60 minutes</strong>.</li>
                          <li>There are <strong>{passages.length} Passages</strong> in this test.</li>
                          <li>Questions are displayed on the right side of the screen.</li>
                          <li>Click <strong>Start Test</strong> when you are ready to begin.</li>
                      </ul>
                  </div>
                  <button 
                    onClick={startTest}
                    className="px-8 py-3 bg-blue-700 text-white font-bold rounded shadow hover:bg-blue-800 transition-transform transform active:scale-95 text-lg"
                  >
                      Start Test
                  </button>
              </div>
            </div>
        )}

        {/* Help Modal */}
        {showHelp && (
            <div className="absolute inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
                <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
                    <h3 className="text-xl font-bold mb-4">Help</h3>
                    <p className="mb-4">Click on the question numbers at the bottom to navigate. Review questions by checking the 'Review' box.</p>
                    <button onClick={() => setShowHelp(false)} className="bg-blue-600 text-white px-4 py-2 rounded">Close</button>
                </div>
            </div>
        )}

        {/* Main Split Screen - Only render if currentTest exists */}
        {currentTest && (
        <>
            {/* Left Panel: Reading Text */}
            <section className="w-1/2 flex flex-col border-r-4 border-gray-300 bg-white">
            {/* Passage Tabs */}
            <div className="bg-gray-100 border-b border-gray-300 flex overflow-x-auto shrink-0">
                {passages.map((passage, index) => (
                <button
                    key={passage.id}
                    onClick={() => {
                        setActivePassageId(passage.id);
                        setFocusedQuestionId(null);
                    }}
                    className={`px-6 py-3 text-sm font-bold transition-colors whitespace-nowrap ${
                    activePassageId === passage.id
                        ? 'bg-white text-blue-800 border-t-4 border-blue-800'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300 border-t-4 border-transparent'
                    }`}
                >
                    Passage {index + 1}
                </button>
                ))}
            </div>
            
            {/* Text Content */}
            <div className={`flex-1 overflow-y-auto p-8 reading-text ${getTextSizeClass()}`}>
                <h2 className="text-2xl font-bold mb-6 text-black border-b pb-4">{activePassage.title}</h2>
                {activePassage.content.map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-justify text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{__html: paragraph}} />
                ))}
            </div>
            </section>

            {/* Right Panel: Questions */}
            <section className="w-1/2 flex flex-col bg-[#f0f2f5]">
            <div className="bg-white border-b border-gray-300 p-2 flex justify-between items-center px-4 shrink-0">
                <span className="text-sm font-bold text-gray-600">Questions</span>
                <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500 mr-1">Size:</span>
                    <button onClick={() => setFontSize('standard')} className={`w-7 h-7 flex items-center justify-center rounded border ${fontSize === 'standard' ? 'bg-blue-600 text-white' : 'bg-white'}`}>A</button>
                    <button onClick={() => setFontSize('large')} className={`w-7 h-7 flex items-center justify-center rounded border ${fontSize === 'large' ? 'bg-blue-600 text-white' : 'bg-white'} text-lg`}>A</button>
                    <button onClick={() => setFontSize('xlarge')} className={`w-7 h-7 flex items-center justify-center rounded border ${fontSize === 'xlarge' ? 'bg-blue-600 text-white' : 'bg-white'} text-xl`}>A</button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
                {activePassage.questionGroups.map((group) => (
                <QuestionGroupView 
                    key={group.id} 
                    group={group} 
                    answers={answers} 
                    onAnswerChange={handleAnswerChange}
                    onFocus={(id) => setFocusedQuestionId(id)}
                    activeQuestionId={focusedQuestionId}
                />
                ))}
            </div>
            </section>
        </>
        )}
      </main>

      {/* Footer Navigation (Always Visible but interactive only if test is active) */}
      <footer className="h-20 bg-white border-t border-gray-300 flex items-center justify-between px-4 shrink-0 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-20">
         {currentTest ? (
         <>
         <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar max-w-4xl py-2 px-2">
           <span className="text-sm font-bold text-gray-500 mr-2 shrink-0">Q:</span>
           {passages.flatMap(p => p.questionGroups.flatMap(g => g.questions)).map((q) => {
             const isAnswered = !!answers[q.id];
             const isReview = !!reviewStatus[q.id];
             const isFocused = focusedQuestionId === q.id;
             
             return (
             <button
               key={q.id}
               onClick={() => {
                 const pId = passages.find(p => p.questionGroups.some(g => g.questions.some(qn => qn.id === q.id)))?.id || 1;
                 setActivePassageId(pId);
                 setFocusedQuestionId(q.id);
                 setTimeout(() => scrollToQuestion(q.id), 100);
               }}
               className={`relative w-9 h-9 flex items-center justify-center text-sm font-bold rounded border transition-all shrink-0
                 ${isFocused ? 'ring-2 ring-black border-black z-10' : ''}
                 ${isReview ? 'rounded-full' : 'rounded-md'}
                 ${isAnswered 
                    ? 'bg-gray-700 text-white border-gray-700' 
                    : 'bg-white text-gray-700 border-gray-400 hover:bg-gray-100'
                 }
               `}
             >
               {q.label}
               {isReview && <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>}
             </button>
           )})}
         </div>
         
         <div className="flex items-center space-x-4 ml-4 shrink-0">
             <div className="flex items-center space-x-2 mr-4 bg-gray-100 px-3 py-1.5 rounded">
                 <input 
                    type="checkbox" 
                    id="review" 
                    className="w-4 h-4 accent-blue-600 cursor-pointer" 
                    checked={focusedQuestionId !== null ? !!reviewStatus[focusedQuestionId] : false}
                    onChange={toggleReview}
                    disabled={focusedQuestionId === null}
                 />
                 <label htmlFor="review" className={`text-sm font-bold select-none ${focusedQuestionId !== null ? 'text-gray-800 cursor-pointer' : 'text-gray-400'}`}>Review</label>
             </div>
             
             <button 
                onClick={handleBack}
                disabled={activePassageIndex === 0}
                className={`flex items-center px-4 py-2 font-bold rounded transition-colors ${activePassageIndex === 0 ? 'bg-gray-100 text-gray-300' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
             >
               <span className="mr-1">←</span> Back
             </button>
             
             <button 
                onClick={handleNext}
                disabled={activePassageIndex === passages.length - 1}
                className={`flex items-center px-4 py-2 font-bold rounded transition-colors ${activePassageIndex === passages.length - 1 ? 'bg-gray-100 text-gray-300' : 'bg-blue-700 text-white hover:bg-blue-800'}`}
             >
               Next <span className="ml-1">→</span>
             </button>
         </div>
         </>
         ) : (
            <div className="text-gray-400 text-sm flex-1 text-center">Select a test to enable navigation</div>
         )}
      </footer>
    </div>
  );
}

// Sub-component to render a group of questions
const QuestionGroupView: React.FC<QuestionGroupViewProps> = ({ group, answers, onAnswerChange, onFocus, activeQuestionId }) => {
  return (
    <div className="mb-8 bg-white p-6 rounded shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold mb-2 text-gray-800 border-b pb-2">Questions {group.questions[0]?.label} - {group.questions[group.questions.length - 1]?.label}</h3>
      <div className="mb-6 font-medium text-gray-700 bg-gray-50 p-2 rounded" dangerouslySetInnerHTML={{__html: group.instruction}} />
      
      {group.renderType === 'TABLE' && group.tableData ? (
        <TableRenderer 
            data={group.tableData} 
            questions={group.questions} 
            answers={answers} 
            onAnswerChange={onAnswerChange} 
            onFocus={onFocus}
            activeQuestionId={activeQuestionId}
        />
      ) : (
        <div className="space-y-6">
            {group.questions.map((q) => (
            <div key={q.id} id={`question-${q.id}`} className={`flex flex-col space-y-2 p-3 rounded transition-colors ${activeQuestionId === q.id ? 'bg-yellow-50' : ''}`}>
                <div className="flex items-baseline space-x-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 font-bold rounded-full text-sm">
                    {q.label}
                </span>
                <div className="flex-1">
                    {/* Render specific question text if available */}
                    {q.questionText && <p className="mb-2 font-medium text-gray-800">{q.questionText}</p>}
                    {renderQuestionInput(q, answers[q.id] || '', (val) => onAnswerChange(q.id, val), () => onFocus(q.id))}
                </div>
                </div>
            </div>
            ))}
        </div>
      )}
    </div>
  );
};

// Specialized Table Renderer
const TableRenderer: React.FC<{
    data: TableData;
    questions: Question[];
    answers: UserAnswers;
    onAnswerChange: (id: number, val: string) => void;
    onFocus: (id: number) => void;
    activeQuestionId: number | null;
}> = ({ data, questions, answers, onAnswerChange, onFocus, activeQuestionId }) => {
    
    // Helper to replace {{id}} with Input Component
    const renderCellContent = (text: string | undefined, isBullet: boolean | undefined) => {
        if (!text) return null;
        
        // Split text by placeholder pattern {{number}}
        const parts = text.split(/(\{\{\d+\}\})/g);
        
        const content = parts.map((part, idx) => {
            const match = part.match(/\{\{(\d+)\}\}/);
            if (match) {
                const qLabel = match[1];
                const question = questions.find(q => q.label === qLabel);
                if (question) {
                    const isActive = activeQuestionId === question.id;
                    return (
                        <span key={idx} className="inline-flex items-center mx-1 align-middle">
                            <span className="text-xs font-bold text-blue-600 mr-1 bg-blue-100 px-1.5 rounded-full">{qLabel}</span>
                            <input
                                id={`input-q-${question.id}`}
                                type="text"
                                value={answers[question.id] || ''}
                                onFocus={() => onFocus(question.id)}
                                onChange={(e) => onAnswerChange(question.id, e.target.value)}
                                className={`border-2 rounded px-2 py-1 w-32 font-semibold text-gray-800 uppercase text-sm transition-colors ${isActive ? 'border-black bg-yellow-50' : 'border-gray-300 focus:border-blue-500'}`}
                            />
                        </span>
                    );
                }
            }
            return <span key={idx} dangerouslySetInnerHTML={{__html: part}} />;
        });

        if (isBullet) {
            // Split by <br/> logic if manual break, or just wrap
            return <div className="leading-7">{content}</div>;
        }
        return <div className="font-semibold text-gray-800">{content}</div>;
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
                {data.headers.length > 0 && (
                    <thead>
                        <tr>
                            {data.headers.map((h, i) => (
                                <th key={i} className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-sm font-bold text-gray-700 w-1/3">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {data.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            {row.cells.map((cell, cIdx) => (
                                <td key={cIdx} className="border border-gray-300 px-4 py-3 text-sm text-gray-800 align-top">
                                    {renderCellContent(cell.text, cell.bulletPoints)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

function renderQuestionInput(question: Question, value: string, onChange: (val: string) => void, onFocus: () => void) {
  switch (question.type) {
    case QuestionType.INPUT:
      return (
        <div className="flex items-center">
            <span className="mr-2 text-gray-700 font-medium">Answer:</span>
            <input
            type="text"
            value={value}
            onFocus={onFocus}
            onChange={(e) => onChange(e.target.value)}
            className="border-2 border-gray-300 rounded px-3 py-1.5 focus:border-blue-500 focus:outline-none w-full max-w-xs font-semibold text-gray-800 uppercase"
            placeholder="..."
            />
        </div>
      );
    case QuestionType.RADIO:
      return (
        <div className="flex flex-col space-y-2 mt-1">
          {question.options?.map((opt) => (
            <label key={opt} className="flex items-center space-x-3 cursor-pointer group p-1 hover:bg-gray-50 rounded" onClick={onFocus}>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${value === opt ? 'border-blue-600' : 'border-gray-400 group-hover:border-blue-400'}`}>
                {value === opt && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
              </div>
              <input
                type="radio"
                name={`q-${question.id}`}
                value={opt}
                checked={value === opt}
                onChange={() => {
                    onChange(opt);
                    onFocus();
                }}
                className="hidden"
              />
              <span className={`text-gray-700 font-medium ${value === opt ? 'text-blue-900' : ''}`}>{opt}</span>
            </label>
          ))}
        </div>
      );
    case QuestionType.DROPDOWN:
      return (
        <div className="flex items-center">
            <span className="mr-3 text-gray-600 text-sm">Select:</span>
            <select
            value={value}
            onFocus={onFocus}
            onChange={(e) => onChange(e.target.value)}
            className={`border-2 border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:outline-none bg-white w-full max-w-xs font-semibold ${value ? 'text-blue-900' : 'text-gray-500'}`}
            >
            <option value="">-</option>
            {question.options?.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
            </select>
        </div>
      );
    default:
      return null;
  }
}