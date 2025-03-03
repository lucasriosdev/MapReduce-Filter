

//ADICIONAR 10% DE VALOR DE MERCADO A TODAS AS COMPANHIAS - > MAP
// FILTRAR SOMENTE AS COMPANHIAS FUNDADAS ABAIXO DE 1990 - FILTER
// SOMAR O VALOR DE MERCADO DAS RESTANTES  -> REDUCE


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
]


const add10Percent =(company) =>{
    company.marketValue = company.marketValue + company.marketValue /10
    return company
}

const filterCompanies = (company) => company.foundedOn < 1990

const cauculateTotalMarketValue = (acc, company) => acc + company.marketValue

const MarketValueOldCompanies = companies
.map(add10Percent)
.filter(filterCompanies)
.reduce(cauculateTotalMarketValue,0)

console.log(MarketValueOldCompanies)




