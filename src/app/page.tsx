"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import LinkProduto from "@/Componentes/Nav/Navegaçao/Produto/LinkProduto";
import LinkCliente from "@/Componentes/Nav/Navegaçao/Cliente/Link.Clientes";
import LinkTime from "@/Componentes/Nav/Navegaçao/Time/Link.Time";
import BottomDarkMode from "@/Componentes/Nav/DarkMode/BottomDarkMode";
import ComponenteLogin from "@/Componentes/Nav/Autentificaçao/Login/ComponenteLogin";
import TesteGratis from "@/Componentes/Nav/Autentificaçao/Cadastro/TesteGratis";
import Lupa from "@/Componentes/Nav/BarraDePesquisa/Lupa";
import Contato from "@/Componentes/Tecnologias/ContactForm/Contato";
import ReactDOM from "react-dom";
import VLibras from "react-vlibras";
import TextToSpeech from "@/Componentes/Tecnologias/AudioDescrição/TextToSpeech";
import SectionCapa from "@/Componentes/SectionsHome/SectionCapa/SectionCapa";
import KommunicateChat from "@/Componentes/Tecnologias/Chatbot/chat";
import SectionNovidades from "@/Componentes/SectionsHome/SectionCRM/SectionCRM";
import SectioncCRM from "@/Componentes/SectionsHome/SectionNovidades/SectionNovidades";
import SectionSetores from "@/Componentes/SectionsHome/SectionSetores/SectionSetores";
import Footer from "@/Componentes/Footer/Footer";

const Home = () => {
  useEffect(() => {
    // Aplicar overflow-x: hidden ao body quando o componente for montado
    document.body.style.overflowX = "hidden";

    // Limpar ao desmontar o componente
    return () => {
      document.body.style.overflowX = "";
    };
  }, []); // Dependências vazias significam que este efeito será executado apenas uma vez após o componente ser montado

  if (typeof window !== "undefined") {
    document.title = "Projeto Salesforce: Portal 2.0";
  }

  return (
    <div className={styles.box}>
      <article className={styles.Home} style={{ flex: 1 }}>
        <nav className={styles.navbar}>
          <img
            className={styles.logo}
            alt="Logo"
            src="/Imagens/Home/Logo.svg"
          />
          <div className="nav-links">
            <LinkProduto className="Link-Produto" />
            <LinkCliente className="Link-Cliente" />
            <LinkTime className="Link-Time" />
          </div>
          <div className="DarkMode">
            <BottomDarkMode />
          </div>
          <div className="barra-pesquisa">
            <Lupa />
          </div>
          <div className="Icon-Login">
            <ComponenteLogin />
          </div>
          <div className="Teste-Gratis">
            <TesteGratis />
          </div>
        </nav>
        <div className={styles.CapaInicial}>
          <SectionCapa />
          <TextToSpeech />
        </div>
        <div className="Contato">
          <Contato />
        </div>
        <div className="Chatbot">
          <KommunicateChat />
        </div>
        <div className={styles.SectionCRM}>
          <SectioncCRM />
        </div>
        <div className={styles.SectionNovidades}>
          <SectionNovidades />
        </div>
        <div className={styles.SectionIndustrias}>
          <SectionSetores />
        </div>
      </article>
      {/* Adicionando o espaço vazio aqui */}
      <div style={{ height: "0px" }}></div>
      <footer className={styles.Footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
