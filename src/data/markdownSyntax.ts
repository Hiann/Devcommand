import { MarkdownSyntax } from '../types';

export const MARKDOWN_SYNTAX: MarkdownSyntax[] = [
  {
    element: 'Negrito (Destaque Forte)',
    syntax: '**texto** ou __texto__',
    example: '**dependências**',
    description: 'Destaca ações ou nomes de ferramentas. Use para chamar atenção.'
  },
  {
    element: 'Itálico (Ênfase Leve)',
    syntax: '*texto* ou _texto_',
    example: '*background*',
    description: 'Termos estrangeiros ou citações informais.'
  },
  {
    element: 'Tachado (Depreciação)',
    syntax: '~~texto~~',
    example: '~~Bug do login~~ (Resolvido na v1.2)',
    description: 'Mostra funcionalidades removidas ou bugs corrigidos.'
  },
  {
    element: 'Código Inline',
    syntax: '`código`',
    example: '`config.json` e `APP_URL`',
    description: 'Nomes de variáveis, arquivos, rotas de API ou comandos no meio da frase.'
  },
  {
    element: 'Bloco de Código',
    syntax: '```javascript\nconst x = 1;\n```',
    example: 'Syntax highlighting com nome da linguagem',
    description: 'Ativa coloração de sintaxe para JavaScript, Python, PHP, SQL, JSON, etc.'
  },
  {
    element: 'Diff (Alterações de Código)',
    syntax: '```diff\n- const antigo = 1;\n+ const novo = 2;\n```',
    example: 'Linhas removidas em vermelho, adicionadas em verde',
    description: 'Mostra alterações de código de forma visual no GitHub.'
  },
  {
    element: 'Link Embutido',
    syntax: '[texto](URL)',
    example: '[Documentação](https://docs.example.com)',
    description: 'Texto visível entre colchetes, URL entre parênteses.'
  },
  {
    element: 'Imagem',
    syntax: '![alt](URL)',
    example: '![Logo do projeto](https://...)',
    description: 'Texto alt para acessibilidade. Precedido por ponto de exclamação.'
  },
  {
    element: 'Link de Referência',
    syntax: '[texto][id] ... [id]: URL',
    example: 'Evita poluir parágrafo com URLs gigantes',
    description: 'Cria variável para link e aponta URL no final do documento.'
  },
  {
    element: 'Tabela com Alinhamento',
    syntax: '| Esquerda | Centro | Direita |\\n|:---|:---:|---:|',
    example: 'Use : para definir alinhamento das colunas',
    description: 'Perfeita para documentar rotas de APIs e variáveis de ambiente.'
  },
  {
    element: 'Lista de Tarefas',
    syntax: '- [x] Concluído\\n- [ ] Pendente',
    example: 'Checkboxes interativas no GitHub',
    description: 'Clique diretamente na interface para marcar como concluído.'
  },
  {
    element: 'Nota (Note)',
    syntax: '> [!NOTE]\\n> Informação útil',
    example: 'Caixa azul com ícone de informação',
    description: 'Informações úteis que contextualizam o leitor.'
  },
  {
    element: 'Dica (Tip)',
    syntax: '> [!TIP]\\n> Truque rápido',
    example: 'Caixa verde com ícone de lâmpada',
    description: 'Caminhos alternativos ou atalhos para rodar o projeto.'
  },
  {
    element: 'Importante',
    syntax: '> [!IMPORTANT]\\n> Não ignore',
    example: 'Caixa roxa com ícone de alerta',
    description: 'Algo crítico para a compilação ou execução.'
  },
  {
    element: 'Aviso (Warning)',
    syntax: '> [!WARNING]\\n> Risco de quebra',
    example: 'Caixa amarela com ícone de exclamação',
    description: 'Alerta sobre potenciais problemas se não seguido.'
  },
  {
    element: 'Cuidado (Caution)',
    syntax: '> [!CAUTION]\\n> Isso vai apagar dados',
    example: 'Caixa vermelha com ícone de stop',
    description: 'Alerta máximo para operações destrutivas.'
  },
  {
    element: 'Menu Expansível',
    syntax: '<details>\\n<summary>Título</summary>\\nConteúdo\\n</details>',
    example: 'Clique para expandir JSONs ou logs longos',
    description: 'Evita poluir a tela com conteúdo muito extenso.'
  },
  {
    element: 'LaTeX Inline',
    syntax: '$E = mc^2$',
    example: 'Fórmula no meio do texto',
    description: 'Para algoritmos complexos e modelagem matemática.'
  },
  {
    element: 'LaTeX Bloco',
    syntax: '$$\\nE = mc^2\\n$$',
    example: 'Fórmula centralizada e destacada',
    description: 'Equações matemáticas em destaque.'
  },
  {
    element: 'Nota de Rodapé',
    syntax: 'Texto[^1] ... [^1]: Referência',
    example: 'Links automáticos de ida e volta',
    description: 'Referências bibliográficas sem quebrar fluxo de leitura.'
  },
  {
    element: 'HTML Híbrido (Centralização)',
    syntax: '<div align="center">...</div>',
    example: 'Logo e título centralizados no README',
    description: 'Tags HTML puras funcionam dentro do Markdown.'
  },
  {
    element: 'Linha Divisória',
    syntax: '--- ou ***',
    example: 'Separar grandes módulos no documento',
    description: 'Limpar a leitura entre assuntos diferentes.'
  }
];