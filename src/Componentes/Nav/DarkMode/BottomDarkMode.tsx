import React, { useState } from "react";
import styles from "./BottomDarkMode.module.css";
import { motion } from "framer-motion";

const BottomDarkMode: React.FC = () => {
 const [isChecked, setIsChecked] = useState(false);
 const [currentImageIndex, setCurrentImageIndex] = useState(0);

 const images = [
    "/Imagens/Home/DarkMode1.svg",
    "/Imagens/Home/DarkMode2.svg",
    "/Imagens/Home/DarkMode3.svg",
    "/Imagens/Home/DarkMode4.svg",
 ];

 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    document.body.style.background = event.target.checked ? "#0D031D" : "#ffffff";
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
