import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import VLibras from "react-vlibras";
import ReactDOM from "react-dom";
import TextToSpeech from "@/Componentes/Tecnologias/AudioDescrição/TextToSpeech";
import styles from "./Cadastro.module.css";
import KommunicateChat from "@/Componentes/Tecnologias/Chatbot/chat";

interface TesteGratisProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const TesteGratis: React.FC<TesteGratisProps> = ({ className }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [nomeCompletoError, setNomeCompletoError] = useState("");
  const [cargo, setCargo] = useState("");
  const [cargoError, setCargoError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telefone, setTelefone] = useState("");
  const [telefoneError, setTelefoneError] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [empresaError, setEmpresaError] = useState("");
  const [tamanhoEmpresa, setTamanhoEmpresa] = useState("");
  const [tamanhoEmpresaError, setTamanhoEmpresaError] = useState("");
  const [pais, setPais] = useState("");
  const [paisError, setPaisError] = useState("");
  const [idioma, setIdioma] = useState("");
  const [idiomaError, setIdiomaError] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaError, setSenhaError] = useState("");
  const [formError, setFormError] = useState("");
  const [allFieldsTouched, setAllFieldsTouched] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleNomeCompletoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setNomeCompleto(value);

    // Limpar o erro apenas se o usuário começar a digitar no campo
    if (value.trim().length > 0 && nomeCompletoError) {
      setNomeCompletoError("");
    }
  };

  const validateNomeCompleto = (): Promise<void> => {
    return new Promise((resolve) => {
      let errorMessage = "";

      // Validar o nome completo apenas se houver algo digitado
      if (nomeCompleto.trim().length > 0) {
        // Verificar se o nome completo contém um espaço
        if (!nomeCompleto.includes(" ")) {
          errorMessage =
            "Por favor, digite o nome completo (nome e sobrenome) sem caracteres especiais.";
        } else {
          // Separar nome e sobrenome
          const [primeiroNome, sobrenome] = nomeCompleto.split(" ");

          // Validar caracteres especiais apenas no nome e sobrenome
          if (
            /[^a-zA-Z\s]/.test(primeiroNome) ||
            /[^a-zA-Z\s]/.test(sobrenome)
          ) {
            errorMessage = "O nome deve conter apenas caracteres normais.";
          }

          // Validar tamanho mínimo de 2 caracteres para cada parte (primeiro nome e sobrenome)
          if (primeiroNome.length < 2 || sobrenome.length < 2) {
            errorMessage =
              "Cada parte do nome deve conter pelo menos 2 caracteres.";
          }
        }
      } else {
        // Verificar se o usuário começou a interagir com o campo
        if (nomeCompletoError) {
          errorMessage = "Por favor, digite o nome completo.";
        }
      }

      setNomeCompletoError(errorMessage.trim());
      setAllFieldsTouched(true); // Indica que o campo foi tocado
      resolve();
    });
  };

  const handleCargoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCargo(event.target.value);

    // Limpar o erro apenas se o usuário começar a digitar no campo
    if (event.target.value.length > 0 && cargoError) {
      setCargoError("");
    }
  };

  const validateCargo = (): Promise<void> => {
    return new Promise((resolve) => {
      let errorMessage = "";

      // Validar o cargo apenas se houver algo digitado
      if (cargo.length > 0) {
        // Validar caracteres especiais
        if (/[^a-zA-Z\s]/.test(cargo)) {
          errorMessage += "O cargo deve conter apenas letras e espaços.\n";
        }

        // Validar tamanho mínimo de 3 caracteres
        if (cargo.length < 3) {
          errorMessage += "O cargo deve conter pelo menos 3 caracteres.\n";
        }
      }

      setCargoError(errorMessage.trim());
      setAllFieldsTouched(true); // Indica que o campo foi tocado
      resolve();
    });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);

    // Limpar o erro apenas se o usuário começar a digitar no campo
    if (value.trim().length > 0 && emailError) {
      setEmailError("");
    }
  };

  const validateEmail = (): Promise<void> => {
    return new Promise((resolve) => {
      let errorMessage = "";

      // Verificar se o campo foi tocado e contém valor
      if (email.trim().length > 0) {
        // Verificar se o e-mail é válido
        if (!/\S+@\S+\.\S+/.test(email)) {
          errorMessage = "Digite um e-mail válido.";
        }
      } else if (emailError) {
        // Se o campo foi tocado mas está vazio
        errorMessage = "O campo e-mail é obrigatório.";
      }

      setEmailError(errorMessage.trim());
      setAllFieldsTouched(true); // Indica que o campo foi tocado
      resolve();
    });
  };

  const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(event.target.value);

    // Limpar o erro apenas se o usuário começar a digitar no campo
    if (event.target.value.length > 0 && telefoneError) {
      setTelefoneError("");
    }
  };

  const validateTelefone = (): Promise<void> => {
    return new Promise((resolve) => {
      let errorMessage = "";

      // Validar o telefone apenas se houver algo digitado
      if (telefone.length > 0) {
        // Validar formato de telefone
        if (!/^\+?[1-9]\d{8,9}$/.test(telefone)) {
          errorMessage +=
            "Digite um número de telefone válido com 9 dígitos.\n";
        }
      }

      setTelefoneError(errorMessage.trim());
      setAllFieldsTouched(true); // Indica que o campo foi tocado
      resolve();
    });
  };

  const handleEmpresaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmpresa(event.target.value);

    // Limpar o erro apenas se o usuário começar a digitar no campo
    if (event.target.value.length > 0 && empresaError) {
      setEmpresaError("");
    }
  };

  const validateEmpresa = (): Promise<void> => {
    return new Promise((resolve) => {
      let errorMessage = "";

      // Validar o nome da empresa apenas se houver algo digitado
      if (empresa.length > 0) {
        // Validar caracteres especiais
        if (/[^a-zA-Z\s]/.test(empresa)) {
          errorMessage +=
            "O nome da empresa deve conter apenas letras e espaços.\n";
        }

        // Validar tamanho mínimo de 3 caracteres
        if (empresa.length < 3) {
          errorMessage +=
            "O nome da empresa deve conter pelo menos 3 caracteres.\n";
        }
      }

      setEmpresaError(errorMessage.trim());
      setAllFieldsTouched(true); // Indica que o campo foi tocado
      resolve();
    });
  };

  const handleTamanhoEmpresaChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTamanhoEmpresa(event.target.value);

    // Limpar o erro apenas se o usuário começar a digitar no campo
    if (event.target.value.length > 0 && tamanhoEmpresaError) {
      setTamanhoEmpresaError("");
    }
  };

  const validateTamanhoEmpresa = (): Promise<void> => {
    return new Promise((resolve) => {
      let errorMessage = "";

      // Validar o tamanho da empresa apenas se houver algo digitado
      if (tamanhoEmpresa.length > 0) {
        // Validar opções permitidas
        const opcoesValidas = ["grande", "pequena", "média", "startup"];
        const opcao = tamanhoEmpresa.trim().toLowerCase();

        if (!opcoesValidas.includes(opcao)) {
          errorMessage +=
            "Digite uma opção válida para o tamanho da empresa Exemplo: grande, pequena, média, startup.\n";
        }
      }

      setTamanhoEmpresaError(errorMessage.trim());
      setAllFieldsTouched(true); // Indica que o campo foi tocado
      resolve();
    });
  };

  const handlePaisChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPais(event.target.value);

    // Limpar o erro apenas se o usuário começar a digitar no campo
    if (event.target.value.length > 0 && paisError) {
      setPaisError("");
    }
  };

  const validatePais = (): Promise<void> => {
    return new Promise((resolve) => {
      let errorMessage = "";

      // Validar o país apenas se houver algo digitado
      if (pais.length > 0) {
        // Validar caracteres especiais
        if (/[^a-zA-Z\s]/.test(pais)) {
          errorMessage += "Digite um país válido.\n";
        }
      }

      setPaisError(errorMessage.trim());
      setAllFieldsTouched(true); // Indica que o campo foi tocado
      resolve();
    });
  };

  const handleIdiomaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdioma(event.target.value);

    // Limpar o erro apenas se o usuário começar a digitar no campo
    if (event.target.value.length > 0 && idiomaError) {
      setIdiomaError("");
    }
  };

  const validateIdioma = (): Promise<void> => {
    return new Promise((resolve) => {
      let errorMessage = "";

      // Validar o idioma apenas se houver algo digitado
      if (idioma.length > 0) {
        // Validar caracteres especiais
        if (/[^a-zA-Z\s]/.test(idioma)) {
          errorMessage += "Digite um idioma válido.\n";
        }
      }

      setIdiomaError(errorMessage.trim());
      setAllFieldsTouched(true); // Indica que o campo foi tocado
      resolve();
    });
  };

  const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);

    // Limpar o erro apenas se o usuário começar a digitar no campo
    if (event.target.value.length > 0 && senhaError) {
      setSenhaError("");
    }
  };

  const validateSenha = (): Promise<void> => {
    return new Promise((resolve) => {
      let errorMessage = "";

      // Validar a senha apenas se houver algo digitado
      if (senha.length > 0) {
        // Validar tamanho mínimo de 6 caracteres
        if (senha.length < 6) {
          errorMessage += "Digite uma senha com pelo menos 6 caracteres.\n";
        }
      }

      setSenhaError(errorMessage.trim());
      setAllFieldsTouched(true); // Indica que o campo foi tocado
      resolve();
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Verifica se todos os campos foram validados
    if (!allFieldsValidated) {
      // Caso contrário, valida todos os campos
      await Promise.all([
        validateNomeCompleto(),
        validateCargo(),
        validateEmail(),
        validateTelefone(),
        validateEmpresa(),
        validateTamanhoEmpresa(),
        validatePais(),
        validateIdioma(),
        validateSenha(),
      ]);

      // Atualiza o estado para indicar que todos os campos foram validados
      setAllFieldsValidated(true);
    }

    // Se todos os campos forem válidos, prossegue com a submissão
    if (!formError) {
      const router = useRouter();
      await router.push("/sua-pagina-de-cadastro");

      console.log("Formulário enviado com sucesso!");
    }
  };

  const checkIfAllFieldsAreValid = () => {
    // Verifica se todos os campos foram tocados e se não há erros
    return (
      allFieldsTouched &&
      !nomeCompletoError &&
      !cargoError &&
      !emailError &&
      !telefoneError &&
      !empresaError &&
      !tamanhoEmpresaError &&
      !paisError &&
      !idiomaError &&
      !senhaError
    );
  };

  // Use esta função para determinar se o botão deve ser habilitado
  const isFormValid = checkIfAllFieldsAreValid();

  return (
    <div className={styles.CadastroContainer}>
      <video
        className={styles.Capa}
        src="/Imagens/Cadastro/Capa.mp4"
        autoPlay
        loop
        muted
      ></video>
      <VLibras />
      <TextToSpeech />
      <motion.div
        className={styles.Informações}
        initial={{ x: "-100vw", opacity: 0 }} // Começa fora da tela à esquerda
        animate={{ x: 0, opacity: 1 }} // Anima para a posição inicial e opacidade completa
        transition={{ type: "spring", duration: 4, bounce: 0.25 }} // Tipo de transição e duração
      >
        <div className={styles.LogoTitulo}>
          <img
            className={styles.Logo}
            src="/Imagens/Home/Logo.svg"
            alt="Imagem"
          />
          <h1 className={styles.Titulo}>
            Experimente nossa solução completa de CRM e vendas, grátis por 30
            dias.
          </h1>
        </div>
        <h2 className={styles.Subtitulo}>
          Com o Sales Cloud Professional Edition, você tem acesso a:
        </h2>
        <div className={styles.Beneficios}>
          <p className={styles.TextBenef}>
            Dados pré-carregados e recursos para integrar os dados da sua
            empresa;
          </p>
          <p className={styles.TextBenef}>
            Processos, relatórios e dashboards pré-configurados;
          </p>
          <p className={styles.TextBenef}>
            Experiências guiadas para representantes, líderes e gestores de
            vendas;
          </p>
          <p className={styles.TextBenef}>
            Guias e outros materiais sobre boas práticas de vendas;
          </p>
          <p className={styles.TextBenef}>
            Onboarding integrado, treinamentos e webinars online;
          </p>
          <p className={styles.TextBenef}>
            Configuração de pontuação e roteamento de leads;
          </p>
          <p className={styles.TextBenef}>
            Ferramentas para automação de tarefas recorrentes;
          </p>
          <p className={styles.TextBenef}>
            Uma visão completa da performance de seus representantes e equipes
            de vendas.
          </p>
        </div>
        <p className={styles.Duvidas}>
          <span className={styles.Negrito}>duvidas?</span> Entre em contato e
          fale com um de nossos especialistas: {" "}
          <span className={styles.Negrito}>0800 891 1887</span>
        </p>
        <img
          className={styles.img}
          src="/Imagens/Cadastro/Foto.Cadastro.gif"
          alt="Imagem"
        />
      </motion.div>
      <motion.div
        className={styles.Formulario}
        initial={{ x: "-100vw", opacity: 0 }} // Começa fora da tela à esquerda
        animate={{ x: 0, opacity: 1 }} // Anima para a posição inicial e opacidade completa
        transition={{ type: "spring", duration: 4, bounce: 0.25 }} // Tipo de transição e duração
      >
        <form onSubmit={handleSubmit}>
          <h3 className={styles.title}>
            Inscreva-se para começar sua avaliação gratuita.
          </h3>
          <h4 className={styles.titleSub}>
            Preencha o formulário abaixo e em breve entraremos em contato sobre
            seu teste gratuito.
          </h4>
          <div className={styles.inputGroup}>
            <input
              type="text"
              required
              className={styles.input}
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              onBlur={validateNomeCompleto}
            />
            <label>Nome completo</label>
            {nomeCompletoError && (
              <span className={styles.errorMessage}>{nomeCompletoError}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              required
              className={styles.input}
              value={cargo}
              onChange={handleCargoChange}
              onBlur={validateCargo}
            />
            <label>Cargo</label>
            {cargoError && (
              <span className={styles.errorMessage}>{cargoError}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              required
              className={styles.input}
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail} // Chamada da função de validação no evento onBlur
            />
            <label>Email corporativo</label>
            {emailError && (
              <span className={styles.errorMessage}>{emailError}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="tel"
              required
              className={styles.input}
              value={telefone}
              onChange={handleTelefoneChange}
              onBlur={validateTelefone}
            />
            <label>Telefone</label>
            {telefoneError && (
              <span className={styles.errorMessage}>{telefoneError}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              required
              className={styles.input}
              value={empresa}
              onChange={handleEmpresaChange}
              onBlur={validateEmpresa}
            />
            <label>Empresa</label>
            {empresaError && (
              <span className={styles.errorMessage}>{empresaError}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              required
              className={styles.input}
              value={tamanhoEmpresa}
              onChange={handleTamanhoEmpresaChange}
              onBlur={validateTamanhoEmpresa}
            />
            <label>Tamanho da empresa</label>
            {tamanhoEmpresaError && (
              <span className={styles.errorMessage}>{tamanhoEmpresaError}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              required
              className={styles.input}
              value={pais}
              onChange={handlePaisChange}
              onBlur={validatePais}
            />
            <label>País/Região</label>
            {paisError && (
              <span className={styles.errorMessage}>{paisError}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              required
              className={styles.input}
              value={idioma}
              onChange={handleIdiomaChange}
              onBlur={validateIdioma}
            />
            <label>Idioma</label>
            {idiomaError && (
              <span className={styles.errorMessage}>{idiomaError}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              required
              className={styles.input}
              value={senha}
              onChange={handleSenhaChange}
              onBlur={validateSenha}
            />
            <label>Senha</label>
            {senhaError && (
              <span className={styles.errorMessage}>{senhaError}</span>
            )}
          </div>
          <div className={styles.remember}>
            <label className={isChecked ? styles.checked : ""}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className={styles.checkbox}></span>
              <span className={styles.label}>
                Estou de acordo com o{" "}
                <span className={styles.Termos}>Main services Agreement.</span>
              </span>
            </label>
          </div>
          <p className={styles.TextFinal}>
            Sua avaliação gratuita pode ser provisionada ou migrada para o
            Hyperforce, a infraestrutura de nuvem pública do Salesforce.
          </p>

          <p className={styles.TextFinal}>
            Ao inscrever-se, você confirma que concorda com o processamento de
            seus dados pessoais pela Salesforce, conforme descrito na{" "}
            <span className={styles.Termos2}>Declaração de privacidade.</span>
          </p>
          <Link href="/Login">
            <button
              type="submit"
              className={styles.TesteGratuitamente}
              disabled={!checkIfAllFieldsAreValid()}
            >
              Começar teste gratuito
            </button>
          </Link>
        </form>
      </motion.div>
      <div className="Chatbot">
        <KommunicateChat />
      </div>
    </div>
  );
};

export default TesteGratis;
