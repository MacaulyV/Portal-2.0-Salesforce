import React, { useEffect, useRef, useState } from 'react';

const TextToSpeech: React.FC = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [rate, setRate] = useState(2); // Velocidade inicial da fala
  const [voiceIndex, setVoiceIndex] = useState(0); // Índice da voz inicial
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [firstClick, setFirstClick] = useState({ rate: true, voice: true });
  const selectedText = useRef('');

  const speak = (text: string) => {
    window.speechSynthesis.cancel(); // Interrompe a fala atual
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.voice = voices[voiceIndex];
    window.speechSynthesis.speak(utterance);
  };

  const handleMouseUp = () => {
    if (!isActivated) return;

    const text = window.getSelection()?.toString();
    if (text) {
      selectedText.current = text;
      speak(selectedText.current);
    }
  };

  const toggleActivation = () => {
    setIsActivated(!isActivated);
    if (isActivated) {
      window.speechSynthesis.cancel();
    }
  };

  useEffect(() => {
    setVoices(window.speechSynthesis.getVoices());

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isActivated]);

  return (
    <div>
      <button onClick={toggleActivation}>
        {isActivated ? 'Desativar Leitura em Voz Alta' : 'Ativar Leitura em Voz Alta'}
      </button>
      <button onClick={() => { if (!firstClick.rate) { if (rate < 2) { setRate(rate + 1); speak(selectedText.current); } } else { setFirstClick({ ...firstClick, rate: false }); } }}>
        Aumentar Velocidade ({rate > 1 ? 1 : 0})
      </button>
      <button onClick={() => { if (!firstClick.rate) { if (rate > 1) { setRate(rate - 1); speak(selectedText.current); } } else { setFirstClick({ ...firstClick, rate: false }); } }}>
        Diminuir Velocidade ({rate < 2 ? 1 : 0})
      </button>
      <button onClick={() => { if (!firstClick.voice) { setVoiceIndex((voiceIndex + 1) % 2); speak(selectedText.current); } else { setFirstClick({ ...firstClick, voice: false }); } }}>
        Mudar Voz ({voiceIndex + 1})
      </button>
    </div>
  );
};

export default TextToSpeech;
