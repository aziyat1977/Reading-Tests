import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TESTS, VOCAB_LIST, VOCAB_LIST_2, VOCAB_LIST_3 } from './constants';
import { QuestionGroup, Question, QuestionType, UserAnswers, TableData, VocabItem } from './types';

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
  const [lineSpacing, setLineSpacing] = useState<'compact' | 'standard' | 'loose'>('standard');
  const [paragraphIndent, setParagraphIndent] = useState(false);
  
  const [showHelp, setShowHelp] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contentLang, setContentLang] = useState<'EN' | 'RU' | 'UZ'>('EN');

  // Vocabulary App State
  const [vocabMode, setVocabMode] = useState<'none' | 'p1' | 'p2' | 'p3'>('none');

  // Derived state
  const currentTest = TESTS.find(t => t.id === currentTestId) || null;
  const passages = currentTest ? currentTest.passages : [];
  const isTFNG = currentTestId?.startsWith('tfng-');

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
      setContentLang('EN');
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

  // Line spacing classes
  const getLineSpacingClass = () => {
    switch (lineSpacing) {
      case 'compact': return 'leading-normal';
      case 'loose': return 'leading-9'; // Using numeric value for extra looseness
      default: return 'leading-relaxed'; // standard
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
      if (!isTFNG) {
        setIsTimerRunning(true);
      }
  };

  const toggleTimer = () => {
    setIsTimerRunning(prev => !prev);
  };

  const restartTimer = () => {
    setIsTimerRunning(false);
    setTimeLeft(TOTAL_TIME_SECONDS);
  };

  // Determine content based on selected language
  const getContent = () => {
    if (contentLang === 'RU' && activePassage.contentRU) return activePassage.contentRU;
    if (contentLang === 'UZ' && activePassage.contentUZ) return activePassage.contentUZ;
    return activePassage.content;
  };

  if (vocabMode !== 'none') {
      let data = VOCAB_LIST;
      let title = 'Tourism New Zealand';

      if (vocabMode === 'p2') {
          data = VOCAB_LIST_2;
          title = 'The Science of Boredom';
      } else if (vocabMode === 'p3') {
          data = VOCAB_LIST_3;
          title = 'Artificial Artists';
      }

      return <VocabularyStudio onBack={() => setVocabMode('none')} data={data} title={title} />;
  }

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
                       <div className="px-4 py-3 bg-indigo-50 border-b border-indigo-100 space-y-2 max-h-[80vh] overflow-y-auto">
                           <button 
                             onClick={() => {
                                 setVocabMode('p1');
                                 setIsMenuOpen(false);
                             }}
                             className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group"
                           >
                               <span className="font-bold flex items-center">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                   </svg>
                                   Vocab Studio (Passage 1)
                               </span>
                               <span className="bg-white/20 px-2 py-0.5 rounded text-xs animate-pulse">Ultra</span>
                           </button>

                           <button 
                             onClick={() => {
                                 setVocabMode('p2');
                                 setIsMenuOpen(false);
                             }}
                             className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group"
                           >
                               <span className="font-bold flex items-center">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                   </svg>
                                   Vocab Studio (Passage 2)
                               </span>
                               <span className="bg-white/20 px-2 py-0.5 rounded text-xs animate-pulse">Ultra</span>
                           </button>

                           <button 
                             onClick={() => {
                                 setVocabMode('p3');
                                 setIsMenuOpen(false);
                             }}
                             className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group"
                           >
                               <span className="font-bold flex items-center">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                   </svg>
                                   Vocab Studio (Passage 3)
                               </span>
                               <span className="bg-white/20 px-2 py-0.5 rounded text-xs animate-pulse">Ultra</span>
                           </button>

                           {/* NEW SECTION T/F/NG */}
                           <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase mt-2">Skill Drills</div>
                           {TESTS.filter(t => t.id.startsWith('tfng-')).map(t => (
                               <button 
                                key={t.id}
                                onClick={() => {
                                    setCurrentTestId(t.id);
                                    setIsMenuOpen(false);
                                }}
                                className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group mb-2 last:mb-0"
                                >
                                <span className="font-bold flex items-center text-sm truncate">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {t.title}
                                </span>
                                <span className="bg-white/20 px-2 py-0.5 rounded text-xs ml-2 shrink-0">New</span>
                                </button>
                           ))}

                       </div>

                       {currentTest && (
                         <>
                           <div className="px-4 py-2 text-sm font-bold text-gray-500 uppercase tracking-wider border-b bg-gray-50 mt-2">
                               Current: {currentTest.title}
                           </div>
                           {/* Show Passage Tabs ONLY if more than 1 passage */}
                           {passages.length > 1 && (
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
                           )}
                           <div className="border-t border-gray-100 my-1"></div>
                         </>
                       )}
                       
                       <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase">Cambridge Tests</div>
                       {TESTS.filter(t => !t.id.startsWith('tfng-')).map(t => (
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
          
          {/* Timer Display - HIDE IF TFNG MODE */}
          {!isTFNG && (
            <div className="flex items-center space-x-3">
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

                <div className="flex items-center space-x-2 text-yellow-400 bg-gray-800 px-3 py-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xl font-mono font-bold">{formatTime(timeLeft)}</span>
                </div>
            </div>
          )}

          <div className="flex space-x-2">
            <button 
                onClick={() => setShowSettings(!showSettings)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors border border-gray-600 flex items-center space-x-1 ${showSettings ? 'bg-gray-600 text-white' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Settings</span>
            </button>
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
                          {isTFNG ? (
                              <li>These are rapid-fire True/False/Not Given drills.</li>
                          ) : (
                              <li>The test duration is <strong>60 minutes</strong>.</li>
                          )}
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

        {/* Settings Modal */}
        {showSettings && (
            <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full text-gray-900 overflow-hidden animate-in fade-in zoom-in duration-200">
                     <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
                        <h3 className="text-lg font-bold text-gray-800">Display Settings</h3>
                        <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-gray-700 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                     </div>

                     <div className="p-6 space-y-6">
                         {/* Line Spacing Control */}
                         <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Line Spacing</label>
                            <div className="flex bg-gray-100 p-1 rounded-md">
                                <button 
                                    onClick={() => setLineSpacing('compact')}
                                    className={`flex-1 py-1.5 text-sm font-medium rounded transition-all ${lineSpacing === 'compact' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Compact
                                </button>
                                <button 
                                    onClick={() => setLineSpacing('standard')}
                                    className={`flex-1 py-1.5 text-sm font-medium rounded transition-all ${lineSpacing === 'standard' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Normal
                                </button>
                                <button 
                                    onClick={() => setLineSpacing('loose')}
                                    className={`flex-1 py-1.5 text-sm font-medium rounded transition-all ${lineSpacing === 'loose' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Loose
                                </button>
                            </div>
                         </div>

                         {/* Indentation Control */}
                         <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                            <label htmlFor="indent-toggle" className="text-sm font-bold text-gray-700 cursor-pointer">Paragraph Indentation</label>
                            <button 
                                id="indent-toggle"
                                onClick={() => setParagraphIndent(!paragraphIndent)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${paragraphIndent ? 'bg-blue-600' : 'bg-gray-200'}`}
                            >
                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${paragraphIndent ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                         </div>
                     </div>

                     <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
                         <button onClick={() => setShowSettings(false)} className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors">
                             Done
                         </button>
                     </div>
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
            {/* Passage Tabs - Only show if > 1 passage */}
            {passages.length > 1 && (
                <div className="bg-gray-100 border-b border-gray-300 flex overflow-x-auto shrink-0">
                    {passages.map((passage, index) => (
                    <button
                        key={passage.id}
                        onClick={() => {
                            setActivePassageId(passage.id);
                            setFocusedQuestionId(null);
                            setContentLang('EN'); // Reset language
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
            )}
            
            {/* Text Content */}
            <div className={`flex-1 overflow-y-auto p-8 reading-text ${getTextSizeClass()}`}>
                <div className="flex justify-between items-start border-b pb-4 mb-6">
                    <h2 className="text-2xl font-bold text-black">{activePassage.title}</h2>
                    
                    {/* Translation Controls - Show if RU/UZ exists */}
                    {(activePassage.contentRU || activePassage.contentUZ) && (
                        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg shrink-0 ml-4">
                            <button 
                                onClick={() => setContentLang('EN')} 
                                className={`px-3 py-1 text-xs font-bold rounded transition-colors ${contentLang === 'EN' ? 'bg-blue-600 text-white shadow' : 'text-gray-500 hover:bg-white'}`}
                            >
                                EN
                            </button>
                            <button 
                                onClick={() => setContentLang('RU')} 
                                className={`px-3 py-1 text-xs font-bold rounded transition-colors ${contentLang === 'RU' ? 'bg-blue-600 text-white shadow' : 'text-gray-500 hover:bg-white'}`}
                            >
                                RU
                            </button>
                            <button 
                                onClick={() => setContentLang('UZ')} 
                                className={`px-3 py-1 text-xs font-bold rounded transition-colors ${contentLang === 'UZ' ? 'bg-blue-600 text-white shadow' : 'text-gray-500 hover:bg-white'}`}
                            >
                                UZ
                            </button>
                        </div>
                    )}
                </div>

                {getContent().map((paragraph, idx) => (
                <p 
                    key={idx} 
                    className={`mb-4 text-justify text-gray-800 transition-all ${getLineSpacingClass()} ${paragraphIndent ? 'indent-10' : ''}`} 
                    dangerouslySetInnerHTML={{__html: paragraph}} 
                />
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

      {/* Footer Navigation */}
      <footer className="h-20 bg-white border-t border-gray-300 flex items-center justify-between px-6 shrink-0 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-20">
         {currentTest ? (
         <>
         {/* Question Palette - Enhanced Scrollable Bar */}
         <div className="flex-1 flex items-center overflow-hidden mr-6">
           <span className="text-sm font-bold text-gray-500 mr-3 shrink-0">Questions:</span>
           <div className="flex items-center space-x-2 overflow-x-auto py-3 px-1 w-full" style={{ scrollbarWidth: 'thin' }}>
             {passages.flatMap(p => p.questionGroups.flatMap(g => g.questions)).map((q) => {
               const isAnswered = !!answers[q.id];
               const isReview = !!reviewStatus[q.id];
               const isFocused = focusedQuestionId === q.id;
               
               return (
               <button
                 key={q.id}
                 onClick={() => {
                   const pId = passages.find(p => p.questionGroups.some(g => g.questions.some(qn => qn.id === q.id)))?.id || 1;
                   if (pId !== activePassageId) {
                       setActivePassageId(pId);
                   }
                   setFocusedQuestionId(q.id);
                   setTimeout(() => scrollToQuestion(q.id), 50);
                 }}
                 className={`
                    relative w-10 h-10 flex items-center justify-center text-sm font-bold rounded-md border transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500
                    ${isFocused 
                        ? 'bg-blue-600 text-white border-blue-600 ring-2 ring-blue-300 z-10 scale-105 shadow-md' 
                        : isAnswered 
                            ? 'bg-gray-700 text-white border-gray-700 hover:bg-gray-600' 
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                    }
                    ${isReview ? 'ring-2 ring-yellow-400 ring-offset-1' : ''}
                 `}
                 title={`Question ${q.label}`}
               >
                 {q.label}
                 {isReview && <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-yellow-400 rounded-full border-2 border-white shadow-sm"></div>}
               </button>
             )})}
           </div>
         </div>
         
         {/* Navigation Controls */}
         <div className="flex items-center space-x-4 shrink-0 border-l pl-6 border-gray-200">
             <div className="flex items-center space-x-2 mr-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                 <input 
                    type="checkbox" 
                    id="review" 
                    className="w-4 h-4 accent-yellow-500 cursor-pointer" 
                    checked={focusedQuestionId !== null ? !!reviewStatus[focusedQuestionId] : false}
                    onChange={toggleReview}
                    disabled={focusedQuestionId === null}
                 />
                 <label htmlFor="review" className={`text-sm font-bold select-none ${focusedQuestionId !== null ? 'text-gray-800 cursor-pointer' : 'text-gray-400'}`}>Review</label>
             </div>
             
             <button 
                onClick={handleBack}
                disabled={activePassageIndex === 0}
                className={`flex items-center px-5 py-2.5 font-bold rounded-lg transition-colors ${activePassageIndex === 0 ? 'bg-gray-100 text-gray-300' : 'bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'}`}
             >
               <span className="mr-1">←</span> Back
             </button>
             
             <button 
                onClick={handleNext}
                disabled={activePassageIndex === passages.length - 1}
                className={`flex items-center px-5 py-2.5 font-bold rounded-lg transition-colors shadow-sm ${activePassageIndex === passages.length - 1 ? 'bg-gray-100 text-gray-300' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
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

// ----------------------------------------------------------------------------
// HELPER COMPONENTS FOR READING TEST
// ----------------------------------------------------------------------------

const QuestionItem: React.FC<{
  question: Question;
  answer: string;
  onChange: (val: string) => void;
  onFocus: () => void;
  isActive: boolean;
}> = ({ question, answer, onChange, onFocus, isActive }) => {
  return (
    <div 
        id={`question-${question.id}`}
        className={`p-4 rounded-lg border transition-all ${isActive ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-100' : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'}`}
        onClick={onFocus}
    >
      <div className="flex items-start">
        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center font-bold rounded-full text-sm mr-3 transition-colors ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
            {question.label}
        </span>
        <div className="flex-1">
            {question.questionText && <p className="mb-3 text-gray-800 font-medium leading-relaxed" dangerouslySetInnerHTML={{__html: question.questionText}} />}
            
            {question.type === QuestionType.INPUT && (
                <input 
                    id={`input-q-${question.id}`}
                    type="text" 
                    className="w-full p-2.5 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-shadow"
                    placeholder="Type your answer..."
                    value={answer || ''}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={onFocus}
                />
            )}

            {question.type === QuestionType.DROPDOWN && (
                <div className="relative">
                    <select
                        id={`input-q-${question.id}`}
                        className="w-full p-2.5 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white appearance-none cursor-pointer transition-shadow"
                        value={answer || ''}
                        onChange={(e) => onChange(e.target.value)}
                        onFocus={onFocus}
                    >
                        <option value="">Select an answer...</option>
                        {question.options?.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            )}

            {question.type === QuestionType.RADIO && (
                <div className="space-y-2 mt-2">
                    {question.options?.map(opt => (
                        <label key={opt} className={`flex items-center space-x-3 p-2 rounded cursor-pointer border border-transparent hover:bg-gray-50 ${answer === opt ? 'bg-blue-50 border-blue-200' : ''}`}>
                            <input 
                                type="radio" 
                                name={`q-${question.id}`} 
                                value={opt} 
                                checked={answer === opt} 
                                onChange={(e) => onChange(e.target.value)}
                                onFocus={onFocus}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                            />
                            <span className="text-gray-700">{opt}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

const TableQuestionRenderer: React.FC<{
  data: TableData;
  questions: Question[];
  answers: UserAnswers;
  onAnswerChange: (id: number, val: string) => void;
  onFocus: (id: number) => void;
  activeQuestionId: number | null;
}> = ({ data, questions, answers, onAnswerChange, onFocus, activeQuestionId }) => {
    
    const renderCellContent = (text: string) => {
        if (!text) return null;
        
        // Simple parser for {{id}} pattern
        const parts = text.split(/(\{\{\d+\}\})/);
        
        return (
            <span className="leading-relaxed">
                {parts.map((part, idx) => {
                    const match = part.match(/\{\{(\d+)\}\}/);
                    if (match) {
                        const label = match[1];
                        const question = questions.find(q => q.label === label); // Matching by label as per constants.ts usage
                        
                        if (question) {
                            const isActive = activeQuestionId === question.id;
                            return (
                                <span key={idx} className="inline-flex flex-col mx-1 align-bottom">
                                    <input
                                        id={`input-q-${question.id}`}
                                        type="text"
                                        className={`
                                            border-b-2 bg-transparent outline-none w-24 px-1 text-center font-medium transition-colors text-blue-900
                                            ${isActive ? 'border-blue-500 bg-blue-50' : 'border-gray-400 focus:border-blue-500 hover:border-gray-500'}
                                        `}
                                        value={answers[question.id] || ''}
                                        onChange={(e) => onAnswerChange(question.id, e.target.value)}
                                        onFocus={() => onFocus(question.id)}
                                    />
                                    <span className={`text-[10px] text-center font-bold ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>({question.label})</span>
                                </span>
                            );
                        }
                        return <span key={idx} className="text-red-500 font-bold">?</span>;
                    }
                    return <span key={idx} dangerouslySetInnerHTML={{ __html: part }} />;
                })}
            </span>
        );
    };

    return (
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm mb-4">
            <table className="min-w-full divide-y divide-gray-200">
                {data.headers.length > 0 && (
                    <thead className="bg-gray-50">
                        <tr>
                            {data.headers.map((h, i) => (
                                <th key={i} className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-r last:border-r-0 border-gray-200">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-gray-50 transition-colors">
                            {row.cells.map((cell, cIdx) => (
                                <td 
                                    key={cIdx} 
                                    className="px-4 py-3 align-top border-r last:border-r-0 border-gray-200 text-sm text-gray-700"
                                    colSpan={cell.colSpan}
                                    rowSpan={cell.rowSpan}
                                >
                                    {cell.bulletPoints ? (
                                        <div className="space-y-1">
                                            {renderCellContent(cell.text || '')}
                                        </div>
                                    ) : (
                                        renderCellContent(cell.text || '')
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const QuestionGroupView: React.FC<QuestionGroupViewProps> = ({ group, answers, onAnswerChange, onFocus, activeQuestionId }) => {
  return (
    <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-4 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
          <div className="text-gray-800 font-medium text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: group.instruction }} />
      </div>
      
      {group.renderType === 'TABLE' && group.tableData ? (
        <TableQuestionRenderer 
          data={group.tableData} 
          questions={group.questions} 
          answers={answers} 
          onAnswerChange={onAnswerChange}
          onFocus={onFocus}
          activeQuestionId={activeQuestionId}
        />
      ) : (
        <div className="space-y-4">
          {group.questions.map(q => (
            <QuestionItem 
              key={q.id} 
              question={q} 
              answer={answers[q.id] || ''} 
              onChange={(val) => onAnswerChange(q.id, val)}
              onFocus={() => onFocus(q.id)}
              isActive={activeQuestionId === q.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------------------------------
// ULTRA VOCABULARY STUDIO COMPONENT
// ----------------------------------------------------------------------------

// -- Animated Particles Background --
const ParticleBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-grid-animate">
            {/* Create 30 random particles */}
            {Array.from({ length: 30 }).map((_, i) => {
                const size = Math.random() * 4 + 1;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 5;
                const opacity = Math.random() * 0.4 + 0.1;
                
                return (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-cyan-400 animate-float blur-[1px]"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: `${left}%`,
                            top: `${top}%`,
                            opacity: opacity,
                            animationDuration: `${duration}s`,
                            animationDelay: `${delay}s`,
                            boxShadow: `0 0 ${size * 4}px rgba(34, 211, 238, 0.8)`
                        }}
                    />
                );
            })}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b0c15] via-[#111222] to-[#0b0c15] opacity-95 z-[-1]"></div>
        </div>
    );
};

// -- Confetti Effect (Canvas) --
const ConfettiCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: any[] = [];
        const colors = ['#22d3ee', '#818cf8', '#c084fc', '#f472b6', '#34d399'];

        for(let i=0; i<150; i++) {
            particles.push({
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                vx: (Math.random() - 0.5) * 20,
                vy: (Math.random() - 0.5) * 20,
                size: Math.random() * 6 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                gravity: 0.1,
                drag: 0.95
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += p.gravity;
                p.vx *= p.drag;
                p.vy *= p.drag;
                
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                if (p.size > 0.1) p.size -= 0.08;
                if (p.size <= 0.1) particles.splice(index, 1);
            });
            if (particles.length > 0) requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-50 pointer-events-none" />;
};

type VocabView = 'dashboard' | 'flashcards' | 'quiz' | 'match' | 'spell';

const VocabularyStudio: React.FC<{ onBack: () => void; data: VocabItem[]; title: string }> = ({ onBack, data, title }) => {
    const [view, setView] = useState<VocabView>('dashboard');
    const [learnedWords, setLearnedWords] = useState<number[]>([]);
    
    // Quiz State
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);

    const toggleLearned = (id: number) => {
        setLearnedWords(prev => 
            prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]
        );
    };

    return (
        <div className="h-screen w-full bg-[#0b0c15] text-white overflow-hidden flex flex-col font-sans relative">
            <ParticleBackground />
            
            {/* Holographic Header */}
            <header className="h-20 glass flex items-center justify-between px-8 z-30 shrink-0 border-b border-white/5 relative">
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                <div className="flex items-center space-x-6">
                    <button onClick={onBack} className="text-white/70 hover:text-white hover:bg-white/10 p-2.5 rounded-full transition-all border border-white/10 hover:scale-110 hover:border-cyan-400/50 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>
                    <div>
                        <h1 className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] animate-shimmer">
                            NEURAL LEXICON
                        </h1>
                        <p className="text-[10px] text-cyan-200/60 font-mono tracking-[0.3em] uppercase">Simulating: {title}</p>
                    </div>
                </div>
                
                <div className="flex bg-black/40 p-1 rounded-full backdrop-blur-md border border-white/10">
                    <TabButton active={view === 'dashboard'} onClick={() => setView('dashboard')} icon="dashboard">HUB</TabButton>
                    <TabButton active={view === 'flashcards'} onClick={() => setView('flashcards')} icon="card">CARDS</TabButton>
                    <TabButton active={view === 'quiz'} onClick={() => setView('quiz')} icon="lightning">SPEED</TabButton>
                    <TabButton active={view === 'match'} onClick={() => setView('match')} icon="cube">MATCH</TabButton>
                    <TabButton active={view === 'spell'} onClick={() => setView('spell')} icon="chat">SPELL</TabButton>
                </div>
            </header>

            <main className="flex-1 relative z-10 flex flex-col overflow-hidden">
                {view === 'dashboard' && <DashboardView vocabList={data} learnedWords={learnedWords} onViewChange={setView} />}
                {view === 'flashcards' && <FlashcardMode vocabList={data} learnedWords={learnedWords} onToggleLearned={toggleLearned} />}
                {view === 'quiz' && <QuizMode vocabList={data} />}
                {view === 'match' && <MatchMode vocabList={data} />}
                {view === 'spell' && <SpellMode vocabList={data} />}
            </main>
        </div>
    );
};

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode; icon: string }> = ({ active, onClick, children, icon }) => {
    return (
        <button 
            onClick={onClick}
            className={`px-6 py-2 rounded-full font-bold text-xs tracking-wider transition-all duration-300 flex items-center border border-transparent ${
                active 
                ? 'bg-white/10 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] border-white/10' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
        >
           {getIcon(icon)}
           <span className="ml-2">{children}</span>
        </button>
    );
};

const getIcon = (name: string) => {
    switch(name) {
        case 'dashboard': return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
        case 'card': return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
        case 'lightning': return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
        case 'cube': return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
        case 'chat': return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>;
        default: return null;
    }
}

// ---------------- VIEWS ----------------

const DashboardView: React.FC<{ vocabList: VocabItem[], learnedWords: number[], onViewChange: (v: VocabView) => void }> = ({ vocabList, learnedWords, onViewChange }) => {
    const progress = Math.round((learnedWords.length / vocabList.length) * 100);

    return (
        <div className="flex-1 p-10 overflow-y-auto">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {/* Stats Card */}
                    <div className="glass-card rounded-2xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
                        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Mastery Level</h3>
                        <div className="flex items-end space-x-2">
                            <span className="text-5xl font-black text-white">{progress}%</span>
                            <span className="text-cyan-400 mb-2 font-mono">
                                {learnedWords.length}/{vocabList.length}
                            </span>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden">
                            <div className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>

                    {/* Quick Action: Flashcards */}
                    <button 
                        onClick={() => onViewChange('flashcards')}
                        className="glass-card rounded-2xl p-6 text-left hover:border-cyan-500/50 transition-all hover:-translate-y-1 group relative overflow-hidden"
                    >
                         <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         <div className="relative z-10">
                             <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 text-purple-300">
                                 {getIcon('card')}
                             </div>
                             <h3 className="text-xl font-bold text-white mb-1">Study Cards</h3>
                             <p className="text-xs text-gray-400">Review definitions and examples.</p>
                         </div>
                    </button>

                     {/* Quick Action: Game */}
                     <button 
                        onClick={() => onViewChange('match')}
                        className="glass-card rounded-2xl p-6 text-left hover:border-green-500/50 transition-all hover:-translate-y-1 group relative overflow-hidden"
                    >
                         <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         <div className="relative z-10">
                             <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-4 text-green-300">
                                 {getIcon('cube')}
                             </div>
                             <h3 className="text-xl font-bold text-white mb-1">Neural Match</h3>
                             <p className="text-xs text-gray-400">Link words to meanings.</p>
                         </div>
                    </button>
                </div>

                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <span className="w-1 h-6 bg-cyan-400 rounded-full mr-3"></span>
                    Word Matrix
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {vocabList.map((word) => {
                        const isLearned = learnedWords.includes(word.id);
                        return (
                            <div 
                                key={word.id} 
                                className={`
                                    p-4 rounded-xl border transition-all duration-300 group cursor-default relative overflow-hidden
                                    ${isLearned 
                                        ? 'bg-cyan-900/10 border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.1)]' 
                                        : 'bg-white/5 border-white/5 hover:border-white/20'
                                    }
                                `}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-mono text-gray-500">{word.id < 10 ? `0${word.id}` : word.id}</span>
                                    {isLearned && <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-wide">Mastered</span>}
                                </div>
                                <h4 className={`font-bold text-lg ${isLearned ? 'text-cyan-100' : 'text-gray-300'}`}>{word.word}</h4>
                                <p className="text-xs text-gray-500 mt-1 truncate">{word.form}</p>
                                
                                {!isLearned && (
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
                                        <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-700"></div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

const FlashcardMode: React.FC<{ vocabList: VocabItem[], learnedWords: number[], onToggleLearned: (id: number) => void }> = ({ vocabList, learnedWords, onToggleLearned }) => {
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [showUnlearnedOnly, setShowUnlearnedOnly] = useState(false);

    // Filter list based on settings
    const filteredList = showUnlearnedOnly 
        ? vocabList.filter(w => !learnedWords.includes(w.id))
        : vocabList;

    // Reset index if list shrinks
    useEffect(() => {
        if (index >= filteredList.length) setIndex(0);
    }, [filteredList.length]);

    const currentWord = filteredList[index];

    // Tilt Logic
    const cardRef = useRef<HTMLDivElement>(null);
    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!cardRef.current || flipped) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10; 
        const rotateY = ((x - centerX) / centerX) * 10;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }, [flipped]);

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        }
    };

    const nextCard = () => {
        setFlipped(false);
        setTimeout(() => setIndex(prev => (prev + 1) % filteredList.length), 300);
    };

    const prevCard = () => {
        setFlipped(false);
        setTimeout(() => setIndex(prev => (prev - 1 + filteredList.length) % filteredList.length), 300);
    };

    const speak = (text: string) => {
        const u = new SpeechSynthesisUtterance(text);
        u.rate = 0.9;
        window.speechSynthesis.speak(u);
    };

    if (!currentWord) return (
        <div className="flex-1 flex items-center justify-center text-gray-400">
            <div>
                <h2 className="text-2xl font-bold text-white mb-2">All words mastered!</h2>
                <button onClick={() => setShowUnlearnedOnly(false)} className="text-cyan-400 underline">Show all cards</button>
            </div>
        </div>
    );

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6">
            <div className="mb-6 flex space-x-4">
                 <label className="flex items-center cursor-pointer space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                     <input type="checkbox" checked={showUnlearnedOnly} onChange={(e) => setShowUnlearnedOnly(e.target.checked)} className="accent-cyan-400" />
                     <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Unlearned Only</span>
                 </label>
                 <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                     {index + 1} / {filteredList.length}
                 </div>
            </div>

            <div 
                className="relative w-full max-w-2xl aspect-[1.6/1] cursor-pointer group perspective-1000"
                onClick={() => setFlipped(!flipped)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div ref={cardRef} className={`w-full h-full relative transition-all duration-700 transform-style-3d ease-[cubic-bezier(0.23,1,0.32,1)] ${flipped ? 'rotate-y-180' : ''}`}>
                    
                    {/* FRONT */}
                    <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden glass-card flex flex-col items-center justify-center p-12 text-center group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-shadow">
                        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-400 uppercase tracking-widest">Click to Flip</div>
                        
                        <h2 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-xl mb-6">
                            {currentWord.word}
                        </h2>
                        
                        <button 
                        onClick={(e) => { e.stopPropagation(); speak(currentWord.word); }}
                        className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 px-6 py-2 rounded-full backdrop-blur transition-all border border-white/10 hover:border-cyan-500/50 group/audio"
                        >
                            <span className="text-xl text-cyan-200 font-mono">{currentWord.ipa}</span>
                            <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-cyan-300" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 11H5a1 1 0 01-1-1V8a1 1 0 011-1h.414l3.707-3.707a1 1 0 011.272-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0117 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </div>
                        </button>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden glass-card p-10 flex flex-col items-start text-left bg-[#0f0f1a]">
                        <div className="w-full flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                            <h3 className="text-3xl font-bold text-white">{currentWord.word}</h3>
                            <button 
                                onClick={(e) => { e.stopPropagation(); onToggleLearned(currentWord.id); }}
                                className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all border ${
                                    learnedWords.includes(currentWord.id) 
                                    ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                                }`}
                            >
                                {learnedWords.includes(currentWord.id) ? 'Mastered' : 'Mark Learned'}
                            </button>
                        </div>
                        
                        <div className="space-y-6 w-full">
                             <div>
                                 <span className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold block mb-1">Definition</span>
                                 <p className="text-lg text-gray-200 leading-relaxed font-medium">{currentWord.definition}</p>
                             </div>
                             <div>
                                 <span className="text-[10px] uppercase tracking-widest text-purple-500 font-bold block mb-1">Context</span>
                                 <p className="text-md text-gray-400 italic border-l-2 border-purple-500 pl-4">"{currentWord.example}"</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-12 mt-10">
                <button onClick={prevCard} className="p-4 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-all border border-white/10">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="text-gray-500 text-xs font-mono uppercase">Navigate</div>
                <button onClick={nextCard} className="p-4 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-all border border-white/10">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
}

// "Match" Game Mode
const MatchMode: React.FC<{ vocabList: VocabItem[] }> = ({ vocabList }) => {
    // Generate tiles: 4 pairs
    const [tiles, setTiles] = useState<{id: string, text: string, type: 'word' | 'def', matchId: number, state: 'default' | 'selected' | 'matched' | 'wrong'}[]>([]);
    const [selected, setSelected] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    const initGame = () => {
        // Pick 4 random words
        const shuffled = [...vocabList].sort(() => 0.5 - Math.random()).slice(0, 4);
        const newTiles: typeof tiles = [];
        
        shuffled.forEach(w => {
            newTiles.push({ id: `w-${w.id}`, text: w.word, type: 'word', matchId: w.id, state: 'default' });
            newTiles.push({ id: `d-${w.id}`, text: w.definition.length > 50 ? w.definition.substring(0, 50) + '...' : w.definition, type: 'def', matchId: w.id, state: 'default' });
        });

        // Shuffle tiles
        setTiles(newTiles.sort(() => 0.5 - Math.random()));
        setGameWon(false);
    };

    useEffect(() => { initGame(); }, []);

    const handleTileClick = (id: string) => {
        if (isProcessing || tiles.find(t => t.id === id)?.state === 'matched') return;

        // If clicking same tile
        if (selected === id) {
            setSelected(null);
            setTiles(prev => prev.map(t => t.id === id ? { ...t, state: 'default' } : t));
            return;
        }

        if (!selected) {
            setSelected(id);
            setTiles(prev => prev.map(t => t.id === id ? { ...t, state: 'selected' } : t));
        } else {
            // Check match
            const first = tiles.find(t => t.id === selected);
            const second = tiles.find(t => t.id === id);
            
            if (first && second && first.matchId === second.matchId) {
                // Match!
                setTiles(prev => prev.map(t => (t.id === selected || t.id === id) ? { ...t, state: 'matched' } : t));
                setSelected(null);
                
                // Check win
                if (tiles.filter(t => t.state === 'matched').length === tiles.length - 2) {
                    setTimeout(() => setGameWon(true), 500);
                }
            } else {
                // Wrong
                setIsProcessing(true);
                setTiles(prev => prev.map(t => (t.id === selected || t.id === id) ? { ...t, state: 'wrong' } : t));
                setTimeout(() => {
                    setTiles(prev => prev.map(t => (t.state === 'wrong') ? { ...t, state: 'default' } : t));
                    setSelected(null);
                    setIsProcessing(false);
                }, 1000);
            }
        }
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-8 relative">
            {gameWon && <ConfettiCanvas />}
            <h2 className="text-2xl font-bold text-white mb-8 tracking-widest uppercase flex items-center">
                <span className="text-cyan-400 mr-2">Neural Link:</span> Connect Concepts
            </h2>

            {gameWon ? (
                <div className="text-center animate-pop-in">
                    <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-300 mb-4">SYSTEM SYNCED</h3>
                    <button onClick={initGame} className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-bold transition-all">
                        Initialize New Set
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
                    {tiles.map(tile => (
                        <button
                            key={tile.id}
                            onClick={() => handleTileClick(tile.id)}
                            className={`
                                h-32 p-4 rounded-xl border-2 transition-all duration-300 relative overflow-hidden group flex items-center justify-center text-center
                                ${tile.state === 'default' ? 'bg-white/5 border-white/10 hover:border-cyan-500/50 hover:bg-white/10' : ''}
                                ${tile.state === 'selected' ? 'bg-cyan-500/20 border-cyan-400 scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)]' : ''}
                                ${tile.state === 'matched' ? 'bg-green-500/10 border-green-500/50 opacity-50 scale-95' : ''}
                                ${tile.state === 'wrong' ? 'bg-red-500/20 border-red-500 animate-shake' : ''}
                            `}
                        >
                            <span className={`font-bold ${tile.type === 'word' ? 'text-xl text-white' : 'text-sm text-gray-300'}`}>
                                {tile.text}
                            </span>
                            {tile.state === 'selected' && <div className="absolute inset-0 bg-cyan-400/10 animate-pulse"></div>}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

// "Spell" Mode
const SpellMode: React.FC<{ vocabList: VocabItem[] }> = ({ vocabList }) => {
    const [index, setIndex] = useState(0);
    const [input, setInput] = useState('');
    const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
    const [revealed, setRevealed] = useState(false);

    const currentWord = vocabList[index];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.toLowerCase().trim() === currentWord.word.toLowerCase()) {
            setStatus('correct');
            setTimeout(() => {
                setIndex(prev => (prev + 1) % vocabList.length);
                setInput('');
                setStatus('idle');
                setRevealed(false);
            }, 1000);
        } else {
            setStatus('wrong');
            setTimeout(() => setStatus('idle'), 800);
        }
    };

    const speak = () => {
        const u = new SpeechSynthesisUtterance(currentWord.word);
        window.speechSynthesis.speak(u);
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-lg">
                <div className="glass-card p-8 rounded-2xl border border-white/10 text-center relative overflow-hidden">
                    <div className="mb-8">
                        <button onClick={speak} className="w-20 h-20 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                        </button>
                        <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Listen & Type</p>
                        <p className="text-lg font-medium text-white italic">"{currentWord.definition}"</p>
                    </div>

                    <form onSubmit={handleSubmit} className="relative">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className={`w-full bg-black/30 border-2 rounded-lg px-4 py-4 text-center text-2xl font-bold tracking-widest outline-none transition-all
                                ${status === 'correct' ? 'border-green-500 text-green-400' : ''}
                                ${status === 'wrong' ? 'border-red-500 text-red-400 animate-shake' : 'border-white/20 focus:border-cyan-500'}
                            `}
                            placeholder="Type the word..."
                            autoFocus
                        />
                    </form>

                    <div className="mt-6 flex justify-between items-center">
                        <span className="text-xs text-gray-500">{index + 1} / {vocabList.length}</span>
                        <button onClick={() => setRevealed(true)} className="text-xs text-gray-400 hover:text-white underline decoration-dotted">Reveal Answer</button>
                    </div>

                    {revealed && (
                        <div className="mt-4 p-2 bg-red-500/10 border border-red-500/30 rounded text-red-300 font-bold animate-slide-up">
                            {currentWord.word}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Existing Speed Quiz Mode (Refined)
const QuizMode: React.FC<{ vocabList: VocabItem[] }> = ({ vocabList }) => {
    const [active, setActive] = useState(false);
    const [qIndex, setQIndex] = useState(0);
    const [timer, setTimer] = useState(10);
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState<'idle' | 'playing' | 'end'>('idle');
    const [feedback, setFeedback] = useState<'none' | 'correct' | 'wrong'>('none');
    
    // Quiz Timer
    useEffect(() => {
        let interval: number;
        if (gameState === 'playing' && timer > 0 && feedback === 'none') {
            interval = window.setInterval(() => setTimer(t => t - 1), 1000);
        } else if (timer === 0 && feedback === 'none') {
            handleAnswer(-1); // Timeout
        }
        return () => clearInterval(interval);
    }, [gameState, timer, feedback]);

    const startGame = () => {
        setGameState('playing');
        setScore(0);
        setQIndex(0);
        startRound();
    };

    const startRound = () => {
        setTimer(10);
        setFeedback('none');
    };

    const handleAnswer = (optionIndex: number) => {
        const correct = optionIndex === vocabList[qIndex].quizCorrectIndex;
        if (correct) {
            setScore(s => s + (timer * 10) + 50);
            setFeedback('correct');
        } else {
            setFeedback('wrong');
        }

        setTimeout(() => {
            if (qIndex < vocabList.length - 1) {
                setQIndex(prev => prev + 1);
                startRound();
            } else {
                setGameState('end');
            }
        }, 1000);
    };

    if (gameState === 'idle') {
        return (
            <div className="flex-1 flex flex-col items-center justify-center p-8 animate-pop-in">
                <div className="w-32 h-32 bg-cyan-500/10 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.3)] mb-8 animate-float border border-cyan-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h2 className="text-5xl font-black text-white mb-2 tracking-tight">SPEED RUN</h2>
                <p className="text-gray-400 mb-8">Score based on accuracy and time.</p>
                <button onClick={startGame} className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1">
                    INITIATE SEQUENCE
                </button>
            </div>
        );
    }

    if (gameState === 'end') {
        return (
            <div className="flex-1 flex flex-col items-center justify-center p-8 animate-pop-in">
                <ConfettiCanvas />
                <h2 className="text-2xl text-gray-400 uppercase tracking-widest mb-4">Sequence Complete</h2>
                <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-8 drop-shadow-lg">{score}</div>
                <button onClick={startGame} className="px-8 py-3 border border-white/20 hover:bg-white/10 rounded-full text-white transition-all">Retry</button>
            </div>
        );
    }

    const currentQ = vocabList[qIndex];

    return (
        <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-6">
            <div className="flex justify-between items-center mb-8">
                 <div className="text-sm font-mono text-gray-500">Q {qIndex + 1}/{vocabList.length}</div>
                 <div className="text-xl font-black text-cyan-400">{score} PTS</div>
            </div>

            {/* Timer Bar */}
            <div className="w-full h-2 bg-gray-800 rounded-full mb-8 overflow-hidden">
                <div 
                    className={`h-full transition-all duration-1000 linear ${timer < 4 ? 'bg-red-500' : 'bg-cyan-400'}`} 
                    style={{ width: `${(timer / 10) * 100}%` }}
                ></div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 leading-snug">
                    {currentQ.quizQuestion}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQ.quizOptions.map((opt, idx) => {
                        let style = "bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50";
                        if (feedback === 'correct' && idx === currentQ.quizCorrectIndex) style = "bg-green-500/20 border-green-500 text-green-300 shadow-[0_0_20px_rgba(34,197,94,0.3)]";
                        if (feedback === 'wrong' && idx !== currentQ.quizCorrectIndex) style = "opacity-50";
                        if (feedback === 'wrong' && idx === currentQ.quizCorrectIndex) style = "bg-green-500/20 border-green-500 text-green-300"; // Show correct one

                        return (
                            <button
                                key={idx}
                                disabled={feedback !== 'none'}
                                onClick={() => handleAnswer(idx)}
                                className={`p-6 rounded-xl border-2 text-lg font-bold transition-all duration-200 text-left ${style}`}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};