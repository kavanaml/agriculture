import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ limit: '15mb' }));

function getAiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured in environment.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function getLanguageInstruction(language) {
  if (language === 'kn') {
    return 'Respond strictly and naturally in Kannada (ಕನ್ನಡ) script using clear, respectful farmer-friendly rural Kannada vocabulary. Keep numbers in standard digits.';
  }
  if (language === 'hi') {
    return 'Respond strictly and naturally in Hindi (हिन्दी) Devanagari script using clear, respectful farmer-friendly Hindi vocabulary. Keep numbers in standard digits.';
  }
  return 'Respond strictly in clear, practical, farmer-friendly English.';
}

// 1. Contextual Produce Advisor
app.post('/api/advisor', async (req, res) => {
  try {
    const {
      language = 'en',
      produceName,
      sizeLabel,
      quantityQtl,
      locality,
      topMandi,
      sellRecommendation,
      question,
    } = req.body ?? {};

    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question is required.' });
    }

    const ai = getAiClient();
    const langInstruction = getLanguageInstruction(language);

    const prompt = `
Farmer Context:
- Locality: ${locality || 'Karnataka / India'}
- Produce: ${produceName || 'Agricultural Produce'}
- Selected Size/Grade: ${sizeLabel || 'Standard'}
- Available Quantity: ${quantityQtl || 10} Quintals
- Top Ranked Mandi: ${topMandi || 'Local APMC'}
- Current Shelf-Life Recommendation: ${sellRecommendation || 'Evaluate market conditions'}

Farmer's Question:
"${question}"

Provide practical, concrete, profit-maximizing and wastage-reducing guidance tailored to this exact crop, grade, quantity, and locality. Keep the answer concise (4-6 clear bullet points or short paragraphs, under 180 words).
`;

    const response = await ai.models.generateContent({
      model: 'gemini-4-hydrogen',
      contents: prompt,
      config: {
        systemInstruction: `You are MANDIMITHRA AI Produce Advisor, an expert Indian agricultural economist and post-harvest specialist helping farmers reduce spoilage and earn higher net mandi profits. ${langInstruction}`,
      },
    });

    return res.json({ answer: response.text || '' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Advisor request failed';
    console.error('Advisor error:', message);
    return res.status(500).json({ error: message });
  }
});

// 2. Cute Farmer Companion Chatbot (Text)
app.post('/api/farmer-chat', async (req, res) => {
  try {
    const {
      language = 'en',
      farmerName = 'Farmer',
      locality = 'India',
      activeProduce = '',
      history = [],
      message,
    } = req.body ?? {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const ai = getAiClient();
    const langInstruction = getLanguageInstruction(language);

    const historyText = Array.isArray(history)
      ? history
          .slice(-6)
          .map((item) => `${item.role === 'user' ? 'Farmer' : 'Mithra'}: ${item.text || ''}`)
          .join('\n')
      : '';

    const prompt = `
Conversation so far:
${historyText}

Current Farmer Profile:
- Name: ${farmerName}
- Locality: ${locality}
- Currently viewing produce: ${activeProduce || 'General Dashboard'}

Farmer's new message: "${message}"
`;

    const response = await ai.models.generateContent({
      model: 'gemini-4-hydrogen',
      contents: prompt,
      config: {
        systemInstruction: `You are "Mithra Kisan", a warm, knowledgeable, friendly farmer companion assistant inside the MANDIMITHRA platform. Address the farmer respectfully by name when natural. Solve any farming, mandi pricing, crop storage, pest control, soil health, irrigation, or government scheme problem practically in under 150 words. ${langInstruction}`,
      },
    });

    return res.json({ reply: response.text || '' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Chat request failed';
    console.error('Farmer chat error:', message);
    return res.status(500).json({ error: message });
  }
});

// 3. Voice Note Transcription + Reply
app.post('/api/voice-note', async (req, res) => {
  try {
    const {
      audioBase64,
      mimeType = 'audio/webm',
      language = 'en',
      farmerName = 'Farmer',
      locality = 'India',
      activeProduce = '',
      history = [],
    } = req.body ?? {};

    if (!audioBase64 || typeof audioBase64 !== 'string') {
      return res.status(400).json({ error: 'Audio recording data is required.' });
    }

    const ai = getAiClient();

    const transcribeResponse = await ai.models.generateContent({
      model: 'gemini-3.5-transcribe',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType,
              data: audioBase64,
            },
          },
          {
            text: 'Transcribe this spoken voice note from an Indian farmer accurately. Return only the spoken words in the original language (Kannada, Hindi, or English).',
          },
        ],
      },
    });

    const transcript = (transcribeResponse.text || '').trim();
    if (!transcript) {
      return res.status(422).json({
        error: 'Could not hear speech clearly in the voice note. Please try speaking closer to the microphone.',
      });
    }

    const langInstruction = getLanguageInstruction(language);
    const historyText = Array.isArray(history)
      ? history
          .slice(-6)
          .map((item) => `${item.role === 'user' ? 'Farmer' : 'Mithra'}: ${item.text || ''}`)
          .join('\n')
      : '';

    const replyResponse = await ai.models.generateContent({
      model: 'gemini-4-hydrogen',
      contents: `Recent context:\n${historyText}\n\nFarmer (${farmerName}, ${locality}, crop: ${activeProduce || 'General'}) asked via voice note:\n"${transcript}"`,
      config: {
        systemInstruction: `You are "Mithra Kisan", a warm, knowledgeable farmer companion assistant in MANDIMITHRA. Provide a clear, practical solution to the farmer's spoken problem in under 150 words. ${langInstruction}`,
      },
    });

    return res.json({
      transcript,
      reply: replyResponse.text || '',
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Voice note processing failed';
    console.error('Voice note error:', message);
    return res.status(500).json({ error: message });
  }
});

// 4. Text-to-Speech Read Aloud for Farmer Chatbot
app.post('/api/tts', async (req, res) => {
  try {
    const { text, language = 'en' } = req.body ?? {};
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text is required for speech.' });
    }

    const ai = getAiClient();
    const styleNote =
      language === 'kn'
        ? 'Warm, respectful Kannada agricultural advisor tone'
        : language === 'hi'
        ? 'Warm, respectful Hindi agricultural advisor tone'
        : 'Warm, clear agricultural advisor tone';

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: text.slice(0, 600),
              speechMetadata: {
                style: styleNote,
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
      return res.status(500).json({ error: 'No audio returned by TTS.' });
    }

    return res.json({ audioBase64: base64Audio, mimeType: 'audio/wav' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'TTS failed';
    console.error('TTS error:', message);
    return res.status(500).json({ error: message });
  }
});

// 5. Yojana Mithra Scheme Eligibility Advisor
app.post('/api/schemes-helper', async (req, res) => {
  try {
    const { language = 'en', locality = 'India', landAcres = '2', crop = 'Onion', need = 'Crop loan & storage' } =
      req.body ?? {};
    const ai = getAiClient();
    const langInstruction = getLanguageInstruction(language);

    const response = await ai.models.generateContent({
      model: 'gemini-4-hydrogen',
      contents: `Farmer Locality: ${locality}\nLandholding: ${landAcres} acres\nMain Crop: ${crop}\nPrimary Need: ${need}\n\nRecommend the 3 most relevant Indian Central and State agricultural schemes or low-interest farmer loans, with exact subsidy/benefit highlights and required documents.`,
      config: {
        systemInstruction: `You are MANDIMITHRA Yojana Mithra Scheme Specialist. Give accurate, practical guidance on Indian farmer welfare schemes, KCC loans, PM-KISAN, PMFBY, AIF, and state irrigation subsidies. ${langInstruction}`,
      },
    });

    return res.json({ recommendation: response.text || '' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Scheme recommendation failed';
    console.error('Scheme helper error:', message);
    return res.status(500).json({ error: message });
  }
});

// 6. Mandihut Daily Agri Briefing
app.post('/api/mandihut-briefing', async (req, res) => {
  try {
    const { language = 'en', locality = 'India' } = req.body ?? {};
    const ai = getAiClient();
    const langInstruction = getLanguageInstruction(language);

    const response = await ai.models.generateContent({
      model: 'gemini-4-hydrogen',
      contents: `Generate a concise 3-point daily agricultural market, storage, and weather readiness briefing for farmers near ${locality}. Cover: (1) Mandi Arrival & Price Trend Tip, (2) Post-harvest Storage & Wastage Prevention, (3) Seasonal Field Advisory.`,
      config: {
        systemInstruction: `You are the Chief Agri-Editor at MANDIHUT News Desk. Keep points practical, encouraging, and under 140 words total. ${langInstruction}`,
      },
    });

    return res.json({ briefing: response.text || '' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Briefing generation failed';
    console.error('Mandihut briefing error:', message);
    return res.status(500).json({ error: message });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`MANDIMITHRA server running on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
