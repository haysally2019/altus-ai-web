import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateEmailDraft = async (customerName: string, topic: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure your environment to use AI features.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a professional, short, and persuasive email from a roofing contractor to a customer named ${customerName}. 
      The topic is: ${topic}. 
      Keep it under 100 words. Use placeholders like [Your Company Name] where appropriate.`,
    });
    
    return response.text || "Could not generate draft.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating email. Please try again later.";
  }
};

export const analyzeLeadValue = async (address: string, roofSizeSqFt: number): Promise<string> => {
    if (!apiKey) return "AI unavailable";
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Estimate the potential revenue for a roof replacement job at ${address} with a roof size of ${roofSizeSqFt} sq ft. 
            Assume average market rates for asphalt shingles. Provide a single range string (e.g., "$10k - $12k") and a very brief 1-sentence reason.`
        });
        return response.text || "Estimate unavailable";
    } catch (e) {
        return "Estimate unavailable";
    }
}

export const detectSupplements = async (scopeText: string): Promise<string> => {
    if (!apiKey) return "AI unavailable";
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are an expert roofing insurance supplement specialist.
            Analyze the following insurance scope of loss text summary and identify 3 potential missing line items or opportunities for supplements based on common omissions (e.g., starter strip, drip edge, ridge cap waste, O&P, code upgrades).
            
            Scope Summary: "${scopeText}"
            
            Return a bulleted list of 3 high-value supplement opportunities with a brief explanation for each.`
        });
        return response.text || "No supplements detected.";
    } catch (e) {
        return "Error analyzing scope.";
    }
}

export const askInsuranceExpert = async (question: string): Promise<string> => {
     if (!apiKey) return "AI unavailable";
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are an expert public adjuster and roofing consultant. Answer this question about insurance claims, Xactimate line items, or roofing codes briefly and professionally.
            
            Question: "${question}"`
        });
        return response.text || "I cannot answer that right now.";
    } catch (e) {
        return "Error getting advice.";
    }
}