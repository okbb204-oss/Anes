export type Language = 'en' | 'fr' | 'ar';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type EducationLevel = 'Primary' | 'Secondary' | 'University';
export type WorkType = 'Manual' | 'Technical' | 'Creative';
export type ExperienceLevel = 'None' | 'Some' | 'Experienced';

export interface Craft {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  requiredTools: Record<Language, string[]>;
  requiredSkills: Record<Language, string[]>;
  jobOpportunities: Record<Language, string>;
  difficultyLevel: DifficultyLevel;
  learningDurationHours: number;
}

export interface QuestionOption {
  id: string;
  text: Record<Language, string>;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  text: Record<Language, string>;
  options: QuestionOption[]; // Exactly 4 options
  explanation: Record<Language, string>;
}

export interface Lesson {
  id: string;
  craftId: string;
  level: number; // 1 to 20
  title: Record<Language, string>;
  theoryExplanation: Record<Language, string>;
  realWorldExample: Record<Language, string>;
  practicalScenario: Record<Language, string>;
  questions: Question[]; // Exactly 5 questions
}

export interface UserInput {
  ageGroup: string;
  educationLevel: EducationLevel | null;
  workType: WorkType | null;
  experienceLevel: ExperienceLevel | null;
  interests: string[];
}

export interface AnalysisResult {
  craftId: string;
  score: number;
  matchReason: Record<Language, string>;
}
