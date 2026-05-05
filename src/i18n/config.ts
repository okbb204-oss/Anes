import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Minimal translation setup, dynamic content uses Record<Language, string> natively
// These are for UI elements
const resources = {
  en: {
    translation: {
      "appTitle": "HIRFATI AI",
      "analysis": "Career Analysis",
      "next": "Next",
      "back": "Back",
      "submit": "Analyze Preferences",
      "selectEducation": "Select Education Level",
      "selectWorkType": "Select Preferred Work Type",
      "selectExperience": "Select Experience Level",
      "analyzing": "Analyzing your profile...",
      "yourMatches": "Your Recommended Crafts",
      "startLearning": "Start Apprenticeship",
      "educationLevels": {
        "Primary": "Primary Education",
        "Secondary": "Secondary Education",
        "University": "University / Higher Education"
      },
      "workTypes": {
        "Manual": "Manual Workflow (Hands-on)",
        "Technical": "Technical / Analytical",
        "Creative": "Creative / Design"
      },
      "experienceLevels": {
        "None": "No Experience",
        "Some": "Some Hobby/Basic Experience",
        "Experienced": "Professional Experience"
      }
    }
  },
  ar: {
    translation: {
       "appTitle": "حرفتي AI",
       "analysis": "تحليل المسار المهني",
       "next": "التالي",
       "back": "رجوع",
       "submit": "تحليل التفضيلات",
       "selectEducation": "اختر المستوى التعليمي",
       "selectWorkType": "اختر نوع العمل المفضل",
       "selectExperience": "اختر مستوى الخبرة",
       "analyzing": "جاري تحليل ملفك...",
       "yourMatches": "الحرف الموصى بها لك",
       "startLearning": "ابدأ التدريب المهني",
       "educationLevels": {
        "Primary": "تعليم ابتدائي",
        "Secondary": "تعليم ثانوي",
        "University": "تعليم جامعي / عالي"
      },
      "workTypes": {
        "Manual": "عمل يدوي (حرفي)",
        "Technical": "عمل تقني / تحليلي",
        "Creative": "إبداعي / تصميم"
      },
      "experienceLevels": {
        "None": "بدون خبرة",
        "Some": "خبرة أساسية / هواية",
        "Experienced": "خبرة مهنية"
      }
    }
  },
  fr: {
    translation: {
      "appTitle": "HIRFATI AI",
      "analysis": "Analyse de carrière",
      "next": "Suivant",
      "back": "Retour",
      "submit": "Analyser les préférences",
      "selectEducation": "Sélectionnez le niveau d'éducation",
      "selectWorkType": "Sélectionnez le type de travail",
      "selectExperience": "Sélectionnez le niveau d'expérience",
      "analyzing": "Analyse de votre profil...",
      "yourMatches": "Vos métiers recommandés",
      "startLearning": "Commencer l'apprentissage",
      "educationLevels": {
        "Primary": "Enseignement primaire",
        "Secondary": "Enseignement secondaire",
        "University": "Enseignement universitaire / supérieur"
      },
      "workTypes": {
        "Manual": "Travail manuel",
        "Technical": "Technique / Analytique",
        "Creative": "Créatif / Design"
      },
      "experienceLevels": {
        "None": "Aucune expérience",
        "Some": "Quelques expériences / Loisir",
        "Experienced": "Expérience professionnelle"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
