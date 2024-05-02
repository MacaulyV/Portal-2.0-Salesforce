import React from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.Background}>
      <div className={styles.Content}>
        <motion.div className={styles.Idioma} whileHover={{ x: 3, scale: 1.1 }}>
          <img
            className={styles.Planet}
            src="\Imagens\Home\IconPlanet.svg"
            alt="Ícone"
          />
          <h4 className={styles.TextIdioma}>Mudar de região</h4>
          <svg className={styles.Seta}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg>
        </motion.div>
        <div className={styles.Links}>
          <a className={styles.Link} href="#">
            <motion.div
              whileHover={{
                scale: 1.1,
                color: "aqua",
                textDecoration: "underline aqua",
              }}
            >
              Legal
            </motion.div>
          </a>
          <a className={styles.Link} href="#">
            <motion.div
              whileHover={{
                scale: 1.1,
                color: "aqua",
                textDecoration: "underline aqua",
              }}
            >
              Termos de serviços
            </motion.div>
          </a>
          <a className={styles.Link} href="#">
            <motion.div
              whileHover={{
                scale: 1.1,
                color: "aqua",
                textDecoration: "underline aqua",
              }}
            >
              Declaração de privacidade
            </motion.div>
          </a>
          <a className={styles.Link} href="#">
            <motion.div
              whileHover={{
                scale: 1.1,
                color: "aqua",
                textDecoration: "underline aqua",
              }}
            >
              Divulgação responsável
            </motion.div>
          </a>
          <a className={styles.Link} href="#">
            <motion.div
              whileHover={{
                scale: 1.1,
                color: "aqua",
                textDecoration: "underline aqua",
              }}
            >
              Segurança
            </motion.div>
          </a>
          <a className={styles.Link} href="#">
            <motion.div
              whileHover={{
                scale: 1.1,
                color: "aqua",
                textDecoration: "underline aqua",
              }}
            >
              Contato
            </motion.div>
          </a>
          <a className={styles.Link} href="#">
            <motion.div
              whileHover={{
                scale: 1.1,
                color: "aqua",
                textDecoration: "underline aqua",
              }}
            >
              Referências de cookies
            </motion.div>
          </a>
        </div>
        <p className={styles.Text}>
          © Copyright 2023 Salesforce, Inc. Todos os direitos reservados. As
          diversas marcas comerciais pertencem a seus respectivos proprietários.
          Salesforce Brasil, Av. Jornalista Roberto Marinho, 85 – 14º andar –
          Cidade Monções, São Paulo – SP, 04575-000 Brasil.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
