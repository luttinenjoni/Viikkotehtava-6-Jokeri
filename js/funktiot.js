const uusirivi = document.querySelector('#uusi_rivi')
const list = document.querySelector('table')
const rivienLukumaaraElementti = document.querySelector('#rivien_lukumaara');

let rivienLukumaara = 0;


uusirivi.addEventListener('click', () => {
const numerot = []
while (numerot.length < 8) {
    const random_number = Math.floor(Math.random() * 40) + 1
    if (!(numerot.includes(random_number))) {
    numerot.push(random_number) 
        }
    }

    const seitseman_numeroa = numerot.slice(0,7)
    const tr = list.insertRow()
    for (let i = 0;i<seitseman_numeroa.length;i++) {
    const td = tr.insertCell()
    td.innerHTML = seitseman_numeroa[i]
    td.classList.add('cell');

 }
 rivienLukumaara++; 
    päivitäRivienLukumaara();
 })
 const päivitäRivienLukumaara = () => {
    rivienLukumaaraElementti.textContent = `Rivien lukumäärä: ${rivienLukumaara}`;
};