import React, { useState } from "react";
import styles from "./BottomDarkMode.module.css";
import { motion } from "framer-motion";

const BottomDarkMode: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [themeChanged, setThemeChanged] = useState(false);

  const images = [
    "/Imagens/Home/DarkMode1.svg",
    "/Imagens/Home/DarkMode2.svg",
    "/Imagens/Home/DarkMode3.svg",
    "/Imagens/Home/DarkMode4.svg",
  ];

  const handleInputChange = () => {
    // Verifica se o modo escuro está ativado
    if (!darkMode) {
      // Seleciona todos os elementos de texto na página
      const textElements = document.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6, span, a, li"
      );

      const darkModeActive = true; // Aqui você pode colocar a lógica para verificar se o modo escuro está ativado

      // Itera sobre os elementos e define a cor do texto\\\\\\\\\\\
      textElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        if (htmlElement.tagName === "A") {
          // Se o elemento for um link, define uma cor específica para os links
          htmlElement.style.color = "#ffffff"; // Exemplo de cor para links (branco)
        } else if (htmlElement.tagName === "H1") {
          // Se o elemento for um h1, define uma cor específica
          htmlElement.style.color = "#2a8dff ";
        } else if (htmlElement.tagName === "H2") {
          htmlElement.style.color = "#ffffff ";
        } else if (htmlElement.tagName === "H3") {
          htmlElement.style.color = "#005eff";
        } else if (htmlElement.tagName === "H4") {
          htmlElement.style.color = "#ffffff";
        } else {
          // Se o elemento não for um link nem um h1, define a cor do texto como branco
          htmlElement.style.color = "#ffffff";

          
        }
      });

      // Seleciona todas as navegações na página
      const navElements = document.querySelectorAll("nav");

      // Define a cor de fundo das navegações
      navElements.forEach((nav) => {
        const htmlNav = nav as HTMLElement;
        htmlNav.style.background =
          "radial-gradient(circle, rgb(104, 63, 251) 0%, #00146c 40%)";
      });

      // Altera a cor de fundo da página
      document.documentElement.style.background =
        "radial-gradient(circle, rgba(7, 12, 96, 0.944) 0%, #000000 50%)";

      // Atualiza o estado para indicar que a cor do texto e do fundo foi alterada
      setThemeChanged(true);
    } else {
      // Verifica se a cor do texto e do fundo já foi alterada antes
      if (themeChanged) {
        // Seleciona todos os elementos de texto na página
        const textElements = document.querySelectorAll(
          "p, h1, h2, h3, h4, h5, h6, span, a, li"
        );

        // Itera sobre os elementos e remove a cor do texto definida anteriormente
        textElements.forEach((element) => {
          const htmlElement = element as HTMLElement;
          htmlElement.style.color = ""; // Remove a cor do texto
        });

        // Seleciona todas as navegações na página
        const navElements = document.querySelectorAll("nav");

        // Remove a cor de fundo das navegações
        navElements.forEach((nav) => {
          const htmlNav = nav as HTMLElement;
          htmlNav.style.background = ""; // Remove a cor de fundo das navegações
        });

        // Remove a cor de fundo da página
        document.documentElement.style.background = "";

        // Atualiza o estado para indicar que a cor do texto e do fundo voltaram ao estado original
        setThemeChanged(false);
      }
    }
    // Inverte o estado do modo escuro
    setDarkMode(!darkMode);
  };

  const handleClick = () => {
    const nextIndex = (currentImageIndex + 2) % images.length; // Avança 2 imagens
    setCurrentImageIndex(nextIndex);
  };

  return (
    <label htmlFor="toggle">
      <input
        type="checkbox"
        id="toggle"
        className={styles.checkbox}
        onChange={handleInputChange}
      />
      <div className={styles.imageContainer}>
        <motion.img
          className={styles.logo}
          alt="Logo"
          src={images[currentImageIndex]}
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </label>
  );
};

export default BottomDarkMode;
