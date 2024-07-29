const cherche = document.getElementsByClassName('cherche');
const inputCherche = document.getElementById('input-cherche');
const chercheList = document.getElementById('cherche-list');
const eleveAdd = document.getElementById('eleve-add');
const  plus = document.getElementById('plus');
const close = document.getElementById('close');
const ajouteButton = document.getElementById('ajoute-button');
const ajouteInput = document.getElementById('ajoute-input');

const students = ["aly", "safayou", "moustapha", "muhamed", "addouraman", "tariq", "ashraf", "amadou"];

inputCherche.addEventListener('input', filterList);

const displayList = (array) => {
    chercheList.innerHTML = "";
    array.map(item => {
        const li = document.createElement('li');
        li.textContent = item;
        chercheList.appendChild(li);
    });
}

function filterList() {
    const searchTerm = inputCherche.value.toLowerCase();
    const filteredStudents = students.filter(student => student.toLowerCase().includes(searchTerm));
    displayList(filteredStudents);
}
displayList(students);

plus.addEventListener("click", () => {
    eleveAdd.style.display = "block"
})

close.addEventListener("click", () => {
    eleveAdd.style.display = "none"
})

ajouteButton.addEventListener("click", () => {
   const newStudent = ajouteInput.value
   students.push(newStudent) 
   displayList(students);
   eleveAdd.style.display = "none"
})


