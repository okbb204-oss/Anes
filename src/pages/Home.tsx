import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '../store/appStore';
import { analyzeUser } from '../lib/analysisEngine';
import { CRAFTS } from '../data/crafts';
import { EducationLevel, ExperienceLevel, WorkType } from '../types';

export default function Home() {
  const { t } = useTranslation();
  const { 
    userInput, 
    setUserInput, 
    language,
    analysisResults,
    setAnalysisResults
  } = useAppStore();

  const [step, setStep] = useState(0);

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleAnalyze = () => {
    // Artificial delay to simulate "Smart Engine Analysis"
    setStep(99); 
    setTimeout(() => {
      const results = analyzeUser(
        {
          ageGroup: userInput.ageGroup || '18-25',
          educationLevel: userInput.educationLevel,
          workType: userInput.workType,
          experienceLevel: userInput.experienceLevel,
          interests: userInput.interests || []
        },
        CRAFTS,
        language
      );
      setAnalysisResults(results);
      setStep(100); // Results step
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-light tracking-tight">{t('appTitle')}</h1>
        <p className="mt-2 text-utility-muted">{t('analysis')}</p>
      </div>

      <div className="glass-card p-8 min-h-[400px] flex flex-col justify-center">
        
        {step === 0 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-medium">{t('selectEducation')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Primary', 'Secondary', 'University'].map((level) => (
                <button
                  key={level}
                  onClick={() => {
                    setUserInput({ educationLevel: level as EducationLevel });
                    handleNext();
                  }}
                  className={`p-6 rounded-2xl border text-left transition-all ${
                    userInput.educationLevel === level 
                      ? 'border-utility-accent ring-1 ring-utility-accent/50 bg-utility-accent/5' 
                      : 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'
                  }`}
                >
                  <span className="block font-medium">{t(`educationLevels.${level}`)}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-medium">{t('selectWorkType')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Manual', 'Technical', 'Creative'].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setUserInput({ workType: type as WorkType });
                    handleNext();
                  }}
                  className={`p-6 rounded-2xl border text-left transition-all ${
                    userInput.workType === type 
                      ? 'border-utility-accent ring-1 ring-utility-accent/50 bg-utility-accent/5' 
                      : 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'
                  }`}
                >
                  <span className="block font-medium">{t(`workTypes.${type}`)}</span>
                </button>
              ))}
            </div>
            <button onClick={handleBack} className="text-utility-muted text-sm hover:text-utility-text mt-4">{t('back')}</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-medium">{t('selectExperience')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['None', 'Some', 'Experienced'].map((exp) => (
                <button
                  key={exp}
                  onClick={() => {
                    setUserInput({ experienceLevel: exp as ExperienceLevel });
                    handleAnalyze();
                  }}
                  className={`p-6 rounded-2xl border text-left transition-all ${
                    userInput.experienceLevel === exp 
                      ? 'border-utility-accent ring-1 ring-utility-accent/50 bg-utility-accent/5' 
                      : 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'
                  }`}
                >
                  <span className="block font-medium">{t(`experienceLevels.${exp}`)}</span>
                </button>
              ))}
            </div>
            <button onClick={handleBack} className="text-utility-muted text-sm hover:text-utility-text mt-4">{t('back')}</button>
          </div>
        )}

        {step === 99 && (
          <div className="flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-500">
            <div className="w-12 h-12 border-4 border-utility-accent border-t-transparent rounded-full animate-spin"></div>
            <p className="text-utility-muted">{t('analyzing')}</p>
          </div>
        )}

        {step === 100 && analysisResults && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-medium border-b border-black/10 dark:border-white/10 pb-4">{t('yourMatches')}</h2>
            <div className="space-y-6">
              {analysisResults.map((result, idx) => {
                const craft = CRAFTS.find(c => c.id === result.craftId);
                if (!craft) return null;
                return (
                  <div key={result.craftId} className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-utility-accent/10 flex items-center justify-center text-utility-accent text-2xl font-bold">
                      #{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">{craft.title[language]}</h3>
                      <p className="mt-2 text-utility-muted text-sm sm:text-base leading-relaxed">
                        {result.matchReason[language]}
                      </p>
                      <button className="mt-4 px-6 py-2 bg-utility-accent text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                        {t('startLearning')}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
