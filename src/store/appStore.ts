import { create } from 'zustand';
import { Language, UserInput, AnalysisResult } from '../types';

interface AppState {
  language: Language;
  setLanguage: (lang: Language) => void;
  
  theme: 'light' | 'dark';
  toggleTheme: () => void;

  userInput: Partial<UserInput>;
  setUserInput: (input: Partial<UserInput>) => void;

  analysisResults: AnalysisResult[] | null;
  setAnalysisResults: (results: AnalysisResult[]) => void;
}

export const useAppStore = create<AppState>((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  
  theme: 'light',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

  userInput: {},
  setUserInput: (input) => set((state) => ({ userInput: { ...state.userInput, ...input } })),

  analysisResults: null,
  setAnalysisResults: (results) => set({ analysisResults: results }),
}));
