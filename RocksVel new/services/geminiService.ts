import { GoogleGenAI, Type, Schema } from "@google/genai";
import { GeneratedPlan } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Define the schema for structured output
const planSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    introduction: {
      type: Type.STRING,
      description: "A brief, professional 2-sentence intro about why this training is valuable for this specific industry/team.",
    },
    modules: {
      type: Type.ARRAY,
      description: "A list of 3-4 distinct training modules or workshop sessions.",
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "Catchy title for the session." },
          duration: { type: Type.STRING, description: "Estimated duration (e.g., '4 Hours', '2 Days')." },
          keyTakeaways: {
            type: Type.ARRAY,
            description: "3 bullet points on what they will learn.",
            items: { type: Type.STRING }
          }
        },
        required: ["title", "duration", "keyTakeaways"]
      }
    }
  },
  required: ["introduction", "modules"]
};

export const generateTrainingPlan = async (
  industry: string,
  teamRole: string,
  focusArea: string
): Promise<GeneratedPlan> => {
  try {
    const prompt = `
      You are a world-class corporate trainer at Rocksvel.
      Create a custom training proposal.
      
      Client Details:
      - Industry: ${industry}
      - Team Role: ${teamRole}
      - Key Pain Point/Focus: ${focusArea}
      
      Generate a structured training plan that solves their specific problems.
      Keep the tone professional, encouraging, and results-oriented.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: planSchema,
        systemInstruction: "You are an expert business consultant helping companies grow through training."
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as GeneratedPlan;
    }
    throw new Error("No content generated");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};