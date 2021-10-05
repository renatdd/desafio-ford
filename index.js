const cities = ['Porto Velho', 'Manaus', 'Rio Branco', 'Campo Grande', 'Macapá', 'Brasília', 'Boa Vista', 'Cuiabá', 'Palmas', 'São Paulo', 'Teresina', 'Rio de Janeiro', 'Belém', 'Goiânia', 'Salvador', 'Florianópolis', 'São Luís', 'Maceió', 'Porto Alegre', 'Curitiba', 'Belo Horizonte', 'Fortaleza', 'Recife', 'João Pessoa', 'Aracaju', 'Natal', 'Vitória'];

const existingRoutes = [['Rio Branco','Macapá'], ['Macapá','Manaus'], ['Belém','Porto Velho'], ['Boa Vista','Palmas'], ['Belém','Rio Branco'], ['Palmas','Rio Branco'], ['Boa Vista','Salvador'], ['Maceió','Fortaleza'], ['São Luís','Salvador'], ['João Pessoa','Recife'], ['Recife','Teresina'], ['Teresina','Natal'], ['Aracaju','Salvador'], ['Natal','Aracaju'], ['Goiânia','Cuiabá'], ['Cuiabá','Campo Grande'], ['Campo Grande','Brasília'], ['Vitória', 'Cuiabá'], ['Vitória','Belo Horizonte'], ['Belo Horizonte','São Paulo'], ['São Paulo','Rio de Janeiro'], ['Rio de Janeiro','Curitiba'], ['Curitiba','Florianópolis'], ['Florianópolis','Porto Alegre']];

const regions = {
  NE: ['Maceió', 'Recife', 'João Pessoa', 'Aracaju', 'Natal', 'Fortaleza', 'Teresina', 'Salvador', 'São Luís'],
  N: ['Porto Velho', 'Manaus', 'Rio Branco', 'Boa Vista','Belém','Macapá'],
  CO: ['Goiânia','Campo Grande',  'Brasília',  'Cuiabá', 'Palmas'],
  SE: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Vitória'],
  S: ['Florianópolis', 'Porto Alegre', 'Curitiba'],
};

const checkIfInRouteDeparture = (city, routes) => routes.find((route) => route[0] === city);

const checkIfInSameRegion = (route, regions) => {
  const regionsArray = Object.entries(regions);
  const getCommonRegion = regionsArray.map(([region, cities]) =>  {
    const isBothInSameRegion = route.every((city) => cities.includes(city));
    return [isBothInSameRegion, region];
  });
  return getCommonRegion;
};

const citiesNotInRoutes = cities.filter(city => !checkIfInRouteDeparture(city, existingRoutes));

const mapping = cities.filter(city => !checkIfInRouteDeparture(city, existingRoutes));

// console.log(mapping.filter(e => e).map(route => checkIfInSameRegion(route, regions)));

console.log(mapping);
