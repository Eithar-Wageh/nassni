import React, { useState, useEffect } from 'react';

function LiveSubtitlePanel() {
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    // طلب إذن المايك عند تحميل الصفحة
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        console.log("🎤 Microphone access granted", stream);
      })
      .catch(err => {
        console.error("🚫 Microphone access denied", err);
        setErrorMsg('تم رفض إذن المايكروفون. الرجاء السماح للتسجيل.');
      });
  }, []);

  useEffect(() => {
    if (!isRecording) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setErrorMsg('المتصفح لا يدعم خاصية التعرف على الصوت.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ar-SA';
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptPart = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscript(prev => prev + transcriptPart + ' ');
        } else {
          interimTranscript += transcriptPart + ' ';
        }
      }
      setTranscript(prev => prev + interimTranscript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      if (event.error === 'network') {
        setErrorMsg('⚠ خطأ في الاتصال بخدمة التعرف على الصوت. جرب متصفح آخر أو تأكد من اتصالك بالإنترنت.');
      }
      setIsRecording(false);
    };

    recognition.start();

    return () => recognition.stop();
  }, [isRecording]);

  return (
    <div className="light-mode min-h-screen flex flex-col items-center justify-center bg-secondary">
      <h1 className="text-3xl font-bold text-primary mb-6">لوحة التحويل المباشر</h1>

      {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}

      <p className="text-sm text-high-contrast-text mb-4" aria-live="polite">
        {isRecording ? 'جارٍ التسجيل...' : 'اضغط على زر التسجيل لبدء التحويل'}
      </p>

      <button
        className="btn"
        onClick={() => setIsRecording(true)}
        disabled={isRecording}
      >
        بدء التسجيل
      </button>

      <div
        className="text-box mt-6 p-6 border-2 border-primary rounded bg-secondary text-high-contrast-text w-full max-w-lg"
        aria-live="polite"
      >
        {transcript || 'النص سيظهر هنا...'}
      </div>
    </div>
  );
}

export default LiveSubtitlePanel;
