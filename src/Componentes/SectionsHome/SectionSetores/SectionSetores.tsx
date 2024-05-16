import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./SectionSetores.module.css";

const CardVariants = {
  hidden: { y: 0 }, // Removendo a transição de opacidade para os cards
  visible: {
    y: [0, -40, 0],
    transition: { duration: 5, repeat: Infinity, repeatType: "reverse" },
  },
  hover: { y: 50, transition: { duration: 0.85, ease: "easeInOut" } },
  hoverOut: { y: 0, transition: { duration: 0.85, ease: "easeInOut" } },
};

const SectionSetores: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <motion.section
      className={styles.SectionSetores}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <h3 className={styles.Titulo}>Encontre inovações para qualquer setor.</h3>
      <p className={styles.Text}>
        Seja qual for o seu setor, oferecemos soluções para modernizar o seu
        negócio, economizar tempo e reduzir custos.
      </p>
      <div className={styles.Button}>
        <svg
          className={styles.Lapis}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" />
        </svg>
        <p className={styles.TextoButton}>Veja todas as indústrias</p>
      </div>
      <div className={styles.Cards}>
        <motion.div
          className={styles.Card1}
          variants={CardVariants}
          whileHover="hover"
          whileTap="hover"
          initial="hidden"
          animate={controls}
        >
          <img
            className={styles.Imagem}
            src="/Imagens/Home/IconRose1.svg"
            alt=""
          />
          <h4 className={styles.Subtitulo1}>Serviços financeiros</h4>
        </motion.div>
        <motion.div
          className={styles.Card2}
          variants={CardVariants}
          whileHover="hover"
          whileTap="hover"
          initial="hidden"
          animate={controls}
        >
          <img
            className={styles.Imagem}
            src="/Imagens/Home/IconRose2.svg"
            alt=""
          />
          <h4 className={styles.Subtitulo2}>Varejo</h4>
        </motion.div>
        <motion.div
          className={styles.Card3}
          variants={CardVariants}
          whileHover="hover"
          whileTap="hover"
          initial="hidden"
          animate={controls}
        >
          <img
            className={styles.Imagem}
            src="/Imagens/Home/IconRose3.svg"
            alt=""
          />
          <h4 className={styles.Subtitulo3}>Saúde & Ciências da Vida</h4>
        </motion.div>
        <motion.div
          className={styles.Card4}
          variants={CardVariants}
          whileHover="hover"
          whileTap="hover"
          initial="hidden"
          animate={controls}
        >
          <img
            className={styles.Imagem}
            src="/Imagens/Home/IconRose4.svg"
            alt=""
          />
          <h4 className={styles.Subtitulo4}>Fabricação</h4>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SectionSetores;
