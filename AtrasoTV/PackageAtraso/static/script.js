function calcularUnidadesPartes(tabelaContainer, alturaTabela, alturaViewport) {
    var proporcao = alturaTabela / alturaViewport;
    var numPartes = Math.ceil(proporcao * 10); // Ajuste o multiplicador (10) conforme necessário

    if (numPartes < 2) {
        numPartes = 2; // Garante que haja pelo menos duas partes
    }

    var unidadesPartes = [];
    var parteUnidade = Math.ceil(alturaTabela / numPartes);

    for (var i = 0; i < numPartes; i++) {
        unidadesPartes.push(parteUnidade);
    }

    return unidadesPartes;
}

function rolarPorPartes(tabelaContainer, posicaoFinal, unidadesPartes) {
    var posicaoAtual = 0;
    var parteAtual = 0;
    var duracaoParte = 1000; // Duração padrão de cada parte em milissegundos

    var rolar = function() {
        if (parteAtual < unidadesPartes.length) {
            posicaoAtual += unidadesPartes[parteAtual];
            tabelaContainer.scrollTop = posicaoAtual;

            // Ajusta dinamicamente a duração da parte para controlar a velocidade
            if (parteAtual === 0 || parteAtual === 1) {
                duracaoParte = 10000; // Primeiras duas partes mais rápidas
            } else {
                duracaoParte = 1000; // Demais partes com duração padrão
            }

            setTimeout(function() {
                rolar();
            }, duracaoParte); // Usa a duração atual para a pausa entre partes
            parteAtual++;
        } else {
            setTimeout(function() {
                retornarAoTopo(tabelaContainer);
            }, 3000); // Espera 3 segundos antes de retornar ao topo
        }
    };

    rolar();
}

function retornarAoTopo(tabelaContainer) {
    var posicaoAtual = tabelaContainer.scrollTop;
    var passo = Math.ceil(posicaoAtual / 10); // Define a velocidade de retorno - aumente o divisor para aumentar a velocidade

    var rolarParaTopo = function() {
        if (posicaoAtual > 0) {
            posicaoAtual -= passo; // Ajuste o valor do passo para aumentar a velocidade
            tabelaContainer.scrollTop = posicaoAtual;
            setTimeout(rolarParaTopo, 1); // Intervalo curto para animação suave
        } else {
            tabelaContainer.scrollTop = 0; // Garante que a rolagem chegue exatamente a 0
        }
    };

    rolarParaTopo();
}

// Restante do seu código...

window.onload = function() {
    var tabelaContainer = document.querySelector('.table-container');
    var alturaTabela = tabelaContainer.scrollHeight;
    var alturaViewport = tabelaContainer.clientHeight;
    var unidadesPartes = calcularUnidadesPartes(tabelaContainer, alturaTabela, alturaViewport);
    var posicaoFinal = alturaTabela - alturaViewport;

    setTimeout(function() {
        rolarPorPartes(tabelaContainer, posicaoFinal, unidadesPartes);
    }, 3000); // Espera 3 segundos antes de iniciar a rolagem
}


function recarregarPagina() {
    location.reload();
}
setTimeout(recarregarPagina, 1800000);
