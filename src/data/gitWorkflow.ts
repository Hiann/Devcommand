import { GitWorkflowStep } from '../types';

export const GIT_WORKFLOW: GitWorkflowStep[] = [
  {
    phase: 1,
    title: 'Configuração Inicial e Deploy',
    description: 'Protocolo para inicializar projetos e estabelecer conexão com repositório remoto',
    commands: [
      '# 1. Instancia novo repositório Git invisível (.git)',
      'git init',
      '',
      '# 2. Prepara TODOS os arquivos modificados para staging',
      'git add .',
      '',
      '# 3. Consolida na linha do tempo com mensagem semântica',
      'git commit -m "feat: Estrutura inicial do projeto configurada"',
      '',
      '# 4. Associa diretório local ao repositório remoto (origin)',
      'git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git',
      '',
      '# 5. Define main como branch de produção padrão',
      'git branch -M main',
      '',
      '# 6. Envia código e estabelece vínculo persistente (upstream)',
      'git push -u origin main'
    ]
  },
  {
    phase: 2,
    title: 'Rotina de Trabalho e Isolamento (Branches)',
    description: 'Uso estratégico de branches impede que códigos experimentais quebrem a aplicação principal',
    commands: [
      '# CRIAÇÃO E MIGRAÇÃO: Cria e muda automaticamente para nova branch',
      '# Nomeie de forma descritiva: feature-login, bugfix-header, hotfix-api',
      'git switch -c nome-da-branch',
      '',
      '# Execute seu fluxo de codificação...',
      '# Salve progresso com:',
      'git add .',
      'git commit -m "feat: Implementa autenticação JWT"',
      '',
      '# DEPLOY DA RAMIFICAÇÃO: Envia branch completa para remoto',
      'git push -u origin nome-da-branch'
    ]
  },
  {
    phase: 3,
    title: 'Integração e Sincronização (Pull & Merge)',
    description: 'Metodologia segura para integrar ramificações paralelas à base de código oficial',
    commands: [
      '# 1. RETORNO: Altera contexto para linha do tempo de produção',
      'git checkout main',
      '',
      '# 2. SINCRONIZAÇÃO: Puxa estado mais recente do servidor',
      '# Previne conflitos antes do merge',
      'git pull origin main',
      '',
      '# 3. FUSÃO (MERGE): Incorpora histórico da branch de trabalho',
      'git merge nome-da-branch',
      '',
      '# 4. DEPLOY FINAL: Envia main atualizada para remoto',
      'git push origin main'
    ]
  },
  {
    phase: 4,
    title: 'Operações Avançadas (Stash & Log)',
    description: 'Ferramentas para administração de crises e análise de histórico',
    commands: [
      '# SALVAMENTO TÁTICO: Guarda alterações não concluídas em cache',
      '# Limpa branch para mudança de contexto emergencial',
      'git stash',
      '',
      '# RECUPERAÇÃO TÁTICA: Extrai e aplica alterações guardadas',
      'git stash pop',
      '',
      '# AUDITORIA VISUAL: Histórico em grafo de linha do tempo colorido',
      'git log --oneline --graph --all --decorate',
      '',
      '# Listar todos os stashes disponíveis',
      'git stash list',
      '',
      '# Aplicar stash específico (sem remover da lista)',
      'git stash apply stash@{0}'
    ]
  },

  {
    phase: 5,
    title: 'Controle de Versão Visual (Source Control no VS Code)',
    description: '`Ctrl + Shift + G`  - Painel de Alterações (Changes)',
    commands: [
      ' 1. M (Modified): # Arquivo previamente rastreado que sofreu edições na versão atual.',
      ' 2. U (Untracked): # Arquivo inédito, recentemente criado, que o Git ainda não passou a observar.',
      ' 3. D (Deleted): # Arquivo rastreado que foi removido do sistema de arquivos.',
      ' 4. A (Added): # Arquivo processado para Staging, pronto para compor o próximo commit.'
    ]
  },

  {
    phase: 6,
    title: 'Controle de Versão Visual (Source Control no VS Code)',
    description: '`Ctrl + Shift + G`  - Preparar Alterações (Stage Changes)',
    commands: [
      '1. Ação: # Move seletivamente o documento modificado para o bloco de "Staged Changes" (Palco de Commit)',
      '2. Equivalência no CLI: # Corresponde diretamente à execução de `git add <arquivo>`. Clicar no "+" global simula o `git add .`'
    ]
  },

  {
    phase: 7,
    title: 'Controle de Versão Visual (Source Control no VS Code)',
    description: '`Ctrl + Shift + G`  - Consolidação de Histórico (Commit)',
    commands: [
      '1. Inserção: # Documente a alteração realizada (Ex: "fix: Resolvido erro de validação na rota de login").',
      '2. Execução: # Confirme com `Ctrl + Enter` ou pelo clique no botão primário "Commit" (ícone de Check).',
      '3. Equivalência no CLI: # Corresponde à execução sequencial do `git commit -m "Mensagem"`.'
    ]
  },
  {
    phase: 8,
    title: 'Controle de Versão Visual (Source Control no VS Code)',
    description: '`Ctrl + Shift + G`  - Sincronização com o Remoto (Sync Changes)',
    commands: [
      '1. Ação: # Processo bidirecional automático. Envia os commits locais pendentes e baixa eventuais alterações do servidor em um único clique.',
      '2. Equivalência no CLI: # Equivale a um ciclo sequencial de `git pull` seguido rigorosamente por um `git push`.'
    ]
  },

  {
    phase: 9,
    title: 'Controle de Versão Visual (Source Control no VS Code)',
    description: '`Ctrl + Shift + G`  - Reversão Tática (Discard Changes)',
    commands: [
      '1. Ação: # Acione a seta de curvatura (Discard Changes) disposta ao lado do arquivo modificado na lista.',
      '2. ⚠️ Alerta Crítico: # Operação destrutiva! Reverte o arquivo ao estado exato em que se encontrava no momento do último commit validado.'
    ]
  }
];