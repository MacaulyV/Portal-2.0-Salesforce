"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './LinkProduto.module.css';

export const MotionDiv = motion.div;

interface LinkProdutoProps {
  className?: string;
 }
 
 const LinkProduto: React.FC<LinkProdutoProps> = ({ className }) => {
  // Definindo as propriedades de animação para o estado de hover
  const hoverAnimation = {
  
  };
 
  return (
     <motion.a // Usando o componente motion.a do Framer Motion
       href="#"
       className={`${styles.linkProduto} ${className}`}
       whileHover={hoverAnimation} // Aplicando a animação de hover
     >
       Produtos
     </motion.a>
  );
 };
 
 export default LinkProduto;