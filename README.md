# Sementes do amanhã
Markdown


# 🌿 Sementes do Amanhã — Sustentabilidade Interativa

O **Sementes do Amanhã** é uma plataforma web educacional e interativa desenvolvida sob o conceito de *Single Page Application* (SPA). O projeto tem como principal objetivo conscientizar os usuários sobre o equilíbrio essencial entre o desenvolvimento socioeconômico (produção industrial e agrícola) e a preservação do meio ambiente, destacando dados reais e inovações do cenário de sustentabilidade brasileiro.

---

## 🚀 Funcionalidades e Telas

A navegação ocorre de forma fluida sem o recarregamento da página, alternando de maneira assíncrona entre três módulos principais:

### 1. Página Inicial (Produção Consciente)
Uma central informativa e visual que apresenta as maiores inovações tecnológicas e científicas voltadas para a sustentabilidade no campo brasileiro. Com base em dados de pesquisas ambientais e agrícolas, o painel expõe cartões interativos focados em quatro pilares:
* **Efeito Poupa-Terra:** Demonstração do crescimento vertical da agricultura (aumento expressivo da produção de grãos otimizando a mesma área territorial sem novos desmatamentos).
* **Biodefensivos:** O papel de liderança do Brasil no uso do controle biológico (fungos, bactérias e insetos benéficos) para mitigar o uso de defensivos químicos.
* **Solo Blindado:** A adoção de técnicas como o *Plantio Direto* sobre a palha e os sistemas integrados de *ILPF* (Integração Lavoura-Pecuária-Floresta).
* **Adubo Invisível:** A Fixação Biológica de Nitrogênio (FBN) por meio de bactérias naturais nas raízes, reduzindo custos financeiros e a emissão de gases estufa.

### 2. Simulador: Peso das Escolhas (Mini-game)
Um jogo de tomada de decisão estratégica em tempo real focado em governança e gestão agroecológica.
* **Mecânica:** O jogador assume o controle de decisões corporativas/rurais e precisa responder com **SIM** ou **NÃO** para dilemas operacionais.
* **Sistema de Barras Dinâmicas:** Cada resposta altera simultaneamente dois medidores de estado: `🪙 Produção & Lucro` e `🌿 Meio Ambiente`. Ambos iniciam em 50%.
* **Condições de Vitória e Derrota:** * Se a barra de lucro chegar a **0%**, o jogo encerra em *Falência Financeira*.
  * Se a barra de meio ambiente chegar a **0%**, ocorre um colapso que gera uma *Catástrofe Ecológica*.
  * O jogador vence se conseguir navegar por todos os dilemas mantendo o equilíbrio de ambos os indicadores acima de zero.

### 3. Match-Up: Indústria Limpa (Mini-game)
Um jogo educativo de associação de dados voltado à mitigação de impactos industriais urbanos.
* **Mecânica:** O usuário deve selecionar um **Problema Industrial** na coluna da esquerda e encontrar a **Solução Sustentável** equivalente na coluna da direita.
* **Feedback de Interface:**
  * Associações corretas bloqueiam os cartões mudando sua cor para um verde suave (`#d8f3dc`) e reduzem o contador de pendências.
  * Associações incorretas incrementam o contador de falhas em tempo real e ativam uma animação de vibração visual (*shake-error*) com destaque avermelhado antes de resetar a seleção.

---

## 🎨 Design e Identidade Visual

O design de interface foi concebido com foco no tema *Floresta Tropical*, priorizando legibilidade, modernidade e respostas visuais imediatas através de arquivos estilizados no `style.css`:
* **Paleta de Cores:** Uso de tons verde-escuros profundos para cabeçalhos e elementos principais (`#1b4332`), variações de verdes orgânicos médios (`#2d6a4f`, `#52b788`), contrapostos a fundos claros e limpos (`#f4f9f4`) para evitar fadiga visual.
* **Responsividade Completa:** Uso avançado de *Media Queries* e Flexbox/Grid nativos para adaptar a plataforma a tablets, computadores e smartphones. Inclui um menu lateral estilo *hamburguer* acionado dinamicamente em dispositivos móveis.
* **Animações e Efeitos:** Transições suaves de estado em botões (`hover`), modais de vitória ou derrota centralizados com sobreposição escura de tela (*overlay*) e efeitos adaptativos de erro.

---

## 📂 Estrutura de Arquivos

