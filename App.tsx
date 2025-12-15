
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TESTS, VOCAB_LIST, VOCAB_LIST_2, VOCAB_LIST_3, INTRO_QUESTIONS } from './constants';
import { QuestionGroup, Question, QuestionType, UserAnswers, TableData, VocabItem } from './types';

const TOTAL_TIME_SECONDS = 60 * 60; // 60 minutes

// --- Drill Specific Content Data ---
const DRILL_SCENARIOS: { [key: string]: { vocab: any[], solutions: any[] } } = {
  'tfng-1': {
    vocab: [
      { word: "Unprecedented", definition: "Never done or known before.", ru: "беспрецедентный", uz: "misli ko'rilmagan" },
      { word: "Emanate", definition: "Issue or spread out from a source.", ru: "исходить / излучаться", uz: "tarqalmoq / chiqmoq" },
      { word: "Anomaly", definition: "Something that deviates from what is standard, normal, or expected.", ru: "аномалия", uz: "anomaliya" }
    ],
    solutions: [
      { qId: 1, question: "The Parker Solar Probe is the first spacecraft to enter the Sun's outer corona.", correct: "NOT GIVEN", explanation: "The text says the probe provided \"unprecedented insights\" and observed things \"for the first time\". However, it does not explicitly state that it was the very first spacecraft to ever enter the outer corona. Information about other spacecraft is missing." },
      { qId: 2, question: "Scientists used to think that 'switchbacks' were uncommon events.", correct: "TRUE", explanation: "The text states: \"Previously, astronomers believed these reversals... were rare anomalies\". The word \"rare\" corresponds directly to \"uncommon\", so the statement agrees with the text." },
      { qId: 3, question: "The recent findings definitely prove the cause of the temperature difference between the Sun's surface and its atmosphere.", correct: "FALSE", explanation: "The text states that the findings are \"potentially solving\" the mystery. The word \"potentially\" contradicts the idea of \"definitely prove\"." }
    ]
  },
  'tfng-2': {
    vocab: [
      { word: "Redundancy", definition: "The state of being no longer needed or useful.", ru: "сокращение / избыточность", uz: "qisqartirish / ortiqchalik" },
      { word: "Precedent", definition: "An earlier event or action that is regarded as an example or guide.", ru: "прецедент", uz: "pretsedent / namuna" },
      { word: "Disproportionately", definition: "To an extent that is too large or too small in comparison with something else.", ru: "непропорционально", uz: "nomutanosib ravishda" }
    ],
    solutions: [
      { qId: 4, question: "Peter Howitt believes that the impact of AI will differ significantly from that of the steam engine.", correct: "FALSE", explanation: "The text states: \"historical precedents suggest a different outcome. Much like the steam engine or electrification...\" Howitt compares AI *to* the steam engine rather than saying it differs significantly." },
      { qId: 5, question: "There are currently no government policies in place to retrain workers displaced by AI.", correct: "NOT GIVEN", explanation: "The text says \"Without targeted government policies... the immediate result may be...\". This is a conditional warning about the future need for policies. It does not state whether such policies currently exist or not." },
      { qId: 6, question: "Howitt argues that the primary risk of AI adoption is a widening gap between the rich and the poor, rather than total job loss.", correct: "TRUE", explanation: "The text states the result may be \"a sharp rise in income inequality... rather than mass unemployment\". This agrees with the statement that the risk is the gap (inequality) rather than total job loss." }
    ]
  },
  'tfng-3': {
    vocab: [
      { word: "Shattered", definition: "Broken into many pieces.", ru: "разбитый вдребезги", uz: "chilparchin bo'lgan" },
      { word: "Scavenging", definition: "Searching for and collecting anything usable.", ru: "рыться / искать", uz: "qidirib topish" },
      { word: "Cognitive", definition: "Relating to the mental action or process of acquiring knowledge and understanding.", ru: "когнитивный", uz: "kognitiv / aqliy" }
    ],
    solutions: [
      { qId: 7, question: "The study at East Farm provides the first evidence that Neanderthals used tools.", correct: "NOT GIVEN", explanation: "The text mentions the discovery of flint handaxes, but it does not claim this is the *first* evidence of tool use by Neanderthals in general, only that it pushes back the timeline of *fire-making*." },
      { qId: 8, question: "Prior to this study, the prevailing view was that Neanderthals could only use fire that had started naturally.", correct: "TRUE", explanation: "The text states: \"evidence suggests that Neanderthals were not merely scavenging fire from natural wildfires, as previously thought\". This confirms the previous view was limited to natural fire." },
      { qId: 9, question: "The researchers found the remains of cooked food alongside the flint tools.", correct: "NOT GIVEN", explanation: "The text mentions flint handaxes and iron pyrite fragments. It does not mention finding any cooked food remains." }
    ]
  },
  'tfng-4': {
    vocab: [
      { word: "Escalating", definition: "Increasing rapidly.", ru: "обостряющийся / растущий", uz: "kuchayib borayotgan" },
      { word: "Persistent", definition: "Continuing firmly or obstinately in a course of action in spite of difficulty.", ru: "упорный / устойчивый", uz: "qat'iy / davomli" },
      { word: "Inducing", definition: "Bringing about or giving rise to.", ru: "вызывающий / побуждающий", uz: "keltirib chiqaruvchi" }
    ],
    solutions: [
      { qId: 10, question: "Adam McKay claims that major news organisations do not have any journalists specialising in climate change.", correct: "FALSE", explanation: "The text explicitly states: \"outlets like the BBC and The New York Times employ dedicated climate reporters\". This contradicts the statement." },
      { qId: 11, question: "McKay believes that journalists should be more willing to alarm their audiences.", correct: "TRUE", explanation: "The text says: \"He advocates for a more 'alarmist' approach\". This agrees with the idea that they should be willing to alarm audiences." },
      { qId: 12, question: "There is a consensus among experts that 'alarmist' reporting is the most effective way to engage the public.", correct: "FALSE", explanation: "The text states: \"Conversely, some communication experts warn that inducing panic can lead to 'news avoidance'\". This shows there is disagreement, not a consensus." }
    ]
  },
  'tfng-5': {
    vocab: [
      { word: "Semblance", definition: "The outward appearance or apparent form of something, especially when the reality is different.", ru: "подобие / видимость", uz: "ko'rinish / o'xshashlik" },
      { word: "Atrophy", definition: "Gradually decline in effectiveness or vigor due to underuse or neglect.", ru: "атрофироваться", uz: "so'lib qolish / kuchsizlanish" },
      { word: "Relentlessly", definition: "In an unceasingly intense or harsh way.", ru: "неустанно / беспрестанно", uz: "to'xtovsiz / tinimsiz" }
    ],
    solutions: [
      { qId: 13, question: "The article suggests that AI chatbots are currently unable to hold complex conversations.", correct: "NOT GIVEN", explanation: "The text says chatbots are \"increasingly sophisticated\", but it does not specifically confirm or deny their ability to hold \"complex conversations\"." },
      { qId: 14, question: "Psychologists fear that using AI for companionship could weaken a person's ability to interact with other humans.", correct: "TRUE", explanation: "The text states that relying on AI may \"atrophy human social skills, much like a muscle that is rarely used\". This supports the statement." },
      { qId: 15, question: "AI chatbots are programmed to occasionally disagree with users to simulate a realistic relationship.", correct: "FALSE", explanation: "The text states that chatbots are \"programmed to be relentlessly agreeable\". This contradicts the idea that they occasionally disagree." }
    ]
  },
  'summary-drill-1': {
    vocab: [
        { word: "Malignant", definition: "Cancerous; dangerous to health.", ru: "злокачественный", uz: "xavfli (kasallik)" },
        { word: "Co-opt", definition: "To take something for your own use.", ru: "присвоить", uz: "o'zlashtirmoq" },
        { word: "Dormant", definition: "Temporarily inactive or sleeping.", ru: "спящий / бездействующий", uz: "uyqudagi" }
    ],
    solutions: [
        { qId: 1, question: "Recent research has found a mechanism that enables {{1}} to survive medical treatment.", correct: "cancer cells", explanation: "Paragraph 1: '...mechanism that allows cancer cells to survive targeted therapies.'" },
        { qId: 2, question: "It appears that malignant cells are able to {{2}} an enzyme...", correct: "co-opt", explanation: "Paragraph 1: '...certain malignant cells co-opt a specific DNA-dismantling enzyme...'" },
        { qId: 3, question: "...that usually functions during the process of {{3}}.", correct: "cell death", explanation: "Paragraph 1: '...normally active only during cell death...'" },
        { qId: 4, question: "By using a low-level activation of this enzyme, the cells can go into a {{4}}...", correct: "dormant state", explanation: "Paragraph 1: '...enter a dormant state, allowing them to bounce back...'" },
        { qId: 5, question: "Scientists believe that {{5}} this enzyme may stop tumours from growing again.", correct: "blocking", explanation: "Paragraph 1: '...blocking this enzyme could prevent tumour regrowth...'" }
    ]
  },
  'summary-drill-2': {
      vocab: [
          { word: "Erratic", definition: "Not even or regular in pattern or movement; unpredictable.", ru: "неустойчивый", uz: "betartib" },
          { word: "Dominate", definition: "To be the most important or conspicuous part of something.", ru: "доминировать", uz: "hukmronlik qilmoq" },
          { word: "Interior", definition: "The inner part of something.", ru: "внутренняя часть", uz: "ichki qism" }
      ],
      solutions: [
           { qId: 6, question: "A study from the University of Zurich questions the idea that Uranus and Neptune are just {{6}}.", correct: "ice giants", explanation: "Text: '...challenges the long-held belief that Uranus and Neptune are primarily ice giants.'" },
           { qId: 7, question: "New modeling suggests these planets might essentially be {{7}} by rock instead of ice.", correct: "dominated", explanation: "Text: '...may actually be dominated by rock rather than water-rich ices.'" },
           { qId: 8, question: "This theory could provide an explanation for the planets' unusual {{8}}...", correct: "magnetic fields", explanation: "Text: '...potentially explaining their erratic, multi-poled magnetic fields.'" },
           { qId: 9, question: "The researchers argue that the current {{9}} of these planets is too simple.", correct: "classification", explanation: "Text: '...ice giant classification is an oversimplification.'" },
           { qId: 10, question: "They believe that {{10}} are necessary to uncover the truth...", correct: "space missions", explanation: "Text: '...only dedicated future space missions can definitively reveal...'" }
      ]
  },
  'summary-drill-3': {
      vocab: [
          { word: "Conventional", definition: "Based on or in accordance with what is generally done or believed.", ru: "традиционный", uz: "an'anaviy" },
          { word: "Lattice", definition: "An interlaced structure or pattern.", ru: "решетка", uz: "panjara / to'r" },
          { word: "Rigidity", definition: "Inability to be to bent or be forced out of shape.", ru: "жесткость", uz: "qattiqlik" }
      ],
      solutions: [
          { qId: 11, question: "New findings indicate that the Earth's inner core is in a {{11}} rather than being a standard solid.", correct: "superionic state", explanation: "Text: 'Instead, it exists in a superionic state...'" },
          { qId: 12, question: "In this condition, {{12}} are able to move fluidly...", correct: "carbon atoms", explanation: "Text: '...where carbon atoms flow like a liquid...'" },
          { qId: 13, question: "...through a framework made of {{13}}.", correct: "solid iron", explanation: "Text: '...through a solid iron lattice.'" },
          { qId: 14, question: "This phenomenon explains why the core appears to be {{14}} in seismic records.", correct: "soft", explanation: "Text: 'This unusual behavior makes the core surprisingly soft...'" },
          { qId: 15, question: "The rapid movement of these elements reduces the {{15}} of the alloy...", correct: "stiffness", explanation: "Text: '...drastically reducing the alloy`s stiffness/rigidity.'" }
      ]
  }
};

