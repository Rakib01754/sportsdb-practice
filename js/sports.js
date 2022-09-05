const getSearchKey = () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    getData(inputValue);

}

const getData = (key) => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchevents.php?e=${key}`)
        .then(res => res.json())
        .then(data => displayData(data.event))
}
const displayData = (matches) => {
    const matchesArea = document.getElementById('matches-area');
    matchesArea.innerHTML = '';
    matches.forEach(match => {
        const newDiv = document.createElement('div');
        newDiv.classList.add("col");
        newDiv.innerHTML = `
        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item  fw-bold">${match.strLeague} ${match.strSeason}</li>
                <li class="list-group-item bg-info text-white fw-bold">${match.strEvent}</li>
                <li class="list-group-item bg-secondary text-white">Venue : ${match.strVenue ? match.strVenue : ''}</li>
                <li class="list-group-item bg-info text-white">Sports Type : ${match.strSport}</li>
            </ul>
            <div class="card-footer fw-semi-bold bg-dark text-white">
           Date: ${match.dateEvent} Time: ${match.strTime}
            </div>
        </div>
    
        `
        matchesArea.appendChild(newDiv);



    });

}
getData('bangladesh');
