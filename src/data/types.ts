export interface Lesson {
  slug: string;
  title: string;
  description: string;
  content: string;
  codeExample: string;
  practiceCode: string;
  practiceTask: string;
  quiz: QuizQuestion[];
}

export interface Topic {
  slug: string;
  title: string;
  icon: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  lessons: Lesson[];
}

export interface QuizQuestion {
  question: string;
  code?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QAQuestion {
  id: number;
  question: string;
  answer: string;
}

export interface QuestionBankSection {
  description: string;
  questions: QAQuestion[];
}

export interface QuestionBank {
  [key: string]: QuestionBankSection;
}

export interface ProgressData {
  completedLessons: string[];
  quizScores: Record<string, number>;
  lastVisited: string | null;
}
