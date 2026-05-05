import { UserInput, AnalysisResult, Craft, Language } from '../types';

export function analyzeUser(input: UserInput, availableCrafts: Craft[], lang: Language): AnalysisResult[] {
  // A simple scoring algorithm mapping user attributes to craft requirements
  const scores = availableCrafts.map(craft => {
    let score = 0;

    // Evaluate Work Type Match
    // e.g. Architectural Electricity -> Technical/Manual
    // We would use a more robust attribute map in reality, here we will simulate
    // an attribute mapping per craft.
    const craftAttributes = getCraftAttributes(craft.id);
    
    if (craftAttributes.workType.includes(input.workType as string)) {
      score += 10;
    }

    if (craftAttributes.educationLevels.includes(input.educationLevel as string)) {
      score += 5;
    }

    // Add random jitter to simulate complex matching if inputs are mostly same
    score += Math.random() * 2;

    const reasons: Record<Language, string> = {
      en: `Based on your preference for ${input.workType} work and your experience, ${craft.title.en} is an excellent match.`,
      ar: `بناءً على تفضيلك للعمل الـ ${input.workType} وخبرتك، تعتبر ${craft.title.ar} مطابقة ممتازة.`,
      fr: `Basé sur votre préférence pour le travail ${input.workType} et votre expérience, ${craft.title.fr} est un excellent choix.`
    };

    return {
      craftId: craft.id,
      score,
      matchReason: reasons
    };
  });

  // Sort descending and take top 3
  return scores.sort((a, b) => b.score - a.score).slice(0, 3);
}

// Temporary mapping function
function getCraftAttributes(craftId: string) {
  const map: Record<string, { workType: string[], educationLevels: string[] }> = {
    c1: { workType: ['Technical', 'Manual'], educationLevels: ['Secondary', 'University'] }, // Electricity
    c2: { workType: ['Technical', 'Manual'], educationLevels: ['Secondary', 'University'] }, // Mechanics
    c3: { workType: ['Manual'], educationLevels: ['Primary', 'Secondary'] }, // Carpentry
    c4: { workType: ['Manual', 'Technical'], educationLevels: ['Primary', 'Secondary'] }, // Plumbing
    c5: { workType: ['Manual'], educationLevels: ['Primary', 'Secondary'] }, // Welding
    c6: { workType: ['Technical'], educationLevels: ['Secondary', 'University'] }, // HVAC
    c7: { workType: ['Manual', 'Creative'], educationLevels: ['Primary', 'Secondary'] }, // Painting
    c8: { workType: ['Creative', 'Manual'], educationLevels: ['Primary', 'Secondary'] }, // Hairdressing
    c9: { workType: ['Creative', 'Manual'], educationLevels: ['Primary', 'Secondary'] }, // Cooking
    c10: { workType: ['Creative', 'Technical'], educationLevels: ['Secondary', 'University'] }, // Graphic Design
  };
  return map[craftId] || { workType: ['Manual'], educationLevels: ['Primary'] };
}
