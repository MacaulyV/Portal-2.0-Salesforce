import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contato.module.css";

const Contato = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div>
      {!showForm && ( // Condição adicionada aqui para mostrar o botão apenas se o formulário não estiver aberto
        <button className={styles.BottomContato} onClick={handleClick}>
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z" />
          </svg>
          Contato
        </button>
      )}

      {showForm && (
        <form className={styles.FormContato}>
          <div className={styles.TituloContainer}>
            <h1 className={styles.TituloFormulario}>
              Entraremos em Contato{" "}
              <span className="Marcação">Conecte-se Agora!</span>
            </h1>
            <img
              src="/Imagens/Home/X.svg"
              alt="Fechar"
              className={styles.IconeFechar}
              onClick={handleClose}
            />
          </div>
          <input
            type="text"
            placeholder="Nome Completo"
            className={styles.Campo}
          />
          <input type="email" placeholder="Email" className={styles.Campo} />
          <input type="tel" placeholder="Telefone" className={styles.Campo} />
          <button type="submit" className={styles.Enviar}>
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default Contato;
