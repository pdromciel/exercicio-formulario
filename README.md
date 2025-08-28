# 📋 Cadastro de Usuários com Validação (HTML, CSS e JavaScript)

Este projeto é um exercício acadêmico que consiste em um **formulário interativo de cadastro de usuários**
desenvolvido com **HTML, CSS e JavaScript**.
Ele valida os dados inseridos pelo usuário, fornece feedback visual
imediato e realiza o cálculo automático do **Imposto de Renda (IR)** com
base no salário e número de dependentes.

------------------------------------------------------------------------

## 🚀 Funcionalidades

-   ✅ Validação de todos os campos obrigatórios:
    -   **Nome Completo** (mínimo 3 caracteres)
    -   **CPF** (formato `000.000.000-00`)
    -   **Login** (mínimo 4 caracteres; letras, números, `.`, `_`, `-`)
    -   **E-mail** (formato válido)
    -   **Senha** (mínimo 8 caracteres, contendo ao menos uma letra e um
        dígito)
    -   **Confirmação de Senha** (deve coincidir com a senha)
    -   **Salário** (valor positivo)
    -   **Número de Dependentes** (≥ 0)
-    Botão para **mostrar/ocultar senha** e confirmação de senha.
-   **Cálculo automático do Imposto de Renda**:  
Até **R$ 2000,00** → isento  
Até **R$ 3000,00** → 7,5%  
Até **R$ 4500,00** → 15%  
Até **R$ 6000,00** → 22,5%  
Acima de **R$ 6000,00** → 27,5%  
Dependentes reduzem a base de cálculo em **R$ 200,00** cada.

-    Feedback em tempo real (mensagens e cores de validação).
-    Botão **Limpar** que reseta o formulário.
-    Mensagens de **alerta** para sucesso ou erros.

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

    📦 cadastro-usuarios
    ├── index.html   # Estrutura do formulário
    ├── styles.css   # Estilização do formulário
    └── script.js    # Validação, cálculo e interatividade

------------------------------------------------------------------------

## ▶️ Como Executar

1.  Baixe ou clone este repositório:

    ``` bash
    git clone https://github.com/pdromciel/exercicio-formulario.git
    ```

2.  Abra o arquivo `index.html` em um navegador.

3.  Preencha os campos e teste as validações.

------------------------------------------------------------------------

## 👨‍💻 Autor

Projeto desenvolvido por **Pedro Maciel** \
Estudante de Ciência da Computação

------------------------------------------------------------------------
