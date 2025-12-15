
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TESTS, VOCAB_LIST, VOCAB_LIST_2, VOCAB_LIST_3, INTRO_QUESTIONS } from './constants';
import { QuestionGroup, Question, QuestionType, UserAnswers, TableData, VocabItem, IntroQuestion } from './types';

const TOTAL_TIME_SECONDS = 60 * 60; // 60 minutes

// --- Localization Data ---
const UI_TEXT = {
  EN: {
    menu: "Menu",
    vocabStudio: "Vocab Studio",
    skillDrills: "Skill Drills",
    summaryCompletion: "Summary Completion",
    shortAnswer: "Short Answer Drills",
    cambridgeTests: "Cambridge Tests",
    current: "Current",
    passage: "Passage",
    candidate: "Candidate",
    settings: "Settings",
    help: "Help",
    hide: "Hide",
    noTest: "No Test Selected",
    selectTestMsg: "Please select a test from the Menu in the top-left corner to begin your simulation.",
    startTest: "Start Test",
    instructions: "Instructions",
    phase1: "Phase 1",
    phase2: "Phase 2",
    phase3: "Phase 3",
    questions: "Questions",
    review: "Review",
    back: "Back",
    next: "Next",
    finish: "Finish",
    checkAnswers: "Check Answers",
    displaySettings: "Display Settings",
    lineSpacing: "Line Spacing",
    compact: "Compact",
    normal: "Normal",
    loose: "Loose",
    indentation: "Paragraph Indentation",
    done: "Done",
    close: "Close",
    correct: "Correct!",
    incorrect: "Incorrect",
    correctAnswer: "Correct Answer",
    yourAnswer: "Your Answer",
    explanation: "Explanation",
    textSays: "Text says:",
    statementSays: "Statement says:",
    word: "WORD",
    of: "OF",
    russian: "Russian",
    uzbek: "Uzbek",
    size: "Size",
    introTitle: "TRUE / FALSE / NOT GIVEN",
    introSubtitle: "The Logic Behind the Confusion",
    startLesson: "Start Lesson",
    goldenRules: "The Golden Rules",
    trueDesc: "The statement <strong>agrees</strong> with the information in the passage.",
    falseDesc: "The statement <strong>contradicts</strong> the information in the passage.",
    ngDesc: "There is <strong>no information</strong> on this in the passage.",
    matchesMeaning: "Matches meaning",
    oppositeMeaning: "Opposite meaning",
    missingInfo: "Missing info",
    startPractice: "Start Practice Questions",
    question: "Question",
    readingExcerpt: "Reading Passage Excerpt",
    questionStatement: "Question Statement",
    vocabPractice: "Vocabulary Practice",
    solutions: "Solutions",
    strategyDrill: "Strategy Drill",
    selectTestNav: "Select a test to enable navigation"
  },
  RU: {
    menu: "Меню",
    vocabStudio: "Студия Слов",
    skillDrills: "Навыки",
    summaryCompletion: "Заполнение Summary",
    shortAnswer: "Краткие Ответы",
    cambridgeTests: "Тесты Cambridge",
    current: "Текущий",
    passage: "Текст",
    candidate: "Кандидат",
    settings: "Настройки",
    help: "Помощь",
    hide: "Скрыть",
    noTest: "Тест не выбран",
    selectTestMsg: "Пожалуйста, выберите тест в Меню (слева сверху), чтобы начать симуляцию.",
    startTest: "Начать тест",
    instructions: "Инструкции",
    phase1: "Этап 1",
    phase2: "Этап 2",
    phase3: "Этап 3",
    questions: "Вопросы",
    review: "Обзор",
    back: "Назад",
    next: "Далее",
    finish: "Завершить",
    checkAnswers: "Проверить",
    displaySettings: "Настройки экрана",
    lineSpacing: "Межстрочный интервал",
    compact: "Компактный",
    normal: "Обычный",
    loose: "Широкий",
    indentation: "Отступ абзаца",
    done: "Готово",
    close: "Закрыть",
    correct: "Верно!",
    incorrect: "Неверно",
    correctAnswer: "Правильный ответ",
    yourAnswer: "Ваш ответ",
    explanation: "Пояснение",
    textSays: "В тексте:",
    statementSays: "Утверждение:",
    word: "СЛОВО",
    of: "ИЗ",
    russian: "Русский",
    uzbek: "Узбекский",
    size: "Размер",
    introTitle: "TRUE / FALSE / NOT GIVEN",
    introSubtitle: "Логика, стоящая за путаницей",
    startLesson: "Начать урок",
    goldenRules: "Золотые Правила",
    trueDesc: "Утверждение <strong>согласуется</strong> с информацией в тексте.",
    falseDesc: "Утверждение <strong>противоречит</strong> информации в тексте.",
    ngDesc: "В тексте <strong>нет информации</strong> об этом.",
    matchesMeaning: "Совпадает по смыслу",
    oppositeMeaning: "Противоположный смысл",
    missingInfo: "Отсутствует информация",
    startPractice: "Начать практику",
    question: "Вопрос",
    readingExcerpt: "Отрывок текста",
    questionStatement: "Утверждение вопроса",
    vocabPractice: "Практика слов",
    solutions: "Решения",
    strategyDrill: "Тренировка Стратегии",
    selectTestNav: "Выберите тест для навигации"
  },
  UZ: {
    menu: "Menyu",
    vocabStudio: "So'z Studiyasi",
    skillDrills: "Ko'nikmalar",
    summaryCompletion: "Xulosa To'ldirish",
    shortAnswer: "Qisqa Javoblar",
    cambridgeTests: "Cambridge Testlari",
    current: "Joriy",
    passage: "Matn",
    candidate: "Nomzod",
    settings: "Sozlamalar",
    help: "Yordam",
    hide: "Yashirish",
    noTest: "Test Tanlanmagan",
    selectTestMsg: "Simulyatsiyani boshlash uchun chap yuqori burchakdagi Menyudan testni tanlang.",
    startTest: "Testni Boshlash",
    instructions: "Ko'rsatmalar",
    phase1: "1-bosqich",
    phase2: "2-bosqich",
    phase3: "3-bosqich",
    questions: "Savollar",
    review: "Ko'rib chiqish",
    back: "Orqaga",
    next: "Keyingi",
    finish: "Tugatish",
    checkAnswers: "Tekshirish",
    displaySettings: "Ekran Sozlamalari",
    lineSpacing: "Qator Oralig'i",
    compact: "Zich",
    normal: "Normal",
    loose: "Keng",
    indentation: "Xatboshi",
    done: "Tayyor",
    close: "Yopish",
    correct: "To'g'ri!",
    incorrect: "Noto'g'ri",
    correctAnswer: "To'g'ri Javob",
    yourAnswer: "Sizning Javobingiz",
    explanation: "Izoh",
    textSays: "Matnda:",
    statementSays: "Jumlada:",
    word: "SO'Z",
    of: "DAN",
    russian: "Ruscha",
    uzbek: "O'zbekcha",
    size: "Hajm",
    introTitle: "TRUE / FALSE / NOT GIVEN",
    introSubtitle: "Chalkashlik ortidagi mantiq",
    startLesson: "Darsni Boshlash",
    goldenRules: "Oltin Qoidalar",
    trueDesc: "Jumla matndagi ma'lumotga <strong>mos keladi</strong>.",
    falseDesc: "Jumla matndagi ma'lumotga <strong>qarama-qarshi</strong>.",
    ngDesc: "Matnda bu haqda <strong>ma'lumot yo'q</strong>.",
    matchesMeaning: "Ma'no mos keladi",
    oppositeMeaning: "Qarama-qarshi ma'no",
    missingInfo: "Ma'lumot yo'q",
    startPractice: "Mashqlarni Boshlash",
    question: "Savol",
    readingExcerpt: "Matndan parcha",
    questionStatement: "Savol jumlasi",
    vocabPractice: "So'z boyligi",
    solutions: "Yechimlar",
    strategyDrill: "Strategiya Mashqi",
    selectTestNav: "Navigatsiya uchun testni tanlang"
  }
};

