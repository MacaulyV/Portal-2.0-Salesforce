import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import VLibras from "react-vlibras";
import ReactDOM from "react-dom";
import TextToSpeech from "@/Componentes/Tecnologias/AudioDescrição/TextToSpeech";
import styles from "./Cadastro.module.css";
import KommunicateChat from "@/Componentes/Tecnologias/Chatbot/chat";

interface TesteGratisProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const TesteGratis: React.FC<TesteGratisProps> = ({ className }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    console.log("Link clicado");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={styles.CadastroContainer}>
      <video
        className={styles.Capa}
        src="/Imagens/Cadastro/Capa.mp4"
        autoPlay
        loop
        muted
      ></video>
      <VLibras />
      <TextToSpeech />
      <motion.div
        className={styles.Informações}
        initial={{ x: "-100vw", opacity: 0 }} // Começa fora da tela à esquerda
        animate={{ x: 0, opacity: 1 }} // Anima para a posição inicial e opacidade completa
        transition={{ type: "spring", duration: 4, bounce: 0.25 }} // Tipo de transição e duração
      >
        <div className={styles.LogoTitulo}>
          <img
            className={styles.Logo}
            src="/Imagens/Home/Logo.svg"
            alt="Imagem"
          />
          <h1 className={styles.Titulo}>
            Experimente nossa solução completa de CRM e vendas, grátis por 30
            dias.
          </h1>
        </div>
        <h2 className={styles.Subtitulo}>
          Com o Sales Cloud Professional Edition, você tem acesso a:
        </h2>
        <div className={styles.Beneficios}>
          <p className={styles.TextBenef}>
            Dados pré-carregados e recursos para integrar os dados da sua
            empresa;
          </p>
          <p className={styles.TextBenef}>
            Processos, relatórios e dashboards pré-configurados;
          </p>
          <p className={styles.TextBenef}>
            Experiências guiadas para representantes, líderes e gestores de
            vendas;
          </p>
          <p className={styles.TextBenef}>
            Guias e outros materiais sobre boas práticas de vendas;
          </p>
          <p className={styles.TextBenef}>
            Onboarding integrado, treinamentos e webinars online;
          </p>
          <p className={styles.TextBenef}>
            Configuração de pontuação e roteamento de leads;
          </p>
          <p className={styles.TextBenef}>
            Ferramentas para automação de tarefas recorrentes;
          </p>
          <p className={styles.TextBenef}>
            Uma visão completa da performance de seus representantes e equipes
            de vendas.
          </p>
        </div>
        <p className={styles.Duvidas}>
          <span className={styles.Negrito}>duvidas?</span> Entre em contato e
          fale com um de nossos especialistas: {" "}
          <span className={styles.Negrito}>0800 891 1887</span>
        </p>
        <img
          className={styles.img}
          src="/Imagens/Cadastro/Foto.Cadastro.gif"
          alt="Imagem"
        />
      </motion.div>
      <motion.div
        className={styles.Formulario}
        initial={{ x: "-100vw", opacity: 0 }} // Começa fora da tela à esquerda
        animate={{ x: 0, opacity: 1 }} // Anima para a posição inicial e opacidade completa
        transition={{ type: "spring", duration: 4, bounce: 0.25 }} // Tipo de transição e duração
      >
        <form onSubmit={handleSubmit}>
          <h3 className={styles.title}>
            Inscreva-se para começar sua avaliação gratuita.
          </h3>
          <h4 className={styles.titleSub}>
            Preencha o formulário abaixo e em breve entraremos em contato sobre
            seu teste gratuito.
          </h4>
          <div className={styles.inputGroup}>
            <input type="text" required className={styles.input} />
            <label htmlFor="">Nome completo</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" required className={styles.input} />
            <label htmlFor="">Cargo</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="email" required className={styles.input} />
            <label htmlFor="">Email corporativo</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="tel" required className={styles.input} />
            <label htmlFor="">Telefone</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" required className={styles.input} />
            <label htmlFor="">Empresa</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" required className={styles.input} />
            <label htmlFor="">Tamanho da empresa</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" required className={styles.input} />
            <label htmlFor="">País/Região</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" required className={styles.input} />
            <label htmlFor="">Idioma</label>
          </div>
          <div className={styles.remember}>
            <label className={isChecked ? styles.checked : ""}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
              />
              <span className={styles.checkbox}></span>
              <span className={styles.label}>
                Estou de acordo com o{" "}
                <span className={styles.Termos}>Main services Agreement.</span>
              </span>
            </label>
          </div>
          <p className={styles.TextFinal}>
            Sua avaliação gratuita pode ser provisionada ou migrada para o
            Hyperforce, a infraestrutura de nuvem pública do Salesforce.
          </p>

          <p className={styles.TextFinal}>
            Ao inscrever-se, você confirma que concorda com o processamento de
            seus dados pessoais pela Salesforce, conforme descrito na{" "}
            <span className={styles.Termos2}>Declaração de privacidade.</span>
          </p>
          <button className={styles.TesteGratuitamente}>
            Começar teste gratuito
          </button>
        </form>
      </motion.div>
      <div className="Chatbot">
        <KommunicateChat />
      </div>
    </div>
  );
};

export default TesteGratis;
