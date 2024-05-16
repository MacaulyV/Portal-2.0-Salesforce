import React, { useState } from "react";
import styles from "./Login.module.css"; // Importando as classes do arquivo CSS Module
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import VLibras from "react-vlibras";
import TextToSpeech from "@/Componentes/Tecnologias/AudioDescrição/TextToSpeech";
import KommunicateChat from "@/Componentes/Tecnologias/Chatbot/chat";
import Link from "next/link";

const Login = () => {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [receberNotificacoes, setReceberNotificacoes] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputFocus = (inputId: string) => {
    setFocusedInput(inputId);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  const handleCheckboxChange = () => {
    setReceberNotificacoes(!receberNotificacoes);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implementar a lógica de login aqui
    // Por exemplo, você pode acessar os valores dos campos de entrada usando event.currentTarget
    const target = event.currentTarget;
    const username = (
      target.querySelector('input[type="text"]') as HTMLInputElement
    ).value;
    const password = (
      target.querySelector('input[type="password"]') as HTMLInputElement
    ).value;

    // Agora você pode fazer algo com os valores, como enviar uma solicitação para fazer login
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const [currentImage, setCurrentImage] = useState("DarkMode1.svg");

  // Estado para controlar o estado de brilho da imagem de fundo
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Função para alternar a imagem
  const toggleImage = () => {
    setCurrentImage(
      currentImage === "DarkMode1.svg" ? "DarkMode3.svg" : "DarkMode1.svg"
    );
  };

  // Função para alternar o estado de brilho
  const toggleBrightness = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Nova função que combina as duas funções acima
  const toggleBoth = () => {
    toggleImage();
    toggleBrightness();
  };

  return (
    <div className={styles.loginContainer}>
      <VLibras />
      <TextToSpeech />
      <video
        className={`${styles.Capa} ${
          isDarkMode ? styles.CapaDark : styles.CapaLight
        }`}
        src="/Videos/Home/Capa.mp4"
        autoPlay
        loop
        muted
      ></video>
      <motion.div
        className={styles.contentWrapper}
        initial={{ scale: 0, rotate: -180, opacity: 0 }} // Começa pequeno, girado e invisível
        animate={{ scale: 1, rotate: 0, opacity: 1 }} // Anima para tamanho normal, sem rotação e opacidade completa
        transition={{ type: "spring", duration: 4.0, bounce: 0.3 }} // Transição tipo mola com duração de 1.5 segundos e um pouco de rebote
      >
        <div className={styles.leftContent}>
          <div className={styles.loginForm}>
            <h1 className={styles.Titulo}>
              Guia de Vendas com IA: 7 passos para transformar suas vendas
            </h1>
            <h4 className={styles.SubtituloMaior}>
              {" "}
              Junte-se a nós, em 3 de Maio e conheça nosso manual de IA para
              Vendas. Vamos te ajudar a:
            </h4>
            <p className={styles.Texto1}>
              <span className={styles.Subtitulo}>
                Descobrir as últimas inovações em IA generativa, incluindo o
                Einstein Copilot;
              </span>
              <br />
              <span className={styles.Subtitulo}>
                Ver uma demonstração ao vivo das funcionalidades integradas de
                IA confiável ao Sales Cloud;
              </span>
              <br />
              <span className={styles.Subtitulo}>
                Como começar sua jornada para vendas potencializadas por IA com
                confiança.
              </span>
            </p>
            <button className={styles.Button1}>Inscreva-se agora</button>
            <br />
            <img
              className={styles.img}
              src="/Imagens/Login/StateTI.png"
              alt="Imagem"
            />
          </div>
        </div>
        <div className={styles.rightContent}>
          <img
            className={styles.Logo}
            src="/Imagens/Home/Logo.svg"
            alt="Imagem"
          />
          <p className={styles.Texto2}>
            Cadastre-se agora e tenha acesso a conteúdos da salesforce!
          </p>
          <div className={styles.wrapper}>
            <div className={`${styles.formWrapper} ${styles.signIn}`}>
              <form onSubmit={handleSubmit}>
                <div className={styles.TituloDarkMode}>
                  <h2 className={styles.title}>Fazer login</h2>
                  <img
                    className={styles.DarkMode}
                    src={`/Imagens/Home/${currentImage}`}
                    alt="Imagem"
                    onClick={toggleBoth} // Adiciona o evento de clique
                  />
                </div>
                <div className={styles.Restante}>
                  <div className={styles.inputGroup}>
                    <input type="text" required className={styles.input} />
                    <label htmlFor="">Nome do usuário</label>
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="password" required className={styles.input} />
                    <label htmlFor="">Senha</label>
                  </div>
                  <div className={styles.remember}>
                    <label className={isChecked ? styles.checked : ""}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleChange}
                      />
                      <span className={styles.checkbox}></span>
                      <span className={styles.label}>Lembrar-me</span>
                    </label>
                  </div>
                  <button className={styles.button}>Entrar</button>
                  <br />
                  <br />
                  <div className={styles.Opções}>
                    <a className={styles.RenomearSenha} href="">
                      Esqueceu sua senha?
                    </a>
                    <a className={styles.RenomearSenha} href="">
                      Usar domínio personalizado
                    </a>
                  </div>
                  <div className={styles.signUpLink}>
                    <p>Não é cliente? </p>
                  </div>
                  <Link className={styles.None} href="/Cadastro">
                    <div className={styles.TesteGratuitamente}>
                      <button>Teste gratuitamente</button>
                    </div>
                  </Link>
                </div>
              </form>
            </div>
            <div className="Chatbot">
              <KommunicateChat />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