interface QuestionGroupViewProps {
  group: QuestionGroup;
  answers: UserAnswers;
  onAnswerChange: (id: number, val: string) => void;
  onFocus: (id: number) => void;
  activeQuestionId: number | null;
}

const RenderCellContent = ({ text, questions, renderInput }: { text: string, questions: Question[], renderInput: (q: Question) => React.ReactNode }) => {
    const parts = text.split(/(\{\{\d+\}\})/g);
    return (
        <span>
            {parts.map((part, i) => {
                const match = part.match(/\{\{(\d+)\}\}/);
                if (match) {
                    const qIdOrLabel = match[1];
                    const question = questions.find(q => q.label === qIdOrLabel || q.id === parseInt(qIdOrLabel)); 
                    if (question) {
                        return <span key={i}>{renderInput(question)}</span>;
                    }
                }
                return <span key={i} dangerouslySetInnerHTML={{__html: part}} />;
            })}
        </span>
    )
}

const QuestionGroupView: React.FC<QuestionGroupViewProps> = ({ group, answers, onAnswerChange, onFocus, activeQuestionId }) => {
  const renderQuestionInput = (q: Question) => {
    const isFocused = activeQuestionId === q.id;
    const value = answers[q.id] || '';

    if (q.type === QuestionType.DROPDOWN) {
      return (
        <select
          id={`question-${q.id}`}
          value={value}
          onChange={(e) => onAnswerChange(q.id, e.target.value)}
          onFocus={() => onFocus(q.id)}
          className={`border rounded p-1 ml-2 text-sm font-bold ${isFocused ? 'ring-2 ring-blue-500 border-blue-500 bg-blue-50' : 'border-gray-300'}`}
        >
           <option value="">Select an answer...</option>
           {q.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      );
    }
    
    if (q.type === QuestionType.RADIO) {
        return null;
    }

    return (
      <input
        type="text"
        id={`input-q-${q.id}`}
        value={value}
        onChange={(e) => onAnswerChange(q.id, e.target.value)}
        onFocus={() => onFocus(q.id)}
        className={`border-b-2 bg-transparent px-2 py-0.5 mx-1 w-32 font-bold text-center transition-colors outline-none ${isFocused ? 'border-blue-600 bg-blue-50 text-blue-900' : 'border-gray-400 text-gray-700 hover:border-gray-600'}`}
        autoComplete="off"
      />
    );
  };

  if (group.renderType === 'TABLE' && group.tableData) {
      return (
          <div className="mb-8">
              <div className="bg-gray-100 p-4 rounded-t-lg border border-gray-200">
                  <h3 className="font-bold text-gray-700" dangerouslySetInnerHTML={{__html: group.instruction}}></h3>
              </div>
              <div className="overflow-x-auto border border-t-0 border-gray-200 rounded-b-lg">
                  <table className="w-full text-sm text-left">
                      {group.tableData.headers && group.tableData.headers.length > 0 && (
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                              <tr>
                                  {group.tableData.headers.map((h, i) => <th key={i} className="px-6 py-3 border-r last:border-r-0">{h}</th>)}
                              </tr>
                          </thead>
                      )}
                      <tbody>
                          {group.tableData.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="bg-white border-b hover:bg-gray-50">
                                  {row.cells.map((cell, cIdx) => (
                                      <td key={cIdx} className="px-6 py-4 border-r last:border-r-0 align-top">
                                          <div className={cell.bulletPoints ? "list-disc list-inside" : ""}>
                                              <RenderCellContent 
                                                  text={cell.text || ''} 
                                                  questions={group.questions} 
                                                  renderInput={renderQuestionInput}
                                              />
                                          </div>
                                      </td>
                                  ))}
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>
      )
  }

  return (
    <div className="mb-8 space-y-6">
       <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-700" dangerouslySetInnerHTML={{__html: group.instruction}}></h3>
       </div>
       {group.questions.map(q => (
           <div key={q.id} id={`question-${q.id}`} className={`p-4 rounded-lg border transition-all ${activeQuestionId === q.id ? 'bg-blue-50 border-blue-300 shadow-md' : 'bg-white border-gray-200'}`}>
               <div className="flex items-start">
                   <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold text-sm mr-4 shrink-0">
                       {q.label}
                   </span>
                   <div className="flex-1">
                       {q.questionText && <p className="mb-3 text-gray-800 font-medium">{q.questionText}</p>}
                       {q.type === QuestionType.RADIO && (
                           <div className="space-y-2">
                               {q.options?.map((opt) => (
                                   <label key={opt} className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-gray-100">
                                       <input 
                                         type="radio" 
                                         name={`q-${q.id}`} 
                                         value={opt}
                                         checked={answers[q.id] === opt}
                                         onChange={() => onAnswerChange(q.id, opt)}
                                         onFocus={() => onFocus(q.id)}
                                         className="w-4 h-4 text-blue-600"
                                       />
                                       <span className="text-gray-700">{opt}</span>
                                   </label>
                               ))}
                           </div>
                       )}
                       {q.type === QuestionType.DROPDOWN && (
                           <div className="mt-2">
                               <select
                                  value={answers[q.id] || ''}
                                  onChange={(e) => onAnswerChange(q.id, e.target.value)}
                                  onFocus={() => onFocus(q.id)}
                                  className="block w-full max-w-xs p-2.5 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
                               >
                                   <option value="">Select an answer...</option>
                                   {q.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                               </select>
                           </div>
                       )}
                       {q.type === QuestionType.INPUT && (
                           <input
                             type="text"
                             value={answers[q.id] || ''}
                             onChange={(e) => onAnswerChange(q.id, e.target.value)}
                             onFocus={() => onFocus(q.id)}
                             placeholder="Type answer here..."
                             className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-sm"
                           />
                       )}
                   </div>
               </div>
           </div>
       ))}
    </div>
  );
};

const VocabularyStudio = ({ data, title, onBack }: { data: VocabItem[], title: string, onBack: () => void }) => {
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    
    const item = data[index];
    
    const handleNext = () => {
        setFlipped(false);
        setIndex((prev) => (prev + 1) % data.length);
    };
    
    const handlePrev = () => {
        setFlipped(false);
        setIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            <header className="h-16 flex items-center justify-between px-6 border-b border-gray-800">
                <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Test
                </button>
                <h1 className="text-xl font-bold">{title} - Vocabulary</h1>
                <div className="w-20"></div>
            </header>
            <main className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="relative w-full max-w-2xl h-96 perspective-1000">
                    <div 
                        className={`relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${flipped ? 'rotate-y-180' : ''}`}
                        onClick={() => setFlipped(!flipped)}
                    >
                         {/* Front */}
                         <div className="absolute w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl flex flex-col items-center justify-center backface-hidden p-10">
                             <h2 className="text-6xl font-black mb-4">{item.word}</h2>
                             <p className="text-2xl text-blue-200 font-serif italic">{item.ipa}</p>
                             <span className="mt-8 px-4 py-1 bg-white/20 rounded-full text-sm font-bold uppercase tracking-wider">{item.form}</span>
                             <p className="absolute bottom-8 text-sm text-blue-300 animate-bounce">Click to flip</p>
                         </div>
                         
                         {/* Back */}
                         <div className="absolute w-full h-full bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center backface-hidden rotate-y-180 p-10 text-gray-800">
                             <p className="text-xl text-center mb-6 leading-relaxed font-medium">{item.definition}</p>
                             <div className="w-full h-px bg-gray-200 my-4"></div>
                             <p className="text-gray-500 italic text-center">"{item.example}"</p>
                             <div className="mt-8 grid grid-cols-2 gap-8 w-full">
                                 <div className="text-center">
                                     <span className="block text-xs font-bold text-gray-400 uppercase">Russian</span>
                                     <span className="text-lg font-bold text-blue-600">{item.translationRU}</span>
                                 </div>
                                 <div className="text-center">
                                     <span className="block text-xs font-bold text-gray-400 uppercase">Uzbek</span>
                                     <span className="text-lg font-bold text-green-600">{item.translationUZ}</span>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
                
                <div className="flex items-center space-x-8 mt-12">
                    <button onClick={handlePrev} className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <span className="text-2xl font-bold font-mono text-gray-500">{index + 1} / {data.length}</span>
                    <button onClick={handleNext} className="p-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </main>
        </div>
    )
}

export default function App() {
  const [currentTestId, setCurrentTestId] = useState<string | null>(null);
  const [activePassageId, setActivePassageId] = useState<number>(1);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [reviewStatus, setReviewStatus] = useState<{[key: number]: boolean}>({});
  const [focusedQuestionId, setFocusedQuestionId] = useState<number | null>(null);
  
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME_SECONDS);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTestStarted, setIsTestStarted] = useState(false);
  
  // Drill Specific State
  const [drillStep, setDrillStep] = useState(0); 
  const [introAnswer, setIntroAnswer] = useState<string | null>(null);

  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'xlarge'>('standard');
  const [lineSpacing, setLineSpacing] = useState<'compact' | 'standard' | 'loose'>('standard');
  const [paragraphIndent, setParagraphIndent] = useState(false);
  
  const [showHelp, setShowHelp] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contentLang, setContentLang] = useState<'EN' | 'RU' | 'UZ'>('EN');

  const [vocabMode, setVocabMode] = useState<'none' | 'p1' | 'p2' | 'p3'>('none');

  const currentTest = TESTS.find(t => t.id === currentTestId) || null;
  const passages = currentTest ? currentTest.passages : [];
  const isTFNG = currentTestId?.startsWith('tfng-');
  const isSummary = currentTestId?.startsWith('summary-');
  const isSAQ = currentTestId?.startsWith('saq-');
  const isIntroMode = currentTestId === 'tfng-intro';
  
  const activeDrillData = currentTestId ? DRILL_SCENARIOS[currentTestId] : null;
  const isDrillMode = !!activeDrillData;

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
      setDrillStep(0);
      setIntroAnswer(null);
    }
  }, [currentTestId]);

  useEffect(() => {
    let timer: number;
    if (isTimerRunning) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const activePassage = passages.length > 0 ? (passages.find((p) => p.id === activePassageId) || passages[0]) : null;
  const activePassageIndex = activePassage ? passages.findIndex((p) => p.id === activePassage.id) : 0;

  const handleNext = () => {
    if (isIntroMode) {
        // Steps 0, 1 are static. Questions start at step 2.
        // Each question takes 2 steps (Question, Result).
        // Total dynamic steps = 2 + (INTRO_QUESTIONS.length * 2)
        
        const isQuestionStep = drillStep >= 2 && (drillStep - 2) % 2 === 0;
        const isResultStep = drillStep >= 2 && (drillStep - 2) % 2 !== 0;

        if (isQuestionStep && !introAnswer) {
            alert("Please select an answer first.");
            return;
        }

        const totalSteps = 2 + (INTRO_QUESTIONS.length * 2);
        
        if (drillStep === totalSteps - 1) { // Finished all
            setCurrentTestId(null); 
            return;
        }

        if (isResultStep) {
            setIntroAnswer(null);
        }

        setDrillStep(prev => prev + 1);
        return;
    }

    if (isDrillMode && activeDrillData) {
        setDrillStep(prev => prev + 1);
        const totalSteps = 3 + activeDrillData.solutions.length;
        if (drillStep === totalSteps) { 
             setCurrentTestId(null);
        }
        return;
    }

    if (activePassageIndex < passages.length - 1) {
      setActivePassageId(passages[activePassageIndex + 1].id);
      setFocusedQuestionId(null);
    }
  };
  
  const handleDrillBack = () => {
      setDrillStep(prev => Math.max(0, prev - 1));
  };

  const handleBack = () => {
    if (isIntroMode) {
        handleDrillBack();
        return;
    }

    if (isDrillMode) {
        handleDrillBack();
        return;
    }

    if (activePassageIndex > 0) {
      setActivePassageId(passages[activePassageIndex - 1].id);
      setFocusedQuestionId(null);
    }
  };

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

  const getTextSizeClass = () => {
    switch (fontSize) {
      case 'large': return 'text-lg';
      case 'xlarge': return 'text-xl';
      default: return 'text-base';
    }
  };

  const getLineSpacingClass = () => {
    switch (lineSpacing) {
      case 'compact': return 'leading-normal';
      case 'loose': return 'leading-9'; 
      default: return 'leading-relaxed'; 
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
      if (!isTFNG && !isSummary && !isSAQ && !isIntroMode) {
        setIsTimerRunning(true);
      }
      if (isDrillMode || isIntroMode) {
          setDrillStep(0);
      }
  };

  const toggleTimer = () => {
    setIsTimerRunning(prev => !prev);
  };

  const restartTimer = () => {
    setIsTimerRunning(false);
    setTimeLeft(TOTAL_TIME_SECONDS);
  };

  const getContent = () => {
    if (!activePassage) return [];
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

  const renderIntroContent = () => {
      // Step 0: Title
      if (drillStep === 0) {
          return (
              <div className="flex-1 flex flex-col items-center justify-center bg-gray-900 text-white p-8">
                  <div className="max-w-2xl text-center space-y-6 animate-in fade-in zoom-in duration-500">
                      <div className="inline-block p-4 rounded-full bg-blue-600 mb-4 shadow-lg shadow-blue-500/50">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                      </div>
                      <h1 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                          TRUE / FALSE / NOT GIVEN
                      </h1>
                      <p className="text-xl text-gray-400 font-light">
                          The Logic Behind the Confusion
                      </p>
                      <div className="pt-12">
                          <button onClick={handleNext} className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:scale-105 transition-transform">
                              Start Lesson
                          </button>
                      </div>
                  </div>
              </div>
          )
      }
      
      // Step 1: Theory
      if (drillStep === 1) {
          return (
              <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-8 overflow-y-auto">
                  <h2 className="text-3xl font-bold text-gray-800 mb-12">The Golden Rules</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
                      <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-green-500 hover:-translate-y-2 transition-transform">
                          <div className="text-green-600 font-black text-2xl mb-4">TRUE</div>
                          <p className="text-gray-600 leading-relaxed">
                              The statement <strong>agrees</strong> with the information in the passage.
                              <br/><br/>
                              <span className="text-sm bg-green-50 text-green-700 px-2 py-1 rounded">Matches meaning</span>
                          </p>
                      </div>
                      <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-red-500 hover:-translate-y-2 transition-transform">
                          <div className="text-red-600 font-black text-2xl mb-4">FALSE</div>
                          <p className="text-gray-600 leading-relaxed">
                              The statement <strong>contradicts</strong> the information in the passage.
                              <br/><br/>
                              <span className="text-sm bg-red-50 text-red-700 px-2 py-1 rounded">Opposite meaning</span>
                          </p>
                      </div>
                      <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-gray-500 hover:-translate-y-2 transition-transform">
                          <div className="text-gray-600 font-black text-2xl mb-4">NOT GIVEN</div>
                          <p className="text-gray-600 leading-relaxed">
                              There is <strong>no information</strong> on this in the passage. It might be true or false, but we don't know.
                              <br/><br/>
                              <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">Missing info</span>
                          </p>
                      </div>
                  </div>
                  <div className="mt-12 text-center">
                    <button onClick={handleNext} className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">Start Practice Questions</button>
                  </div>
              </div>
          )
      }

      // Step 2+: Questions and Results
      // Calculate Question Index
      // Step 2 = Q0, Step 3 = R0
      // Step 4 = Q1, Step 5 = R1
      // etc.
      const questionIndex = Math.floor((drillStep - 2) / 2);
      const isResult = (drillStep - 2) % 2 !== 0;
      
      const question = INTRO_QUESTIONS[questionIndex];

      if (!question) return null; // Should not happen based on handleNext logic

      if (!isResult) {
          return (
              <div className="flex-1 flex flex-col items-center justify-center bg-white p-8">
                   <div className="max-w-2xl w-full space-y-8 animate-in slide-in-from-right duration-300">
                       <div className="flex justify-between items-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                           <span>Question {question.id} of {INTRO_QUESTIONS.length}</span>
                           <span>Strategy Drill</span>
                       </div>

                       <div className="space-y-2">
                           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Reading Passage Excerpt</span>
                           <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600 text-lg font-serif text-gray-800 leading-relaxed">
                               "{question.text}"
                           </div>
                       </div>
                       
                       <div className="space-y-2">
                           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Question Statement</span>
                           <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-lg font-medium text-gray-900">
                               {question.statement}
                           </div>
                       </div>
                       
                       <div className="grid grid-cols-3 gap-4 pt-4">
                           {['TRUE', 'FALSE', 'NOT GIVEN'].map(opt => (
                               <button
                                 key={opt}
                                 onClick={() => setIntroAnswer(opt)}
                                 className={`py-4 rounded-lg font-bold text-lg border-2 transition-all ${introAnswer === opt ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400'}`}
                               >
                                   {opt}
                               </button>
                           ))}
                       </div>
                   </div>
              </div>
          );
      } else {
          // Result View
          const isCorrect = introAnswer === question.answer;
          return (
              <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-8">
                  <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
                      <div className={`p-8 text-center ${isCorrect ? 'bg-green-600' : 'bg-red-600'} text-white`}>
                          <h2 className="text-4xl font-black mb-2">{isCorrect ? 'Correct!' : 'Incorrect'}</h2>
                          <p className="text-white/90 text-lg">The correct answer is <strong>{question.answer}</strong>.</p>
                      </div>
                      <div className="p-8 space-y-6">
                           <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                               <div className="shrink-0 flex-1">
                                   <div className="text-xs font-bold text-gray-400 uppercase">Text says:</div>
                                   <div className="font-serif text-gray-800">"{question.text}"</div>
                               </div>
                               <div className="text-gray-300 text-2xl self-center">vs</div>
                               <div className="flex-1">
                                   <div className="text-xs font-bold text-gray-400 uppercase">Statement says:</div>
                                   <div className="font-serif text-gray-800">"{question.statement}"</div>
                               </div>
                           </div>
                           
                           <div className="prose text-gray-600 text-lg leading-relaxed">
                               <p>
                                   <strong>Explanation:</strong> {question.explanation}
                               </p>
                           </div>

                           <button onClick={handleNext} className="w-full py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
                               {questionIndex < INTRO_QUESTIONS.length - 1 ? 'Next Question' : 'Finish Drill'}
                           </button>
                      </div>
                  </div>
              </div>
          );
      }
  };
  
  const renderDrillContent = () => {
      if (!activeDrillData) return null;

      if (drillStep < 3) {
          const vocab = activeDrillData.vocab[drillStep];
          return (
              <div className="flex-1 flex items-center justify-center bg-gray-900 p-8">
                  <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-lg w-full text-center animate-in fade-in zoom-in duration-300 relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                       <div className="mb-8">
                           <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 mb-4 tracking-wider">WORD {drillStep + 1} OF 3</span>
                           <h2 className="text-5xl font-black text-gray-800 mb-2">{vocab.word}</h2>
                           <p className="text-gray-500 italic text-lg border-b border-gray-100 pb-6">{vocab.definition}</p>
                       </div>
                       
                       <div className="space-y-4 text-left bg-gray-50 p-6 rounded-xl border border-gray-200">
                           <div className="flex justify-between items-center">
                               <span className="font-bold text-gray-400 text-xs uppercase tracking-widest">Russian</span>
                               <span className="text-lg font-bold text-blue-700">{vocab.ru}</span>
                           </div>
                           <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                               <span className="font-bold text-gray-400 text-xs uppercase tracking-widest">Uzbek</span>
                               <span className="text-lg font-bold text-green-700">{vocab.uz}</span>
                           </div>
                       </div>
                  </div>
              </div>
          );
      }
      
      if (drillStep === 3) {
          return null; 
      }
      
      if (drillStep > 3) {
          const solutionIndex = drillStep - 4;
          if (solutionIndex >= activeDrillData.solutions.length) return null;
          
          const sol = activeDrillData.solutions[solutionIndex];
          const userAnswer = answers[sol.qId] || "No Answer";
          const isCorrect = userAnswer.toLowerCase().trim() === sol.correct.toLowerCase().trim();
          
          return (
              <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
                  <div className="flex-1 overflow-y-auto p-8 flex items-center justify-center">
                    <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-in slide-in-from-right duration-300">
                        <div className={`p-6 border-b flex justify-between items-center ${isCorrect ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                            <h2 className="text-xl font-bold text-gray-800">Question {sol.qId} Analysis</h2>
                            <span className={`px-4 py-1.5 rounded-full font-bold text-sm ${isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                {isCorrect ? 'CORRECT' : 'INCORRECT'}
                            </span>
                        </div>
                        
                        <div className="p-8 space-y-8">
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Question</h3>
                                <p className="text-2xl font-serif text-gray-900 leading-relaxed">"{sol.question}"</p>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Your Answer</div>
                                    <div className={`text-xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>{userAnswer}</div>
                                </div>
                                <div className="flex-1 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                    <div className="text-xs text-blue-400 uppercase font-bold mb-1">Correct Answer</div>
                                    <div className="text-xl font-bold text-blue-700">{sol.correct}</div>
                                </div>
                            </div>
                            
                            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                                <h3 className="flex items-center text-yellow-800 font-bold mb-3">
                                    Explanation
                                </h3>
                                <p className="text-gray-700 leading-7 text-lg">
                                    {sol.explanation}
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          );
      }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-900 font-sans overflow-hidden">
      {/* Top Bar (Always Visible) */}
      <header className="h-16 bg-[#1a1a1a] text-white flex items-center justify-between px-6 shadow-md z-20 shrink-0 relative">
        <div className="flex items-center space-x-4">
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

                           <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase mt-2">Skill Drills</div>
                           {TESTS.find(t => t.id === 'tfng-intro') && (
                               <button 
                                key="tfng-intro"
                                onClick={() => {
                                    setCurrentTestId('tfng-intro');
                                    setIsMenuOpen(false);
                                }}
                                className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group mb-2"
                                >
                                <span className="font-bold flex items-center text-sm truncate">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Intro: T/F/NG Strategy
                                </span>
                                <span className="bg-white/20 px-2 py-0.5 rounded text-xs ml-2 shrink-0">Start Here</span>
                                </button>
                           )}

                           {TESTS.filter(t => t.id.startsWith('tfng-') && t.id !== 'tfng-intro').map(t => (
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

                           <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase mt-2">Summary Completion</div>
                           {TESTS.filter(t => t.id.startsWith('summary-')).map(t => (
                               <button 
                                key={t.id}
                                onClick={() => {
                                    setCurrentTestId(t.id);
                                    setIsMenuOpen(false);
                                }}
                                className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group mb-2 last:mb-0"
                                >
                                <span className="font-bold flex items-center text-sm truncate">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    {t.title}
                                </span>
                                <span className="bg-white/20 px-2 py-0.5 rounded text-xs ml-2 shrink-0">Hot</span>
                                </button>
                           ))}

                           <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase mt-2">Short Answer Drills</div>
                           {TESTS.filter(t => t.id.startsWith('saq-')).map(t => (
                               <button 
                                key={t.id}
                                onClick={() => {
                                    setCurrentTestId(t.id);
                                    setIsMenuOpen(false);
                                }}
                                className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group mb-2 last:mb-0"
                                >
                                <span className="font-bold flex items-center text-sm truncate">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    {t.title}
                                </span>
                                <span className="bg-white/20 px-2 py-0.5 rounded text-xs ml-2 shrink-0">Pop</span>
                                </button>
                           ))}
                       </div>

                       {currentTest && (
                         <>
                           <div className="px-4 py-2 text-sm font-bold text-gray-500 uppercase tracking-wider border-b bg-gray-50 mt-2">
                               Current: {currentTest.title}
                           </div>
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
                       {TESTS.filter(t => !t.id.startsWith('tfng-') && !t.id.startsWith('summary-') && !t.id.startsWith('saq-') && t.id !== 'tfng-intro').map(t => (
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
          
          {!isTFNG && !isSummary && !isSAQ && !isIntroMode && (
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
        
        {!currentTest && (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h2 className="text-xl font-semibold mb-2">No Test Selected</h2>
                <p className="max-w-md text-center">Please select a test from the <strong className="text-gray-700">Menu</strong> in the top-left corner to begin your simulation.</p>
            </div>
        )}

        {currentTest && !isTestStarted && (
            <div className="absolute inset-0 z-30 bg-gray-100/95 flex items-center justify-center p-4 backdrop-blur-sm">
                 <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full text-center border border-gray-200">
                  <h1 className="text-3xl font-bold mb-2 text-blue-900">IELTS Academic Reading Simulation</h1>
                  <h2 className="text-xl text-gray-600 mb-6">{currentTest.title}</h2>
                  
                  <div className="bg-blue-50 p-6 rounded-md mb-8 text-left border border-blue-100">
                      <h2 className="font-bold text-blue-800 mb-3">Instructions:</h2>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {isIntroMode ? (
                              <>
                                <li><strong>Phase 1:</strong> Understanding the Logic.</li>
                                <li><strong>Phase 2:</strong> Interactive Examples ({INTRO_QUESTIONS.length} Questions).</li>
                                <li><strong>Phase 3:</strong> Why the answer is what it is.</li>
                              </>
                          ) : isDrillMode ? (
                              <>
                                <li><strong>Phase 1:</strong> Pre-test Vocabulary (3 words).</li>
                                <li><strong>Phase 2:</strong> The Drill (Passage & Questions).</li>
                                <li><strong>Phase 3:</strong> Detailed Solution Analysis.</li>
                              </>
                          ) : isTFNG ? (
                              <li>These are rapid-fire True/False/Not Given drills.</li>
                          ) : isSummary ? (
                              <li>These are rapid-fire Summary Completion drills.</li>
                          ) : isSAQ ? (
                              <li>These are rapid-fire Short Answer drills.</li>
                          ) : (
                              <li>The test duration is <strong>60 minutes</strong>.</li>
                          )}
                          <li>There are <strong>{passages.length} Passages</strong> in this test.</li>
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

        {showHelp && (
            <div className="absolute inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
                <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
                    <h3 className="text-xl font-bold mb-4">Help</h3>
                    <p className="mb-4">Click on the question numbers at the bottom to navigate. Review questions by checking the 'Review' box.</p>
                    <button onClick={() => setShowHelp(false)} className="bg-blue-600 text-white px-4 py-2 rounded">Close</button>
                </div>
            </div>
        )}
        
        {isIntroMode && isTestStarted && renderIntroContent()}

        {isDrillMode && isTestStarted && drillStep !== 3 && renderDrillContent()}

        {currentTest && activePassage && (!isDrillMode || (isDrillMode && drillStep === 3)) && !isIntroMode && (
        <>
            <section className="w-1/2 flex flex-col border-r-4 border-gray-300 bg-white">
            {passages.length > 1 && (
                <div className="bg-gray-100 border-b border-gray-300 flex overflow-x-auto shrink-0">
                    {passages.map((passage, index) => (
                    <button
                        key={passage.id}
                        onClick={() => {
                            setActivePassageId(passage.id);
                            setFocusedQuestionId(null);
                            setContentLang('EN'); 
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
            
            <div className={`flex-1 overflow-y-auto p-8 reading-text ${getTextSizeClass()}`}>
                <div className="flex justify-between items-start border-b pb-4 mb-6">
                    <h2 className="text-2xl font-bold text-black">{activePassage.title}</h2>
                    
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
         {(!isDrillMode || (isDrillMode && drillStep === 3)) && !isIntroMode ? (
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
         ) : (
             <div className="flex-1 text-gray-400 text-sm italic">
                 {isIntroMode ? `Strategy Training: Question ${Math.min(INTRO_QUESTIONS.length, Math.floor((drillStep - 2) / 2) + 1)} / ${INTRO_QUESTIONS.length}` : (drillStep < 3 ? 'Phase 1: Vocabulary Practice' : 'Phase 3: Solutions')}
             </div>
         )}
         
         <div className="flex items-center space-x-4 shrink-0 border-l pl-6 border-gray-200">
             {(!isDrillMode || (isDrillMode && drillStep === 3)) && !isIntroMode && (
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
             )}
             
             <button 
                onClick={handleBack}
                disabled={(activePassageIndex === 0 && !isDrillMode && !isIntroMode) || (isIntroMode && drillStep === 0) || (isDrillMode && drillStep === 0)}
                className={`flex items-center px-5 py-2.5 font-bold rounded-lg transition-colors ${((activePassageIndex === 0 && !isDrillMode && !isIntroMode) || (isIntroMode && drillStep === 0) || (isDrillMode && drillStep === 0)) ? 'bg-gray-100 text-gray-300' : 'bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'}`}
             >
               <span className="mr-1">←</span> Back
             </button>
             
             <button 
                onClick={handleNext}
                disabled={!isDrillMode && !isIntroMode && activePassageIndex === passages.length - 1}
                className={`flex items-center px-5 py-2.5 font-bold rounded-lg transition-colors shadow-sm ${(!isDrillMode && !isIntroMode && activePassageIndex === passages.length - 1) ? 'bg-gray-100 text-gray-300' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
             >
               {isIntroMode ? (drillStep === (2 + INTRO_QUESTIONS.length * 2) - 1 ? 'Finish' : 'Next') : (isDrillMode ? (drillStep === 3 ? 'Check Answers' : drillStep === (3 + (activeDrillData?.solutions.length || 0)) ? 'Finish' : 'Next') : 'Next')} 
               <span className="ml-1">→</span>
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
