# 📈 Cálculo de Valor de Mercado das Companhias

Este repositório contém um script em JavaScript que:

1. **Adiciona 10% ao valor de mercado** de todas as companhias.
2. **Filtra apenas as companhias fundadas antes de 1990**.
3. **Soma o valor de mercado das companhias restantes**.

## 📝 Código

```javascript
// Lista de companhias
const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
]

// Função para adicionar 10% ao valor de mercado
const add10Percent = (company) => {
    company.marketValue = company.marketValue + company.marketValue / 10;
    return company;
}

// Função para filtrar companhias fundadas antes de 1990
const filterCompanies = (company) => company.foundedOn < 1990;

// Função para calcular o valor total de mercado
const cauculateTotalMarketValue = (acc, company) => acc + company.marketValue;

// Processamento dos dados
const MarketValueOldCompanies = companies
    .map(add10Percent)
    .filter(filterCompanies)
    .reduce(cauculateTotalMarketValue, 0);

console.log(MarketValueOldCompanies);
```

## 🚀 Como Executar

1. Clone este repositório.
2. Abra um terminal e navegue até a pasta do projeto.
3. Execute o script com Node.js:

```sh
node script.js
```

## 📌 Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js (para execução local)

## 📖 Explicação

1. Utilizamos **`map`** para modificar o array original e aumentar o valor de mercado de cada companhia.
2. Aplicamos **`filter`** para selecionar apenas as companhias fundadas antes de 1990.
3. Por fim, **`reduce`** soma o valor de mercado das companhias filtradas.


