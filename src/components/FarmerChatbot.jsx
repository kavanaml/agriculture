import React, { useEffect, useRef, useState } from 'react';
import { Mic, Send, Square, Volume2, X } from 'lucide-react';
import { t } from '../data/translations.js';

function CuteFarmerAvatar({ size = 56, waving = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-farmer-bob select-none"
      aria-hidden="true"
    >
      {/* Background Sunlit Circle */}
      <circle cx="40" cy="40" r="37" fill="#ECFDF5" stroke="#15803D" strokeWidth="2.5" />

      {/* Shoulders / Kurta */}
      <path
        d="M19 67C21 56.5 29.5 52 40 52C50.5 52 59 56.5 61 67"
        fill="#15803D"
      />
      {/* Traditional Scarf / Angavastram */}
      <path
        d="M30 53L36 65M50 53L44 65"
        stroke="#F59E0B"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Waving Hand + Wheat Stalk */}
      <g className={waving ? 'animate-farmer-wave' : ''}>
        <circle cx="62" cy="51" r="4.5" fill="#F3C19D" stroke="#9A5B37" strokeWidth="1" />
        <path d="M64 47L69 32" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="68.5" cy="33" rx="2.4" ry="4" transform="rotate(18 68.5 33)" fill="#FBBF24" />
      </g>

      {/* Neck & Friendly Face */}
      <rect x="35" y="45" width="10" height="8" rx="4" fill="#F3C19D" />
      <circle cx="40" cy="35" r="13.5" fill="#F6C8A5" />

      {/* Warm Turban / Pagdi */}
      <path
        d="M25 30C25 20.5 31.8 15 40 15C48.2 15 55 20.5 55 30C50 27.5 45 27 40 27C35 27 30 27.5 25 30Z"
        fill="#F59E0B"
      />
      <path
        d="M26.5 26.5C32 22.5 48 22.5 53.5 26.5"
        stroke="#B45309"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Little Sprout Emblem on Turban */}
      <path d="M40 16C37 12.5 34.5 12 34 15.5C36.5 16.5 38.5 16.5 40 16Z" fill="#16A34A" />
      <path d="M40 16C43 12.5 45.5 12 46 15.5C43.5 16.5 41.5 16.5 40 16Z" fill="#22C55E" />

      {/* Eyes, Cheeks & Smile */}
      <circle cx="35" cy="35" r="1.7" fill="#1F2937" />
      <circle cx="45" cy="35" r="1.7" fill="#1F2937" />
      <circle cx="31.5" cy="38.5" r="2.2" fill="#F59E0B" fillOpacity="0.3" />
      <circle cx="48.5" cy="38.5" r="2.2" fill="#F59E0B" fillOpacity="0.3" />
      <path
        d="M35.5 40.5C37 42.5 43 42.5 44.5 40.5"
        stroke="#7C2D12"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FarmerChatbot({ profile, activeProduceName }) {
  const language = profile.language;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => [
    {
      id: 'welcome',
      role: 'assistant',
      text: t(language, 'chatGreeting'),
      timestamp: '',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordSeconds, setRecordSeconds] = useState(0);
  const [playingId, setPlayingId] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const listEndRef = useRef(null);
  const audioRef = useRef(null);

  // Sync welcome greeting if user switches language and no custom messages yet
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [{ ...prev[0], text: t(language, 'chatGreeting') }];
      }
      return prev;
    });
  }, [language]);

  useEffect(() => {
    if (isOpen) {
      listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const sendTextMessage = async (textOverride) => {
    const clean = (textOverride ?? inputText).trim();
    if (!clean || isSending) return;

    setErrorMsg('');
    const userMsg = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: clean,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    if (!textOverride) setInputText('');
    setIsSending(true);

    try {
      const response = await fetch('/api/farmer-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          farmerName: profile.name,
          locality: profile.locality,
          activeProduce: activeProduceName,
          history: nextHistory.map((m) => ({ role: m.role, text: m.text })),
          message: clean,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Chat failed');
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: 'assistant',
          text: data.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Unable to send message');
    } finally {
      setIsSending(false);
    }
  };

  const startVoiceRecording = async () => {
    setErrorMsg('');
    if (!navigator.mediaDevices?.getUserMedia) {
      setErrorMsg('Microphone recording is not supported in this browser.');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4';
      const recorder = new MediaRecorder(stream, { mimeType });
      chunksRef.current = [];

      recorder.ondataavailable = (ev) => {
        if (ev.data.size > 0) chunksRef.current.push(ev.data);
      };

      recorder.onstop = async () => {
        stream.getTracks().forEach((track) => track.stop());
        if (timerRef.current) clearInterval(timerRef.current);
        setRecordSeconds(0);

        const blob = new Blob(chunksRef.current, { type: mimeType });
        if (blob.size < 400) return;

        setIsSending(true);
        try {
          const base64 = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              const result = String(reader.result || '');
              resolve(result.split(',')[1] || '');
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });

          const response = await fetch('/api/voice-note', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              audioBase64: base64,
              mimeType,
              language,
              farmerName: profile.name,
              locality: profile.locality,
              activeProduce: activeProduceName,
              history: messages.map((m) => ({ role: m.role, text: m.text })),
            }),
          });

          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.error || 'Voice note failed');
          }

          const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          setMessages((prev) => [
            ...prev,
            {
              id: `uv-${Date.now()}`,
              role: 'user',
              text: data.transcript,
              isVoice: true,
              timestamp: now,
            },
            {
              id: `av-${Date.now() + 1}`,
              role: 'assistant',
              text: data.reply,
              timestamp: now,
            },
          ]);
        } catch (err) {
          setErrorMsg(err instanceof Error ? err.message : 'Voice note processing failed');
        } finally {
          setIsSending(false);
        }
      };

      mediaRecorderRef.current = recorder;
      recorder.start();
      setIsRecording(true);
      setRecordSeconds(0);
      timerRef.current = setInterval(() => {
        setRecordSeconds((s) => s + 1);
      }, 1000);
    } catch {
      setErrorMsg('Microphone permission was denied. Please allow microphone access to send voice notes.');
    }
  };

  const stopVoiceRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  };

  const playReplyAudio = async (msg) => {
    if (playingId === msg.id) {
      audioRef.current?.pause();
      setPlayingId(null);
      return;
    }

    setPlayingId(msg.id);
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: msg.text, language }),
      });
      const data = await response.json();
      if (!response.ok || !data.audioBase64) {
        throw new Error(data.error || 'Speech unavailable');
      }

      const audio = new Audio(`data:${data.mimeType || 'audio/wav'};base64,${data.audioBase64}`);
      audioRef.current = audio;
      audio.onended = () => setPlayingId(null);
      audio.onerror = () => setPlayingId(null);
      await audio.play();
    } catch {
      // Clean fallback to browser speech synthesis if available
      if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(msg.text);
        utter.lang = language === 'kn' ? 'kn-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';
        utter.onend = () => setPlayingId(null);
        window.speechSynthesis.speak(utter);
      } else {
        setPlayingId(null);
      }
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-96 bg-white border border-emerald-900/15 rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[76vh]">
          {/* Header with Animated Cute Farmer */}
          <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white px-4 py-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <CuteFarmerAvatar size={46} waving />
              <div>
                <div className="text-sm font-display font-bold leading-tight">
                  {t(language, 'chatName')}
                </div>
                <div className="text-[11px] text-emerald-100">
                  {t(language, 'chatRole')}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={t(language, 'closeArticle')}
              className="p-1.5 rounded-lg hover:bg-white/15 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F8FAF7]">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                      isUser
                        ? 'bg-emerald-700 text-white rounded-br-sm'
                        : 'bg-white border border-emerald-900/10 text-emerald-950 rounded-bl-sm'
                    }`}
                  >
                    {msg.isVoice && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold opacity-80 mb-1 block">
                        <Mic className="w-3 h-3" /> Voice Note
                      </span>
                    )}
                    {msg.text}
                  </div>

                  {!isUser && (
                    <button
                      type="button"
                      onClick={() => playReplyAudio(msg)}
                      className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-900 px-1"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>
                        {playingId === msg.id
                          ? t(language, 'chatListening')
                          : t(language, 'chatListen')}
                      </span>
                    </button>
                  )}
                </div>
              );
            })}

            {isSending && (
              <div className="text-xs text-emerald-800 bg-white border border-emerald-900/10 rounded-xl px-3 py-2 inline-block">
                {isRecording ? t(language, 'chatRecording') : t(language, 'chatProcessingVoice')}
              </div>
            )}

            {errorMsg && (
              <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                {errorMsg}
              </div>
            )}
            <div ref={listEndRef} />
          </div>

          {/* Starter Prompts */}
          {messages.length <= 2 && (
            <div className="px-3 py-2 bg-white border-t border-emerald-900/8 flex gap-1.5 overflow-x-auto">
              {[t(language, 'chatQuick1'), t(language, 'chatQuick2'), t(language, 'chatQuick3')].map(
                (q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => sendTextMessage(q)}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-900/10 whitespace-nowrap shrink-0"
                  >
                    {q}
                  </button>
                )
              )}
            </div>
          )}

          {/* Voice Note & Text Input Bar */}
          <div className="p-3 bg-white border-t border-emerald-900/10 space-y-2">
            {isRecording && (
              <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-semibold">
                <span>
                  {t(language, 'chatRecording')} ({recordSeconds}s)
                </span>
                <button
                  type="button"
                  onClick={stopVoiceRecording}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-red-600 text-white text-[11px]"
                >
                  <Square className="w-3 h-3 fill-current" />
                  <span>{t(language, 'chatRecordStop')}</span>
                </button>
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendTextMessage();
              }}
              className="flex items-center gap-2"
            >
              <button
                type="button"
                onClick={isRecording ? stopVoiceRecording : startVoiceRecording}
                disabled={isSending && !isRecording}
                title={isRecording ? t(language, 'chatRecordStop') : t(language, 'chatRecordStart')}
                aria-label={isRecording ? t(language, 'chatRecordStop') : t(language, 'chatRecordStart')}
                className={`p-2.5 rounded-xl border transition-colors shrink-0 ${
                  isRecording
                    ? 'bg-red-600 text-white border-red-700'
                    : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                }`}
              >
                {isRecording ? <Square className="w-4 h-4 fill-current" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={t(language, 'chatPlaceholder')}
                className="flex-1 min-w-0 px-3 py-2 text-xs sm:text-sm bg-emerald-50/40 border border-emerald-900/15 rounded-xl text-emerald-950 placeholder:text-emerald-800/45 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
              />

              <button
                type="submit"
                disabled={isSending || !inputText.trim()}
                aria-label="Send message"
                className="p-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Launcher Button with Cute Animated Farmer */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={t(language, 'chatName')}
          className="group flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full bg-white border border-emerald-700/30 shadow-lg hover:shadow-xl hover:border-emerald-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
        >
          <CuteFarmerAvatar size={48} waving={!isOpen} />
          <div className="text-left">
            <div className="text-xs font-display font-bold text-emerald-950 whitespace-nowrap">
              {t(language, 'chatName')}
            </div>
            <div className="text-[11px] font-medium text-emerald-700 whitespace-nowrap">
              {isOpen ? t(language, 'closeArticle') : t(language, 'chatRecordStart')}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
