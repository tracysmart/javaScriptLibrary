async function darthVader() {
await fetch('https://swapi.co/api/people/4')
    .then(res => res.json())
    .then(json => console.log(json))
console.log('this should print last')
}

console.log(darthVader());