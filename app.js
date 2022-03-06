function getCountryInfo() {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            displayCountries(data);
        })
}
const displayCountries = data => {
    const countryList = document.getElementById('countryList');
    data.forEach(country => {
        const newDiv = document.createElement('div');
        newDiv.className = 'countries'; 
        const countryInfo = `
            <h1 class="country">${country.name.common}</h1> 
            <h2 class="capital">${country.capital}</h2>       
            <button onclick="displayCountryDetails('${country.name.common}')">Details</button>  
        `
        newDiv.innerHTML = countryInfo;
        countryList.appendChild(newDiv);
    });
}
const displayCountryDetails = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        renderCountryInfo(data);
        console.log(data);
    })
}
const renderCountryInfo = country =>{
    const countryInfo = document.getElementById('countryInfo');
    countryInfo.innerHTML = `
            <img src="${country[0].flags.png}">
            <h1 class="country">Country name: ${country[0].name.common}</h1> 
            <h2 class="capital">Capital name: ${country[0].capital}</h2>
            <h3 class="region">Region name: ${country[0].region}</h3>
            <h4 class="population">Population: ${country[0].population}</h4> 
            <h4 class="country">Area: ${country[0].area}</h4> 
    `
}
getCountryInfo()



        // for (let i = 0; i < data.length; i++) {
        //     const country = data[i];
        //     const newDiv = document.createElement('div');
        //     newDiv.className = 'countries'; 
        //     const countryInfo = `
        //         <h1 class="country">${country.name.common}</h1> 
        //         <h2 class="capital">${country.capital}</h2>
        //         <h3 class="region">${country.region}</h3>
        //         <h4 class="population">${country.population}</h4>       

        //     `
        //     newDiv.innerHTML = countryInfo;
        //     countryList.appendChild(newDiv);
        // }


        // const h1 = document.createElement('h1')
        // h1.innerText ='country ' + country.name.common;
        // newDiv.appendChild(h1);
        // const h2 = document.createElement('h2')
        // h2.innerText = 'Capital ' + country.capital;
        // newDiv.appendChild(h2);
        // const h3 = document.createElement('h3')
        // h3.innerText = 'Region ' + country.region;
        // newDiv.appendChild(h3);
        // const h4 = document.createElement('h4')
        // h4.innerText = 'Population ' + country.population;
        // newDiv.appendChild(h4);