# Exibi-o_csv
Esse projeto faz a leitura de um arquivo do excel no formato csv usando a biblioteca pandas do python e exibi ele de forma dinâmica em um elemento table do html através do uso do framework Flask, não importando o número de linhas ou colonas!
Ele possui uma funcionalidade de ocultar as colunas que não deseja exibir;
Faz calculos conforme necessário das informações vindas do dataframe;
Tem uma funcionalidade de rolagem automática ao recarregar a página para exibir toda a tabela através da rolagem do scroll;
A velocidade da animação assim como sua duração é calculada dinâmicamente com base no tamanho da estrutura do dataframe;
As colunas estão sempre fixas no topo;
Atualiza automaticamente a cada hora;
Remove do dataframe as linhas cuja condição retorna zero, mantendo o arquivo CSV original sem alterações;
