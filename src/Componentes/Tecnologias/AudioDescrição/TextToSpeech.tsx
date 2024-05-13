import React, { useState, useEffect, useRef } from "react";
import styles from "./TextToSpeech.module.css";
import { motion } from "framer-motion";
// @ts-ignore
import { speak } from "./speechUtils";

const TextToSpeech: React.FC = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isFemale, setIsFemale] = useState(true);
  const [voiceType, setVoiceType] = useState("default"); // Estado para controlar o tipo de voz
  const [speechRate, setSpeechRate] = useState(1); // Estado para controlar a velocidade da voz
  const currentText = useRef(""); // Armazena o texto atualmente sendo lido
  const [backgroundImage, setBackgroundImage] = useState(
    "/Imagens/Home/CapaF2.png"
  );
  const [isSideDivVisible, setIsSideDivVisible] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const voices = useRef<SpeechSynthesisVoice[]>([]); // Use SpeechSynthesisVoice[] as the type

  useEffect(() => {
    const fetchVoices = () => {
      voices.current = window.speechSynthesis
       .getVoices()
       .filter((voice) => voice.lang.startsWith("en"));
      if (voices.current.length > 0) {
        setVoiceType(voices.current[0].voiceURI); // Define a voz padrão
      }
    };

    // Função para alternar a voz do locutor
    const toggleVoice = () => {
      const newVoice = voices.current.find(
        (voice) => voice.voiceURI!== voiceType
      );
      if (newVoice) {
        setVoiceType(newVoice.voiceURI);
        speak(currentText.current); // Repete o texto atual com a nova voz
      }
    };

    fetchVoices();
    if (window.speechSynthesis.onvoiceschanged!== undefined) {
      window.speechSynthesis.addEventListener("voiceschanged", fetchVoices);
    }
  }, []);

  const speak = (text: string) => {
    window.speechSynthesis.cancel(); // Interrompe a fala atual
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speechRate; // Usa o estado para controlar a velocidade
    window.speechSynthesis.speak(utterance);
  };

  const handleMouseUp = () => {
    if (!isActivated) return;

    const text = window.getSelection()?.toString();
    if (text) {
      currentText.current = text; // Armazena o texto selecionado
      speak(currentText.current); // Inicia a leitura
    }
  };

  const toggleActivation = () => {
    setIsActivated(!isActivated);
  };

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
    if (!isPaused) {
      speak(currentText.current); // Repete o texto atual com a nova velocidade
    } else {
      window.speechSynthesis.cancel(); // Cancela a leitura atual
    }
  };

  const decreaseSpeechRate = () => {
    if (speechRate > 1) {
      // Verifica se a velocidade foi aumentada
      setSpeechRate(1); // Retorna ao estado normal da velocidade
      speak(currentText.current); // Repete o texto atual com a nova velocidade
    }
  };

  // Função para aumentar a velocidade da voz
  const increaseSpeechRate = () => {
    setSpeechRate((prevRate) => prevRate + 0.1); // Aumenta a velocidade em 0.1
    if (!isActivated) setIsActivated(true); // Ativa o menu de voz se não estiver ativado
    speak(currentText.current); // Repete o texto atual com a nova velocidade
  };

  const startVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    const maleVoice = voices.find(
      (voice: SpeechSynthesisVoice) =>
        voice.name.includes("Google português do Brasil") &&
        voice.name.includes("Female")
    );
    const utterance = new SpeechSynthesisUtterance(
      "Por favor, selecione um texto para transcrever em áudio."
    );
    if (maleVoice) {
      utterance.voice = maleVoice;
    } else {
      utterance.voice = null; // or handle differently based on your needs
    }
    window.speechSynthesis.speak(utterance);
  };

  const stopVoice = () => {
    window.speechSynthesis.cancel();
  };

  const handleIconClick = () => {
    toggleActivation();
    handlePauseToggle();
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isActivated]);

  const handleClick = () => {
    setIsDivVisible(!isDivVisible);
  };

  const handleMouseEnter = () => {
    setIsSideDivVisible(true);
  };

  const handleMouseLeave = () => {
    setIsSideDivVisible(false);
  };

  const handleClose = () => {
    setIsDivVisible(false);
  };

  const handleAudioToggle = () => {
    setIsFemale(!isFemale);
    setBackgroundImage(
      isFemale ? "/Imagens/Home/VozM.png" : "/Imagens/Home/CapaF2.png"
    );
  };

  return (
    <div>
      <button
        className={styles.Button}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="/Imagens/Home/Voz.gif"
          alt="IconVoz"
          className={styles.IconVoz}
        />
        <span className={styles.TextButton}></span>
        {isSideDivVisible && (
          <div
            className={styles.MenuLateral}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <img
              className={styles.IconLateral}
              alt="Logo"
              src="/Imagens/Home/IconDivLateral.gif"
            />
            <h4 className={styles.TItleDivLateral}>
              Transcrição de
              <br />
              <span className={styles.TitleMaior}>Audio</span>
            </h4>
          </div>
        )}
      </button>
      {isDivVisible && (
        <div
          className={styles.MenuVoz}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={styles.Nav}>
            <img
              className={styles.logo}
              alt="Logo"
              src="/Imagens/Home/Logo.svg"
            />
            <h1 className={styles.Titulo}>SalesVoice</h1>
            <img
              src="/Imagens/Home/Voz.gif"
              alt="IconVoz"
              className={styles.IconNav}
            />
            <svg
              className={styles.IconFechar}
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleClose}
            >
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>
          </div>
          <div className={styles.FundoMain}>
            <img src="" alt="" />
          </div>
          <div className={styles.Footer}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              className={styles.IconLeft}
              whileTap={{ scale: 1.2 }}
              style={{ outline: "none", transform: "scaleX(1) rotate(180deg)" }}
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.666v-4.666l-7 4.666v-9.332l7 4.666v-4.666l7 4.666-7 4.666z" />
            </motion.svg>
            {isPaused ? (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                className={styles.IconPause}
                onClick={handleIconClick}
                whileTap={{ scale: 1.2 }} // Animação quando clicado
                style={{ outline: "none" }}
              >
                <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" />
              </motion.svg>
            ) : (
              <motion.svg
                className={styles.IconPause}
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                onClick={handleIconClick}
                whileTap={{ scale: 1.2 }} // Animação quando clicado
                style={{ outline: "none" }}
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
              </motion.svg>
            )}

            <motion.svg
              className={styles.IconNav}
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              onClick={increaseSpeechRate}
              whileTap={{ scale: 1.2 }} // Animação quando clicado
              style={{ outline: "none" }}
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.666v-4.666l-7 4.666v-9.332l7 4.666v-4.666l7 4.666-7 4.666z" />
            </motion.svg>
            <motion.img
              src={
                isFemale
                  ? "/Imagens/Home/Male.gif"
                  : "/Imagens/Home/FemaleVoz.gif"
              }
              alt="IconVoz"
              className={styles.IconAudio}
              onClick={handleAudioToggle}
              whileTap={{ scale: 1.2 }} // Animação quando clicado
              style={{ outline: "none" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TextToSpeech;
