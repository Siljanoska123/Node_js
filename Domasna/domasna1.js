const cities = [
    {
      name: 'Skopje',
      population: '600'
    },
    {
      name: 'Barcelona',
      population: '900'
    },
    {
      name: 'Bilbao',
      population: '300'
    }
  ];

let minPopulation = Infinity;
let nameOfCityMinPopulation = '';

cities.forEach(city => {
    if (parseInt(city.population) < minPopulation) {
        minPopulation = city.population;
        nameOfCityMinPopulation = city.name;
      }
    });
    
    console.log('City with minpopulation is: ' + nameOfCityMinPopulation);
    console.log('With population of: ' + minPopulation);
