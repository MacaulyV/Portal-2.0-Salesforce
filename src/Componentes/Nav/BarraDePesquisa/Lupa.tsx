"use client";
import React, { useState } from 'react';
import styles from './Lupa.module.css';

interface LupaProps extends React.HTMLAttributes<HTMLElement> {
 className?: string;
}

const Lupa: React.FC<LupaProps> = ({ className }) => {
 const [showSearchBar, setShowSearchBar] = useState(false);

 return (
    <div
      className={`${styles.Lupa} ${className}`}
      onMouseEnter={() => setShowSearchBar(true)}
      onMouseLeave={() => setShowSearchBar(false)}
    >
      <img src="/Imagens/Home/Lupa.svg" alt="Lupa" className={styles.lupaImage} />
      {showSearchBar && (
        <input
          type="text"
          placeholder="Buscar..."
          className={styles.searchBar}
        />
      )}
      
    </div>
 );
};

export default Lupa;
