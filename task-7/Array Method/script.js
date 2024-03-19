// Fetching data from the API
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Get all the countries from Asia continent / region
    const asianCountries = data.filter(country => country.region === 'Asia');
    console.log("Countries in Asia:", asianCountries.map(country => country.name.common));

    // Get all the countries with a population of less than 2 lakhs
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", smallPopulationCountries.map(country => country.name.common));

    // Print name, capital, and flag of each country using forEach
    data.forEach(country => {
      console.log("Country:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.png);
    });

    // Calculate total population of countries using reduce
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of countries:", totalPopulation);

    // Print the country that uses US dollars as currency
    const usDollarCountry = data.find(country => country.currencies && country.currencies.USD);
    if (usDollarCountry) {
      console.log("Country that uses US dollars:", usDollarCountry.name.common);
    } else {
      console.log("No country uses US dollars as currency.");
    }
  })
  .catch(error => console.error("Error fetching data:", error));
