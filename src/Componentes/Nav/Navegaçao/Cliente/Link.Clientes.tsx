"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './LinkClientes.module.css';

export const MotionDiv = motion.div;

interface LinkClienteProps {
 className?: string;
}

const LinkCliente: React.FC<LinkClienteProps> = ({ className }) => {
 // Definindo as propriedades de animação para o estado de hover
 const hoverAnimation = {
    // Adicione as propriedades de animação desejadas aqui
 };

 return (
    <motion.a
      href="#"
      className={`${styles.linkCliente} ${className}`}
      whileHover={hoverAnimation} // Aplicando a animação de hover
    >
      Clientes
    </motion.a>
 );
};

export default LinkCliente;
