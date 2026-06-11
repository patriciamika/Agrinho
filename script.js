document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. NAVEGAÇÃO ENTRE AS ABAS DA PÁGINA (SISTEMA SPA)
       ========================================================================== */
    const navLinks = document.querySelectorAll("[data-target]");
    const pages = document.querySelectorAll(".page");
    const mobileMenuBtn = document.getElementById("mobile-menu");
    const navLinksContainer = document.querySelector(".nav-links");

    function navegarParaTela(targetId) {
        pages.forEach(page => {
            page.classList.toggle("active", page.id === targetId);
        });

        navLinks.forEach(link => {
            if (link.classList.contains("nav-link")) {
                link.classList.toggle("active", link.getAttribute("data-target") === targetId);
            }
        });

        // Inicializadores de jogos ao entrar na aba correspondente
        if (targetId === "escolhas") inicializarSimulador();
        if (targetId === "industria") inicializarMatchUp();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            const target = element.getAttribute("data-target");
            navegarParaTela(target);
            navLinksContainer.classList.remove("mobile-open");
        });
    });

    mobileMenuBtn.addEventListener("click", () => {
        navLinksContainer.classList.toggle("mobile-open");
    });


    /* ==========================================================================
       2. JOGO: PESO DAS ESCOLHAS
       ========================================================================== */
    let statusLucro = 50;
    let statusEco = 50;
    let indiceDilemaAtual = 0;
    let simuladorAtivo = true;

    const bancoDilemas = [
        {
            texto: "Usar agrotóxicos químicos tradicionais e baratos aumenta a colheita rápida, mas polui gravemente os rios e nascentes da região. Deseja usá-los?",
            sim: { lucro: 25, eco: -25 },
            nao: { lucro: -20, eco: 20 }
        },
        {
            texto: "Substituir defensivos comuns por Biodefensivos Naturais (bactérias e insetos benéficos) gera um selo verde valorizado no mercado externo, embora exija treinamento inicial da equipe. Deseja implantar?",
            sim: { lucro: 15, eco: 20 },
            nao: { lucro: -15, eco: -25 }
        },
        {
            texto: "Para economizar recursos operacionais imediatos, você prefere revirar e arar o solo pesadamente, ignorando a técnica protetiva do Plantio Direto sobre a palha. Fazer isso?",
            sim: { lucro: 20, eco: -25 },
            nao: { lucro: -20, eco: 20 }
        },
        {
            texto: "Implantar o sistema ILPF (Integração Lavoura-Pecuária-Floresta) misturando árvores e pastos melhora o clima da fazenda a longo prazo, mas exige investimento de infraestrutura. Deseja aprovar?",
            sim: { lucro: -20, eco: 25 },
            nao: { lucro: 20, eco: -25 }
        },
        {
            texto: "Uma fiscalização aponta que sua fábrica emite fumaça e fuligem acima do permitido. Instalar filtros modernos mitigará o problema, mas reduzirá o caixa disponível este mês. Deseja investir?",
            sim: { lucro: -25, eco: 20 },
            nao: { lucro: 25, eco: -25 }
        }
    ];

    const elLucroFill = document.getElementById("bar-lucro");
    const elEcoFill = document.getElementById("bar-eco");
    const elLucroTxt = document.getElementById("val-lucro");
    const elEcoTxt = document.getElementById("val-eco");
    const elDilemaText = document.getElementById("decision-text");
    const elDilemaCurrent = document.getElementById("decision-current");
    const elDilemaTotal = document.getElementById("decision-total");
    const modalSimEnd = document.getElementById("sim-modal-end");
    const elSimEndTitle = document.getElementById("sim-end-title");
    const elSimEndText = document.getElementById("sim-end-text");

    function inicializarSimulador() {
        statusLucro = 50;
        statusEco = 50;
        indiceDilemaAtual = 0;
        simuladorAtivo = true;
        elDilemaTotal.textContent = bancoDilemas.length;
        
        modalSimEnd.classList.add("hidden");
        atualizarBarrasStatus();
        mostrarDilema();
    }

    function atualizarBarrasStatus() {
        statusLucro = Math.max(0, Math.min(100, statusLucro));
        statusEco = Math.max(0, Math.min(100, statusEco));

        elLucroFill.style.width = statusLucro + "%";
        elEcoFill.style.width = statusEco + "%";

        elLucroTxt.textContent = statusLucro;
        elEcoTxt.textContent = statusEco;

        if (statusLucro <= 0 && simuladorAtivo) {
            finalizarSimulador("falencia");
        } else if (statusEco <= 0 && simuladorAtivo) {
            finalizarSimulador("catastrofe");
        }
    }

    function mostrarDilema() {
        if (indiceDilemaAtual >= bancoDilemas.length) {
            finalizarSimulador("sucesso");
            return;
        }
        elDilemaCurrent.textContent = indiceDilemaAtual + 1;
        elDilemaText.textContent = bancoDilemas[indiceDilemaAtual].texto;
    }

    function processarEscolha(escolheuSim) {
        if (!simuladorAtivo) return;

        const impactos = bancoDilemas[indiceDilemaAtual];
        const efeito = escolheuSim ? impactos.sim : impactos.nao;

        statusLucro += efeito.lucro;
        statusEco += efeito.eco;

        atualizarBarrasStatus();

        if (simuladorAtivo) {
            indiceDilemaAtual++;
            mostrarDilema();
        }
    }

    function finalizarSimulador(motivo) {
        simuladorAtivo = false;
        modalSimEnd.classList.remove("hidden");

        if (motivo === "falencia") {
            elSimEndTitle.innerHTML = "💸 Falência Financeira!";
            elSimEndText.innerHTML = "Seus cofres esvaziaram completamente. Sem rentabilidade, sua empresa fechou as portas e os projetos ecológicos foram cancelados por falta de fundos.";
        } else if (motivo === "catastrofe") {
            elSimEndTitle.innerHTML = "🚨 Catástrofe Ecológica!";
            elSimEndText.innerHTML = "O impacto ambiental na região atingiu níveis irreversíveis. Rios poluídos e solo degradado geraram multas pesadas e a interdição total das suas terras.";
        } else {
            elSimEndTitle.innerHTML = "🎉 Mandato Concluído com Sucesso!";
            elSimEndText.innerHTML = `Parabéns por guiar o complexo produtivo até o final! Você encerrou com <strong>${statusLucro}% de Lucro</strong> e <strong>${statusEco}% de Saúde Ecológica</strong>, demonstrando que o equilíbrio é viável.`;
        }
    }

    document.getElementById("btn-choice-yes").addEventListener("click", () => processarEscolha(true));
    document.getElementById("btn-choice-no").addEventListener("click", () => processarEscolha(false));
    document.getElementById("btn-restart-sim").addEventListener("click", inicializarSimulador);


    /* ==========================================================================
       3. JOGO: QUIZ DE COMBINAÇÃO
       ========================================================================== */
    const datasetMatch = [
        { id: 1, problema: "Emissão industrial de CO2 (Fumaça)", solucao: "Plantio de árvores e uso de filtros" },
        { id: 2, problema: "Lixo Orgânico / Sobras de comida", solucao: "Compostagem (Adubo natural)" },
        { id: 3, problema: "Desperdício de água potável", solucao: "Reuso da água da chuva" },
        { id: 4, problema: "Erosão e esgotamento do solo", solucao: "Plantio Direto sobre a palha" },
        { id: 5, problema: "Pragas destruindo plantações", solucao: "Uso de biodefensivos naturais" }
    ];

    let selectedProblemId = null;
    let errorsCounter = 0;
    let matchesRemaining = 0;

    const colProblems = document.getElementById("col-problems");
    const colSolutions = document.getElementById("col-solutions");
    const txtLeft = document.getElementById("match-left");
    const txtErrors = document.getElementById("match-errors");
    const modalMatchEnd = document.getElementById("match-modal-end");

    function inicializarMatchUp() {
        selectedProblemId = null;
        errorsCounter = 0;
        matchesRemaining = datasetMatch.length;
        modalMatchEnd.classList.add("hidden");
        
        atualizarPaineisMatch();
        renderizarColunasMatch();
    }

    function atualizarPaineisMatch() {
        txtLeft.textContent = matchesRemaining;
        txtErrors.textContent = errorsCounter;
    }

    function whimsicalShuffle(arr) {
        return arr.map(item => [Math.random(), item]).sort((a, b) => a[0] - b[0]).map(a => a[1]);
    }

    function renderizarColunasMatch() {
        colProblems.innerHTML = "<h3>⚠️ Problemas Industriais</h3>";
        colSolutions.innerHTML = "<h3>🌱 Soluções Sustentáveis</h3>";

        const problemasEmbaralhados = whimsicalShuffle([...datasetMatch]);
        const solucoesEmbaralhadas = whimsicalShuffle([...datasetMatch]);

        problemasEmbaralhados.forEach(item => {
            const pDiv = document.createElement("div");
            pDiv.className = "match-card card-problem";
            pDiv.textContent = item.problema;
            pDiv.dataset.id = item.id;
            pDiv.addEventListener("click", () => selecionarProblema(pDiv));
            colProblems.appendChild(pDiv);
        });

        solucoesEmbaralhadas.forEach(item => {
            const sDiv = document.createElement("div");
            sDiv.className = "match-card card-solution";
            sDiv.textContent = item.solucao;
            sDiv.dataset.id = item.id;
            sDiv.addEventListener("click", () => selecionarSolucao(sDiv));
            colSolutions.appendChild(sDiv);
        });
    }

    function selecionarProblema(card) {
        if (card.classList.contains("matched")) return;
        
        document.querySelectorAll(".card-problem").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        selectedProblemId = card.dataset.id;
    }

    function selecionarSolucao(card) {
        if (card.classList.contains("matched") || !selectedProblemId) return;

        const solucaoId = card.dataset.id;
        const problemaSelecionadoCard = colProblems.querySelector(`.card-problem[data-id='${selectedProblemId}']`);

        if (selectedProblemId === solucaoId) {
            card.classList.add("matched");
            problemaSelecionadoCard.classList.add("matched");
            problemaSelecionadoCard.classList.remove("selected");
            
            card.style.backgroundColor = "#d8f3dc";
            problemaSelecionadoCard.style.backgroundColor = "#d8f3dc";

            matchesRemaining--;
            selectedProblemId = null;
            atualizarPaineisMatch();

            if (matchesRemaining === 0) {
                document.getElementById("match-end-text").innerHTML = `Perfeito! Você compensou com precisão todos os impactos industriais.<br><strong>Erros cometidos:</strong> ${errorsCounter}`;
                modalMatchEnd.classList.remove("hidden");
            }
        } else {
            errorsCounter++;
            atualizarPaineisMatch();
            
            card.classList.add("shake-error");
            problemaSelecionadoCard.classList.add("shake-error");
            
            setTimeout(() => {
                card.classList.remove("shake-error");
                problemaSelecionadoCard.classList.remove("shake-error");
                problemaSelecionadoCard.classList.remove("selected");
                selectedProblemId = null;
            }, 500);
        }
    }

    document.getElementById("btn-restart-match").addEventListener("click", inicializarMatchUp);
    document.getElementById("btn-close-match-end").addEventListener("click", inicializarMatchUp);
});