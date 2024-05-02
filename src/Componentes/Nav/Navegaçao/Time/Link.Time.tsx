"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Link.Time.module.css';

export const MotionDiv = motion.div;

interface LinkTimeProps {
 className?: string;
}

const LinkTime: React.FC<LinkTimeProps> = ({ className }) => {
 // Definindo as propriedades de animação para o estado de hover
 const hoverAnimation = {
    // Adicione as propriedades de animação desejadas aqui
 };

 return (
    <motion.a
      href="#"
      className={`${styles.linkTime} ${className}`}
      whileHover={hoverAnimation} // Aplicando a animação de hover
    >
      Time
    </motion.a>
 );
};

export default LinkTime;
