"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './TesteGratis.module.css';

interface TesteGratisProps extends React.HTMLAttributes<HTMLElement> {
 className?: string;
}

const TesteGratis: React.FC<TesteGratisProps> = ({ className }) => {
 const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    // Aqui você pode adicionar a lógica para o que deve acontecer quando o link for clicado
    console.log('Link clicado');
 };

 return (
  <motion.a
  href="#"
  className={`${styles.TesteGratis} ${className}`}
  onClick={handleClick}
>
  <span className={styles.Texto}>Teste Gratis</span>
</motion.a>
);
};

export default TesteGratis;