type Lang = 'EN' | 'RU' | 'UZ';

// --- Drill Specific Content Data ---
const DRILL_SCENARIOS: { [key: string]: { vocab: any[], solutions: any[] } } = {
  'tfng-1': {
    vocab: [
      { word: "Unprecedented", definition: "Never done or known before.", ru: "беспрецедентный", uz: "misli ko'rilmagan" },
      { word: "Emanate", definition: "Issue or spread out from a source.", ru: "исходить / излучаться", uz: "tarqalmoq / chiqmoq" },
      { word: "Anomaly", definition: "Something that deviates from what is standard, normal, or expected.", ru: "аномалия", uz: "anomaliya" }
    ],
    solutions: [
      { 
          qId: 1, 
          question: "The Parker Solar Probe is the first spacecraft to enter the Sun's outer corona.", 
          questionRU: "Солнечный зонд Паркер — первый космический аппарат, вошедший во внешнюю корону Солнца.",
          questionUZ: "Parker Quyosh Zondi Quyoshning tashqi tojiga kirgan birinchi kosmik kemadir.",
          correct: "NOT GIVEN", 
          explanation: "The text says the probe provided \"unprecedented insights\" and observed things \"for the first time\". However, it does not explicitly state that it was the very first spacecraft to ever enter the outer corona. Information about other spacecraft is missing.",
          explanationRU: "В тексте говорится, что зонд предоставил «беспрецедентные данные» и наблюдал вещи «впервые». Однако прямо не утверждается, что это был самый первый космический аппарат, когда-либо входивший во внешнюю корону. Информация о других космических аппаратах отсутствует.",
          explanationUZ: "Matnda aytilishicha, zond «misli ko'rilmagan ma'lumotlarni» taqdim etgan va narsalarni «birinchi marta» kuzatgan. Biroq, bu tashqi tojga kirgan eng birinchi kosmik kema ekanligi aniq aytilmagan. Boshqa kosmik kemalar haqida ma'lumot yo'q."
      },
      { 
          qId: 2, 
          question: "Scientists used to think that 'switchbacks' were uncommon events.", 
          questionRU: "Ученые раньше думали, что «обратные переключения» были редкими явлениями.",
          questionUZ: "Olimlar avvalroq «switchbacks» kam uchraydigan hodisalar deb o'ylashgan.",
          correct: "TRUE", 
          explanation: "The text states: \"Previously, astronomers believed these reversals... were rare anomalies\". The word \"rare\" corresponds directly to \"uncommon\", so the statement agrees with the text.",
          explanationRU: "В тексте сказано: «Ранее астрономы считали, что эти развороты... были редкими аномалиями». Слово «редкий» (rare) прямо соответствует слову «необычный» (uncommon), поэтому утверждение согласуется с текстом.",
          explanationUZ: "Matnda aytilishicha: «Avvalroq astronomlar ushbu teskari o'zgarishlar... kam uchraydigan anomaliyalar deb hisoblashgan». «Kam uchraydigan» (rare) so'zi «g'ayrioddiy» (uncommon) so'ziga to'g'ridan-to'g'ri mos keladi, shuning uchun bayonot matnga mos keladi."
      },
      { 
          qId: 3, 
          question: "The recent findings definitely prove the cause of the temperature difference between the Sun's surface and its atmosphere.", 
          questionRU: "Недавние открытия определенно доказывают причину разницы температур между поверхностью Солнца и его атмосферой.",
          questionUZ: "So'nggi topilmalar Quyosh yuzasi va uning atmosferasi o'rtasidagi harorat farqining sababini aniq isbotlaydi.",
          correct: "FALSE", 
          explanation: "The text states that the findings are \"potentially solving\" the mystery. The word \"potentially\" contradicts the idea of \"definitely prove\".",
          explanationRU: "В тексте говорится, что открытия «потенциально решают» загадку. Слово «потенциально» противоречит идее «определенно доказывают».",
          explanationUZ: "Matnda aytilishicha, topilmalar sirni «potentsial hal qilmoqda». «Potentsial» so'zi «aniq isbotlash» g'oyasiga ziddir."
      }
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
};

interface QuestionGroupViewProps {
  group: QuestionGroup;
  answers: UserAnswers;
  onAnswerChange: (id: number, val: string) => void;
  onFocus: (id: number) => void;
  activeQuestionId: number | null;
  lang: Lang;
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

const QuestionGroupView: React.FC<QuestionGroupViewProps> = ({ group, answers, onAnswerChange, onFocus, activeQuestionId, lang }) => {
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
          className={`border rounded p-1 ml-2 text-sm font-bold max-w-[120px] md:max-w-none ${isFocused ? 'ring-2 ring-blue-500 border-blue-500 bg-blue-50' : 'border-gray-300'}`}
        >
           <option value="">...</option>
           {q.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      );
    }
    
    // Fallback/Default Input for Table view
    return (
      <input
        type="text"
        id={`input-q-${q.id}`}
        value={value}
        onChange={(e) => onAnswerChange(q.id, e.target.value)}
        onFocus={() => onFocus(q.id)}
        className={`border-b-2 bg-transparent px-2 py-0.5 mx-1 w-24 md:w-32 font-bold text-center transition-colors outline-none ${isFocused ? 'border-blue-600 bg-blue-50 text-blue-900' : 'border-gray-400 text-gray-700 hover:border-gray-600'}`}
        autoComplete="off"
      />
    );
  };

  const getQuestionText = (q: Question) => {
      if (lang === 'RU' && q.questionTextRU) return q.questionTextRU;
      if (lang === 'UZ' && q.questionTextUZ) return q.questionTextUZ;
      return q.questionText;
  }

  const getInstruction = () => {
      if (lang === 'RU' && group.instructionRU) return group.instructionRU;
      if (lang === 'UZ' && group.instructionUZ) return group.instructionUZ;
      return group.instruction;
  }

  if (group.renderType === 'TABLE' && group.tableData) {
      return (
          <div className="mb-8">
              <div className="bg-gray-100 p-4 rounded-t-lg border border-gray-200">
                  <h3 className="font-bold text-gray-700" dangerouslySetInnerHTML={{__html: getInstruction() || ''}}></h3>
              </div>
              <div className="overflow-x-auto border border-t-0 border-gray-200 rounded-b-lg scrollbar-hide md:scrollbar-default">
                  <table className="w-full text-sm text-left min-w-[600px] md:min-w-0">
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
          <h3 className="font-bold text-gray-700" dangerouslySetInnerHTML={{__html: getInstruction() || ''}}></h3>
       </div>
       {group.questions.map(q => {
           const qText = getQuestionText(q);
           const isFocused = activeQuestionId === q.id;
           return (
           <div key={q.id} id={`question-${q.id}`} className={`p-4 rounded-lg border transition-all ${isFocused ? 'bg-blue-50 border-blue-300 shadow-md' : 'bg-white border-gray-200'}`}>
               <div className="flex items-start">
                   <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold text-sm mr-4 shrink-0">
                       {q.label}
                   </span>
                   <div className="flex-1 min-w-0">
                       {qText && <p className="mb-3 text-gray-800 font-medium break-words">{qText}</p>}
                       {q.type === QuestionType.RADIO && (
                           <div className="space-y-2 mt-2">
                               {q.options?.map((opt) => {
                                   const isSelected = answers[q.id] === opt;
                                   return (
                                       <label 
                                         key={opt} 
                                         className={`flex items-center space-x-3 cursor-pointer p-3 rounded-lg border transition-all ${
                                             isSelected 
                                             ? 'bg-blue-50 border-blue-500 shadow-sm' 
                                             : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                                         }`}
                                       >
                                           <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-blue-600' : 'border-gray-400'}`}>
                                               {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                                           </div>
                                           <input 
                                             type="radio" 
                                             name={`q-${q.id}`} 
                                             value={opt}
                                             checked={isSelected}
                                             onChange={() => onAnswerChange(q.id, opt)}
                                             onFocus={() => onFocus(q.id)}
                                             className="sr-only"
                                           />
                                           <span className={`font-medium ${isSelected ? 'text-blue-900' : 'text-gray-700'}`}>{opt}</span>
                                       </label>
                                   );
                               })}
                           </div>
                       )}
                       {q.type === QuestionType.DROPDOWN && (
                           <div className="mt-2">
                               <select
                                  value={answers[q.id] || ''}
                                  onChange={(e) => onAnswerChange(q.id, e.target.value)}
                                  onFocus={() => onFocus(q.id)}
                                  className={`block w-full max-w-xs p-2.5 bg-white border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ${isFocused ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-300'}`}
                               >
                                   <option value="">Select...</option>
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
                             placeholder="Type answer..."
                             className={`mt-2 bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 max-w-sm ${isFocused ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'}`}
                           />
                       )}
                   </div>
               </div>
           </div>
       )})}
    </div>
  );
};

const VocabularyStudio = ({ data, title, onBack, lang }: { data: VocabItem[], title: string, onBack: () => void, lang: Lang }) => {
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    
    const item = data[index];
    const t = UI_TEXT[lang];
    
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
            <header className="h-16 flex items-center justify-between px-4 md:px-6 border-b border-gray-800">
                <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    {t.back}
                </button>
                <h1 className="text-base md:text-xl font-bold truncate px-2">{title}</h1>
                <div className="w-10 md:w-20"></div>
            </header>
            <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6">
                <div className="relative w-full max-w-2xl aspect-square md:aspect-video md:h-96 perspective-1000">
                    <div 
                        className={`relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${flipped ? 'rotate-y-180' : ''}`}
                        onClick={() => setFlipped(!flipped)}
                    >
                         {/* Front */}
                         <div className="absolute w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl flex flex-col items-center justify-center backface-hidden p-6 md:p-10">
                             <h2 className="text-4xl md:text-6xl font-black mb-4 text-center break-words">{item.word}</h2>
                             <p className="text-xl md:text-2xl text-blue-200 font-serif italic">{item.ipa}</p>
                             <span className="mt-8 px-4 py-1 bg-white/20 rounded-full text-sm font-bold uppercase tracking-wider">{item.form}</span>
                             <p className="absolute bottom-8 text-sm text-blue-300 animate-bounce">Tap to flip</p>
                         </div>
                         
                         {/* Back */}
                         <div className="absolute w-full h-full bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center backface-hidden rotate-y-180 p-6 md:p-10 text-gray-800">
                             <p className="text-lg md:text-xl text-center mb-6 leading-relaxed font-medium">{item.definition}</p>
                             <div className="w-full h-px bg-gray-200 my-4"></div>
                             <p className="text-gray-500 italic text-center">"{item.example}"</p>
                             <div className="mt-8 grid grid-cols-2 gap-8 w-full">
                                 <div className="text-center">
                                     <span className="block text-xs font-bold text-gray-400 uppercase">{t.russian}</span>
                                     <span className="text-lg font-bold text-blue-600">{item.translationRU}</span>
                                 </div>
                                 <div className="text-center">
                                     <span className="block text-xs font-bold text-gray-400 uppercase">{t.uzbek}</span>
                                     <span className="text-lg font-bold text-green-600">{item.translationUZ}</span>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
                
                <div className="flex items-center space-x-8 mt-8 md:mt-12">
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
  const [contentLang, setContentLang] = useState<Lang>('EN');

  const [vocabMode, setVocabMode] = useState<'none' | 'p1' | 'p2' | 'p3'>('none');

  // --- Responsive Engine ---
  const [windowDims, setWindowDims] = useState({ 
      width: typeof window !== 'undefined' ? window.innerWidth : 1200, 
      height: typeof window !== 'undefined' ? window.innerHeight : 800 
  });
  
  useEffect(() => {
    const handler = () => {
        setWindowDims({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const isMobileLayout = windowDims.width < 1024;
  const [mobileTab, setMobileTab] = useState<'passage' | 'questions'>('passage');

  const currentTest = TESTS.find(t => t.id === currentTestId) || null;
  const passages = currentTest ? currentTest.passages : [];
  const isTFNG = currentTestId?.startsWith('tfng-');
  const isSummary = currentTestId?.startsWith('summary-');
  const isSAQ = currentTestId?.startsWith('saq-');
  const isIntroMode = currentTestId === 'tfng-intro';
  
  const activeDrillData = currentTestId ? DRILL_SCENARIOS[currentTestId] : null;
  const isDrillMode = !!activeDrillData;

  const t = (key: keyof typeof UI_TEXT['EN']) => {
    return UI_TEXT[contentLang][key] || UI_TEXT['EN'][key];
  };

  useEffect(() => {
    if (currentTest) {
      setActivePassageId(currentTest.passages[0].id);
      setAnswers({});
      setReviewStatus({});
      setFocusedQuestionId(null);
      setIsTestStarted(false);
      setIsTimerRunning(false);
      setTimeLeft(TOTAL_TIME_SECONDS);
      // contentLang kept from user selection
      setDrillStep(0);
      setIntroAnswer(null);
      setMobileTab('passage');
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
      // On mobile, reset to passage view when changing passage? User preference.
      // Keeping current tab is usually better UX.
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
    if (isMobileLayout && mobileTab !== 'questions') {
        setMobileTab('questions');
        // Small delay to allow render
        setTimeout(() => performScroll(qId), 100);
    } else {
        performScroll(qId);
    }
  };

  const performScroll = (qId: number) => {
    const element = document.getElementById(`question-${qId}`);
    const target = element || document.getElementById(`input-q-${qId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (target.tagName === 'INPUT' || target.tagName === 'SELECT') {
          (target as HTMLElement).focus();
      }
    }
  }

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

      return <VocabularyStudio onBack={() => setVocabMode('none')} data={data} title={title} lang={contentLang} />;
  }

  const renderIntroContent = () => {
      // Step 0: Title
      if (drillStep === 0) {
          return (
              <div className="flex-1 flex flex-col items-center justify-center bg-gray-900 text-white p-4 md:p-8">
                  <div className="max-w-2xl text-center space-y-6 animate-in fade-in zoom-in duration-500">
                      <div className="inline-block p-4 rounded-full bg-blue-600 mb-4 shadow-lg shadow-blue-500/50">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                      </div>
                      <h1 className="text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                          {t('introTitle')}
                      </h1>
                      <p className="text-lg md:text-xl text-gray-400 font-light">
                          {t('introSubtitle')}
                      </p>
                      <div className="pt-12">
                          <button onClick={handleNext} className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:scale-105 transition-transform">
                              {t('startLesson')}
                          </button>
                      </div>
                  </div>
              </div>
          )
      }
      
      // Step 1: Theory
      if (drillStep === 1) {
          return (
              <div className="flex-1 flex flex-col items-center bg-gray-50 p-4 md:p-8 overflow-y-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12 text-center">{t('goldenRules')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl w-full">
                      <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl border-t-4 border-green-500 hover:-translate-y-2 transition-transform">
                          <div className="text-green-600 font-black text-2xl mb-4">TRUE</div>
                          <p className="text-gray-600 leading-relaxed">
                              <span dangerouslySetInnerHTML={{__html: t('trueDesc')}}></span>
                              <br/><br/>
                              <span className="text-sm bg-green-50 text-green-700 px-2 py-1 rounded">{t('matchesMeaning')}</span>
                          </p>
                      </div>
                      <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl border-t-4 border-red-500 hover:-translate-y-2 transition-transform">
                          <div className="text-red-600 font-black text-2xl mb-4">FALSE</div>
                          <p className="text-gray-600 leading-relaxed">
                              <span dangerouslySetInnerHTML={{__html: t('falseDesc')}}></span>
                              <br/><br/>
                              <span className="text-sm bg-red-50 text-red-700 px-2 py-1 rounded">{t('oppositeMeaning')}</span>
                          </p>
                      </div>
                      <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl border-t-4 border-gray-500 hover:-translate-y-2 transition-transform">
                          <div className="text-gray-600 font-black text-2xl mb-4">NOT GIVEN</div>
                          <p className="text-gray-600 leading-relaxed">
                              <span dangerouslySetInnerHTML={{__html: t('ngDesc')}}></span>
                              <br/><br/>
                              <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">{t('missingInfo')}</span>
                          </p>
                      </div>
                  </div>
                  <div className="mt-8 md:mt-12 text-center pb-8">
                    <button onClick={handleNext} className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">{t('startPractice')}</button>
                  </div>
              </div>
          )
      }

      const questionIndex = Math.floor((drillStep - 2) / 2);
      const isResult = (drillStep - 2) % 2 !== 0;
      const question = INTRO_QUESTIONS[questionIndex];

      if (!question) return null;

      const qText = (contentLang === 'RU' && question.textRU) ? question.textRU : (contentLang === 'UZ' && question.textUZ) ? question.textUZ : question.text;
      const qStatement = (contentLang === 'RU' && question.statementRU) ? question.statementRU : (contentLang === 'UZ' && question.statementUZ) ? question.statementUZ : question.statement;
      const qExplanation = (contentLang === 'RU' && question.explanationRU) ? question.explanationRU : (contentLang === 'UZ' && question.explanationUZ) ? question.explanationUZ : question.explanation;

      if (!isResult) {
          return (
              <div className="flex-1 flex flex-col items-center justify-center bg-white p-4 md:p-8 overflow-y-auto">
                   <div className="max-w-2xl w-full space-y-6 md:space-y-8 animate-in slide-in-from-right duration-300">
                       <div className="flex justify-between items-center text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                           <span>{t('question')} {question.id} {t('of')} {INTRO_QUESTIONS.length}</span>
                           <span>{t('strategyDrill')}</span>
                       </div>

                       <div className="space-y-2">
                           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('readingExcerpt')}</span>
                           <div className="p-4 md:p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600 text-base md:text-lg font-serif text-gray-800 leading-relaxed">
                               "{qText}"
                           </div>
                       </div>
                       
                       <div className="space-y-2">
                           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('questionStatement')}</span>
                           <div className="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200 text-base md:text-lg font-medium text-gray-900">
                               {qStatement}
                           </div>
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                           {['TRUE', 'FALSE', 'NOT GIVEN'].map(opt => (
                               <button
                                 key={opt}
                                 onClick={() => setIntroAnswer(opt)}
                                 className={`py-3 md:py-4 rounded-lg font-bold text-lg border-2 transition-all ${introAnswer === opt ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400'}`}
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
              <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-4 md:p-8 overflow-y-auto">
                  <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in duration-300 my-auto">
                      <div className={`p-6 md:p-8 text-center ${isCorrect ? 'bg-green-600' : 'bg-red-600'} text-white`}>
                          <h2 className="text-3xl md:text-4xl font-black mb-2">{isCorrect ? t('correct') : t('incorrect')}</h2>
                          <p className="text-white/90 text-lg">{t('correctAnswer')}: <strong>{question.answer}</strong>.</p>
                      </div>
                      <div className="p-6 md:p-8 space-y-6">
                           <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 p-4 bg-gray-50 rounded-lg">
                               <div className="shrink-0 flex-1 w-full">
                                   <div className="text-xs font-bold text-gray-400 uppercase">{t('textSays')}</div>
                                   <div className="font-serif text-gray-800">"{qText}"</div>
                               </div>
                               <div className="text-gray-300 text-xl md:text-2xl self-center hidden md:block">vs</div>
                               <div className="flex-1 w-full">
                                   <div className="text-xs font-bold text-gray-400 uppercase">{t('statementSays')}</div>
                                   <div className="font-serif text-gray-800">"{qStatement}"</div>
                               </div>
                           </div>
                           
                           <div className="prose text-gray-600 text-base md:text-lg leading-relaxed">
                               <p>
                                   <strong>{t('explanation')}:</strong> {qExplanation}
                               </p>
                           </div>

                           <button onClick={handleNext} className="w-full py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
                               {questionIndex < INTRO_QUESTIONS.length - 1 ? t('next') : t('finish')}
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
              <div className="flex-1 flex items-center justify-center bg-gray-900 p-4 md:p-8">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-12 max-w-lg w-full text-center animate-in fade-in zoom-in duration-300 relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                       <div className="mb-8">
                           <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 mb-4 tracking-wider">{t('word')} {drillStep + 1} {t('of')} 3</span>
                           <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-2">{vocab.word}</h2>
                           <p className="text-gray-500 italic text-lg border-b border-gray-100 pb-6">{vocab.definition}</p>
                       </div>
                       
                       <div className="space-y-4 text-left bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                           <div className="flex justify-between items-center">
                               <span className="font-bold text-gray-400 text-xs uppercase tracking-widest">{t('russian')}</span>
                               <span className="text-lg font-bold text-blue-700">{vocab.ru}</span>
                           </div>
                           <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                               <span className="font-bold text-gray-400 text-xs uppercase tracking-widest">{t('uzbek')}</span>
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
          
          const solQuestion = (contentLang === 'RU' && sol.questionRU) ? sol.questionRU : (contentLang === 'UZ' && sol.questionUZ) ? sol.questionUZ : sol.question;
          const solExplanation = (contentLang === 'RU' && sol.explanationRU) ? sol.explanationRU : (contentLang === 'UZ' && sol.explanationUZ) ? sol.explanationUZ : sol.explanation;

          return (
              <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
                  <div className="flex-1 overflow-y-auto p-4 md:p-8 flex items-center justify-center">
                    <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-in slide-in-from-right duration-300">
                        <div className={`p-4 md:p-6 border-b flex justify-between items-center ${isCorrect ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                            <h2 className="text-lg md:text-xl font-bold text-gray-800">{t('question')} {sol.qId} {t('explanation')}</h2>
                            <span className={`px-4 py-1.5 rounded-full font-bold text-xs md:text-sm ${isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                {isCorrect ? t('correct').toUpperCase() : t('incorrect').toUpperCase()}
                            </span>
                        </div>
                        
                        <div className="p-4 md:p-8 space-y-6 md:space-y-8">
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{t('question')}</h3>
                                <p className="text-xl md:text-2xl font-serif text-gray-900 leading-relaxed">"{sol.question}"</p>
                            </div>
                            
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">{t('yourAnswer')}</div>
                                    <div className={`text-xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>{userAnswer}</div>
                                </div>
                                <div className="flex-1 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                    <div className="text-xs text-blue-400 uppercase font-bold mb-1">{t('correctAnswer')}</div>
                                    <div className="text-xl font-bold text-blue-700">{sol.correct}</div>
                                </div>
                            </div>
                            
                            <div className="bg-yellow-50 p-4 md:p-6 rounded-xl border border-yellow-100">
                                <h3 className="flex items-center text-yellow-800 font-bold mb-3">
                                    {t('explanation')}
                                </h3>
                                <p className="text-gray-700 leading-7 text-base md:text-lg">
                                    {solExplanation}
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
      {/* Top Bar */}
      <header className="h-16 bg-[#1a1a1a] text-white flex items-center justify-between px-4 md:px-6 shadow-md z-30 shrink-0 relative">
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white transition-colors border border-transparent hover:border-gray-600 rounded"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="text-sm font-bold uppercase tracking-wider hidden md:inline">{t('menu')}</span>
              </button>
              
              {isMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 md:w-80 max-w-[90vw] bg-white rounded shadow-xl py-2 text-gray-900 z-50 border border-gray-200 animate-in fade-in slide-in-from-top-2 duration-150">
                       <div className="px-4 py-3 bg-indigo-50 border-b border-indigo-100 space-y-2 max-h-[70vh] md:max-h-[80vh] overflow-y-auto">
                           {/* Simplified Menu Logic Integration */}
                           <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase mt-2">{t('vocabStudio')}</div>
                           <button onClick={() => { setVocabMode('p1'); setIsMenuOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors flex items-center text-gray-700 hover:text-blue-600 group"><span className="w-2 h-2 rounded-full bg-blue-400 mr-3 group-hover:scale-125 transition-transform"></span>Tourism New Zealand</button>
                           <button onClick={() => { setVocabMode('p2'); setIsMenuOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors flex items-center text-gray-700 hover:text-blue-600 group"><span className="w-2 h-2 rounded-full bg-purple-400 mr-3 group-hover:scale-125 transition-transform"></span>The Science of Boredom</button>
                           <button onClick={() => { setVocabMode('p3'); setIsMenuOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors flex items-center text-gray-700 hover:text-blue-600 group"><span className="w-2 h-2 rounded-full bg-orange-400 mr-3 group-hover:scale-125 transition-transform"></span>Artificial Artists</button>

                           <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase mt-2">{t('skillDrills')}</div>
                           {TESTS.find(t => t.id === 'tfng-intro') && <button onClick={() => { setCurrentTestId('tfng-intro'); setIsMenuOpen(false); }} className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group mb-2"><span className="font-bold flex items-center text-sm truncate"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>Intro: Strategy</span></button>}
                           {TESTS.filter(t => t.id.startsWith('tfng-') && t.id !== 'tfng-intro').map(t => <button key={t.id} onClick={() => { setCurrentTestId(t.id); setIsMenuOpen(false); }} className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group mb-2 last:mb-0"><span className="font-bold flex items-center text-sm truncate"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{t.title}</span></button>)}
                           <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase mt-2">{t('summaryCompletion')}</div>
                           {TESTS.filter(t => t.id.startsWith('summary-')).map(t => <button key={t.id} onClick={() => { setCurrentTestId(t.id); setIsMenuOpen(false); }} className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group mb-2 last:mb-0"><span className="font-bold flex items-center text-sm truncate"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>{t.title}</span></button>)}
                           <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase mt-2">{t('shortAnswer')}</div>
                           {TESTS.filter(t => t.id.startsWith('saq-')).map(t => <button key={t.id} onClick={() => { setCurrentTestId(t.id); setIsMenuOpen(false); }} className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group mb-2 last:mb-0"><span className="font-bold flex items-center text-sm truncate"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>{t.title}</span></button>)}
                           
                           {currentTest && (
                             <>
                               <div className="px-4 py-2 text-sm font-bold text-gray-500 uppercase tracking-wider border-b bg-gray-50 mt-2">{t('current')}: {currentTest.title}</div>
                               {passages.length > 1 && (<div className="py-2">{currentTest.passages.map((p, idx) => (<button key={p.id} onClick={() => { setActivePassageId(p.id); setIsMenuOpen(false); }} className={`w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center ${activePassageId === p.id ? 'text-blue-700 font-bold bg-blue-50' : 'text-gray-700'}`}><span className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 text-xs flex items-center justify-center mr-3 font-bold">{idx + 1}</span>{t('passage')} {idx + 1}</button>))}</div>)}
                               <div className="border-t border-gray-100 my-1"></div>
                             </>
                           )}
                           <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase">{t('cambridgeTests')}</div>
                           {TESTS.filter(t => !t.id.startsWith('tfng-') && !t.id.startsWith('summary-') && !t.id.startsWith('saq-') && t.id !== 'tfng-intro').map(t => <button key={t.id} onClick={() => { setCurrentTestId(t.id); setIsMenuOpen(false); }} className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-100 transition-colors border-l-4 ${currentTestId === t.id ? 'border-blue-600 bg-blue-50 text-blue-800 font-semibold' : 'border-transparent text-gray-700'}`}>{t.title}</button>)}
                       </div>
                  </div>
              )}
          </div>
          
          <div className="overflow-hidden">
              <h1 className="text-base md:text-xl font-bold tracking-wide truncate">IELTS Reading</h1>
              <div className="text-xs text-gray-400 mt-0.5 truncate hidden md:block">{currentTest ? currentTest.title : t('noTest')}</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-6">
          {currentTest && <div className="text-sm text-gray-300 hidden lg:block">{t('candidate')}: <span className="text-white font-semibold">John Doe</span></div>}
          
          <div className="flex space-x-1">
             <button onClick={() => setContentLang('EN')} className={`px-2 py-1 text-xs font-bold rounded ${contentLang === 'EN' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'}`}>EN</button>
             <button onClick={() => setContentLang('RU')} className={`px-2 py-1 text-xs font-bold rounded ${contentLang === 'RU' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'}`}>RU</button>
             <button onClick={() => setContentLang('UZ')} className={`px-2 py-1 text-xs font-bold rounded ${contentLang === 'UZ' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'}`}>UZ</button>
          </div>

          {currentTest && !isTFNG && !isSummary && !isSAQ && !isIntroMode && (
            <div className="hidden md:flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                    <button onClick={restartTimer} title="Restart Timer" className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></button>
                    <button onClick={toggleTimer} title={isTimerRunning ? "Pause Timer" : "Resume Timer"} className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors">{isTimerRunning ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)}</button>
                </div>
                <div className="flex items-center space-x-2 text-yellow-400 bg-gray-800 px-3 py-1 rounded"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-xl font-mono font-bold">{formatTime(timeLeft)}</span></div>
            </div>
          )}

          <div className="flex space-x-1 md:space-x-2">
            <button onClick={() => setShowSettings(!showSettings)} className={`px-2 md:px-3 py-1.5 rounded text-sm font-medium transition-colors border border-gray-600 flex items-center space-x-1 ${showSettings ? 'bg-gray-600 text-white' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span className="hidden md:inline">{t('settings')}</span></button>
            <button onClick={() => setShowHelp(!showHelp)} className="px-2 md:px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded text-sm font-medium transition-colors border border-gray-600 hidden md:block">{t('help')}</button>
          </div>
        </div>
      </header>

      {/* Main Content Area - Adaptive Layout */}
      <main className="flex-1 flex overflow-hidden relative bg-[#f0f2f5]">
        
        {!currentTest && (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h2 className="text-xl font-semibold mb-2">{t('noTest')}</h2>
                <p className="max-w-md text-center">{t('selectTestMsg')}</p>
            </div>
        )}

        {currentTest && !isTestStarted && (
            <div className="absolute inset-0 z-30 bg-gray-100/95 flex items-center justify-center p-4 backdrop-blur-sm">
                 <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-2xl w-full text-center border border-gray-200">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2 text-blue-900">IELTS Simulator</h1>
                  <h2 className="text-lg md:text-xl text-gray-600 mb-6">{currentTest.title}</h2>
                  
                  <div className="bg-blue-50 p-4 md:p-6 rounded-md mb-8 text-left border border-blue-100">
                      <h2 className="font-bold text-blue-800 mb-3">{t('instructions')}:</h2>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                          {isIntroMode ? (
                              <>
                                <li><strong>{t('phase1')}:</strong> {t('introSubtitle')}.</li>
                                <li><strong>{t('phase2')}:</strong> {t('questions')} ({INTRO_QUESTIONS.length}).</li>
                                <li><strong>{t('phase3')}:</strong> {t('explanation')}.</li>
                              </>
                          ) : isDrillMode ? (
                              <>
                                <li><strong>{t('phase1')}:</strong> {t('vocabPractice')} (3 words).</li>
                                <li><strong>{t('phase2')}:</strong> {t('questions')} ({activeDrillData?.solutions.length}).</li>
                                <li><strong>{t('phase3')}:</strong> {t('solutions')}.</li>
                              </>
                          ) : isTFNG ? (
                              <li>Rapid-fire True/False/Not Given drills.</li>
                          ) : isSummary ? (
                              <li>Rapid-fire Summary Completion drills.</li>
                          ) : isSAQ ? (
                              <li>Rapid-fire Short Answer drills.</li>
                          ) : (
                              <li>Test duration: <strong>60 minutes</strong>.</li>
                          )}
                          <li>There are <strong>{passages.length} Passages</strong>.</li>
                          <li>Click <strong>{t('startTest')}</strong> to begin.</li>
                      </ul>
                  </div>
                  <button onClick={startTest} className="w-full md:w-auto px-8 py-3 bg-blue-700 text-white font-bold rounded shadow hover:bg-blue-800 transition-transform transform active:scale-95 text-lg">{t('startTest')}</button>
              </div>
            </div>
        )}

        {showSettings && (
            <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full text-gray-900 overflow-hidden animate-in fade-in zoom-in duration-200">
                     <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
                        <h3 className="text-lg font-bold text-gray-800">{t('displaySettings')}</h3>
                        <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-gray-700 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                     </div>
                     <div className="p-6 space-y-6">
                         <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">{t('lineSpacing')}</label>
                            <div className="flex bg-gray-100 p-1 rounded-md">
                                <button onClick={() => setLineSpacing('compact')} className={`flex-1 py-1.5 text-sm font-medium rounded transition-all ${lineSpacing === 'compact' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>{t('compact')}</button>
                                <button onClick={() => setLineSpacing('standard')} className={`flex-1 py-1.5 text-sm font-medium rounded transition-all ${lineSpacing === 'standard' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>{t('normal')}</button>
                                <button onClick={() => setLineSpacing('loose')} className={`flex-1 py-1.5 text-sm font-medium rounded transition-all ${lineSpacing === 'loose' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>{t('loose')}</button>
                            </div>
                         </div>
                         <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                            <label htmlFor="indent-toggle" className="text-sm font-bold text-gray-700 cursor-pointer">{t('indentation')}</label>
                            <button id="indent-toggle" onClick={() => setParagraphIndent(!paragraphIndent)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${paragraphIndent ? 'bg-blue-600' : 'bg-gray-200'}`}><span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${paragraphIndent ? 'translate-x-6' : 'translate-x-1'}`} /></button>
                         </div>
                     </div>
                     <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
                         <button onClick={() => setShowSettings(false)} className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors">{t('done')}</button>
                     </div>
                </div>
            </div>
        )}

        {showHelp && (
            <div className="absolute inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
                <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
                    <h3 className="text-xl font-bold mb-4">{t('help')}</h3>
                    <p className="mb-4">Click on the question numbers at the bottom to navigate. Review questions by checking the 'Review' box.</p>
                    <button onClick={() => setShowHelp(false)} className="bg-blue-600 text-white px-4 py-2 rounded">{t('close')}</button>
                </div>
            </div>
        )}
        
        {isIntroMode && isTestStarted && renderIntroContent()}

        {isDrillMode && isTestStarted && drillStep !== 3 && renderDrillContent()}

        {currentTest && activePassage && (!isDrillMode || (isDrillMode && drillStep === 3)) && !isIntroMode && (
         isMobileLayout ? (
             // --- Mobile/Tablet Tabbed View ---
             <div className="flex flex-col w-full h-full bg-white animate-in fade-in duration-300">
                 <div className="flex border-b border-gray-200 bg-white shrink-0 z-10">
                     <button 
                       onClick={() => setMobileTab('passage')} 
                       className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${mobileTab === 'passage' ? 'border-b-4 border-blue-600 text-blue-800 bg-blue-50' : 'text-gray-500 hover:bg-gray-50'}`}
                     >
                         {t('passage')}
                     </button>
                     <button 
                       onClick={() => setMobileTab('questions')} 
                       className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${mobileTab === 'questions' ? 'border-b-4 border-blue-600 text-blue-800 bg-blue-50' : 'text-gray-500 hover:bg-gray-50'}`}
                     >
                         {t('questions')}
                     </button>
                 </div>
                 
                 <div className="flex-1 overflow-hidden relative">
                    {/* Render Passage Tab */}
                    <div className={`absolute inset-0 w-full h-full overflow-y-auto p-4 transition-all duration-300 ${mobileTab === 'passage' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <div className={`reading-text ${getTextSizeClass()}`}>
                            {passages.length > 1 && (
                                <div className="mb-4 flex flex-wrap gap-2">
                                     {passages.map((p, index) => (
                                         <button key={p.id} onClick={() => { setActivePassageId(p.id); }} className={`px-3 py-1 text-xs font-bold rounded border ${activePassageId === p.id ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 text-gray-600 border-gray-300'}`}>{t('passage')} {index + 1}</button>
                                     ))}
                                </div>
                            )}
                            <h2 className="text-xl font-bold mb-4">{activePassage.title}</h2>
                            {getContent().map((p, i) => <p key={i} className={`mb-4 text-justify ${getLineSpacingClass()} ${paragraphIndent ? 'indent-6' : ''}`} dangerouslySetInnerHTML={{__html: p}} />)}
                        </div>
                    </div>
                    
                    {/* Render Questions Tab */}
                    <div className={`absolute inset-0 w-full h-full overflow-y-auto p-4 bg-[#f0f2f5] transition-all duration-300 ${mobileTab === 'questions' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        {activePassage.questionGroups.map((group) => (
                            <QuestionGroupView 
                                key={group.id} 
                                group={group} 
                                answers={answers} 
                                onAnswerChange={handleAnswerChange}
                                onFocus={(id) => setFocusedQuestionId(id)}
                                activeQuestionId={focusedQuestionId}
                                lang={contentLang}
                            />
                        ))}
                    </div>
                 </div>
             </div>
         ) : (
            // --- Desktop Split View ---
            <>
                <section className="w-1/2 flex flex-col border-r-4 border-gray-300 bg-white">
                {passages.length > 1 && (
                    <div className="bg-gray-100 border-b border-gray-300 flex overflow-x-auto shrink-0">
                        {passages.map((passage, index) => (
                        <button key={passage.id} onClick={() => { setActivePassageId(passage.id); setFocusedQuestionId(null); }} className={`px-6 py-3 text-sm font-bold transition-colors whitespace-nowrap ${activePassageId === passage.id ? 'bg-white text-blue-800 border-t-4 border-blue-800' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 border-t-4 border-transparent'}`}>{t('passage')} {index + 1}</button>
                        ))}
                    </div>
                )}
                
                <div className={`flex-1 overflow-y-auto p-8 reading-text ${getTextSizeClass()}`}>
                    <div className="flex justify-between items-start border-b pb-4 mb-6">
                        <h2 className="text-2xl font-bold text-black">{activePassage.title}</h2>
                    </div>
                    {getContent().map((paragraph, idx) => (
                    <p key={idx} className={`mb-4 text-justify text-gray-800 transition-all ${getLineSpacingClass()} ${paragraphIndent ? 'indent-10' : ''}`} dangerouslySetInnerHTML={{__html: paragraph}} />
                    ))}
                </div>
                </section>

                <section className="w-1/2 flex flex-col bg-[#f0f2f5]">
                <div className="bg-white border-b border-gray-300 p-2 flex justify-between items-center px-4 shrink-0">
                    <span className="text-sm font-bold text-gray-600">{t('questions')}</span>
                    <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500 mr-1">{t('size')}:</span>
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
                        lang={contentLang}
                    />
                    ))}
                </div>
                </section>
            </>
         )
        )}
      </main>

      {/* Footer Navigation - Responsive */}
      <footer className="h-auto md:h-20 bg-white border-t border-gray-300 flex flex-col md:flex-row items-center justify-between px-2 md:px-6 py-2 md:py-0 shrink-0 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-20">
         {currentTest ? (
         <>
         {(!isDrillMode || (isDrillMode && drillStep === 3)) && !isIntroMode ? (
             <div className="flex-1 w-full md:w-auto flex items-center overflow-hidden mb-2 md:mb-0 md:mr-6 order-2 md:order-1">
               <span className="text-sm font-bold text-gray-500 mr-2 md:mr-3 shrink-0 hidden md:block">{t('questions')}:</span>
               <div className="flex items-center space-x-2 overflow-x-auto py-3 px-1 w-full scrollbar-hide md:scrollbar-default" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
                       // Add delay for mobile tab switch if needed
                       scrollToQuestion(q.id);
                     }}
                     className={`
                        relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-xs md:text-sm font-bold rounded-md border transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500
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
                     {isReview && <div className="absolute -top-1.5 -right-1.5 w-3 h-3 md:w-3.5 md:h-3.5 bg-yellow-400 rounded-full border-2 border-white shadow-sm"></div>}
                   </button>
                 )})}
               </div>
             </div>
         ) : (
             <div className="flex-1 text-gray-400 text-xs md:text-sm italic text-center md:text-left order-2 md:order-1 mb-2 md:mb-0">
                 {isIntroMode ? `Strategy Training: Question ${Math.min(INTRO_QUESTIONS.length, Math.floor((drillStep - 2) / 2) + 1)} / ${INTRO_QUESTIONS.length}` : (drillStep < 3 ? `${t('phase1')}: ${t('vocabPractice')}` : `${t('phase3')}: ${t('solutions')}`)}
             </div>
         )}
         
         <div className="w-full md:w-auto flex items-center justify-between md:justify-end space-x-2 md:space-x-4 shrink-0 md:border-l md:pl-6 border-gray-200 order-1 md:order-2">
             {(!isDrillMode || (isDrillMode && drillStep === 3)) && !isIntroMode && (
                 <div className="flex items-center space-x-2 mr-2 bg-gray-50 px-2 md:px-3 py-1.5 md:py-2 rounded-lg border border-gray-200">
                     <input 
                        type="checkbox" 
                        id="review" 
                        className="w-4 h-4 accent-yellow-500 cursor-pointer" 
                        checked={focusedQuestionId !== null ? !!reviewStatus[focusedQuestionId] : false}
                        onChange={toggleReview}
                        disabled={focusedQuestionId === null}
                     />
                     <label htmlFor="review" className={`text-xs md:text-sm font-bold select-none ${focusedQuestionId !== null ? 'text-gray-800 cursor-pointer' : 'text-gray-400'}`}>{t('review')}</label>
                 </div>
             )}
             <div className="flex space-x-2">
                <button onClick={handleBack} disabled={(activePassageIndex === 0 && !isDrillMode && !isIntroMode) || (isIntroMode && drillStep === 0) || (isDrillMode && drillStep === 0)} className={`flex items-center px-3 md:px-5 py-2 md:py-2.5 font-bold rounded-lg transition-colors text-sm md:text-base ${((activePassageIndex === 0 && !isDrillMode && !isIntroMode) || (isIntroMode && drillStep === 0) || (isDrillMode && drillStep === 0)) ? 'bg-gray-100 text-gray-300' : 'bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'}`}><span className="mr-1">←</span> {t('back')}</button>
                <button onClick={handleNext} disabled={!isDrillMode && !isIntroMode && activePassageIndex === passages.length - 1} className={`flex items-center px-3 md:px-5 py-2 md:py-2.5 font-bold rounded-lg transition-colors shadow-sm text-sm md:text-base ${(!isDrillMode && !isIntroMode && activePassageIndex === passages.length - 1) ? 'bg-gray-100 text-gray-300' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>{isIntroMode ? (drillStep === (2 + INTRO_QUESTIONS.length * 2) - 1 ? t('finish') : t('next')) : (isDrillMode ? (drillStep === 3 ? t('checkAnswers') : drillStep === (3 + (activeDrillData?.solutions.length || 0)) ? t('finish') : t('next')) : t('next'))} <span className="ml-1">→</span></button>
             </div>
         </div>
         </>
         ) : (
            <div className="text-gray-400 text-sm flex-1 text-center">{t('selectTestNav')}</div>
         )}
      </footer>
    </div>
  );
}
