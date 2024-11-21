// 1. Vaisiai ir daržovės
const fruitsAndVeggies = ["Bananas", "Brokoliai", "Obuolys", "Braškė", "Morka", "Bulvė", "Vynuogės"];

for (const item of fruitsAndVeggies) {
    if (item.startsWith("B")) {
        document.getElementById('result1').innerHTML += `<li>${item}</li>`;
    }
}

// 2. Spalvos didžiosiomis raidėmis
const colors = ["raudona", "žalia", "mėlyna", "geltona"];
const upperCaseColors = colors.map(color => color.toUpperCase());
document.getElementById('result2').textContent = upperCaseColors.join(", ");

// 3. Miesto gyventojų palyginimas
const city = {
    name: "Kaunas",
    country: "Lietuva",
    population: 300000,
    comparePopulation: function () {
        const lithuaniaPopulation = 2800000;
        const difference = this.population - lithuaniaPopulation;
        return difference > 0 
            ? `Mieste yra ${difference} daugiau gyventojų nei Lietuvoje.` 
            : `Mieste yra ${Math.abs(difference)} mažiau gyventojų nei Lietuvoje.`;
    }
};

document.getElementById('result3').textContent = city.comparePopulation();
