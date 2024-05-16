import React from "react";
import { motion } from "framer-motion";
import styles from "./SectionCRM.module.css";

const SectionCRM = () => {
  return (
    <article className={styles.SectionCRM}>
      {/* Conteúdo da Seção CRM */}
      <div className={styles.backgroundBlur}>
        <h2 className={styles.Titulo}>
          Fortaleça todas as equipes com CRM, IA confiável e dados.
        </h2>
        <p  className={styles.Text}>Saiba como o Salesforce <span className={styles.CRM}>CRM</span> , desenvolvido pela confiável plataforma Einstein 1, ajuda todos na sua empresa a serem mais produtivos e a aumentar a fidelidade dos clientes.</p>
      </div>
      <div className={styles.Blocos}>
        {/* Bloco 1 */}
        <div className={styles.Bloco1}>
          <img className={styles.Imagem1} src="\Imagens\Home\ImgBloco1.svg" alt="" />{" "}
          {/* Imagem do Bloco 1 */}
          <p className={styles.Subtitulo}>Pequenas Empresas</p>
          <p className={styles.Texto}>
            Venda de forma mais inteligente e forneça suporte mais rápido em um
            único aplicativo.
          </p>
          <div className={styles.ButtonDiv}>
            <svg className={styles.IconButton}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                fill="currentColor"
              />
              <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
            </svg>
            {/* Ícone do botão do Bloco 1 */}
            <p className={styles["TextButton"]}>Assista a demonstrações</p>{" "}
            {/* Texto do botão do Bloco 1 */}
          </div>
        </div>
        {/* Bloco 2 */}
        <div className={styles.Bloco2}>
          <img className={styles.Imagem2} src="\Imagens\Home\ImgBloco2.svg" alt="" />{" "}
          {/* Imagem do Bloco 2 */}
          <p className={styles.Subtitulo2}>Venda</p>
          <p className={styles.Texto}>
            Feche mais negócios mais rapidamente e libere o crescimento com
            vendas impulsionadas por IA
          </p>
          <div className={styles.ButtonDiv}>
          <svg className={styles.IconButton}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                fill="currentColor"
              />
              <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
            </svg>
            {/* Ícone do botão do Bloco 2 */}
            <p className={styles["TextButton"]}>Assista a demonstrações</p>{" "}
            {/* Texto do botão do Bloco 2 */}
          </div>
        </div>
        {/* Bloco 3 */}
        <div className={styles.Bloco3}>
          <img className={styles.Imagem3} src="\Imagens\Home\ImgBloco3.svg" alt="" />{" "}
          {/* Imagem do Bloco 3 */}
          <p className={styles.Subtitulo3}>Serviço</p>
          <p className={styles.Texto}>
            Dimensione facilmente o serviço e aumente a produtividade com
            suporte de IA.
          </p>
          <div className={styles.ButtonDiv3}>
          <svg className={styles.IconButton}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                fill="currentColor"
              />
              <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
            </svg>
            {/* Ícone do botão do Bloco 3 */}
            <p className={styles["TextButton"]}>Assista a demonstrações</p>{" "}
            {/* Texto do botão do Bloco 3 */}
          </div>
        </div>
        {/* Bloco 4 */}
        <div className={styles.Bloco4}>
          <img className={styles.Imagem4} src="\Imagens\Home\ImgBloco4.svg" alt="" />{" "}
          {/* Imagem do Bloco 4 */}
          <p className={styles.Subtitulo}>Ver todos os produtos</p>
          <p className={styles.Texto}>
            {" "}
            Conecte-se com os clientes de uma nova maneira com o Customer 360
            impulsionado pela IA.
          </p>
          <div className={styles.ButtonDiv}>
          <svg className={styles.IconButton}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                fill="currentColor"
              />
              <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
            </svg>
            <p className={styles["TextButton"]}>Assista a demonstrações</p>{" "}
            {/* Texto do botão do Bloco 4 */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default SectionCRM;
