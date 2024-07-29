const cherche = document.getElementsByClassName('cherche');
const inputCherche = document.getElementById('input-cherche');
const chercheList = document.getElementById('cherche-list');

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