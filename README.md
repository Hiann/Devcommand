<div align="center">

# ⚡ DevCommand v5.0
### Guia de Comandos de Elite para Desenvolvedores

![React](https://img.shields.io/badge/react-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/typescript-strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-utility--first-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/framer--motion-animations-black?style=for-the-badge&logo=framer)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-diferencial-de-engenharia">Engenharia</a> •
  <a href="#-módulos-principais">Módulos</a> •
  <a href="#-layout-e-ui">Layout</a> •
  <a href="#-como-executar">Instalação</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-autor">Autor</a>
</p>

</div>

---

# 💡 Sobre o Projeto

O **DevCommand v5.0** é um guia interativo de comandos projetado para **desenvolvedores que buscam produtividade, clareza e velocidade de consulta**.

Diferente de uma simples documentação estática, o projeto foi desenvolvido como uma **interface de referência técnica com experiência visual de alta fidelidade**, combinando:

- **React + TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Arquitetura modular escalável**

A proposta é transformar uma coleção de comandos técnicos em uma **ferramenta de consulta moderna**, com foco em **Developer Experience (DX)** e navegação extremamente fluida.

---

# 🧠 Diferencial de Engenharia

Este projeto foi desenvolvido com mentalidade de **engenharia de software moderna**, priorizando desempenho, arquitetura e micro-interações.

### ⚡ Performance

O sistema utiliza estratégias rigorosas de otimização:

- `React.memo` para evitar re-renderizações desnecessárias
- `useMemo` para cálculos pesados
- Componentes desacoplados e reutilizáveis
- Renderização eficiente de listas de comandos

Resultado: **interface extremamente rápida mesmo com grande volume de dados.**

---

### 🎯 Micro-Interações

Pequenos detalhes de interação foram implementados para elevar a experiência do usuário:

- Cursor piscando no terminal
- Cards com efeito magnético
- Hover animations baseadas em física (Spring Physics)
- Spotlight dinâmico que acompanha o mouse
- Glassmorphism com refração suave no scroll

Essas interações criam uma sensação de **interface viva e responsiva**.

---

### ♿ Acessibilidade

Mesmo com design moderno, o projeto mantém boas práticas de acessibilidade:

- HTML5 semântico (`nav`, `section`, `ul`)
- suporte a navegação por teclado
- uso de `aria-labels`
- hierarquia clara de conteúdo

---

# 📦 Módulos Principais

O **DevCommand** é organizado em módulos especializados, cada um focado em uma área do ecossistema de desenvolvimento.

| Módulo | Descrição |
|------|------|
| **Git** | Fluxos de versionamento e comandos essenciais para controle de código |
| **VS Code** | Atalhos avançados e produtividade dentro do editor |
| **Terminal** | Comandos essenciais para navegação e automação |
| **Markdown** | Sintaxe e padrões para documentação técnica |
| **Excel Corporativo** | Funções utilizadas em ambientes empresariais |
| **Sistema** | Atalhos e comandos úteis do sistema operacional |

Cada módulo possui **identidade visual própria**, incluindo mudanças dinâmicas de cor no ambiente da aplicação.

---

# 🎨 Layout e UI (Design System)

A interface segue um padrão visual **Sleek / Modern**, inspirado em produtos como **Linear e Stripe**.

| Componente | Detalhes Técnicos |
|:---:|:---|
| **Glass UI** | Cards translúcidos com blur dinâmico e bordas suaves |
| **Spotlight Background** | Gradiente reativo ao movimento do mouse |
| **Ambient Glow** | O fundo muda de cor conforme o módulo ativo |
| **Textura de Ruído** | Camada sutil para dar profundidade visual |
| **Animações** | Implementadas com **Framer Motion** utilizando física real |

A interface foi projetada para transmitir **clareza, modernidade e fluidez**.

---

# 🛠 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias modernas do ecossistema frontend.

### Front-end

- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

### Interface e UX

- **Lucide Icons**
- Glassmorphism UI
- Motion Design
- Componentização escalável

### Arquitetura

- Design baseado em **Design Tokens**
- Hooks reutilizáveis
- Separação clara entre **dados, UI e lógica**

---

# 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

---

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Hiann/devcommand.git
cd devcommand### 2️⃣ Instalar as dependências

```
### 2️⃣ Instalar as dependências

```bash
npm install
```
### 3️⃣ Executar o projeto

```bash
npm run dev
```
### Acesse no navegador

```bash
http://localhost:3000
```
## 📂 Estrutura do Projeto

```bash
src/
│   App.tsx
│   index.tsx
│
├── components
│   ├── animations
│   │       MagneticWrapper.tsx
│   │
│   ├── layout
│   │       Footer.tsx
│   │       Header.tsx
│   │       MainLayout.tsx
│   │
│   ├── modules
│   │       ExcelModule.tsx
│   │       GitModule.tsx
│   │       MarkdownModule.tsx
│   │       SistemaModule.tsx
│   │       TerminalModule.tsx
│   │       VSCodeModule.tsx
│   │
│   └── ui
│           AnimatedBackground.tsx
│           CodeBlock.tsx
│           CommandCard.tsx
│           GlassCard.tsx
│           MarkdownRenderer.tsx
│           ModuleSidebar.tsx
│           SearchBar.tsx
│           Terminal.tsx
│           ThemeToggle.tsx
│
├── data
│       commands.ts
│       excelFunctions.ts
│       gitWorkflow.ts
│       markdownSyntax.ts
│       terminalCommands.ts
│
├── hooks
│       useCopyToClipboard.ts
│       useKeyboardShortcuts.ts
│       useLocalStorage.ts
│       useTerminal.ts
│
├── styles
│       globals.css
│
├── types
│       index.ts
│
└── utils
        constants.ts
        formatters.ts
        terminalCommands.ts
```
## 👨‍💻 Autor

<div align="center">

**Hiann Alexander Mendes de Oliveira**

🎓 Estudante de **Sistemas de Informação**  
📍 Goiânia — GO, Brasil  
🎯 Foco em **Inteligência Artificial, Visão Computacional e Engenharia de Software**

<br>

<a href="https://www.linkedin.com/in/hiann-alexander" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-Conectar-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
</a>

</div>