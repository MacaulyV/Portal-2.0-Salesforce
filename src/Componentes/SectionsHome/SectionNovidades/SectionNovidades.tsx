import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./SectionNovidades.module.css";

const CardVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 3.0, ease: "easeInOut" } },
  hover: { y: -100, transition: { duration: 0.75, ease: "easeInOut" } }, // Velocidade de subida ao passar o mouse
  hoverOut: { y: 0, transition: { duration: 0.75, ease: "easeInOut" } }, // Velocidade de descida ao retirar o mouse
};

const SectionNovidades: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      // Executar alguma ação quando a seção estiver visível
    }
  }, [inView]);

  return (
    <article className={styles.SectionNovidades}>
      <h2 className={styles.Titulo}>Receba as novidades do Salesforce.</h2>
      <motion.div className={styles.Cards} ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={CardVariants}>
        <motion.div
          className={styles.Card1}
          variants={CardVariants}
          whileHover="hover"
          whileTap="hover"
        >
          <div className={styles.Imagem1}>
            <img
              className={styles.Icone}
              src="\Imagens\Home\Icon-Rose.svg"
              alt="Ícone do Card"
            />
          </div>
          <div className={styles.TituloSubtituloTextoBottom}>
            <h3 className={styles.TituloCard}>Service Cloud</h3>
            <h4 className={styles.Subtitulo}>
              Melhore a satisfação do cliente em um terço
            </h4>
            <p className={styles.Texto}>
              Aumente a satisfação do cliente em 32% com o Service Cloud.
            </p>
            <div className={styles["Button-Icon"]}>
              <svg className={styles["Icon"]} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 18h-3c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v3h3c.621 0 1 .522 1 1v14c0 .621-.522 1-1 1h-14c-.48 0-1-.379-1-1zm1.5-10.5v13h13v-13zm9-1.5v-2.5h-13v13h2.5v-9.5c0-.481.38-1 1-1z" fill-rule="nonzero"/></svg>
              <p className={styles["Button0"]}>Explore o guia</p>
            </div> 
          </div>
        </motion.div>

        <motion.div
          className={styles.Card2}
          variants={CardVariants}
          whileHover="hover"
          whileTap="hover"
        >
          <div className={styles.Imagem2}>
            <img
              className={styles.Icone}
              src="\Imagens\Home\Icon-Forrester.svg"
              alt="Ícone do Card"
            />
          </div>
          <div className={styles.TituloSubtituloTextoBottom}>
            <h3 className={styles.TituloCard}>Guia da Forrester</h3>
            <h4 className={styles.Subtitulo}>
              Confira o novo guia da Forrester
            </h4>
            <p className={styles.Texto}>
              Confira o novo guia da Forrester sobre como as empresas estão
              investindo em IA para CRM.
            </p>
            <div className={styles["Button-Icon0"]}>
              <svg className={styles["Icon3"]}> xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10v10h1.748c5.154 0 6.031 3 10.029 3 2.447 0 4.156-1.06 4.668-3.464.252-1.188.903-4.606 1.088-5.536h3.434c1.775 0 3.033-1.41 3.033-3 0-1.579-1.244-3-3.033-3h-7.42c.256-1.044.45-2.262.45-3.387 0-1.946-.583-3.613-2.444-3.613-3.115 0-3.928 9-9.805 9h-1.748zm2 1.996c5.344.316 8.361-7.223 8.928-8.235.625-1.115 1.107-.589 1.107.412 0 1.798-.859 5.107-1.035 5.827h9.967c.674 0 1.033.54 1.033 1 0 .54-.415 1-1.033 1h-6.87c-.315 0-.571.256-.571.572 0 .315.256.571.571.571h.575c.534 0 .938.49.833 1.014-.079.398-.428.685-.833.685h-1.273c-.315 0-.571.256-.571.572 0 .315.256.571.571.571h.83c.531 0 .932.487.828 1.008-.078.396-.424.681-.828.681h-1.533c-.315 0-.571.256-.571.572 0 .315.256.571.571.571h.912c.523 0 .867.545.646 1.017-.305.645-.932 1.166-2.477 1.166-1.355 0-2.193-.464-3.354-1.107-1.484-.822-3.319-1.839-6.423-1.891v-6.006z"/></svg>
              <p className={styles["Button0"]}>Obtenha o guia</p>
            </div> 
          </div>
        </motion.div>

        <motion.div
          className={styles.Card3}
          variants={CardVariants}
          whileHover="hover"
          whileTap="hover"
        >
          <div className={styles.Imagem3}>
            <img
              className={styles.Icone}
              src="\Imagens\Home\Icon-Einsten.svg"
              alt="Ícone do Card"
            />
          </div>
          <div className={styles.TituloSubtituloTextoBottom}>
            <h3 className={styles.TituloCard}>Einstein Copilot</h3>
            <h4 className={styles.Subtitulo}>Descubra do Einstein é capaz</h4>
            <p className={styles.Texto}>
              Diga olá ao Einstein Copilot: seu assistente com tecnologia de IA
              para todos os aplicativos.
            </p>
            <div className={styles["Button-Icon0"]}>
              <svg className={styles["Icon3"]}> clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill-rule="nonzero"/></svg>
              <p className={styles["Button0"]}>Veja-o em ação</p>
            </div> 
          </div>
        </motion.div>

        <motion.div
          className={styles.Card4}
          variants={CardVariants}
          whileHover="hover"
          whileTap="hover"
        >
          <div className={styles.Imagem4}>
            <img
              className={styles.Icone4}
              src="\Imagens\Home\Icon-Slack.svg"
              alt="Ícone do Card"
            />
          </div>
          <div className={styles.TituloSubtituloTextoBottom}>
            <h3 className={styles.TituloCard}>A IA do Slack chegou</h3>
            <h4 className={styles.Subtitulo}>
              Agilize sua jornada de trabalho imediatamente
            </h4>
            <p className={styles.Texto}>
              Descubra como os novos recursos de IA do Slack ajudam você a
              trabalhar mais rapidamente.
            </p>
            <div className={styles["Button-Icon1"]}>
              <svg className={styles["Icon3"]}> xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10v10h1.748c5.154 0 6.031 3 10.029 3 2.447 0 4.156-1.06 4.668-3.464.252-1.188.903-4.606 1.088-5.536h3.434c1.775 0 3.033-1.41 3.033-3 0-1.579-1.244-3-3.033-3h-7.42c.256-1.044.45-2.262.45-3.387 0-1.946-.583-3.613-2.444-3.613-3.115 0-3.928 9-9.805 9h-1.748zm2 1.996c5.344.316 8.361-7.223 8.928-8.235.625-1.115 1.107-.589 1.107.412 0 1.798-.859 5.107-1.035 5.827h9.967c.674 0 1.033.54 1.033 1 0 .54-.415 1-1.033 1h-6.87c-.315 0-.571.256-.571.572 0 .315.256.571.571.571h.575c.534 0 .938.49.833 1.014-.079.398-.428.685-.833.685h-1.273c-.315 0-.571.256-.571.572 0 .315.256.571.571.571h.83c.531 0 .932.487.828 1.008-.078.396-.424.681-.828.681h-1.533c-.315 0-.571.256-.571.572 0 .315.256.571.571.571h.912c.523 0 .867.545.646 1.017-.305.645-.932 1.166-2.477 1.166-1.355 0-2.193-.464-3.354-1.107-1.484-.822-3.319-1.839-6.423-1.891v-6.006z"/></svg>
              <p className={styles["Button0"]}>Leia o artigo</p>
            </div> 
          </div>
        </motion.div>
      </motion.div>
    </article>
  );
};

export default SectionNovidades;
