
export enum QuestionType {
  INPUT = 'INPUT',
  RADIO = 'RADIO',
  DROPDOWN = 'DROPDOWN',
}

export interface Question {
  id: number;
  label?: string; // e.g., "1" or "24"
  questionText?: string; // The text content of the question (e.g. "What is the writer suggesting...?")
  type: QuestionType;
  options?: string[]; // For dropdowns or radio
  correctAnswer: string;
}

export interface TableCell {
  text?: string;
  questionId?: number; // If embedded question
  colSpan?: number;
  rowSpan?: number;
  bulletPoints?: boolean; // If text should be rendered as a list
}

export interface TableRow {
  cells: TableCell[];
}

export interface TableData {
  headers: string[];
  rows: TableRow[];
}

export interface QuestionGroup {
  id: string;
  instruction: string;
  questions: Question[];
  renderType: 'TABLE' | 'LIST' | 'MATCHING_HEADINGS' | 'SUMMARY' | 'MATCHING_PEOPLE';
  tableData?: TableData; // Specific data for table rendering
}

export interface Passage {
  id: number;
  title: string;
  content: string[]; // Array of paragraphs
  contentRU?: string[]; // Russian translation
  contentUZ?: string[]; // Uzbek translation
  questionGroups: QuestionGroup[];
}

export interface Test {
  id: string;
  title: string;
  passages: Passage[];
}

export interface UserAnswers {
  [key: number]: string;
}

// --- New Vocabulary Types ---

export interface VocabItem {
  id: number;
  word: string;
  ipa: string;
  form: string; // noun, verb, adj, etc.
  definition: string;
  example: string;
  translationRU: string;
  translationUZ: string;
  quizQuestion: string;
  quizOptions: string[];
  quizCorrectIndex: number; // 0-3
}