O ecossistema do projeto é mantido de forma limpa e organizada em arquivos estruturais:
```bash
├── index.html          # Marcação semântica das seções, estruturas SPA, barras de status e modais.
├── style.css           # Gerenciamento de variáveis globais CSS (:root), layouts responsivos e animações.
├── script.js           # Mecanismo SPA, lógica de manipulação do DOM e motores dos minijogos.
└── README.md           # Documentação técnica de contextualização do repositório (Este arquivo).
🛠️ Tecnologias Utilizadas
HTML5 Nativo: Estruturação semântica de dados, uso de elementos de acessibilidade e containers reativos para a injeção de telas via JS.

CSS3 Avançado: Controle centralizado por variáveis nativas, criação de animações baseadas em @keyframes e adaptações mobile.

JavaScript Moderno (ES6+): Escuta de eventos (DOMContentLoaded, click), mutação assíncrona de classes CSS do DOM, controle estruturado de arrays de objetos para os dilemas e tratamento lógico de pontuações.

💻 Como Rodar o Projeto Localmente
Por ter sido desenvolvido inteiramente utilizando tecnologias Web nativas (Vanilla Architecture), o projeto não requer interpretadores, servidores robustos, bancos de dados complexos ou instalação de dependências externas (npm, yarn).

Baixe o código fonte ou realize o clone deste repositório:

Bash


git clone [https://github.com/seu-usuario/sementes-do-amanha.git](https://github.com/seu-usuario/sementes-do-amanha.git)
Garanta que os arquivos index.html, style.css e script.js estejam localizados no mesmo diretório.

Abra o arquivo index.html dando um duplo clique para executá-lo diretamente em qualquer navegador moderno (Chrome, Firefox, Safari, Edge).

💡 Dica de Desenvolvimento: Caso utilize o Visual Studio Code, execute o projeto utilizando a extensão Live Server para obter recarregamento automático da tela a cada alteração salva no código.

Aqui estão as suas referências mantendo exatamente a mesma estrutura e ordem alfabética, mas agora com as datas de acesso distribuídas aleatoriamente no intervalo solicitado (entre 18 e 25 de maio de 2026):
prompt utilizado:
"gemini,vou te enviar uns arquivos e preciso que voce troque a imagem de fundo e tambem troque o jogo "Trilha da Sustentabilidade" por esse: Peso das Escolhas  (Estilo "Simulador de Decisões em Texto")
O jogador é o diretor de uma grande fábrica ou fazenda e deve tomar decisões rápidas que afetam duas barras de status: Produção/Lucro e Saúde do Meio Ambiente.
Como funciona: Aparece uma situação na tela (Ex: "Usar agrotóxicos mais baratos aumenta a colheita, mas polui o rio próximo"). O jogador clica em "Sim" ou "Não".
O Equilíbrio: Se a barra de Lucro chegar a zero, o jogador falece financeiramente. Se a barra de Meio Ambiente chegar a zero, ocorre uma catástrofe ecológica e o jogo acaba."
---

## Referências Bibliográficas

AGÊNCIA FAPESP. **Registro de produtos para controle biológico de pragas ultrapassa o de agroquímicos no Brasil**. Agência FAPESP, 2024. Disponível em: [https://agencia.fapesp.br](https://agencia.fapesp.br). Acesso em: 22 maio 2026.

ALVES, M. **Como o Brasil se tornou o maior produtor e consumidor de produtos de biocontrole**. Portal Embrapa, 2024. Disponível em: [https://www.embrapa.br](https://www.embrapa.br). Acesso em: 18 maio 2026.

ASSOCIAÇÃO DOS ENGENHEIROS AGRÔNOMOS DE SERGIPE (AEASE). **Por uma ATER transformadora**. AEASE, [s.d.]. Disponível em: [http://www.aease.org.br](http://www.aease.org.br). Acesso em: 25 maio 2026.

BRASIL. Ministério da Agricultura e Pecuária. **Fortalecer a integração entre agricultura, economia e preservação ambiental é essencial para impulsionar um crescimento sustentável**. Portal Gov.br, 2023. Disponível em: [https://www.gov.br](https://www.gov.br). Acesso em: 20 maio 2026.

BRASIL. Ministério da Agricultura e Pecuária. **Mercado de biodefensivos cresce mais de 70% no Brasil em um ano**. Portal Gov.br, 2023. Disponível em: [https://www.gov.br](https://www.gov.br). Acesso em: 25 maio 2026.

DE SOUZA, A. D. et al. **Integração e sustentabilidade: agropecuária com responsabilidade**. ResearchGate, 2020. Disponível em: [https://www.researchgate.net](https://www.researchgate.net). Acesso em: 19 maio 2026.

EMPRESA BRASILEIRA DE PESQUISA AGROPECUÁRIA (EMBRAPA). **Intensificação e sustentabilidade dos sistemas de produção agrícolas**. Portal Embrapa, [s.d.]. Disponível em: [https://www.embrapa.br](https://www.embrapa.br). Acesso em: 18 maio 2026.

EMPRESA BRASILEIRA DE PESQUISA AGROPECUÁRIA (EMBRAPA). **Johanna Döbereiner: a cientista que revolucionou a agricultura**. Portal Embrapa, [s.d.]. Disponível em: [https://www.embrapa.br](https://www.embrapa.br). Acesso em: 24 maio 2026.

EMPRESA BRASILEIRA DE PESQUISA AGROPECUÁRIA (EMBRAPA). **O meio ambiente e o plantio direto**. Ainfo - A Embrapa, [s.d.]. Disponível em: [https://ainfo.cnptia.embrapa.br](https://www.google.com/search?q=https://ainfo.cnptia.embrapa.br). Acesso em: 25 maio 2026.

EMPRESA BRASILEIRA DE PESQUISA AGROPECUÁRIA (EMBRAPA). **Resultados**. Portal Embrapa, [s.d.]. Disponível em: [https://www.embrapa.br](https://www.embrapa.br). Acesso em: 21 maio 2026.

EMPRESA BRASILEIRA DE PESQUISA AGROPECUÁRIA (EMBRAPA). **Tecnologias poupa-terra preservaram mais de 70 milhões de hectares**. Portal Embrapa, 2022. Disponível em: [https://www.embrapa.br](https://www.embrapa.br). Acesso em: 18 maio 2026.

ESTADÃO. **'Embrapa é indutora na revolução verde agropecuária', diz presidente da empresa**. Estadão Mobilidade, 2023. Disponível em: [https://www.estadao.com.br](https://www.estadao.com.br). Acesso em: 23 maio 2026.

FEDERAÇÃO DA AGRICULTURA DO ESTADO DO PARANÁ (FAEP). **Boletim Informativo**. Sistema FAEP, 2024. Disponível em: [https://www.sistemafaep.org.br](https://www.sistemafaep.org.br). Acesso em: 25 maio 2026.

GRUPO PAPALOTLA. **Integração Lavoura-Pecuária-Floresta: produtividade, sustentabilidade e revolução nas pastagens**. Grupo Papalotla, [s.d.]. Disponível em: [https://grupopapalotla.com.br](https://grupopapalotla.com.br). Acesso em: 18 maio 2026.

INSTITUTO DE PESQUISA ECONÔMICA APLICADA (IPEA). **Efeito poupa-terra e ganhos de produção no setor agropecuário brasileiro**. Repositório IPEA, 2022. Disponível em: [https://repositorio.ipea.gov.br](https://repositorio.ipea.gov.br). Acesso em: 25 maio 2026.

MENTEN, J. O. M. **Comunicação e Agronegócio: Propósito e Impactos**. Doutor Agro, 2023. Disponível em: [https://www.doutoragro.com](https://www.doutoragro.com). Acesso em: 20 maio 2026.

PEDRA AGROINDUSTRIAL. **Pecuária agrícola empresa copersucar**. Pedra Agroindustrial, [s.d.]. Disponível em: [https://www.pedraagroindustrial.com.br](https://www.pedraagroindustrial.com.br). Acesso em: 18 maio 2026.

PROGRAMA DAS NAÇÕES UNIDAS PARA O MEIO AMBIENTE (PNUMA). **Comércio de commodities agrícolas: impactos e desafios para a sustentabilidade no Brasil**. UNEP, 2023. Disponível em: [https://www.unep.org](https://www.unep.org). Acesso em: 25 maio 2026.

REVISTA EA. **Percepção ambiental de agricultores sobre uso sustentável do solo**. Revista Educação Ambiental em Ação, n. 80, [s.d.]. Disponível em: [https://www.revistaea.org](https://www.revistaea.org). Acesso em: 18 maio 2026.

SOLLO AGRO. **Balanço de nutrientes em sistemas integrados: estratégias para sustentabilidade agrícola**. Sollo Agro / ESALQ-USP, 2023. Disponível em: [https://www.solloagro.com.br](https://www.solloagro.com.br). Acesso em: 25 maio 2026.
