import { motion } from "framer-motion";
import styles from "./SectionCapa.module.css";
import React, { useEffect, useRef } from "react";

const SectionCapa = () => {
  const sectionRef = useRef<HTMLDivElement>(null); // Explicitly type sectionRef

  useEffect(() => {
    const checkScroll = () => {
      if (sectionRef.current) {
        const { scrollWidth, clientWidth } = sectionRef.current;
        if (scrollWidth > clientWidth) {
          sectionRef.current.style.overflowX = 'hidden';
        } else {
          sectionRef.current.style.overflowX = 'auto';
        }
      }
    };

    window.addEventListener('resize', checkScroll);
    checkScroll();

    return () => {
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <div className={styles.SectionCapa}>
      <section ref={sectionRef} className={styles.Capa}>
        {/* Conteúdo da Seção Capa */}
        <div className={styles.Destaque}>
          <p className={styles.Texto}>inteligência em cada decisão</p>
          {/* Aplicando efeito hover ao texto "Descubra mais" */}
          <div className={styles.ButtonEinstein}>
          <span>Einstein Copilot</span>
          <img
            src="/Imagens/Home/EinsteinbButton.svg"
            alt="Imagem de fundo"
            className={styles.EinsteinSvg}
          />
          </div>
        </div>
        <div className="Apresentação">
          {/* Título da Seção Capa */}
          <h1 className={styles.Titulo}>
            Encante os
            <br />
            clientes e aumente
            <br />
            a receita com o
            <br />
            CRM de IA nº 1.
          </h1>
          {/* Texto explicativo da Seção Capa */}
          <p className={styles.TextoCapa}>
            Obtenha um CRM completo para vendas, serviços,
            <br />
            marketing, comércio e muito mais. Está tudo em uma
            <br />
            plataforma integrada. Chamamos isso de Einstein 1.
            <br />
            Ele permite que você trabalhe de maneira mais 
            <br />
            inteligente para que possa passar mais tempo 
            <br />
            desenvolvendo relacionamentos, produtividade e 
            <br />
            resultados financeiros.
          </p>
          {/* Botão para iniciar o teste gratuito */}
          <button className={styles.TextoBottomCapa}>Iniciar teste gratuito</button>
          {/* Botão para Assistir Demostração */}
          <div className={styles["Video-Demonstração"]}>
            <svg
              className={styles["Icon-video"]}
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
            </svg>
            <p className={styles["Assistir-Video"]}>Assista à demonstração</p>
          </div>
        </div>
        {/* Div para a apresentação de vídeo e GIF */}
        <div className={styles["Gif-Video-Capa"]}>
          {/* Vídeo de apresentação */}
         <img  className={styles.EinsteinGifVideo} src="/Videos/Home/EinsteinCopilot.gif" alt="" />
          {/* GIF de apresentação */}
          <img
            src="/Videos/Home/GifCapa.gif"
            alt="Gif de Apresentação"
            className={styles.GifCapa}
          />
          <img
            src="/Imagens/Home/BackgroudCapa2.png"
            alt="Imagem de fundo"
            className={styles.FundoImg}
          />
        </div>
      </section>
    </div>
  );
};

export default SectionCapa;
