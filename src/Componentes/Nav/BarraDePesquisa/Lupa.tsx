"use client";
import React, { useState, useEffect } from "react";
import styles from "./Lupa.module.css";
import { SearchSuggestion, searchSuggestions } from "../searchSuggestions";
import { Transform } from "stream";

interface LupaProps {
  className?: string;
}

const Lupa: React.FC<LupaProps> = ({ className }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);

  useEffect(() => {
    if (searchTerm) {
      const filteredSuggestions = searchSuggestions.filter((suggestion) =>
        suggestion.term.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchTerm(suggestion.term);
    window.location.href = suggestion.link;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const suggestion = suggestions.find((s) => s.term === searchTerm);
      if (suggestion) {
        window.location.href = suggestion.link;
      }
    }
  };

  // Definindo os estilos para as sugestões
  const suggestionStyle = {
    padding: "10px",
    cursor: "pointer",
    color: "#ffff", // Corrigindo a sintaxe da cor
    fontFamily: '"SF Pro Display", sans-serif', // Corrigindo a sintaxe da fonte
    fontSize: "1.0em", // Tamanho da fonte
    marginLeft: "-1020%", // Margin left negativo
    marginTop: "5%", // Margin top
    transform: "translateY(-50%)", // Transformação
    borderRadius: "10px", // Bordas arredondadas
    border: "1px solid", // Corrigindo a sintaxe da borda
    borderColor: "#9900ff", // Corrigindo a sintaxe da cor da borda
    background: "#1a0231", // Background
    width: "1050%", // Largura
  };

  return (
    <div
      className={`${styles.Lupa} ${className}`}
      onMouseEnter={() => setShowSearchBar(true)}
      onMouseLeave={() => setShowSearchBar(false)}
    >
      <img
        src="/Imagens/Home/Lupa.svg"
        alt="Lupa"
        className={styles.lupaImage}
      />
      {showSearchBar && (
        <div>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          {searchTerm &&
            suggestions.map(
              (
                suggestion,
                index // Verifica se searchTerm tem conteúdo
              ) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  style={suggestionStyle} // Aplicando os estilos diretamente
                >
                  {suggestion.term}
                </div>
              )
            )}
        </div>
      )}
    </div>
  );
};
export default Lupa;
