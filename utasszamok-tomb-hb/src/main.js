"use strict"

function createListItem(text) {
    const li = document.createElement("li")
    li.innerText = text
    return li
}

function createSpan(text) {
    const span = document.createElement("span")
    span.innerText = text
    return span
}

function getLineArray(line) {
    const tombok = {
        line1: line1,
        line2: line2,
        lineD: lineD,
        line71: line71,
    }
    line = "line" + line
    return tombok[line]
}

function addNewData(line, name, boarded, disembarked) {
    getLineArray(line).push([name, boarded, disembarked])
}

function passengerStats() {
    const arrays = ["1","2","D","71"]
    for (let i = 0; i < arrays.length; i++) {
        const arr = getLineArray(arrays[i])
        const sum = arr.map(x => x[1]).reduce((a,b) => a+b)
        const avg = (sum/arr.length).toFixed(2)
        const p = document.getElementById("sum-"+arrays[i])
        p.innerHTML="" 
        p.append(createSpan("Összesen: " + sum))
        p.append(createSpan("Átlagos utascsere: "+avg))        
    }
}
passengerStats();

const filterResults = document.querySelector('#filter-results');
function filterStops(line, value) {
    const arr = getLineArray(line).filter(x => x[1]===value || x[2] ===value)
    filterResults.innerHTML=""
    for (let i = 0; i < arr.length; i++) {
        filterResults.append(createListItem(arr[i][0]+" - felszállók: "+arr[i][1]+", leszállók: "+arr[i][2]))    
    }
}

const popularResults = document.querySelector('#popular-results');
function popularStops() {
    const arr = [... line1, ... line2, ...lineD, ... line71].sort((a,b) => b[1]-a[1])
    popularResults.innerHTML=""
    for (let i = 0; i < 3; i++) {
        popularResults.append(createListItem(arr[i][0]+" ("+arr[i][1]+" felszálló)"));
    }
}
popularStops();

const findResults = document.querySelector('#find-results');
function findStop(name) {
    const arrays = ["1","2","D","71"]
    findResults.innerHTML=""
    for (let i = 0; i < arrays.length; i++) {
        if (getLineArray(arrays[i]).find(x => x[0]===name))
            findResults.append(createListItem(arrays[i]))
    }
}

document.querySelector('#add-item').addEventListener('submit', event => {
    event.preventDefault();
    addNewData(
        document.querySelector('#line').value,
        document.querySelector('#name').value,
        +document.querySelector('#boarded').value,
        +document.querySelector('#disembarked').value,
    );
    passengerStats();
    popularStops();
})

document.querySelector('#filter-item').addEventListener('submit', event => {
    event.preventDefault();
    filterStops(
        document.querySelector('#filter-line').value,
        +document.querySelector('#filter-value').value,
    )
})

document.querySelector('#find-stop').addEventListener('submit', event => {
    event.preventDefault();
    findStop(
        document.querySelector('#stop-name').value,
    )
})
