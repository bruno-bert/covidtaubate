export type BrazilIOResponseApi = {
    "city": string,
    "city_ibge_code": string,
    "confirmed": number,
    "confirmed_per_100k_inhabitants": number,
    "date": string,
    "death_rate": number,
    "deaths": number,
    "estimated_population_2019": number,
    "is_last": boolean,
    "order_for_place": number,
    "place_type": string,
    "state": string
}

/* Example Data 
"city": "Taubaté",
"city_ibge_code": "3554102",
"confirmed": 3338,
"confirmed_per_100k_inhabitants": 1059.93827,
"date": "2020-09-14",
"death_rate": 0.0354,
"deaths": 118,
"estimated_population_2019": 314924,
"is_last": true,
"order_for_place": 172,
"place_type": "city",
"state": "SP" */