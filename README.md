
# Gerador de Números Aleatórios: Comparação de Desempenho

## Visão Geral

Este código JavaScript apresenta duas implementações de um gerador de números aleatórios, juntamente com uma função para medir o desempenho de cada implementação.

## Principais Funcionalidades

1. **gerarNumerosAleatorios()**
   - Gera números aleatórios usando um Set
   - Evita duplicatas naturalmente

2. **gerarNumerosAleatoriosOtimizado()**
   - Versão otimizada usando um array pré-preenchido
   - Implementa o algoritmo de Fisher-Yates para seleção aleatória

3. **medirTempo()**
   - Função utilitária para medir o tempo de execução
   - Utiliza `performance.now()` para precisão

## Comparação de Desempenho

- Gera 50 números aleatórios
- Repete o processo 1000 vezes
- Calcula e exibe o tempo médio de execução para cada função

## Destaques do Código

- Uso de estruturas de dados modernas (Set, Array)
- Implementação de algoritmos eficientes
- Tratamento de erros para entradas inválidas
- Medição precisa de desempenho

## Aplicações Práticas

- Jogos de loteria
- Simulações estatísticas
- Testes de algoritmos de ordenação
- Geração de dados de teste

Este código demonstra técnicas avançadas de programação JavaScript e oferece uma comparação interessante entre diferentes abordagens para resolver o mesmo problema.
