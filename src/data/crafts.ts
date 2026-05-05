import { Craft } from '../types';

export const CRAFTS: Craft[] = [
  {
    id: 'c1',
    title: { en: 'Architectural Electricity', ar: 'كهرباء معمارية', fr: 'Électricité Architecturale' },
    description: { en: '', ar: '', fr: '' },
    requiredTools: { en: [], ar: [], fr: [] },
    requiredSkills: { en: [], ar: [], fr: [] },
    jobOpportunities: { en: '', ar: '', fr: '' },
    difficultyLevel: 'Intermediate',
    learningDurationHours: 120
  },
  {
    id: 'c2',
    title: { en: 'Mechanics', ar: 'ميكانيكا', fr: 'Mécanique' },
    description: { en: '', ar: '', fr: '' },
    requiredTools: { en: [], ar: [], fr: [] },
    requiredSkills: { en: [], ar: [], fr: [] },
    jobOpportunities: { en: '', ar: '', fr: '' },
    difficultyLevel: 'Advanced',
    learningDurationHours: 150
  },
  // Adding just a few more for testing the matching
  {
    id: 'c3',
    title: { en: 'Carpentry', ar: 'نجارة', fr: 'Menuiserie' },
    description: { en: '', ar: '', fr: '' },
    requiredTools: { en: [], ar: [], fr: [] },
    requiredSkills: { en: [], ar: [], fr: [] },
    jobOpportunities: { en: '', ar: '', fr: '' },
    difficultyLevel: 'Beginner',
    learningDurationHours: 90
  },
  {
    id: 'c10',
    title: { en: 'Graphic Design', ar: 'تصميم جرافيك', fr: 'Design Graphique' },
    description: { en: '', ar: '', fr: '' },
    requiredTools: { en: [], ar: [], fr: [] },
    requiredSkills: { en: [], ar: [], fr: [] },
    jobOpportunities: { en: '', ar: '', fr: '' },
    difficultyLevel: 'Intermediate',
    learningDurationHours: 120
  }
];
