export type SubjectId = 
  | 'portugues' 
  | 'matematica' 
  | 'processos_adm' 
  | 'financas_contab' 
  | 'logistica' 
  | 'informatica'
  | 'completo';

export interface QuestionOption {
  letter: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface Question {
  id: string;
  number: number;
  subjectId: SubjectId;
  subjectName: string;
  topic: string;
  examSource: string; // ex: "Cesgranrio - Transpetro 2023.2" ou "Cesgranrio - Transpetro 2018.1"
  contextTextTitle?: string;
  contextText?: string;
  questionText: string;
  tableOrData?: string;
  imageUrl?: string;
  options: QuestionOption[];
  correctOption: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
}

export interface SubjectInfo {
  id: SubjectId;
  title: string;
  totalQuestions: number;
  timeMinutes: number;
  description: string;
  topics: string[];
  badgeColor: string;
}

export interface ExamSessionState {
  subjectId: SubjectId;
  answers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>;
  flagged: Record<string, boolean>;
  startTime: number;
  durationSeconds: number;
  timeRemainingSeconds: number;
  isCompleted: boolean;
  score?: number;
}
