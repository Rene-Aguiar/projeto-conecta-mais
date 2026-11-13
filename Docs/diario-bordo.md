Diário de Bordo – Projeto Conecta+

Registro do progresso, decisões técnicas e documentação do uso de Inteligência Artificial (prompts, regras e revisões) para a entrega final da disciplina de Desenvolvimento Front-End para Web (UNICID).

📅 Etapa 1: Estruturação do Ambiente e Organização de Arquivos

Data: Novembro de 2026

Atividade realizada: Limpeza de arquivos de teste no VS Code e organização da arquitetura de pastas (css/, js/, docs/ e .cursor/rules/).

Apoio da IA:

Prompt utilizado: "Como abrir o projeto no VS Code e separar o que é HTML, CSS e JavaScript mantendo a estrutura exigida pelo edital?"

Resultado aceito: Separação modular dos estilos em css/estilo.css e criação da pasta js/ para abrigar os scripts externos, garantindo o desacoplamento do código.

📅 Etapa 2: Implementação de Interatividade com JavaScript

Data: Novembro de 2026

Atividade realizada: Criação do arquivo js/interatividade.js e vinculação nas páginas HTML utilizando a tag <script src="js/interatividade.js"></script>.

Funcionalidades desenvolvidas:

Acessibilidade dinâmica (DOM + localStorage): Botões de aumento/redução de fonte (A+, A-, A) e alternância de modo Alto Contraste, salvando a preferência do usuário no navegador via localStorage.

Validação de Formulário: Interceptação do evento submit com event.preventDefault(), validação de campos obrigatórios (nome e formato de e-mail) com feedback visual (bordas vermelhas e mensagens de erro) e salvamento automático de rascunho no localStorage durante a digitação (input).

Apoio da IA:

Prompt utilizado: "Com base nas aulas de JavaScript (manipulação de DOM, eventos, validação com preventDefault e localStorage), gere o código externo para integrar ao HTML do projeto Conecta+."

O que foi revisado/ajustado: Verificação dos seletores (aria-label dos botões de acessibilidade e IDs dos campos de formulário) para garantir compatibilidade exata com a estrutura semântica do HTML existente.

📅 Etapa 3: Configuração de Rules e Plano de Contexto para IA

Data: Novembro de 2026

Atividade realizada: Criação do plano de contexto (docs/plano-contexto.md) e das regras de padronização em .cursor/rules/ (projeto-ecoconecta.mdc, html-semantico.mdc e css-estilo.mdc).

Objetivo: Garantir que todas as gerações e revisões assistidas por IA sigam os padrões de acessibilidade (WCAG AA), semântica HTML5 (lang="pt-BR", uso de alt descritivo) e identidade visual do projeto.

📅 Etapa 4: Versionamento no GitHub (Commits, Branches e Pull Requests)

Data: Novembro de 2026

Atividade realizada: Configuração do repositório oficial no GitHub, organização do fluxo de trabalho com branches secundárias, realização de commits descritivos por todos os integrantes e abertura/aprovação de Pull Requests (PR) antes da integração na branch main.
